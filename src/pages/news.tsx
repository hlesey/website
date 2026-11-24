import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import TwitterFeed from '@site/src/components/TwitterFeed';

export default function News(): ReactNode {
  return (
    <Layout
      title={translate({id: 'news.title', message: 'Kubernetes & Cloud Native News'})}
      description={translate({
        id: 'news.description',
        message: 'The latest Kubernetes and cloud native news from the CNCF, plus learning resources and certification updates for KCNA, CKA, CKAD and CKS candidates.',
      })}>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <Heading as="h1">
              <Translate id="news.heading">Latest News & Updates</Translate>
            </Heading>
            <p className="margin-bottom--lg">
              <Translate id="news.intro">
                Stay connected with the latest developments in the Kubernetes and cloud-native ecosystem. Follow the latest updates from the Cloud Native Computing Foundation.
              </Translate>
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col col--8">
            <div className="card">
              <div className="card__header">
                <Heading as="h2">
                  <span style={{color: '#1DA1F2'}}>𝕏</span>{' '}
                  <Translate id="news.feed.heading">Latest from Cloud Native Computing Foundation</Translate>
                </Heading>
                <p>
                  <Translate
                    id="news.feed.follow"
                    values={{
                      handle: (
                        <a href="https://twitter.com/CloudNativeFdn" target="_blank" rel="noopener noreferrer">@CloudNativeFdn</a>
                      ),
                    }}>
                    {'Follow {handle} for the latest news, announcements, and updates from the CNCF community.'}
                  </Translate>
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
                <Heading as="h3">
                  📚 <Translate id="news.resources.heading">Learning Resources</Translate>
                </Heading>
              </div>
              <div className="card__body">
                <ul>
                  <li><a href="https://kubernetes.io/blog/" target="_blank" rel="noopener noreferrer"><Translate id="news.resources.k8sBlog">Kubernetes Official Blog</Translate></a></li>
                  <li><a href="https://www.cncf.io/blog/" target="_blank" rel="noopener noreferrer"><Translate id="news.resources.cncfBlog">CNCF Blog</Translate></a></li>
                  <li><a href="https://kubernetes.io/docs/home/" target="_blank" rel="noopener noreferrer"><Translate id="news.resources.k8sDocs">Kubernetes Documentation</Translate></a></li>
                  <li><a href="https://landscape.cncf.io/" target="_blank" rel="noopener noreferrer">CNCF Landscape</a></li>
                </ul>
              </div>
            </div>

            <div className="card margin-bottom--lg">
              <div className="card__header">
                <Heading as="h3">
                  🎯 <Translate id="news.certifications.heading">Certification Updates</Translate>
                </Heading>
              </div>
              <div className="card__body">
                <p><strong><Translate id="news.certifications.current">Current Certifications:</Translate></strong></p>
                <ul>
                  <li><a href="https://www.cncf.io/training/certification/cka/" target="_blank" rel="noopener noreferrer">CKA - Certified Kubernetes Administrator</a></li>
                  <li><a href="https://www.cncf.io/training/certification/ckad/" target="_blank" rel="noopener noreferrer">CKAD - Certified Kubernetes Application Developer</a></li>
                  <li><a href="https://www.cncf.io/training/certification/cks/" target="_blank" rel="noopener noreferrer">CKS - Certified Kubernetes Security Specialist</a></li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card__header">
                <Heading as="h3">
                  🚀 <Translate id="news.courses.heading">Our Courses</Translate>
                </Heading>
              </div>
              <div className="card__body">
                <p><Translate id="news.courses.intro">Master Kubernetes with our expert-led training:</Translate></p>
                <ul>
                  <li><Link to="/docs/kubernetes-fundamentals">Kubernetes Fundamentals - <Translate id="news.courses.days2">2 Days</Translate></Link></li>
                  <li><Link to="/docs/kubernetes-for-platform-engineers">Kubernetes for Platform Engineers - <Translate id="news.courses.days3">3 Days</Translate></Link></li>
                  <li><Link to="/docs/kubernetes-for-developers">Kubernetes for Developers - <Translate id="news.courses.days3">3 Days</Translate></Link></li>
                  <li><Link to="/docs/kubernetes-security">Kubernetes Security - <Translate id="news.courses.days3">3 Days</Translate></Link></li>
                </ul>
                <p>
                  <Link to="/contact" className="button button--primary button--sm">
                    <Translate id="news.courses.getStarted">Get Started Today</Translate>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
