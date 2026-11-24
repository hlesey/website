import {useEffect, useRef, useState, type ReactNode, type Ref} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './styles.module.css';

type Badge = 'required' | 'recommended';

type Cert = {
  code: string;
  name: string;
  url: string;
  icon: ReactNode;
  badge: Badge;
  badgeText: string;
  course: string;
  days: string;
  courseTo: string;
};

const CNCF = 'https://www.cncf.io/training/certification';

const icons = {
  wheel: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      {[0, 51, 103, 154, 206, 257, 309].map((a) => (
        <line
          key={a}
          x1="12"
          y1="12"
          x2={12 + 8.5 * Math.sin((a * Math.PI) / 180)}
          y2={12 - 8.5 * Math.cos((a * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="4" width="17" height="6.5" rx="1.5" />
      <rect x="3.5" y="13.5" width="17" height="6.5" rx="1.5" />
      <circle cx="7.5" cy="7.25" r="0.9" fill="currentColor" />
      <circle cx="7.5" cy="16.75" r="0.9" fill="currentColor" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8.5 7 3.5 12 8.5 17" />
      <polyline points="15.5 7 20.5 12 15.5 17" />
      <line x1="13.5" y1="5" x2="10.5" y2="19" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6Z" />
      <polyline points="8.8 12.2 11.2 14.6 15.4 9.8" strokeLinecap="round" />
    </svg>
  ),
};

const certs: Record<string, Cert> = {
  kcna: {
    code: 'KCNA',
    name: 'Kubernetes and Cloud Native Associate',
    url: `${CNCF}/kcna/`,
    icon: icons.wheel,
    badge: 'recommended',
    badgeText: translate({id: 'certMap.badge.recommendedStart', message: 'Recommended start'}),
    course: 'Kubernetes Fundamentals',
    days: translate({id: 'certMap.days2', message: '2 days'}),
    courseTo: '/docs/kubernetes-fundamentals',
  },
  cka: {
    code: 'CKA',
    name: 'Certified Kubernetes Administrator',
    url: `${CNCF}/cka/`,
    icon: icons.server,
    badge: 'required',
    badgeText: translate({id: 'certMap.badge.requiredForCks', message: 'Required for CKS'}),
    course: 'Kubernetes for Platform Engineers',
    days: translate({id: 'certMap.days3', message: '3 days'}),
    courseTo: '/docs/kubernetes-for-platform-engineers',
  },
  ckad: {
    code: 'CKAD',
    name: 'Certified Kubernetes Application Developer',
    url: `${CNCF}/ckad/`,
    icon: icons.code,
    badge: 'recommended',
    badgeText: translate({id: 'certMap.badge.recommended', message: 'Recommended'}),
    course: 'Kubernetes for Developers',
    days: translate({id: 'certMap.days3', message: '3 days'}),
    courseTo: '/docs/kubernetes-for-developers',
  },
  cks: {
    code: 'CKS',
    name: 'Certified Kubernetes Security Specialist',
    url: `${CNCF}/cks/`,
    icon: icons.shield,
    badge: 'recommended',
    badgeText: translate({id: 'certMap.badge.recommended', message: 'Recommended'}),
    course: 'Kubernetes Security',
    days: translate({id: 'certMap.days3', message: '3 days'}),
    courseTo: '/docs/kubernetes-security',
  },
};

function CertCard({cert, featured, cardRef}: {cert: Cert; featured?: boolean; cardRef?: Ref<HTMLDivElement>}): ReactNode {
  return (
    <div ref={cardRef} className={clsx(styles.certCard, featured && styles.certCardFeatured)}>
      <div className={styles.certHead}>
        <span className={styles.certIcon}>{cert.icon}</span>
        <div>
          <a className={styles.certCode} href={cert.url} target="_blank" rel="noopener noreferrer">
            {cert.code}
          </a>
          <div className={styles.certName}>{cert.name}</div>
        </div>
      </div>
      <span className={clsx(styles.badge, styles[cert.badge])}>{cert.badgeText}</span>
      <Link className={styles.certCourse} to={cert.courseTo}>
        <Translate id="certMap.course" values={{course: cert.course, days: cert.days}}>
          {'Course: {course} ({days})'}
        </Translate>{' '}
        →
      </Link>
    </div>
  );
}

/** Elbow path from the right edge of `from` to the left edge of `to`, in `box` coordinates. */
function elbow(box: DOMRect, from: DOMRect, to: DOMRect): string {
  const x1 = from.right - box.left;
  const y1 = from.top + from.height / 2 - box.top;
  const x2 = to.left - box.left;
  const y2 = to.top + to.height / 2 - box.top;
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${y1} H ${mx} V ${y2} H ${x2}`;
}

/** Dashed links between the cards, drawn from the cards' real positions and redrawn on resize. */
function useMapLinks() {
  const map = useRef<HTMLDivElement>(null);
  const kcna = useRef<HTMLDivElement>(null);
  const cka = useRef<HTMLDivElement>(null);
  const ckad = useRef<HTMLDivElement>(null);
  const cks = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    const draw = () => {
      const els = [map, kcna, cka, ckad, cks].map((r) => r.current);
      if (els.some((e) => !e)) return;
      const [box, a, b, c, d] = els.map((e) => e!.getBoundingClientRect());
      // one column on small screens: the vertical CSS connectors take over
      if (b.left - a.right < 8) {
        setPaths([]);
        return;
      }
      setPaths([elbow(box, a, b), elbow(box, a, c), elbow(box, b, d)]);
    };
    draw();
    const ro = new ResizeObserver(draw);
    if (map.current) ro.observe(map.current);
    window.addEventListener('resize', draw);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', draw);
    };
  }, []);

  return {map, kcna, cka, ckad, cks, paths};
}

/** Required / Recommended legend for the badges of the map. */
export function CertificationLegend(): ReactNode {
  return (
    <div className={styles.legend}>
      <span><i className={clsx(styles.dot, styles.required)} /> <Translate id="certMap.legend.required">Required</Translate></span>
      <span><i className={clsx(styles.dot, styles.recommended)} /> <Translate id="certMap.legend.recommended">Recommended</Translate></span>
    </div>
  );
}

/**
 * KCNA -> CKA / CKAD -> CKS map with animated links. Lays out in three columns when its container is
 * wide enough (certifications page, docs), in one column otherwise.
 */
export default function CertificationMap({legend = false}: {legend?: boolean}): ReactNode {
  const links = useMapLinks();
  return (
    <div className={styles.wrapper}>
      {legend && (
        <div className={styles.legendRow}>
          <CertificationLegend />
        </div>
      )}
      <div ref={links.map} className={clsx(styles.map, links.paths.length > 0 && styles.mapLinked)}>
        <svg className={styles.links} aria-hidden="true">
          {links.paths.map((d) => (
            <path key={d} d={d} className={styles.link} />
          ))}
        </svg>
        <div className={styles.level}>
          <div className={styles.levelLabel}><Translate id="certMap.level.associate">Associate</Translate></div>
          <CertCard cert={certs.kcna} cardRef={links.kcna} />
        </div>
        <div className={clsx(styles.connector, styles.connectorFork)} aria-hidden="true" />
        <div className={styles.level}>
          <div className={styles.levelLabel}><Translate id="certMap.level.professional">Professional</Translate></div>
          <div className={styles.pathTag}><Translate id="certMap.path.platform">Platform Engineer path</Translate></div>
          <CertCard cert={certs.cka} cardRef={links.cka} />
          <CertCard cert={certs.ckad} cardRef={links.ckad} />
          <div className={styles.pathTag}><Translate id="certMap.path.developer">Developer path</Translate></div>
        </div>
        <div className={clsx(styles.connector, styles.connectorTop)} aria-hidden="true" />
        <div className={styles.level}>
          <div className={styles.levelLabel}><Translate id="certMap.level.specialist">Specialist</Translate></div>
          <CertCard cert={certs.cks} featured cardRef={links.cks} />
          <p className={styles.note}><Translate id="certMap.note.cks">CKS can be taken only after passing CKA.</Translate></p>
        </div>
      </div>
    </div>
  );
}
