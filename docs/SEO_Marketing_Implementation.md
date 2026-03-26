# ARC Builders SEO + Marketing Implementation Document

## Objective
Build a strong organic growth and conversion foundation for ARC Builders as a niche custom builder in Brisbane, Logan, and South East Queensland, with positioning for:
- Custom homes and renovations
- Vastu-aware planning
- Indian-Australian and NRI-focused trust journeys
- Residential + commercial capability

## What Has Been Implemented

### 1) Technical SEO Foundation
- Central SEO helper created for reusable metadata generation and canonical URL handling.
- Global site metadata upgraded in root layout:
  - title template
  - canonical and alternates
  - Open Graph and Twitter tags
  - robots directives
  - keyword baseline
- Organization + website JSON-LD added at root level.

### 2) Crawlability and Indexing
- `robots.ts` added with sitemap declaration and crawler rules.
- `sitemap.ts` added with:
  - high-priority static URLs
  - dynamic URL coverage for all projects and blog posts
  - freshness priorities/frequencies

### 3) Page-Level Metadata Coverage
Metadata was added or upgraded for key pages:
- Home
- About
- Process
- Residential
- Commercial
- Blog listing
- Projects listing
- Contact
- Inclusions
- Blog detail (dynamic per slug)
- Project detail (dynamic per slug)

### 4) Structured Data Expansion
- Homepage:
  - FAQ schema
  - Service schema
- Blog detail pages:
  - BlogPosting schema
  - BreadcrumbList schema
- Project detail pages:
  - House schema
  - BreadcrumbList schema

### 5) Conversion + Marketing UX Blocks Added
- Service area section on homepage to increase local relevance.
- FAQ section on homepage to capture intent and reduce friction.
- CTA flow cleaned up to reduce confusion and keep journey focused on consultation/contact.

## Keyword and Intent Mapping (Core)

### Primary Commercial Keywords
- custom home builder Brisbane
- home builder Logan
- custom builder South East Queensland
- renovation builder Brisbane
- design and build Queensland

### Niche Differentiator Keywords
- Vastu compliant home builder Australia
- Indian-Australian home builder Brisbane
- multi-generational home design builder
- transparent pricing home builder
- NRI property build Queensland

### Intent Buckets
- Transactional: quote request, consultation, builder near me
- Commercial investigation: pricing, inclusions, process, timeline
- Informational: Vastu tips, NRI investment and build guidance, design trends

## Marketing Funnel Recommendation

### Top of Funnel (Awareness)
- Publish 2-4 blog posts per month around Vastu, NRI planning, local suburb insights, and transparent pricing education.
- Add project case studies with before/after process narratives.

### Mid Funnel (Consideration)
- Add downloadable lead magnet:
  - "Custom Home Planning Checklist (Brisbane + Logan Edition)"
- Add comparison content:
  - custom vs volume builder
  - fixed-price vs allowance-heavy quotes

### Bottom Funnel (Conversion)
- Strengthen CTAs on all service and project pages:
  - "Book a Consultation"
  - "Request Detailed Inclusions"
- Add social proof snapshots near conversion forms (location + project type + outcome).

## 30/60/90 Day Action Plan

### First 30 Days
- Connect Google Search Console and submit sitemap.
- Configure GA4 events for:
  - form submit
  - phone click
  - WhatsApp click
- Publish 4 high-intent local pages (example: Custom Homes Rochedale, Calamvale, Pallara, Greenbank).
- Improve image alt attributes and internal links on top pages.

### Day 31-60
- Publish 6 additional SEO pages:
  - 3 service+location pages
  - 3 trust pages (pricing transparency, process timeline, inclusions guide)
- Start backlink outreach to local directories, architects, and community associations.
- Add testimonial schema where appropriate.

### Day 61-90
- Optimize pages using Search Console query data (CTR + position opportunities).
- Expand blog cluster into pillar model:
  - Vastu pillar
  - NRI build/investment pillar
  - Transparent pricing pillar
- Launch remarketing support with Meta/Google using warm audiences from organic traffic.

## KPI Targets
- Organic sessions growth: +25% to +40% in 90 days
- Qualified consultation leads: +20% to +30%
- Branded + non-branded keyword footprint: +50+ new ranking terms
- Blog-to-contact assisted conversions: measurable month-on-month increase

## Suggested Budget Bands (AUD)
- Lean growth setup: $1.5k-$3k/month
  - content + on-page + basic link building
- Growth mode: $3k-$6k/month
  - stronger content cadence + technical SEO + authority building
- Aggressive local dominance: $6k-$12k/month
  - multi-location content engine + digital PR + conversion optimization

## Risks and Guardrails
- Avoid overusing generic AI copy; maintain local specificity and project truthfulness.
- Keep all project claims verifiable with real media and delivery details.
- Avoid keyword stuffing; prioritize intent match and readability.

## Handover Notes
- Metadata and schema architecture is now reusable for future pages.
- New pages should use the shared SEO helper for consistency.
- Every new blog/project slug should automatically be included in sitemap generation.
