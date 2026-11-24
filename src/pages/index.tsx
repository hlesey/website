import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate id="home.tagline">
            Professional Kubernetes Training & Certification in the Age of AI
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate id="home.button.courses">View Our Courses</Translate> 🚀
          </Link>
          <Link
            className="button button--secondary button--outline button--lg"
            to="/certifications">
            <Translate id="home.button.certifications">Certification Paths</Translate>
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/contact">
            <Translate id="home.button.getStarted">Get Started Today</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({id: 'home.title', message: 'Kubernetes & AI Agents Training – CKA, CKAD, CKS Prep'})}
      description={translate({
        id: 'home.description',
        message:
          'Hands-on Kubernetes and AI agents training for engineers: live online or in-person courses that prepare you for the KCNA, CKA, CKAD and CKS exams.',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
