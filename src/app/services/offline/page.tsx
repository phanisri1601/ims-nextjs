'use client';

import Link from 'next/link';
import styles from './OfflineServices.module.css';
import { useState, useRef } from 'react';

const serviceUrlMap: { [key: string]: string } = {
  'Bus Branding': '/services/bus-branding',
  'RWA Activation': '/services/rwa-activation',
  'BTL Advertising': '/services/btl-advertising',
  'Advertising Activities In Malls & Multiplex': '/services/mall-advertising',
  'Advertisements In Tech Parks': '/services/tech-park-ads',
  'Advertising in Airports': '/services/airport-advertising',
  'Paper Insertion': '/services/paper-insertion',
  'Advertisements In Cafes Gyms & Super Markets': '/services/cafe-gym-ads',
  'Advertisement in ATMs': '/services/atm-ads',
  'Auto Rickshaw Advertising': '/services/auto-rickshaw-ads',
  'Advertisement in Magazines': '/services/magazine-ads',
  'Advertising in Public & Private Parking Lots': '/services/parking-ads',
  'Branding Re-Branding': '/services/branding-rebranding',
  'Corporate Gifts': '/services/corporate-gifts',
  'Corporate Training Services': '/services/corporate-training',
  'Event Management': '/services/event-management',
  'FM Campaigns': '/services/fm-campaigns',
  'Fabrications': '/services/fabrications',
  'Hoarding Services': '/services/hoarding-services',
  'Marketing Collaterals': '/services/marketing-collaterals',
  'Marketing Services for Start-ups': '/services/startup-marketing',
  'Photographic Services': '/services/photographic-services',
  'PR Services': '/services/pr-services',
  'Printing Services': '/services/printing-services',
  'Retail Advertising': '/services/retail-advertising',
  'Real Estate Videography': '/services/real-estate-videography',
  'Signage': '/services/signage',
  'Washroom Advertising': '/services/washroom-advertising',
};

const offlineServices = [
  'Bus Branding',
  'RWA Activation',
  'BTL Advertising',
  'Advertising Activities In Malls & Multiplex',
  'Advertisements In Tech Parks',
  'Advertising in Airports',
  'Paper Insertion',
  'Advertisements In Cafes Gyms & Super Markets',
  'Advertisement in ATMs',
  'Auto Rickshaw Advertising',
  'Advertisement in Magazines',
  'Advertising in Public & Private Parking Lots',
  'Branding Re-Branding',
  'Corporate Gifts',
  'Corporate Training Services',
  'Event Management',
  'FM Campaigns',
  'Fabrications',
  'Hoarding Services',
  'Marketing Collaterals',
  'Marketing Services for Start-ups',
  'Photographic Services',
  'PR Services',
  'Printing Services',
  'Retail Advertising',
  'Real Estate Videography',
  'Signage',
  'Washroom Advertising',
];

const getServiceUrl = (service: string) => {
  return serviceUrlMap[service] || '/services';
};

export default function OfflineServicesPage() {
  // featured offline services (first 5)
  const featured = [
    {
      title: 'Hoarding Services',
      slug: 'hoarding-services',
      img1: '/services/pro-feature-1-left.svg',
      img2: '/services/pro-feature-1-right.svg',
    },
    {
      title: 'Event Management',
      slug: 'event-management',
      img1: '/services/pro-feature-2-left.svg',
      img2: '/services/pro-feature-2-right.svg',
    },
    {
      title: 'BTL Advertising',
      slug: 'btl-advertising',
      img1: '/services/pro-feature-3-left.svg',
      img2: '/services/pro-feature-3-right.svg',
    },
    {
      title: 'Bus Branding',
      slug: 'bus-branding',
      img1: '/services/pro-feature-4-left.svg',
      img2: '/services/pro-feature-4-right.svg',
    },
    {
      title: 'Mall Advertising',
      slug: 'mall-advertising',
      img1: '/services/pro-feature-5-left.svg',
      img2: '/services/pro-feature-5-right.svg',
    },
  ];

  const thumbs = [
    '/services/pro-thumb-1.svg',
    '/services/pro-thumb-2.svg',
    '/services/pro-thumb-3.svg',
    '/services/pro-thumb-4.svg',
    '/services/pro-thumb-5.svg',
    '/services/pro-thumb-6.svg',
  ];

  // interactive hover state for featured images
  const [active, setActive] = useState<number | null>(null);
  const featuredRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [imageTopLeft, setImageTopLeft] = useState<number | null>(null);
  const [imageTopRight, setImageTopRight] = useState<number | null>(null);
  const [imageLeft, setImageLeft] = useState<number | null>(null);
  const [imageRight, setImageRight] = useState<number | null>(null);

  const handleEnter = (i: number) => {
    setActive(i);
    if (featuredRef.current && itemRefs.current[i]) {
      const containerRect = featuredRef.current.getBoundingClientRect();
      const itemRect = itemRefs.current[i]!.getBoundingClientRect();
      const centerY = itemRect.top - containerRect.top + itemRect.height / 2;

      const imgW = 190;
      const imgH = 190;
      const inset = 24;

      const leftPos = inset;
      const rightPos = containerRect.width - imgW - inset;

      const offsetY = 36;
      let leftTop = centerY - offsetY;
      let rightTop = centerY + offsetY;

      const minTop = imgH / 2 + 8;
      const maxTop = containerRect.height - imgH / 2 - 8;
      leftTop = Math.min(Math.max(leftTop, minTop), maxTop);
      rightTop = Math.min(Math.max(rightTop, minTop), maxTop);

      setImageTopLeft(leftTop);
      setImageTopRight(rightTop);
      setImageLeft(leftPos);
      setImageRight(rightPos);
    }
  };

  const handleLeave = () => {
    setActive(null);
    setImageTopLeft(null);
    setImageTopRight(null);
    setImageLeft(null);
    setImageRight(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Offline Services</h1>
        <p className={styles.subtitle}>
          Explore our comprehensive offline advertising and experiential marketing solutions
        </p>
      </div>

      {/* Featured vertical list (left/right images) */}
      <section className={styles.featured} ref={featuredRef}>
        <div className={styles.leftImage} style={{ top: imageTopLeft !== null ? `${imageTopLeft}px` : undefined, left: imageLeft !== null ? `${imageLeft}px` : undefined }}>
          {active !== null && (
            <img src={featured[active].img1} alt={featured[active].title} className={`${styles.image} ${active !== null ? styles.show : ''}`} />
          )}
        </div>

        <ul className={styles.featuredList}>
          {featured.map((s, i) => (
            <li
              key={s.slug}
              ref={(el) => { itemRefs.current[i] = el; }}
              className={`${styles.featuredItem} ${active === i ? styles.featuredActive : ''}`}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={handleLeave}
            >
              <Link href={`/services/${s.slug}`} className={styles.featuredLink}>
                {s.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.rightImage} style={{ top: imageTopRight !== null ? `${imageTopRight}px` : undefined, left: imageRight !== null ? `${imageRight}px` : undefined }}>
          {active !== null && (
            <img src={featured[active].img2} alt={featured[active].title} className={`${styles.image} ${active !== null ? styles.show : ''}`} />
          )}
        </div>
      </section>

      <div className={styles.servicesGrid}>
        {offlineServices.map((service, index) => (
          <Link
            key={index}
            href={getServiceUrl(service)}
            className={styles.serviceCard}
            title={service}
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className={styles.serviceThumbWrap}>
              <img src={thumbs[index % thumbs.length]} alt={`${service} thumbnail`} className={styles.serviceThumb} />
            </div>
            <h3 className={styles.serviceCardTitle}>{service}</h3>
            <p className={styles.serviceCardDescription}>Explore this service</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
