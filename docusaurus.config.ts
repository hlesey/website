import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Q.E.D.',
  tagline: 'Professional Kubernetes Training & Certification in the Age of AI',
  favicon: 'img/qed-logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://qedzone.ro',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hlesey', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',

  themes: ['@docusaurus/theme-mermaid'],
  markdown: { mermaid: true },
  // optional:
  // mermaid: { theme: { light: 'neutral', dark: 'dark' } },

  // English is served at /, Romanian at /ro/
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ro'],
    localeConfigs: {
      en: {label: 'English'},
      ro: {label: 'Romana', htmlLang: 'ro'},
    },
  },

  headTags: [
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        '@id': 'https://qedzone.ro/#organization',
        name: 'Q.E.D.',
        url: 'https://qedzone.ro/',
        logo: 'https://qedzone.ro/img/qed-logo.png',
        description:
          'Kubernetes and AI agents training: hands-on courses preparing for the CNCF KCNA, CKA, CKAD and CKS certifications, in person in Bucharest or live online for Europe and the US.',
        email: 'contact@qedzone.ro',
        telephone: '+40 725 347 822',
        address: {'@type': 'PostalAddress', addressLocality: 'Bucharest', addressCountry: 'RO'},
        areaServed: ['Europe', 'United States'],
        knowsLanguage: ['ro', 'en'],
        knowsAbout: ['Kubernetes', 'AI agents', 'Cloud Native', 'Platform Engineering', 'Kubernetes Security', 'KCNA', 'CKA', 'CKAD', 'CKS'],
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/qed-social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Q.E.D.',
      logo: {
        alt: 'Q.E.D. Logo',
        src: 'img/qed-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Courses',
        },
        {to: '/certifications', label: 'Certifications', position: 'left'},
        {to: '/news', label: 'News', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {type: 'localeDropdown', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Training',
          items: [
            {
              label: 'Kubernetes Fundamentals',
              to: '/docs/kubernetes-fundamentals',
            },
            {
              label: 'Kubernetes for Platform Engineers',
              to: '/docs/kubernetes-for-platform-engineers',
            },
            {
              label: 'Kubernetes for Developers',
              to: '/docs/kubernetes-for-developers',
            },
            {
              label: 'Kubernetes Security',
              to: '/docs/kubernetes-security',
            },
          ],
        },
        {
          title: 'Certification',
          items: [
            {
              label: 'Certification Paths',
              to: '/certifications',
            },
            {
              label: 'KCNA (Kubernetes and Cloud Native Associate)',
              href: 'https://www.cncf.io/training/certification/kcna/',
            },
            {
              label: 'CKA (Certified Kubernetes Administrator)',
              href: 'https://www.cncf.io/training/certification/cka/',
            },
            {
              label: 'CKAD (Certified Kubernetes Application Developer)',
              href: 'https://www.cncf.io/training/certification/ckad/',
            },
            {
              label: 'CKS (Certified Kubernetes Security Specialist)',
              href: 'https://www.cncf.io/training/certification/cks/',
            },
            {
              label: 'CNCF',
              href: 'https://www.cncf.io/',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About Us',
              to: '/about',
            },
            {
              label: 'Contact',
              to: '/contact',
            },
            {
              label: 'News',
              to: '/news',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Q.E.D.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
