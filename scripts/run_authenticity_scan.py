#!/usr/bin/env python3
"""
Consolidated authenticity scanner for all blog posts.

Outputs one JSON report with:
- local overlap metrics (5-word and 8-word shingles)
- web snippet spot-check metrics
- risk band per article (LOW/MEDIUM/HIGH)
"""

from __future__ import annotations

import argparse
import json
import time
from pathlib import Path

import free_plagiarism_explorer as fpe


def pairwise_local_similarity(posts: dict[str, str]) -> dict[str, dict]:
    token_cache = {path: fpe.words(body) for path, body in posts.items()}
    sh5_cache = {path: fpe.shingles(tokens, 5) for path, tokens in token_cache.items()}
    sh8_cache = {path: fpe.shingles(tokens, 8) for path, tokens in token_cache.items()}

    result: dict[str, dict] = {}
    paths = list(posts.keys())

    for source in paths:
        comparisons = []
        for other in paths:
            if other == source:
                continue
            sim5 = fpe.jaccard(sh5_cache[source], sh5_cache[other])
            sim8 = fpe.jaccard(sh8_cache[source], sh8_cache[other])
            comparisons.append(
                {
                    "file": other,
                    "sim5": round(sim5, 4),
                    "sim8": round(sim8, 4),
                }
            )

        comparisons.sort(key=lambda row: (row["sim8"], row["sim5"]), reverse=True)
        top = comparisons[:3]

        result[source] = {
            "maxSim5": top[0]["sim5"] if top else 0.0,
            "maxSim8": top[0]["sim8"] if top else 0.0,
            "topMatches": top,
        }

    return result


def compute_risk_band(max_sim5: float, max_sim8: float, web_flagged_count: int, web_max_sim: float) -> tuple[str, list[str]]:
    reasons: list[str] = []

    if max_sim8 >= 0.08:
        reasons.append("High local 8-gram overlap")
    elif max_sim8 >= 0.03:
        reasons.append("Moderate local 8-gram overlap")

    if max_sim5 >= 0.30:
        reasons.append("High local 5-gram overlap")
    elif max_sim5 >= 0.15:
        reasons.append("Moderate local 5-gram overlap")

    if web_flagged_count >= 2:
        reasons.append("Multiple web snippet matches")
    elif web_flagged_count == 1:
        reasons.append("One web snippet match")

    if web_max_sim >= 0.92:
        reasons.append("Very high web snippet similarity")

    if max_sim8 >= 0.08 or max_sim5 >= 0.30 or web_flagged_count >= 2 or web_max_sim >= 0.92:
        return "HIGH", reasons or ["Threshold exceeded"]

    if max_sim8 >= 0.03 or max_sim5 >= 0.15 or web_flagged_count == 1:
        return "MEDIUM", reasons or ["Moderate overlap indicators"]

    return "LOW", reasons or ["No significant overlap indicators"]


def run_scan(blog_dir: Path, samples: int, threshold: float, sleep_ms: int) -> dict:
    files = sorted(blog_dir.glob("*.md"))
    posts = {str(path).replace("\\", "/"): fpe.read_markdown_body(path) for path in files}

    local_map = pairwise_local_similarity(posts)
    per_article = []

    for file_path, body in posts.items():
        web = fpe.web_spot_check(body, samples=samples, threshold=threshold, sleep_ms=sleep_ms)
        web_matches = web.get("flaggedMatches", [])
        web_max = max((item.get("similarity", 0.0) for item in web_matches), default=0.0)

        local = local_map[file_path]
        band, reasons = compute_risk_band(
            max_sim5=local["maxSim5"],
            max_sim8=local["maxSim8"],
            web_flagged_count=len(web_matches),
            web_max_sim=web_max,
        )

        per_article.append(
            {
                "file": file_path,
                "riskBand": band,
                "reasons": reasons,
                "local": {
                    "maxSim5": local["maxSim5"],
                    "maxSim8": local["maxSim8"],
                    "topMatches": local["topMatches"],
                },
                "web": {
                    "sampledPhrases": web.get("sampledPhrases", 0),
                    "flaggedCount": len(web_matches),
                    "maxSimilarity": round(web_max, 3),
                    "flaggedMatches": web_matches,
                    "errors": web.get("errors", []),
                },
            }
        )

    counts = {"LOW": 0, "MEDIUM": 0, "HIGH": 0}
    for row in per_article:
        counts[row["riskBand"]] += 1

    return {
        "generatedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "blogDir": str(blog_dir).replace("\\", "/"),
        "thresholds": {
            "local": {
                "highMaxSim8": 0.08,
                "highMaxSim5": 0.30,
                "mediumMaxSim8": 0.03,
                "mediumMaxSim5": 0.15,
            },
            "web": {
                "flagSimilarityThreshold": threshold,
                "highFlaggedCount": 2,
            },
        },
        "summary": {
            "totalArticles": len(per_article),
            "riskBandCounts": counts,
            "samplesPerArticle": samples,
        },
        "articles": per_article,
        "note": "Signal-based authenticity report. Use external indexed plagiarism tools for legal/compliance-grade checks.",
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Run authenticity scan across all blog posts")
    parser.add_argument("--blog-dir", default="content/blog", help="Blog directory path")
    parser.add_argument("--samples", type=int, default=4, help="Web phrase samples per article")
    parser.add_argument("--threshold", type=float, default=0.82, help="Web snippet similarity threshold")
    parser.add_argument("--sleep-ms", type=int, default=250, help="Delay between web requests")
    parser.add_argument(
        "--output",
        default="docs/consolidated-authenticity-report.json",
        help="Output JSON report path",
    )
    args = parser.parse_args()

    blog_dir = Path(args.blog_dir)
    output = Path(args.output)

    if not blog_dir.exists():
        raise SystemExit(f"Blog directory not found: {blog_dir}")

    report = run_scan(blog_dir, samples=args.samples, threshold=args.threshold, sleep_ms=args.sleep_ms)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(report, indent=2), encoding="utf-8")

    print(f"Saved consolidated authenticity report to: {output}")


if __name__ == "__main__":
    main()
