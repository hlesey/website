import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  tag: string;
  image: string;
  imageAlt: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Expert-Led Training',
    tag: 'Practitioners, not presenters',
    image: '/img/features/expert.svg',
    imageAlt: 'Instructor explaining a Kubernetes cluster, with an AI assistant',
    description: (
      <>
        Learn from certified engineers who run Kubernetes in production and work with AI agents every day.
        You get the reasoning behind every command, and know when to trust an agent's suggestion and when
        not to.
      </>
    ),
  },
  {
    title: 'Hands-On Learning',
    tag: 'Real clusters, real agents',
    image: '/img/features/handson.svg',
    imageAlt: 'Terminal running kubectl next to an AI agent panel and a cluster',
    description: (
      <>
        Practice with real Kubernetes clusters and scenarios.
        Build confidence through interactive labs that simulate production challenges and solutions.
      </>
    ),
  },
  {
    title: 'Certification Ready',
    tag: 'KCNA · CKA · CKAD · CKS',
    image: '/img/features/certification.svg',
    imageAlt: 'Certificate with a seal and the KCNA, CKA, CKAD and CKS badges',
    description: (
      <>
        Prepare for the CNCF certifications with targeted training materials and practice exams. 
        The exams are hands-on and solved without AI assistance,
        so you build skills that hold up on your own, and learn to multiply them with agents on the job.
        Boost your career with industry-recognized credentials.
      </>
    ),
  },
];

function Feature({title, tag, image, imageAlt, description}: FeatureItem) {
  return (
    <div className="col col--4">
      <div className={styles.card}>
        <img className={styles.image} src={useBaseUrl(image)} alt={imageAlt} loading="lazy" />
        <p className={styles.tag}>{tag}</p>
        <Heading as="h3" className={styles.title}>
          {title}
        </Heading>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
