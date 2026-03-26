#!/usr/bin/env python3
"""
Free plagiarism exploration utility for markdown blog posts.

What it does:
1) Local corpus check: compares target article against other local blog posts using 8-word shingles.
2) Web snippet spot-check: queries DuckDuckGo HTML endpoint with sampled exact phrases.

Note:
- This is a risk signal tool, not a legal plagiarism verdict.
- Free search endpoints are rate-limited and do not index the entire web.
"""

from __future__ import annotations

import argparse
import html
import json
import random
import re
import time
from dataclasses import dataclass
from difflib import SequenceMatcher
from pathlib import Path
from typing import Iterable
from urllib.parse import quote
from urllib.request import Request, urlopen

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"


@dataclass
class WebMatch:
    phrase: str
    similarity: float
    url: str
    snippet: str


def read_markdown_body(file_path: Path) -> str:
    raw = file_path.read_text(encoding="utf-8")
    if raw.startswith("---\n"):
        parts = raw.split("---\n", 2)
        if len(parts) == 3:
            return parts[2]
    return raw


def normalize(text: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9\s]", " ", text.lower())).strip()


def words(text: str) -> list[str]:
    return [w for w in normalize(text).split(" ") if len(w) > 2]


def shingles(tokens: list[str], size: int) -> set[str]:
    if len(tokens) < size:
        return set()
    return {" ".join(tokens[i : i + size]) for i in range(len(tokens) - size + 1)}


def jaccard(a: set[str], b: set[str]) -> float:
    if not a or not b:
        return 0.0
    intersection = len(a & b)
    union = len(a | b)
    return (intersection / union) if union else 0.0


def sentence_candidates(text: str, min_words: int = 12) -> list[str]:
    lines = [ln.strip() for ln in text.splitlines()]
    prose = [ln for ln in lines if ln and not ln.startswith("#") and not ln.startswith("-") and not re.match(r"^\d+\.\s", ln)]
    merged = " ".join(prose)
    chunks = [c.strip() for c in re.split(r"(?<=[.!?])\s+", merged) if c.strip()]
    return [c for c in chunks if len(c.split()) >= min_words]


def sample_phrases(text: str, max_samples: int = 10, phrase_words: int = 11) -> list[str]:
    candidates = sentence_candidates(text)
    windows: list[str] = []
    for sentence in candidates:
        tokenized = sentence.split()
        if len(tokenized) < phrase_words:
            continue
        for i in range(0, len(tokenized) - phrase_words + 1, max(1, phrase_words // 2)):
            windows.append(" ".join(tokenized[i : i + phrase_words]))

    random.shuffle(windows)
    # Prefer diverse phrases by dropping near-duplicates by normalized prefix
    deduped: list[str] = []
    seen: set[str] = set()
    for phrase in windows:
        key = " ".join(normalize(phrase).split(" ")[:6])
        if key and key not in seen:
            seen.add(key)
            deduped.append(phrase)
        if len(deduped) >= max_samples:
            break

    return deduped


def fetch_duckduckgo_html(query: str, timeout: int = 20) -> str:
    url = f"https://duckduckgo.com/html/?q=%22{quote(query)}%22"
    req = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(req, timeout=timeout) as resp:
        return resp.read().decode("utf-8", errors="ignore")


def extract_results(html_text: str) -> list[tuple[str, str]]:
    links = re.findall(r'<a[^>]*class="result__a"[^>]*href="([^"]+)"[^>]*>(.*?)</a>', html_text, flags=re.IGNORECASE | re.DOTALL)
    snippets = re.findall(r'<a[^>]*class="result__snippet"[^>]*>(.*?)</a>', html_text, flags=re.IGNORECASE | re.DOTALL)

    cleaned_links = []
    for i, link in enumerate(links[: len(snippets)]):
        href = html.unescape(re.sub(r"<.*?>", "", link[0])).strip()
        snippet = html.unescape(re.sub(r"<.*?>", "", snippets[i])).strip()
        cleaned_links.append((href, snippet))
    return cleaned_links


def similarity(a: str, b: str) -> float:
    return SequenceMatcher(None, normalize(a), normalize(b)).ratio()


def web_spot_check(text: str, samples: int, threshold: float, sleep_ms: int) -> dict:
    phrases = sample_phrases(text, max_samples=samples)
    matches: list[WebMatch] = []

    for phrase in phrases:
        try:
            html_doc = fetch_duckduckgo_html(phrase)
            results = extract_results(html_doc)
            best: WebMatch | None = None
            for url, snippet in results[:5]:
                sim = similarity(phrase, snippet)
                candidate = WebMatch(phrase=phrase, similarity=sim, url=url, snippet=snippet)
                if best is None or sim > best.similarity:
                    best = candidate

            if best and best.similarity >= threshold:
                matches.append(best)

            if sleep_ms > 0:
                time.sleep(sleep_ms / 1000.0)
        except Exception as exc:  # noqa: BLE001
            matches.append(WebMatch(phrase=phrase, similarity=0.0, url="ERROR", snippet=str(exc)))

    return {
        "sampledPhrases": len(phrases),
        "flaggedMatches": [
            {
                "phrase": m.phrase,
                "similarity": round(m.similarity, 3),
                "url": m.url,
                "snippet": m.snippet,
            }
            for m in matches
            if m.url != "ERROR"
        ],
        "errors": [
            {"phrase": m.phrase, "error": m.snippet}
            for m in matches
            if m.url == "ERROR"
        ],
    }


def local_corpus_check(target_file: Path, blog_dir: Path, shingle_size: int = 8) -> dict:
    target_text = read_markdown_body(target_file)
    target_tokens = words(target_text)
    target_set = shingles(target_tokens, shingle_size)

    scores = []
    for md in sorted(blog_dir.glob("*.md")):
        if md.resolve() == target_file.resolve():
            continue
        other_set = shingles(words(read_markdown_body(md)), shingle_size)
        scores.append({
            "file": str(md).replace("\\", "/"),
            "similarity": round(jaccard(target_set, other_set), 4),
        })

    scores.sort(key=lambda x: x["similarity"], reverse=True)
    return {
        "shingleSize": shingle_size,
        "topMatches": scores[:5],
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Free plagiarism exploration for markdown posts")
    parser.add_argument("--file", required=True, help="Target markdown file path")
    parser.add_argument("--blog-dir", default="content/blog", help="Blog directory path")
    parser.add_argument("--samples", type=int, default=8, help="Number of phrase samples for web spot-check")
    parser.add_argument("--threshold", type=float, default=0.82, help="Snippet similarity threshold for flagging")
    parser.add_argument("--sleep-ms", type=int, default=350, help="Delay between web requests")
    args = parser.parse_args()

    target_file = Path(args.file)
    blog_dir = Path(args.blog_dir)

    if not target_file.exists():
        raise SystemExit(f"Target file not found: {target_file}")

    target_text = read_markdown_body(target_file)
    report = {
        "targetFile": str(target_file).replace("\\", "/"),
        "timestamp": int(time.time()),
        "disclaimer": "Signal-only check. Use external indexed tools for production compliance.",
        "localCorpusCheck": local_corpus_check(target_file, blog_dir),
        "webSpotCheck": web_spot_check(target_text, args.samples, args.threshold, args.sleep_ms),
    }

    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
