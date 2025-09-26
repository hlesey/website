import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Contact(): ReactNode {
  return (
    <Layout
      title="Contact Q.E.D. Academy"
      description="Get in touch with Q.E.D. Academy for training inquiries, course schedules, and enrollment information.">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">Contact Us</Heading>
            
            <p className="margin-vert--lg">
              Ready to advance your Kubernetes skills? Get in touch with us to learn more about our training programs, 
              upcoming course schedules, or to discuss custom training solutions for your organization.
            </p>

            <div className="row margin-vert--lg">
              <div className="col col--6">
                <Heading as="h2">Training Inquiries</Heading>
                <p>
                  <strong>Email:</strong> <a href="mailto:contact@qedzone.ro">contact@qedzone.ro</a><br/>
                  <strong>Phone:</strong> +40 725 347 822
                </p>

                <Heading as="h2">Course Schedules</Heading>
                <p>
                  Get information about upcoming course dates, availability, and pricing.
                </p>
                <ul>
                  <li>Kubernetes Fundamentals - 2 Day Course</li>
                  <li>Kubernetes Pro - 3 Day Advanced Course</li>
                  <li>Custom Enterprise Training</li>
                </ul>
              </div>

              <div className="col col--6">
                <Heading as="h2">Enterprise Training</Heading>
                <p>
                  <strong>Email:</strong> <a href="mailto:enterprise@qedzone.ro">enterprise@qedzone.ro</a><br/>
                </p>

                <Heading as="h2">Office Hours</Heading>
                <p>
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM EST<br/>
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM EST<br/>
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>

            <div className="margin-vert--lg">
              <Heading as="h2">Get Started Today</Heading>
              <p>
                Ready to begin your Kubernetes journey? Here's how to get started:
              </p>
              <ol>
                <li><strong>Choose Your Course:</strong> Review our course offerings and select the training that matches your skill level and goals</li>
                <li><strong>Check Schedule:</strong> Contact us for upcoming course dates and availability</li>
                <li><strong>Enroll:</strong> Reserve your spot with a simple enrollment process</li>
                <li><strong>Prepare:</strong> Receive pre-course materials and setup instructions</li>
                <li><strong>Learn:</strong> Join our expert-led training sessions and hands-on labs</li>
              </ol>
            </div>

            <div className="margin-vert--lg">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">Quick Contact Form</Heading>
                </div>
                <div className="card__body">
                  <p>
                    For immediate assistance, please email us at{' '}
                    <strong><a href="mailto:contact@qedzone.ro">contact@qedzone.ro</a></strong> with:
                  </p>
                  <ul>
                    <li>Your name and organization</li>
                    <li>Course of interest</li>
                    <li>Preferred training dates</li>
                    <li>Number of participants (for group training)</li>
                    <li>Any specific requirements or questions</li>
                  </ul>
                  <p>We'll respond within 24 hours with detailed information and next steps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}