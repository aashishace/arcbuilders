# ARC Builders SEO, GSC, and Local Presence Runbook

This runbook covers the non-code work required after deploying the SEO updates.

## Google Search Console

1. Create a Domain property for `arcbuilders.com.au` in Google Search Console.
2. Verify the property through DNS ownership.
   - TXT record generated on 22 May 2026:
   - `google-site-verification=ShBcZLFv3CnPiZbKka9e1ZG0ibYs8FlJ-WO3Yo8M1fs`
3. Submit `https://www.arcbuilders.com.au/sitemap.xml`.
4. Use URL Inspection and request indexing for:
   - `https://www.arcbuilders.com.au/`
   - `https://www.arcbuilders.com.au/projects`
   - `https://www.arcbuilders.com.au/projects/17-ormskirk-st-calamvale`
   - `https://www.arcbuilders.com.au/projects/25-binnalong-st-rochedale-south`
   - `https://www.arcbuilders.com.au/projects/18-skye-court-bahrs-scrub`
   - `https://www.arcbuilders.com.au/residential`
   - `https://www.arcbuilders.com.au/contact`
   - top-performing blog URLs
   - all `/locations/...` pages
5. Weekly: review Performance by query, page, country, device and search appearance.

## Google Business Profile

Use the same NAP everywhere:

- Name: `ARC Builders`
- Phone: `0411 878 438`
- Email: `admin@arcbuilders.com.au`
- Website: `https://www.arcbuilders.com.au/`
- Address: `25 Langford Street, Eight Mile Plains QLD 4113`
- Primary category: `Custom Home Builder`
- Secondary categories: `Home Builder`, `Construction Company`, `Renovation Contractor`

Service areas:

- Brisbane
- Brisbane Southside
- Logan
- Rochedale
- Calamvale
- Pallara
- Greenbank
- Eight Mile Plains
- Mount Gravatt
- Bahrs Scrub
- South East Queensland

Weekly cadence:

- Upload 3-5 project photos.
- Publish one update linking to a project, location page, blog post or contact page.
- Add or refine one Q&A.
- Request reviews after handover and major milestones.

## GTM / GA4 Events

Set `NEXT_PUBLIC_GTM_ID` in hosting environment variables.

Create GA4 event tags in Google Tag Manager using these event names:

- `contact_cta_click`
- `project_contact_click`
- `phone_click`
- `email_click`
- `whatsapp_click`
- `contact_form_submit_ready`
- `contact_email_app_click`
- `project_page_view`
- `blog_article_view`
- `social_profile_click`

Recommended custom parameters:

- `gtm_source`
- `project_slug`
- `project_title`
- `project_location`
- `project_type`
- `blog_slug`
- `blog_title`
- `blog_category`
- `budget_range`

## Content and Authority Cadence

- Publish one high-intent article weekly.
- Rotate topics across cost, builder comparison, building process, suburb guides, renovations, multi-generational homes and selected commercial construction.
- Internally link every new article to one relevant project, one location page and `/contact`.
- Build citations and backlinks from supplier directories, local business directories, project partners and community organizations.
- Track monthly winners in GSC and refresh pages already earning impressions.
