import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import CertificationMap, {CertificationLegend} from '@site/src/components/CertificationMap';

import styles from './certifications.module.css';

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

function MapSection(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}>Certification map</p>
        <div className={styles.mapTitleRow}>
          <Heading as="h2">CNCF structure &amp; skill levels</Heading>
          <CertificationLegend />
        </div>
        <CertificationMap />
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
        <MapSection />
        <Foundation />
        <Paths />
        <SecurityProgression />
        <TrainingPlan />
        <CallToAction />
      </main>
    </Layout>
  );
}
