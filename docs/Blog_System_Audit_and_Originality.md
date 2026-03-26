# Blog System Audit and Originality Workflow

Date: 2026-03-27

## 1) System Audit (Decap + GitHub)

### Current Setup
- CMS: Decap (`public/admin/config.yml`)
- Backend: GitHub repository workflow (`editorial_workflow` enabled)
- Content source: Markdown files in `content/blog`
- Frontmatter parsing: `gray-matter` via `src/lib/blog.ts`
- Rendering: Blog listing + detail pages in Next.js App Router

### What Is Working Well
- Clean frontmatter schema with required fields (title, slug, excerpt, category, date, tags, hero image).
- Slug pattern validation is enabled in Decap.
- Editorial workflow supports draft/review/publish style process.
- Markdown content is directly versioned in Git, so every change is traceable.

### Gaps Found
- No formal originality checklist existed before publish.
- Topic strategy was not tightly aligned to intent-led SEO cluster in prior batch.
- No stored plagiarism-risk report artifact in docs.

### Fixes Done in This Update
- Added 5 new intent-led blog posts from provided topics.
- Added a repeatable originality script: `scripts/check-blog-originality.mjs`.
- Generated and stored scan output: `docs/blog-originality-report.json`.

## 2) New Blog Topics Published

1. `how-much-does-it-cost-to-build-a-house-in-brisbane-2026`
2. `step-by-step-guide-to-building-a-house-in-qld`
3. `steel-frame-vs-timber-frame-which-is-better`
4. `custom-home-vs-project-home-what-is-the-difference`
5. `fixed-price-vs-cost-plus-contracts-what-should-homeowners-choose`

## 3) Originality / Anti-Plagiarism Method Used

A practical three-layer method was applied:

### Layer A: Human-authored original drafting
- All five posts were newly authored for ARC context and tone.
- Structure and examples were customized around Brisbane/QLD homeowner decisions.

### Layer B: Internal corpus similarity scan (automated)
- Script tokenizes blog content and compares post pairs using:
  - 5-word n-gram Jaccard similarity
  - 8-word n-gram Jaccard similarity
- Warning thresholds in script:
  - 5-gram similarity >= 20%
  - 8-gram similarity >= 8%

### Layer C: Stored report artifact
- Scan results saved to `docs/blog-originality-report.json` for review traceability.

## 4) Scan Result Summary

- Total posts scanned: 11
- High-risk pairs crossing threshold: 0
- New topic posts did not show high long-phrase overlap with existing corpus.

## 5) Recommended Best-Practice Publish Checklist

Before publish in Decap:

1. Run local originality scan:
   - `node scripts/check-blog-originality.mjs`
2. Confirm factual claims and local references.
3. Ensure one primary keyword + 2 to 4 semantically related keywords per article.
4. Add at least 2 internal links (service/process/contact/blog).
5. Avoid copy-paste from external websites, brochures, or competitor pages.

For web-wide plagiarism detection (outside local repo), use one external checker in final QA (for example Originality.ai or Copyscape) before high-stakes campaigns.

## 6) Notes

This workflow now gives both content quality and auditable originality checks inside the project repository.
