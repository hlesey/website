# Romanian language version of the Q.E.D. website

## Intent

Offer the site in Romanian as well as English, so Romanian visitors can read it in their
own language, while the technical course syllabus stays in the English the industry uses.

## Goals

- English stays the default language at `qedzone.ro/`; Romanian is served at `qedzone.ro/ro/`.
- A language switcher in the navbar lets visitors move between the two.
- Everything visible is translated into Romanian: home, about, contact, certifications,
  news pages, navbar, footer, homepage features, certification map, course pages, sidebar.
- Romanian text is written **without diacritics** (e.g. "Continutul cursului", not
  "Conținutul cursului").

## Non-goals

- The Docusaurus sample blog posts in `blog/` are not translated.
- No automatic language detection inside the site (GitHub Pages can't do it); country-based
  routing is an optional Cloudflare step outside this repo (see below).

## Course pages (`docs/`) translation rule

- Translated: frontmatter title/description where descriptive, Course Overview, Certification,
  What You'll Learn, Who Should Attend, Course Format, Difficulty, Prerequisites, Recommended
  free courses intro, Next Steps, and the section headings "Course Content" / "Day N".
- Kept in English: everything inside "Course Content" — module titles (e.g. "Docker Overview"),
  topic bullets, and "**Lab:**" lines.
- Kept in English everywhere: course names (e.g. "Kubernetes Fundamentals") and certification
  names/acronyms (KCNA, CKA, CKAD, CKS, CNCF).

## Approaches considered

1. **English at `/`, Romanian at `/ro/`** (chosen): no existing URL or search listing changes.
2. Romanian at `/`, English at `/en/`: fits the `.ro` domain but breaks every existing English
   URL; GitHub Pages can't issue real redirects.

## Design

- `docusaurus.config.ts`: `i18n.locales: ['en', 'ro']`, `defaultLocale: 'en'`, add a
  `localeDropdown` navbar item.
- React pages/components: wrap user-visible strings with Docusaurus `<Translate>` /
  `translate()`; run `npm run write-translations -- --locale ro` and fill in the Romanian
  values in `i18n/ro/` (code.json, navbar/footer, docs sidebar JSON).
- Docs: Romanian copies in `i18n/ro/docusaurus-plugin-content-docs/current/*.md`, following
  the course translation rule above.
- Validation: `npm run build` (builds both locales, `onBrokenLinks: 'throw'`) and `npm run typecheck`.

## Optional: Cloudflare country routing (outside the repo)

With the domain proxied through Cloudflare, a Redirect Rule can send visitors from Romania
(`ip.src.country eq "RO"`) to `/ro/...`. It must only fire on entry from outside the site
(no `qedzone.ro` referer) and only for page paths, so a Romanian visitor who picks English
in the switcher isn't bounced back.

## Left to the builder

Exact Romanian wording, splitting of translation IDs, and Makefile/README notes on running
the Romanian locale locally (`npm run start -- --locale ro`).
