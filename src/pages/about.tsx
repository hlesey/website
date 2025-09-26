import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function About(): ReactNode {
  return (
    <Layout
      title="About Q.E.D. Academy"
      description="Learn about our mission to provide world-class Kubernetes training and certification preparation.">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">About Q.E.D. Academy</Heading>
            
            <p className="margin-vert--lg">
              Q.E.D. Academy is a leading provider of professional training and certification preparation for Cloud Native technologies. 
              We specialize in hands-on, practical education that prepares students for real-world container orchestration challenges.
            </p>

            <Heading as="h2">Our Mission</Heading>
            <p>
              To empower developers, DevOps engineers, and IT professionals with the knowledge and skills needed to master 
              Kubernetes and advance their careers in cloud-native technologies.
            </p>

            <Heading as="h2">Why Choose Q.E.D. Academy?</Heading>
            <ul className="margin-vert--md">
              <li><strong>Industry Expertise:</strong> Our instructors are certified Kubernetes professionals with extensive production experience</li>
              <li><strong>Practical Focus:</strong> All courses include hands-on labs and real-world scenarios</li>
              <li><strong>Certification Success:</strong> Proven track record of helping students pass CKA and CKAD exams</li>
              <li><strong>Small Class Sizes:</strong> Personalized attention and interactive learning environment</li>
              <li><strong>Flexible Learning:</strong> Multiple training formats to fit your schedule and learning style</li>
            </ul>

            <Heading as="h2">Our Instructors</Heading>
            <p>
              Our team consists of certified Kubernetes administrators and developers who have implemented and managed 
              Kubernetes clusters in production environments across various industries. They bring real-world insights 
              and best practices to every training session.
            </p>

            <Heading as="h2">Training Approach</Heading>
            <p>
              We believe in learning by doing. Our courses combine theoretical foundations with extensive hands-on practice. 
              Students work with live Kubernetes clusters, troubleshoot real issues, and complete projects that mirror 
              production scenarios.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}