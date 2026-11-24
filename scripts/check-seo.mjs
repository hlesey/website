#!/usr/bin/env node
// Checks the built site (run `npm run build` first) for SEO and AI-assistant metadata.
import {existsSync, readFileSync, readdirSync, statSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

process.chdir(join(dirname(fileURLToPath(import.meta.url)), '..'));

let failed = false;
function check(desc, fn) {
  let ok = false;
  try {
    ok = Boolean(fn());
  } catch {
    ok = false;
  }
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${desc}`);
  if (!ok) failed = true;
}

const read = (p) => readFileSync(p, 'utf8');
const page = (p) => read(join('build', p, 'index.html'));

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return htmlFiles(p);
    return p.endsWith('.html') ? [p] : [];
  });
}

const jsonLd = (html) =>
  [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) =>
    JSON.parse(m[1]),
  );
const hasType = (html, type) => jsonLd(html).some((o) => [o['@type']].flat().includes(type));
const title = (html) => html.match(/<title[^>]*>([^<]*)<\/title>/)[1].replace(/&amp;/g, '&');
const description = (html) =>
  html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)[1].replace(/&amp;/g, '&');
const descOk = (html) => {
  const n = description(html).length;
  return n >= 120 && n <= 160;
};

// Crawlers
const robots = existsSync('build/robots.txt') ? read('build/robots.txt') : '';
check('robots.txt points to the sitemap', () => robots.includes('Sitemap: https://qedzone.ro/sitemap.xml'));
for (const bot of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended']) {
  check(`robots.txt allows ${bot}`, () => robots.includes(`User-agent: ${bot}`));
}
const llms = existsSync('build/llms.txt') ? read('build/llms.txt') : '';
for (const word of ['Bucharest', 'online', 'Romanian', 'English', 'CKA', 'AI agents']) {
  check(`llms.txt mentions ${word}`, () => llms.includes(word));
}

// Social card
check('social card is a 1200x630 PNG', () => {
  const b = readFileSync('build/img/qed-social-card.png');
  return b.readUInt32BE(16) === 1200 && b.readUInt32BE(20) === 630;
});
check('home uses the social card', () =>
  /property="og:image" content="[^"]*qed-social-card\.png"/.test(page('')),
);

// Clean index
for (const sitemap of ['build/sitemap.xml', 'build/ro/sitemap.xml']) {
  check(`${sitemap} has no blog or demo pages`, () => {
    const s = read(sitemap);
    return !s.includes('/blog') && !s.includes('markdown-page');
  });
  // GitHub Pages redirects /page to /page/, so indexed URLs must already end with "/"
  check(`${sitemap} URLs end with "/"`, () =>
    [...read(sitemap).matchAll(/<loc>([^<]*)<\/loc>/g)].every((m) => m[1].endsWith('/')),
  );
}
check('canonical URLs end with "/"', () =>
  ['', 'ro/', 'about', 'docs/kubernetes-security', 'ro/docs/kubernetes-security'].every((p) =>
    page(p).match(/rel="canonical" href="(https:\/\/qedzone\.ro\/[^"]*)"/)[1].endsWith('/'),
  ),
);
check('llms.txt links end with "/"', () =>
  [...llms.matchAll(/\]\((https:\/\/qedzone\.ro[^)]*)\)/g)].every((m) => m[1].endsWith('/')),
);

// Structured data
check('all JSON-LD blocks are valid JSON', () => htmlFiles('build').every((f) => (jsonLd(read(f)), true)));
check('home has EducationalOrganization data', () => hasType(page(''), 'EducationalOrganization'));

// Page titles and descriptions
const pages = ['', 'certifications', 'about', 'contact', 'news', 'docs/intro'];
for (const locale of ['', 'ro/']) {
  for (const p of pages) {
    check(`/${locale}${p} description is 120-160 chars`, () => descOk(page(locale + p)));
    check(`/${locale}${p} title is at most 60 chars, one "|"`, () => {
      const t = title(page(locale + p));
      return t.length <= 60 + ' | Q.E.D.'.length && t.split('|').length === 2;
    });
  }
}

// Course pages
const courses = [
  'kubernetes-fundamentals',
  'kubernetes-for-platform-engineers',
  'kubernetes-for-developers',
  'kubernetes-security',
];
for (const [locale, faq] of [
  ['', 'Frequently asked questions'],
  ['ro/', 'Intrebari frecvente'],
]) {
  for (const c of courses) {
    const p = `${locale}docs/${c}`;
    check(`/${p} has Course data`, () => hasType(page(p), 'Course'));
    check(`/${p} has FAQPage data`, () => hasType(page(p), 'FAQPage'));
    check(`/${p} shows "${faq}"`, () => page(p).includes(faq));
    check(`/${p} lists the FAQ in the table of contents`, () =>
      /class="table-of-contents__link[^"]*" href="#faq"|href="#faq" class="table-of-contents__link/.test(page(p)),
    );
    check(`/${p} title is at most 62 chars`, () => title(page(p)).length <= 62);
    check(`/${p} description is 120-160 chars`, () => descOk(page(p)));
  }
}

process.exit(failed ? 1 : 0);
