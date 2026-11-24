import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
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
    title: translate({id: 'features.expert.title', message: 'Expert-Led Training'}),
    tag: translate({id: 'features.expert.tag', message: 'Practitioners, not presenters'}),
    image: '/img/features/expert.svg',
    imageAlt: translate({id: 'features.expert.imageAlt', message: 'Instructor explaining a Kubernetes cluster, with an AI assistant'}),
    description: (
      <>
        <Translate id="features.expert.description">
          Learn from certified engineers who run Kubernetes in production and work with AI agents every day. You get the reasoning behind every command, and know when to trust an agent's suggestion and when not to.
        </Translate>
      </>
    ),
  },
  {
    title: translate({id: 'features.handson.title', message: 'Hands-On Learning'}),
    tag: translate({id: 'features.handson.tag', message: 'Real clusters, real agents'}),
    image: '/img/features/handson.svg',
    imageAlt: translate({id: 'features.handson.imageAlt', message: 'Terminal running kubectl next to an AI agent panel and a cluster'}),
    description: (
      <>
        <Translate id="features.handson.description">
          Practice with real Kubernetes clusters and scenarios. Build confidence through interactive labs that simulate production challenges and solutions.
        </Translate>
      </>
    ),
  },
  {
    title: translate({id: 'features.certification.title', message: 'Certification Ready'}),
    tag: 'KCNA · CKA · CKAD · CKS',
    image: '/img/features/certification.svg',
    imageAlt: translate({id: 'features.certification.imageAlt', message: 'Certificate with a seal and the KCNA, CKA, CKAD and CKS badges'}),
    description: (
      <>
        <Translate id="features.certification.description">
          Prepare for the CNCF certifications with targeted training materials and practice exams. The exams are hands-on and solved without AI assistance, so you build skills that hold up on your own, and learn to multiply them with agents on the job. Boost your career with industry-recognized credentials.
        </Translate>
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
