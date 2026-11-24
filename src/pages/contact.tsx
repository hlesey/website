import type {ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Contact(): ReactNode {
  return (
    <Layout
      title={translate({id: 'contact.title', message: 'Contact – Kubernetes Training Inquiries'})}
      description={translate({
        id: 'contact.description',
        message: 'Contact Q.E.D. about Kubernetes and AI agents courses, CKA, CKAD and CKS preparation, upcoming dates and private training for your engineering team.',
      })}>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">
              <Translate id="contact.heading">Contact Us</Translate>
            </Heading>
            
            <p className="margin-vert--lg">
              <Translate id="contact.intro">
                Ready to advance your Kubernetes skills? Get in touch with us to learn more about our training programs, upcoming course schedules, or to discuss custom training solutions for your organization.
              </Translate>
            </p>

            <div className="row margin-vert--lg">
              <div className="col col--6">
                <Heading as="h2">
                  <Translate id="contact.inquiries.heading">Training Inquiries</Translate>
                </Heading>
                <p>
                  <strong><Translate id="contact.email">Email:</Translate></strong> <a href="mailto:contact@qedzone.ro">contact@qedzone.ro</a><br/>
                  <strong><Translate id="contact.phone">Phone:</Translate></strong> +40 725 347 822
                </p>

                <Heading as="h2">
                  <Translate id="contact.schedules.heading">Course Schedules</Translate>
                </Heading>
                <p>
                  <Translate id="contact.schedules.text">
                    Get information about upcoming course dates, availability, and pricing.
                  </Translate>
                </p>
                <ul>
                  <li>Kubernetes Fundamentals</li>
                  <li>Kubernetes for Platform Engineers</li>
                  <li>Kubernetes for Developers</li>
                  <li>Kubernetes Security</li>
                  <li><Translate id="contact.schedules.custom">Custom Enterprise Training</Translate></li>
                </ul>
              </div>

              <div className="col col--6">
                <Heading as="h2">
                  <Translate id="contact.enterprise.heading">Enterprise Training</Translate>
                </Heading>
                <p>
                  <strong><Translate id="contact.email">Email:</Translate></strong> <a href="mailto:enterprise@qedzone.ro">enterprise@qedzone.ro</a><br/>
                </p>
              </div>
            </div>

            <div className="margin-vert--lg">
              <Heading as="h2">
                <Translate id="contact.start.heading">Get Started Today</Translate>
              </Heading>
              <p>
                <Translate id="contact.start.intro">Ready to begin your Kubernetes journey? Here's how to get started:</Translate>
              </p>
              <ol>
                <li>
                  <strong><Translate id="contact.start.choose.label">Choose Your Course:</Translate></strong>{' '}
                  <Translate id="contact.start.choose.text">Review our course offerings and select the training that matches your skill level and goals</Translate>
                </li>
                <li>
                  <strong><Translate id="contact.start.schedule.label">Check Schedule:</Translate></strong>{' '}
                  <Translate id="contact.start.schedule.text">Contact us for upcoming course dates and availability</Translate>
                </li>
                <li>
                  <strong><Translate id="contact.start.enroll.label">Enroll:</Translate></strong>{' '}
                  <Translate id="contact.start.enroll.text">Reserve your spot with a simple enrollment process</Translate>
                </li>
                <li>
                  <strong><Translate id="contact.start.prepare.label">Prepare:</Translate></strong>{' '}
                  <Translate id="contact.start.prepare.text">Receive pre-course materials and setup instructions</Translate>
                </li>
                <li>
                  <strong><Translate id="contact.start.learn.label">Learn:</Translate></strong>{' '}
                  <Translate id="contact.start.learn.text">Join our expert-led training sessions and hands-on labs</Translate>
                </li>
              </ol>
            </div>

            <div className="margin-vert--lg">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">
                    <Translate id="contact.form.heading">Quick Contact Form</Translate>
                  </Heading>
                </div>
                <div className="card__body">
                  <p>
                    <Translate
                      id="contact.form.intro"
                      values={{
                        email: (
                          <strong><a href="mailto:contact@qedzone.ro">contact@qedzone.ro</a></strong>
                        ),
                      }}>
                      {'For immediate assistance, please email us at {email} with:'}
                    </Translate>
                  </p>
                  <ul>
                    <li><Translate id="contact.form.name">Your name and organization</Translate></li>
                    <li><Translate id="contact.form.course">Course of interest</Translate></li>
                    <li><Translate id="contact.form.dates">Preferred training dates</Translate></li>
                    <li><Translate id="contact.form.participants">Number of participants (for group training)</Translate></li>
                    <li><Translate id="contact.form.requirements">Any specific requirements or questions</Translate></li>
                  </ul>
                  <p>
                    <Translate id="contact.form.response">We'll respond within 24 hours with detailed information and next steps.</Translate>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
