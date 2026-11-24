# Romanian Language Version Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Serve the Q.E.D. website in English at `/` and Romanian at `/ro/`, with a navbar language switcher.

**Architecture:** Docusaurus built-in i18n. React pages/components mark strings with `<Translate>` / `translate()`; Romanian values live in `i18n/ro/code.json` and the theme JSON files; Romanian course pages are copies of `docs/*.md` under `i18n/ro/docusaurus-plugin-content-docs/current/`.

**Tech Stack:** Docusaurus 3.9.1, React 19, TypeScript, Node 22.

**Spec:** `specs/2026-11-24-romanian-language-design.md`

> Plans/specs live in `specs/`, not `docs/`, because `docs/` is published by Docusaurus.

## Global Constraints

- English is `defaultLocale: 'en'` at `/`; Romanian locale `ro` at `/ro/`.
- Romanian text has **no diacritics**: none of `ăâîșțşţĂÂÎȘȚŞŢ` anywhere under `i18n/ro/`.
- Course pages: inside "Course Content", module titles, topic bullets and `**Lab:**` lines stay English verbatim; the headings "Course Content" → "Continutul cursului", "Day N" → "Ziua N" are translated.
- Course names (e.g. "Kubernetes Fundamentals") and certification names/acronyms (KCNA, CKA, CKAD, CKS, CNCF, "Certified Kubernetes Administrator", …) stay English everywhere.
- Brand is "Q.E.D." in both languages.
- `blog/` sample posts are not translated.
- English output must not change (other than the language dropdown).
- Commit with explicit `git add <paths>`; never `git add .`.

## Review Focus

1. **Internal links written as raw `<a href="/...">`** (`src/pages/news.tsx`) don't get the `/ro/` prefix, so a Romanian visitor clicking a course lands on English. Expect all internal links on `/ro/` pages to point to `/ro/...` → Task 2 converts them to `<Link to>`, Task 5 checks the built HTML.
2. **Docusaurus' bundled Romanian theme strings** ("Next", "On this page", "Edit this page", 404 page…) may be missing or contain diacritics → Task 3 fills every entry in `i18n/ro/code.json` and Task 5 greps for diacritics.
3. **Strings from config, not JSX** — `siteConfig.tagline` and the homepage `title={`Welcome to ${siteConfig.title}`}` aren't picked up by `write-translations` → Task 2 replaces them with `translate()` calls.
4. **Data arrays** (`FeatureList`, `certs`, `items`, `steps`, `rows`) are module-level constants evaluated outside React, so `translate()` must be called where Docusaurus can extract it (static string literals with an `id`) → Task 2 keeps each `translate({id, message})` with literal arguments.
5. **Course Content accidentally translated** → Task 5 checks a Romanian course page still contains "Docker Overview" and "**Lab:**" text while containing "Continutul cursului".

---

### Task 1: Enable the `ro` locale and the language switcher

**Files:**
- Modify: `docusaurus.config.ts:38-41` (i18n), `:82-92` (navbar items)
- Modify: `Makefile` (add `run-ro` target), `README.md` (one line on `npm run start -- --locale ro`)

**Interfaces:**
- Produces: locale `ro` with `localeConfigs: {en: {label: 'English'}, ro: {label: 'Romana', htmlLang: 'ro'}}`; navbar item `{type: 'localeDropdown', position: 'right'}`.

- [ ] **Step 1:** Run `npm ci` (no `node_modules` present yet).
- [ ] **Step 2:** Set `i18n: {defaultLocale: 'en', locales: ['en', 'ro'], localeConfigs: {...}}` as above and add the `localeDropdown` navbar item.
- [ ] **Step 3:** Add Makefile target `run-ro` running `npm start -- --host 0.0.0.0 --locale ro`, list it in `help`; add the README line.
- [ ] **Step 4:** Run `npm run build`. Expected: succeeds, `build/index.html` and `build/ro/index.html` exist.
- [ ] **Step 5:** Commit `docusaurus.config.ts Makefile README.md` — "feat(i18n): add Romanian locale and language switcher".

### Task 2: Mark all user-visible strings in React code for translation

**Files:**
- Modify: `src/pages/index.tsx`, `about.tsx`, `contact.tsx`, `news.tsx`, `certifications.tsx`
- Modify: `src/components/HomepageFeatures/index.tsx`, `src/components/CertificationMap/index.tsx`

**Interfaces:**
- Consumes: `Translate` / `translate` from `@docusaurus/Translate`.
- Produces: translation IDs prefixed by page/component: `home.*`, `about.*`, `contact.*`, `news.*`, `certifications.*`, `features.*`, `certMap.*`. Task 3 fills these in `i18n/ro/code.json`.

- [ ] **Step 1:** Wrap every visible string (headings, paragraphs, list items, button labels, table headers/cells except course/cert names, `Layout` `title`/`description`, `imageAlt`, badge/legend/level labels) with `<Translate id="…">English</Translate>` or `translate({id: '…', message: 'English'})`. Paragraphs with inline `<strong>`/links use `<Translate values={{…}}>` with `{placeholder}`s.
- [ ] **Step 2:** In `index.tsx`, replace `siteConfig.tagline` with `translate({id: 'home.tagline', message: '<current tagline from config>'})` and the page title with `translate({id: 'home.title', message: 'Welcome to Q.E.D.'})`.
- [ ] **Step 3:** In `news.tsx`, replace the internal `<a href="/docs/…">` and `<a href="/contact">` with `<Link to="…">` from `@docusaurus/Link`.
- [ ] **Step 4:** Run `npm run typecheck` and `npm run build`. Expected: both pass; English pages render the same text as before.
- [ ] **Step 5:** Commit the seven files — "feat(i18n): mark page and component strings for translation".

### Task 3: Romanian translations for UI strings

**Files:**
- Create (generated, then edited): `i18n/ro/code.json`, `i18n/ro/docusaurus-theme-classic/navbar.json`, `i18n/ro/docusaurus-theme-classic/footer.json`, `i18n/ro/docusaurus-plugin-content-docs/current.json`

**Interfaces:**
- Consumes: IDs from Task 2.

- [ ] **Step 1:** Run `npm run write-translations -- --locale ro`.
- [ ] **Step 2:** Fill every `message` in all four files with Romanian **without diacritics** — including all theme-classic entries in `code.json` (pagination, TOC, 404, search, etc.). Keep course and certification names English. Footer column titles: "Training" → "Cursuri", "Certification" → "Certificari", "Company" → "Companie"; sidebar category "Training Courses" → "Cursuri".
- [ ] **Step 3:** Run `grep -rnP '[ăâîșțşţĂÂÎȘȚŞŢ]' i18n/ro`. Expected: no output.
- [ ] **Step 4:** Run `npm run build`; open `build/ro/index.html`, `build/ro/about/index.html`, `build/ro/certifications/index.html` and confirm Romanian text.
- [ ] **Step 5:** Commit `i18n/ro/*.json i18n/ro/*/` — "feat(i18n): Romanian UI translations".

### Task 4: Romanian course pages

**Files:**
- Create: `i18n/ro/docusaurus-plugin-content-docs/current/{intro,kubernetes-fundamentals,kubernetes-for-platform-engineers,kubernetes-for-developers,kubernetes-security}.md`

- [ ] **Step 1:** Copy each `docs/*.md` and translate per Global Constraints: frontmatter `description` translated, `title` kept (course name); in `intro.md` translate everything (it has no Course Content section), keeping course names in the `###` headings and `- N Days` → `- N zile`.
- [ ] **Step 2:** In each course page, translate everything outside "## Course Content"; inside it translate only `## Course Content` and `### Day N` headings; leave `####` module titles, bullets and `**Lab:**` lines byte-identical to English.
- [ ] **Step 3:** Verify unchanged content: for each course, `diff <(sed -n '/^## Course Content/,/^## /p' docs/X.md | grep -v '^##\? \?#\{1,2\} ') <(sed -n '/^## Continutul cursului/,/^## /p' i18n/ro/.../X.md | grep -v '^##\? \?#\{1,2\} ')` — expected: no diff except the closing next-section heading line. (Simpler equivalent acceptable: compare `####`, `- ` and `**Lab:**` lines within the section.)
- [ ] **Step 4:** Run the diacritics grep from Task 3 and `npm run build`. Expected: no output; build passes (`onBrokenLinks: 'throw'`).
- [ ] **Step 5:** Commit `i18n/ro/docusaurus-plugin-content-docs/current/` — "feat(i18n): Romanian course pages".

### Task 5: End-to-end verification

- [ ] **Step 1:** `npm run build && npm run typecheck` pass.
- [ ] **Step 2:** `grep -o 'href="/docs[^"]*"' build/ro/news/index.html build/ro/certifications/index.html build/ro/index.html` → no output (all internal links are `/ro/...`).
- [ ] **Step 3:** `build/ro/docs/kubernetes-fundamentals/index.html` contains "Continutul cursului", "Ziua 1", "Docker Overview" and "Set up your Docker host machine".
- [ ] **Step 4:** `git diff` on `build/` is irrelevant; instead spot-check `build/index.html` and `build/about/index.html` still show the original English text and include the language dropdown.
- [ ] **Step 5:** Diacritics grep from Task 3 → no output. Nothing to commit unless fixes were needed.

## Not in this repo

Cloudflare country routing (spec, "Optional" section) is configured in the Cloudflare dashboard after deploy; the exact rule is given to the user separately.
