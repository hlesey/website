import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

type Props = {
  /** Course name, e.g. "Kubernetes Security" */
  name: string;
  /** Total course hours, e.g. 24 */
  hours: number;
  /** e.g. "Advanced" */
  level: string;
  /** Skills and exam preparation the course covers */
  teaches: string[];
};

/** Course structured data (schema.org) for a course page; description and URL come from the page. */
export default function CourseSchema({name, hours, level, teaches}: Props): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const {metadata} = useDoc();
  const site = siteConfig.url;
  const workload = `PT${hours}H`;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description: metadata.description,
    url: site + metadata.permalink,
    inLanguage: ['en', 'ro'],
    educationalLevel: level,
    teaches,
    provider: {
      '@type': 'EducationalOrganization',
      '@id': `${site}/#organization`,
      name: 'Q.E.D.',
      url: `${site}/`,
    },
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        courseMode: 'Onsite',
        courseWorkload: workload,
        location: {
          '@type': 'Place',
          name: 'Bucharest',
          address: {'@type': 'PostalAddress', addressLocality: 'Bucharest', addressCountry: 'RO'},
        },
      },
      {
        '@type': 'CourseInstance',
        courseMode: 'Online',
        courseWorkload: workload,
      },
    ],
  };
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
