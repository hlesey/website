# SEO and AI-assistant visibility for qedzone.ro

## Intent

Q.E.D. should show up when people search Google for Kubernetes and AI training, and be named by
AI assistants (ChatGPT, Perplexity, Gemini, Claude) when asked about Kubernetes courses, in
Romania, Europe and the US, in English and Romanian.

## Facts the content may state

- In-person courses in Bucharest; live online courses for Europe and the US.
- Taught in Romanian and English.
- Course durations, certifications (KCNA, CKA, CKAD, CKS) and AI-agent topics as already on the site.
- Not stated anywhere (unknown): prices, exam vouchers, dates, other cities/countries.

## Goals

- Each page has a specific title and description with the terms people search for
  (e.g. "Kubernetes course", "CKA preparation", "Kubernetes training Europe/US", "AI agents on Kubernetes";
  in Romanian "curs Kubernetes", "pregatire CKA", "curs Kubernetes Bucuresti").
- Search engines and AI assistants get explicit, machine-readable facts (structured data, llms.txt).
- Shared links show a Q.E.D. preview image instead of the Docusaurus default.
- Only Q.E.D. content is indexed.

## Non-goals / anti-goals

- No keyword stuffing, no lists of countries/cities repeated across pages; location is stated once in
  "Training Formats", once in the FAQ, and in structured data.
- "Course Content" sections stay untouched; Romanian stays without diacritics.
- No blog/article program (later, separately).
- No invented facts (prices, partnerships, testimonials).

## Approaches

1. Technical SEO only — fast, but text still doesn't say what people search for.
2. **Technical SEO + content tuning (chosen)** — biggest short-term effect without ongoing writing.
3. 2 + regular articles — most long-term effect, needs continuous writing; deferred.

## Design

- **Clean index:** disable the Docusaurus blog (sample posts, RSS links) and delete
  `src/pages/markdown-page.md`; the custom News page stays.
- **Titles and descriptions** (EN + RO): homepage, courses intro, each course page (frontmatter
  `title`/`description`, sidebar label keeps the course name), certifications, about, contact, news.
- **Course pages:** short intro sentence mentioning format/location/language, and a "Frequently asked
  questions" / "Intrebari frecvente" section (format, language, location, certification, prerequisites,
  private/team training, how to enroll) placed after Course Content.
- **"Training Formats"** in `docs/intro.md` (+ RO): one sentence on Bucharest in-person and online for
  Europe and the US, in Romanian or English.
- **Structured data (JSON-LD):** `EducationalOrganization` site-wide (name, url, logo, email, phone,
  Bucharest address locality, areaServed Europe + US, knowsLanguage ro/en); `Course` on each course page
  (name, description, provider, educationalCredentialAwarded/teaches, inLanguage, hasCourseInstance:
  onsite Bucharest + online, courseWorkload); `FAQPage` matching each course FAQ.
- **Social card:** 1200x630 PNG with the Q.E.D. logo, name and tagline, set as `themeConfig.image`.
- **Crawling:** `static/robots.txt` allowing all crawlers (incl. GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended) with the sitemap URL; `static/llms.txt` summarising Q.E.D., courses, certifications,
  formats, languages, location and contact with links to EN and RO pages.
- **Contact page:** remove the office hours block (no hours or timezone on the site).

## Validation

`npm run build`, `npm run typecheck`, `scripts/check-i18n.sh`, plus a new check that every course page
has a description, Course JSON-LD and FAQ JSON-LD, that the sitemap has no `/blog` or `markdown-page`,
and that `robots.txt`, `llms.txt` and the social card exist in the build.

## Off-site (advice only, not built)

Google Business Profile (Bucharest), LinkedIn company page with course posts, Linux Foundation/CNCF
training partner listings if eligible, course directories, Google Search Console + sitemap submission.

## Left to the builder

Exact wording of titles/descriptions/FAQ (EN + RO, facts above only), social card layout.
