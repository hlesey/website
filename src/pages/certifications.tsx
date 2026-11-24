import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
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
          <Translate id="certifications.hero.title">Kubernetes Certification Paths</Translate>
        </Heading>
        <p className={styles.heroSubtitle}>
          <Translate id="certifications.hero.subtitle">
            A visual guide for the Platform Engineer, Developer and Security roles in cloud native, and the course that prepares you for each exam.
          </Translate>
        </p>
      </div>
    </header>
  );
}

function MapSection(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}><Translate id="certifications.map.eyebrow">Certification map</Translate></p>
        <div className={styles.mapTitleRow}>
          <Heading as="h2"><Translate id="certifications.map.title">CNCF structure &amp; skill levels</Translate></Heading>
          <CertificationLegend />
        </div>
        <CertificationMap />
        <p className={styles.formatNote}>
          <Translate id="certifications.map.formatNote">
            KCNA is an online, multiple-choice exam. CKA, CKAD and CKS are online, hands-on exams: you solve tasks on real Kubernetes clusters.
          </Translate>
        </p>
      </div>
    </section>
  );
}

function Foundation(): ReactNode {
  const items = [
    {title: translate({id: 'certifications.foundation.architecture.title', message: 'Kubernetes architecture'}), text: translate({id: 'certifications.foundation.architecture.text', message: 'Core container orchestration fundamentals: control plane, nodes, Pods, Services, Deployments.'})},
    {title: translate({id: 'certifications.foundation.ecosystem.title', message: 'Cloud-native ecosystem'}), text: translate({id: 'certifications.foundation.ecosystem.text', message: 'The exam also covers observability, GitOps and continuous delivery.'})},
    {title: translate({id: 'certifications.foundation.readiness.title', message: 'Strategic readiness'}), text: translate({id: 'certifications.foundation.readiness.text', message: 'The ideal launchpad towards CKA or CKAD.'})},
  ];
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <p className={styles.eyebrow}><Translate id="certifications.foundation.eyebrow">Associate level • Recommended</Translate></p>
        <Heading as="h2"><Translate id="certifications.foundation.title">Cloud-native foundation (KCNA)</Translate></Heading>
        <p className={styles.lead}>
          <Translate id="certifications.foundation.prepCourse">Prep course:</Translate>{' '}
          <Link to="/docs/kubernetes-fundamentals">
            Kubernetes Fundamentals (<Translate id="certifications.days2">2 days</Translate>)
          </Link>
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
        <p className={styles.eyebrow}><Translate id="certifications.paths.eyebrow">Technical specialization</Translate></p>
        <Heading as="h2"><Translate id="certifications.paths.title">Administrator vs. Developer path</Translate></Heading>
        <div className={styles.grid2}>
          <div className={styles.pathCard}>
            <div className={styles.pathCardHead}>
              <span className={styles.pathName}><Translate id="certifications.paths.admin">Administrator path</Translate></span>
              <span className={clsx(styles.badge, styles.required)}><Translate id="certifications.badge.requiredForCks">Required for CKS</Translate></span>
            </div>
            <Heading as="h3">Certified Kubernetes Administrator (CKA)</Heading>
            <ul>
              <li><strong><Translate id="certifications.paths.admin.infra.label">Infrastructure:</Translate></strong> <Translate id="certifications.paths.admin.infra.text">cluster installation and setup.</Translate></li>
              <li><strong><Translate id="certifications.paths.admin.ops.label">Operations:</Translate></strong> <Translate id="certifications.paths.admin.ops.text">networking, storage and troubleshooting.</Translate></li>
              <li>
                <strong><Translate id="certifications.paths.courses">Courses:</Translate></strong>{' '}
                <Link to="/docs/kubernetes-fundamentals">Kubernetes Fundamentals</Link>,{' '}
                <Translate id="certifications.paths.then">then</Translate>{' '}
                <Link to="/docs/kubernetes-for-platform-engineers">Kubernetes for Platform Engineers</Link>.
              </li>
            </ul>
          </div>
          <div className={styles.pathCard}>
            <div className={styles.pathCardHead}>
              <span className={styles.pathName}><Translate id="certifications.paths.dev">Developer path</Translate></span>
              <span className={clsx(styles.badge, styles.recommended)}><Translate id="certifications.badge.recommended">Recommended</Translate></span>
            </div>
            <Heading as="h3">Certified Kubernetes Application Developer (CKAD)</Heading>
            <ul>
              <li><strong><Translate id="certifications.paths.dev.apps.label">Applications:</Translate></strong> <Translate id="certifications.paths.dev.apps.text">designing and deploying microservices.</Translate></li>
              <li><strong><Translate id="certifications.paths.dev.config.label">Configuration:</Translate></strong> <Translate id="certifications.paths.dev.config.text">Pods, ConfigMaps and Secrets.</Translate></li>
              <li>
                <strong><Translate id="certifications.paths.course">Course:</Translate></strong>{' '}
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
    {n: 1, title: translate({id: 'certifications.security.step1', message: 'KCNA foundation'}), course: 'Kubernetes Fundamentals', days: translate({id: 'certifications.days2', message: '2 days'}), to: '/docs/kubernetes-fundamentals'},
    {n: 2, title: translate({id: 'certifications.security.step2', message: 'CKA prerequisite'}), course: 'Kubernetes for Platform Engineers', days: translate({id: 'certifications.days3', message: '3 days'}), to: '/docs/kubernetes-for-platform-engineers'},
    {n: 3, title: translate({id: 'certifications.security.step3', message: 'CKS certification'}), course: 'Kubernetes Security', days: translate({id: 'certifications.days3', message: '3 days'}), to: '/docs/kubernetes-security'},
  ];
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <p className={styles.eyebrow}><Translate id="certifications.security.eyebrow">Advanced security</Translate></p>
        <Heading as="h2"><Translate id="certifications.security.title">Progression to Security Specialist (CKS)</Translate></Heading>
        <ol className={styles.steps}>
          {steps.map((s) => (
            <li key={s.n} className={clsx(styles.step, s.n === 3 && styles.stepFinal)}>
              <span className={styles.stepNumber}>{s.n}</span>
              <Heading as="h3">{s.title}</Heading>
              <Link to={s.to}>
                <Translate id="certifications.security.course" values={{course: s.course, days: s.days}}>
                  {'Course: {course} ({days})'}
                </Translate>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TrainingPlan(): ReactNode {
  const rows = [
    ['Kubernetes Fundamentals', '/docs/kubernetes-fundamentals', translate({id: 'certifications.days2', message: '2 days'}), 'KCNA (Associate)', translate({id: 'certifications.plan.foundation', message: 'Cloud-native foundation'})],
    ['Kubernetes for Platform Engineers', '/docs/kubernetes-for-platform-engineers', translate({id: 'certifications.days3', message: '3 days'}), 'CKA (Administrator)', translate({id: 'certifications.plan.platform', message: 'Platform Engineer path'})],
    ['Kubernetes for Developers', '/docs/kubernetes-for-developers', translate({id: 'certifications.days3', message: '3 days'}), 'CKAD (Developer)', translate({id: 'certifications.plan.developer', message: 'Developer path'})],
    ['Kubernetes Security', '/docs/kubernetes-security', translate({id: 'certifications.days3', message: '3 days'}), 'CKS (Security Specialist)', translate({id: 'certifications.plan.security', message: 'Security (requires CKA)'})],
  ];
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}><Translate id="certifications.plan.eyebrow">Training plan</Translate></p>
        <Heading as="h2"><Translate id="certifications.plan.title">Course to CNCF certification mapping</Translate></Heading>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th><Translate id="certifications.plan.col.course">Training course</Translate></th>
                <th><Translate id="certifications.plan.col.duration">Duration</Translate></th>
                <th><Translate id="certifications.plan.col.certification">Target certification</Translate></th>
                <th><Translate id="certifications.plan.col.path">Role / path</Translate></th>
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
        <Heading as="h2"><Translate id="certifications.cta.title">Choose your certification path</Translate></Heading>
        <p><Translate id="certifications.cta.text">Complete the dedicated training courses and earn your KCNA, CKA, CKAD or CKS certification.</Translate></p>
        <div className={styles.ctaButtons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            <Translate id="certifications.cta.courses">View the courses</Translate>
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/contact">
            <Translate id="certifications.cta.contact">Contact us</Translate>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Certifications(): ReactNode {
  return (
    <Layout
      title={translate({id: 'certifications.title', message: 'Kubernetes Certification Paths: KCNA, CKA, CKAD, CKS'})}
      description={translate({id: 'certifications.description', message: 'KCNA, CKA, CKAD and CKS explained: the CNCF Kubernetes certification paths for platform engineers, developers and security, and the course for each exam.'})}>
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
