# Q.E.D. Academy Website

Professional Kubernetes training company website built with [Docusaurus](https://docusaurus.io/).

## About

Q.E.D. Academy provides expert-led Kubernetes training courses:

- **Kubernetes Fundamentals (2 days)** - Perfect for getting started with container orchestration
- **Kubernetes Pro (3 days)** - Advanced course for production-ready implementations

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
│   └── kubernetes-pro.md
├── src/
│   ├── components/         # React components
│   └── pages/              # Static pages (About, Contact)
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
