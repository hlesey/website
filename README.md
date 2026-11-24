# Q.E.D. Website

Professional Kubernetes training company website built with [Docusaurus](https://docusaurus.io/).

## About

Q.E.D. provides expert-led Kubernetes training courses:

- **Kubernetes Fundamentals (2 days)** - Getting started with Kubernetes, towards KCNA
- **Kubernetes for Platform Engineers (3 days)** - Cluster administration, towards CKA
- **Kubernetes for Developers (3 days)** - Building and deploying applications, towards CKAD
- **Kubernetes Security (3 days)** - Securing clusters and workloads, towards CKS

The certification paths page (`src/pages/certifications.tsx`) maps the courses to the CNCF certifications.

## Features

- 🚀 Modern, responsive design
- 📚 Comprehensive course documentation
- 🔗 Easy navigation and course discovery
- 📱 Mobile-friendly interface
- ⚡ Fast loading with static site generation

## Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
npm install
# or
yarn
```

### Local Development

```bash
npm start
# or
yarn start
```

This starts a local development server at `http://localhost:3000`. Most changes are reflected live without restarting the server.

The dev server runs one language at a time. To work on the Romanian version:

```bash
npm start -- --locale ro
```

## Languages

The site is in English (`/`) and Romanian (`/ro/`), with a language switcher in the navbar.

- Romanian text is written **without diacritics**.
- Page and component strings use `<Translate>` / `translate()`; Romanian values are in `i18n/ro/code.json`, navbar/footer in `i18n/ro/docusaurus-theme-classic/`.
- Romanian course pages are in `i18n/ro/docusaurus-plugin-content-docs/current/`. The "Course Content" section (modules, topics, labs) stays in English.
- After adding new strings, run `npm run write-translations -- --locale ro` and fill in the new entries.
- `scripts/check-i18n.sh` checks a build (`npm run build`) for both languages.

## SEO

- `static/robots.txt` allows search engines and AI crawlers; `static/llms.txt` is a plain summary for AI assistants. Keep `llms.txt` in sync when courses change.
- Company structured data is in `headTags` in `docusaurus.config.ts`; course pages use `CourseSchema` and `CourseFaq` (`src/components/`).
- `static/img/qed-social-card.png` is the preview image for shared links.
- `make check-seo` builds the site and checks titles, descriptions, structured data and crawler files.

### Build

```bash
npm run build
# or
yarn build
```

Generates static content into the `build` directory for production deployment.

### Serve Locally

```bash
npm run serve
# or
yarn serve
```

Test the production build locally.

## Deployment

This website is configured for GitHub Pages deployment using GitHub Actions.

### Automatic Deployment

Push to `main` branch triggers automatic deployment via GitHub Actions workflow (`.github/workflows/deploy.yml`).

### Manual Deployment

```bash
npm run deploy
# or
GIT_USER=<Your GitHub username> yarn deploy
```

## Project Structure

```
.
├── docs/                    # Course documentation
│   ├── intro.md            # Course portfolio overview
│   ├── kubernetes-fundamentals.md
│   ├── kubernetes-for-platform-engineers.md
│   ├── kubernetes-for-developers.md
│   └── kubernetes-security.md
├── src/
│   ├── components/         # React components
│   └── pages/              # Static pages (About, Contact, Certifications)
├── static/                 # Static assets
├── docusaurus.config.ts    # Site configuration
└── sidebars.ts             # Documentation sidebar
```

## Configuration

Key configurations in `docusaurus.config.ts`:

- **Site Info**: Title, tagline, URL
- **GitHub Pages**: Organization and project settings  
- **Navigation**: Navbar and footer links
- **Theme**: Color scheme and layout options

## Content Management

### Adding New Courses

1. Create a new markdown file in `docs/`
2. Update `sidebars.ts` to include the new course
3. Add navigation links in `docusaurus.config.ts`

### Updating Company Info

- **Homepage**: Edit `src/pages/index.tsx`
- **About Page**: Edit `src/pages/about.tsx`  
- **Contact Page**: Edit `src/pages/contact.tsx`
- **Footer**: Update `docusaurus.config.ts`

## Technology Stack

- **Framework**: Docusaurus 3.x
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## License

See [LICENSE](LICENSE) file for details.
