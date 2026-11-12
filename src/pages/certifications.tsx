import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './certifications.module.css';

type Badge = 'required' | 'recommended';

type Cert = {
  code: string;
  name: string;
  url: string;
  icon: ReactNode;
  badge: Badge;
  badgeText: string;
  course: string;
  courseTo: string;
};

const CNCF = 'https://www.cncf.io/training/certification';

const icons = {
  wheel: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      {[0, 51, 103, 154, 206, 257, 309].map((a) => (
        <line
          key={a}
          x1="12"
          y1="12"
          x2={12 + 8.5 * Math.sin((a * Math.PI) / 180)}
          y2={12 - 8.5 * Math.cos((a * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="4" width="17" height="6.5" rx="1.5" />
      <rect x="3.5" y="13.5" width="17" height="6.5" rx="1.5" />
      <circle cx="7.5" cy="7.25" r="0.9" fill="currentColor" />
      <circle cx="7.5" cy="16.75" r="0.9" fill="currentColor" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8.5 7 3.5 12 8.5 17" />
      <polyline points="15.5 7 20.5 12 15.5 17" />
      <line x1="13.5" y1="5" x2="10.5" y2="19" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6Z" />
      <polyline points="8.8 12.2 11.2 14.6 15.4 9.8" strokeLinecap="round" />
    </svg>
  ),
};

const certs: Record<string, Cert> = {
  kcna: {
    code: 'KCNA',
    name: 'Kubernetes and Cloud Native Associate',
    url: `${CNCF}/kcna/`,
    icon: icons.wheel,
    badge: 'recommended',
    badgeText: 'Recommended start',
    course: 'Kubernetes Fundamentals (2 days)',
    courseTo: '/docs/kubernetes-fundamentals',
  },
  cka: {
    code: 'CKA',
    name: 'Certified Kubernetes Administrator',
    url: `${CNCF}/cka/`,
    icon: icons.server,
    badge: 'required',
    badgeText: 'Required for CKS',
    course: 'Kubernetes for Platform Engineers (3 days)',
    courseTo: '/docs/kubernetes-for-platform-engineers',
  },
  ckad: {
    code: 'CKAD',
    name: 'Certified Kubernetes Application Developer',
    url: `${CNCF}/ckad/`,
    icon: icons.code,
    badge: 'recommended',
    badgeText: 'Recommended',
    course: 'Kubernetes for Developers (3 days)',
    courseTo: '/docs/kubernetes-for-developers',
  },
  cks: {
    code: 'CKS',
    name: 'Certified Kubernetes Security Specialist',
    url: `${CNCF}/cks/`,
    icon: icons.shield,
    badge: 'recommended',
    badgeText: 'Recommended',
    course: 'Kubernetes Security (3 days)',
    courseTo: '/docs/kubernetes-security',
  },
};

function CertCard({cert, featured}: {cert: Cert; featured?: boolean}): ReactNode {
  return (
    <div className={clsx(styles.certCard, featured && styles.certCardFeatured)}>
      <div className={styles.certHead}>
        <span className={styles.certIcon}>{cert.icon}</span>
        <div>
          <a className={styles.certCode} href={cert.url} target="_blank" rel="noopener noreferrer">
            {cert.code}
          </a>
          <div className={styles.certName}>{cert.name}</div>
        </div>
      </div>
      <span className={clsx(styles.badge, styles[cert.badge])}>{cert.badgeText}</span>
      <Link className={styles.certCourse} to={cert.courseTo}>
        Course: {cert.course} →
      </Link>
    </div>
  );
}

function Hero(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={styles.eyebrow}>Linux Foundation &amp; CNCF</p>
        <Heading as="h1" className={styles.heroTitle}>
          Kubernetes Certification Paths
        </Heading>
        <p className={styles.heroSubtitle}>
          A visual guide for the Platform Engineer, Developer and Security roles in cloud native, and the
          course that prepares you for each exam.
        </p>
      </div>
    </header>
  );
}

function CertificationMap(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}>Certification map</p>
        <div className={styles.mapTitleRow}>
          <Heading as="h2">CNCF structure &amp; skill levels</Heading>
          <div className={styles.legend}>
            <span><i className={clsx(styles.dot, styles.required)} /> Required</span>
            <span><i className={clsx(styles.dot, styles.recommended)} /> Recommended</span>
          </div>
        </div>
        <div className={styles.map}>
          <div className={styles.level}>
            <div className={styles.levelLabel}>Associate</div>
            <CertCard cert={certs.kcna} />
          </div>
          <div className={clsx(styles.connector, styles.connectorFork)} aria-hidden="true" />
          <div className={styles.level}>
            <div className={styles.levelLabel}>Professional</div>
            <div className={styles.pathTag}>Platform Engineer path</div>
            <CertCard cert={certs.cka} />
            <CertCard cert={certs.ckad} />
            <div className={styles.pathTag}>Developer path</div>
          </div>
          <div className={clsx(styles.connector, styles.connectorTop)} aria-hidden="true" />
          <div className={styles.level}>
            <div className={styles.levelLabel}>Specialist</div>
            <CertCard cert={certs.cks} featured />
            <p className={styles.note}>CKS can be taken only after passing CKA.</p>
          </div>
        </div>
        <p className={styles.formatNote}>
          KCNA is an online, multiple-choice exam. CKA, CKAD and CKS are online, hands-on exams: you solve
          tasks on real Kubernetes clusters.
        </p>
      </div>
    </section>
  );
}

function Foundation(): ReactNode {
  const items = [
    {title: 'Kubernetes architecture', text: 'Core container orchestration fundamentals: control plane, nodes, Pods, Services, Deployments.'},
    {title: 'Cloud-native ecosystem', text: 'The exam also covers observability, GitOps and continuous delivery.'},
    {title: 'Strategic readiness', text: 'The ideal launchpad towards CKA or CKAD.'},
  ];
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <p className={styles.eyebrow}>Associate level • Recommended</p>
        <Heading as="h2">Cloud-native foundation (KCNA)</Heading>
        <p className={styles.lead}>
          Prep course: <Link to="/docs/kubernetes-fundamentals">Kubernetes Fundamentals (2 days)</Link>
        </p>
        <div className={styles.grid3}>
          {items.map((i) => (
            <div key={i.title} className={styles.infoCard}>
              <Heading as="h3">{i.title}</Heading>
              <p>{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Paths(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}>Technical specialization</p>
        <Heading as="h2">Administrator vs. Developer path</Heading>
        <div className={styles.grid2}>
          <div className={styles.pathCard}>
            <div className={styles.pathCardHead}>
              <span className={styles.pathName}>Administrator path</span>
              <span className={clsx(styles.badge, styles.required)}>Required for CKS</span>
            </div>
            <Heading as="h3">Certified Kubernetes Administrator (CKA)</Heading>
            <ul>
              <li><strong>Infrastructure:</strong> cluster installation and setup.</li>
              <li><strong>Operations:</strong> networking, storage and troubleshooting.</li>
              <li>
                <strong>Courses:</strong>{' '}
                <Link to="/docs/kubernetes-fundamentals">Kubernetes Fundamentals</Link>, then{' '}
                <Link to="/docs/kubernetes-for-platform-engineers">Kubernetes for Platform Engineers</Link>.
              </li>
            </ul>
          </div>
          <div className={styles.pathCard}>
            <div className={styles.pathCardHead}>
              <span className={styles.pathName}>Developer path</span>
              <span className={clsx(styles.badge, styles.recommended)}>Recommended</span>
            </div>
            <Heading as="h3">Certified Kubernetes Application Developer (CKAD)</Heading>
            <ul>
              <li><strong>Applications:</strong> designing and deploying microservices.</li>
              <li><strong>Configuration:</strong> Pods, ConfigMaps and Secrets.</li>
              <li>
                <strong>Course:</strong>{' '}
                <Link to="/docs/kubernetes-for-developers">Kubernetes for Developers</Link>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecurityProgression(): ReactNode {
  const steps = [
    {n: 1, title: 'KCNA foundation', course: 'Kubernetes Fundamentals (2 days)', to: '/docs/kubernetes-fundamentals'},
    {n: 2, title: 'CKA prerequisite', course: 'Kubernetes for Platform Engineers (3 days)', to: '/docs/kubernetes-for-platform-engineers'},
    {n: 3, title: 'CKS certification', course: 'Kubernetes Security (3 days)', to: '/docs/kubernetes-security'},
  ];
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <p className={styles.eyebrow}>Advanced security</p>
        <Heading as="h2">Progression to Security Specialist (CKS)</Heading>
        <ol className={styles.steps}>
          {steps.map((s) => (
            <li key={s.n} className={clsx(styles.step, s.n === 3 && styles.stepFinal)}>
              <span className={styles.stepNumber}>{s.n}</span>
              <Heading as="h3">{s.title}</Heading>
              <Link to={s.to}>Course: {s.course}</Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TrainingPlan(): ReactNode {
  const rows = [
    ['Kubernetes Fundamentals', '/docs/kubernetes-fundamentals', '2 days', 'KCNA (Associate)', 'Cloud-native foundation'],
    ['Kubernetes for Platform Engineers', '/docs/kubernetes-for-platform-engineers', '3 days', 'CKA (Administrator)', 'Platform Engineer path'],
    ['Kubernetes for Developers', '/docs/kubernetes-for-developers', '3 days', 'CKAD (Developer)', 'Developer path'],
    ['Kubernetes Security', '/docs/kubernetes-security', '3 days', 'CKS (Security Specialist)', 'Security (requires CKA)'],
  ];
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}>Training plan</p>
        <Heading as="h2">Course to CNCF certification mapping</Heading>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Training course</th>
                <th>Duration</th>
                <th>Target certification</th>
                <th>Role / path</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([name, to, days, cert, path]) => (
                <tr key={name}>
                  <td><Link to={to}>{name}</Link></td>
                  <td>{days}</td>
                  <td>{cert}</td>
                  <td>{path}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CallToAction(): ReactNode {
  return (
    <section className={styles.cta}>
      <div className="container">
        <Heading as="h2">Choose your certification path</Heading>
        <p>Complete the dedicated training courses and earn your KCNA, CKA, CKAD or CKS certification.</p>
        <div className={styles.ctaButtons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            View the courses
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Certifications(): ReactNode {
  return (
    <Layout
      title="Kubernetes Certification Paths"
      description="KCNA, CKA, CKAD and CKS: the CNCF Kubernetes certification paths for Platform Engineers, Developers and Security specialists, and the courses that prepare you for each exam.">
      <Hero />
      <main>
        <CertificationMap />
        <Foundation />
        <Paths />
        <SecurityProgression />
        <TrainingPlan />
        <CallToAction />
      </main>
    </Layout>
  );
}
