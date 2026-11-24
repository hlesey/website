import type {ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function About(): ReactNode {
  return (
    <Layout
      title={translate({id: 'about.title', message: 'About Q.E.D.'})}
      description={translate({
        id: 'about.description',
        message: 'Learn about our mission to provide world-class Kubernetes training and certification preparation.',
      })}>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">
              <Translate id="about.heading">About Q.E.D.</Translate>
            </Heading>
            
            <p className="margin-vert--lg">
              <Translate id="about.intro">
                Q.E.D. is a leading provider of professional training and certification preparation for Cloud Native technologies. We specialize in hands-on, practical education that prepares students for real-world container orchestration challenges.
              </Translate>
            </p>

            <Heading as="h2">
              <Translate id="about.mission.heading">Our Mission</Translate>
            </Heading>
            <p>
              <Translate id="about.mission.text">
                To empower developers, DevOps engineers, and IT professionals with the knowledge and skills needed to master Kubernetes and advance their careers in cloud-native technologies.
              </Translate>
            </p>

            <Heading as="h2">
              <Translate id="about.why.heading">Why Choose Q.E.D.?</Translate>
            </Heading>
            <ul className="margin-vert--md">
              <li>
                <strong><Translate id="about.why.expertise.label">Industry Expertise:</Translate></strong>{' '}
                <Translate id="about.why.expertise.text">Our instructors are certified Kubernetes professionals with extensive production experience</Translate>
              </li>
              <li>
                <strong><Translate id="about.why.practical.label">Practical Focus:</Translate></strong>{' '}
                <Translate id="about.why.practical.text">All courses include hands-on labs and real-world scenarios</Translate>
              </li>
              <li>
                <strong><Translate id="about.why.success.label">Certification Success:</Translate></strong>{' '}
                <Translate id="about.why.success.text">Proven track record of helping students pass CKA and CKAD exams</Translate>
              </li>
              <li>
                <strong><Translate id="about.why.small.label">Small Class Sizes:</Translate></strong>{' '}
                <Translate id="about.why.small.text">Personalized attention and interactive learning environment</Translate>
              </li>
              <li>
                <strong><Translate id="about.why.flexible.label">Flexible Learning:</Translate></strong>{' '}
                <Translate id="about.why.flexible.text">Multiple training formats to fit your schedule and learning style</Translate>
              </li>
            </ul>

            <Heading as="h2">
              <Translate id="about.instructors.heading">Our Instructors</Translate>
            </Heading>
            <p>
              <Translate id="about.instructors.text">
                Our team consists of certified Kubernetes administrators and developers who have implemented and managed Kubernetes clusters in production environments across various industries. They bring real-world insights and best practices to every training session.
              </Translate>
            </p>

            <Heading as="h2">
              <Translate id="about.approach.heading">Training Approach</Translate>
            </Heading>
            <p>
              <Translate id="about.approach.text">
                We believe in learning by doing. Our courses combine theoretical foundations with extensive hands-on practice. Students work with live Kubernetes clusters, troubleshoot real issues, and complete projects that mirror production scenarios.
              </Translate>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
