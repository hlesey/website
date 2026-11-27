import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Heading from '@theme/Heading';

type FaqItem = {question: string; answer: string};

/** FAQ items and their FAQPage structured data. The page provides the FAQ heading with the "faq" id. */
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
      {items.map(({question, answer}) => (
        <div key={question}>
          <Heading as="h3">{question}</Heading>
          <p>{answer}</p>
        </div>
      ))}
    </section>
  );
}
