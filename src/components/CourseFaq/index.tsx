import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';

type FaqItem = {question: string; answer: string};

/** Visible FAQ section and its FAQPage structured data, from the same items. */
export default function CourseFaq({items}: {items: FaqItem[]}): ReactNode {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({question, answer}) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {'@type': 'Answer', text: answer},
    })),
  };
  return (
    <section>
      <Head>
        <script type="application/ld+json">{JSON.stringify(data)}</script>
      </Head>
      <Heading as="h2" id="faq">
        <Translate id="courseFaq.heading">Frequently asked questions</Translate>
      </Heading>
      {items.map(({question, answer}) => (
        <div key={question}>
          <Heading as="h3">{question}</Heading>
          <p>{answer}</p>
        </div>
      ))}
    </section>
  );
}
