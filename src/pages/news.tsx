import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import TwitterFeed from '@site/src/components/TwitterFeed';

export default function News(): JSX.Element {
  return (
    <Layout
      title="Latest News & Updates"
      description="Stay updated with the latest news from the cloud-native and Kubernetes community">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <Heading as="h1">Latest News & Updates</Heading>
            <p className="margin-bottom--lg">
              Stay connected with the latest developments in the Kubernetes and cloud-native ecosystem. 
              Follow the latest updates from the Cloud Native Computing Foundation.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col col--8">
            <div className="card">
              <div className="card__header">
                <Heading as="h2">
                  <span style={{color: '#1DA1F2'}}>𝕏</span> Latest from Cloud Native Computing Foundation
                </Heading>
                <p>
                  Follow <a href="https://twitter.com/CloudNativeFdn" target="_blank" rel="noopener noreferrer">@CloudNativeFdn</a> for 
                  the latest news, announcements, and updates from the CNCF community.
                </p>
              </div>
              <div className="card__body">
                <TwitterFeed />
              </div>
            </div>
          </div>
          
          <div className="col col--4">
            <div className="card margin-bottom--lg">
              <div className="card__header">
                <Heading as="h3">📚 Learning Resources</Heading>
              </div>
              <div className="card__body">
                <ul>
                  <li><a href="https://kubernetes.io/blog/" target="_blank" rel="noopener noreferrer">Kubernetes Official Blog</a></li>
                  <li><a href="https://www.cncf.io/blog/" target="_blank" rel="noopener noreferrer">CNCF Blog</a></li>
                  <li><a href="https://kubernetes.io/docs/home/" target="_blank" rel="noopener noreferrer">Kubernetes Documentation</a></li>
                  <li><a href="https://landscape.cncf.io/" target="_blank" rel="noopener noreferrer">CNCF Landscape</a></li>
                </ul>
              </div>
            </div>

            <div className="card margin-bottom--lg">
              <div className="card__header">
                <Heading as="h3">🎯 Certification Updates</Heading>
              </div>
              <div className="card__body">
                <p><strong>Current Certifications:</strong></p>
                <ul>
                  <li><a href="https://www.cncf.io/certification/cka/" target="_blank" rel="noopener noreferrer">CKA - Certified Kubernetes Administrator</a></li>
                  <li><a href="https://www.cncf.io/certification/ckad/" target="_blank" rel="noopener noreferrer">CKAD - Certified Kubernetes Application Developer</a></li>
                  <li><a href="https://www.cncf.io/certification/cks/" target="_blank" rel="noopener noreferrer">CKS - Certified Kubernetes Security Specialist</a></li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card__header">
                <Heading as="h3">🚀 Our Courses</Heading>
              </div>
              <div className="card__body">
                <p>Master Kubernetes with our expert-led training:</p>
                <ul>
                  <li><a href="/docs/kubernetes-fundamentals">Kubernetes Fundamentals - 2 Days</a></li>
                  <li><a href="/docs/kubernetes-pro">Kubernetes Pro - 3 Days</a></li>
                </ul>
                <p><a href="/contact" className="button button--primary button--sm">Get Started Today</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}