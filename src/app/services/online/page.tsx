'use client';

import Link from 'next/link';
import styles from './OnlineServices.module.css';
import { useState, useRef } from 'react';



const onlineServices = [
  {
    title: 'Digital Marketing Service',
    slug: 'digital-marketing-service',
    image: '/services/thumbnails/digital-marketing.jpg'
  },
  {
    title: 'Search Engine Optimization',
    slug: 'seo',
    image: '/services/thumbnails/seo.jpg'
  },
  {
    title: 'Search Engine Marketing',
    slug: 'sem',
    image: '/services/thumbnails/sem.jpg'
  },
  {
    title: 'Online Reputation Management',
    slug: 'online-reputation-management',
    image: '/services/thumbnails/reputation-management.jpg'
  },
  {
    title: 'Website Designing and Development',
    slug: 'website-design-development',
    image: '/services/thumbnails/web-design.jpg'
  },
  {
    title: 'Social Media Optimization',
    slug: 'social-media-optimization',
    image: '/services/thumbnails/social-media-optimization.jpg'
  },
  {
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    image: '/services/thumbnails/social-media-marketing.jpg'
  },
  {
    title: 'Software Design & Development',
    slug: 'software-design-development',
    image: '/services/thumbnails/software-development.jpg'
  },
  {
    title: 'Geolocation Analytical SMS',
    slug: 'geolocation-sms',
    image: '/services/thumbnails/sms.jpg'
  },
  {
    title: 'AI Advertising Agency',
    slug: 'ai-advertising-agency',
    image: '/services/thumbnails/ai-advertising.jpg'
  },
  {
    title: 'Creative Designing',
    slug: 'creative-designing',
    image: '/services/thumbnails/creative-designing.jpg'
  },
  {
    title: 'API Integration',
    slug: 'api-integration',
    image: '/services/thumbnails/api-integration.jpg'
  },
  {
    title: 'Ecommerce Solutions',
    slug: 'ecommerce-solutions',
    image: '/services/thumbnails/ecommerce.jpg'
  },
  {
    title: 'Email Marketing',
    slug: 'email-marketing',
    image: '/services/thumbnails/email-marketing.jpg'
  },
  {
    title: 'Mobile Application Development',
    slug: 'mobile-app-development',
    image: '/services/thumbnails/mobile-app.jpg'
  },
  {
    title: 'Real Estate Online Marketing Service',
    slug: 'real-estate-marketing',
    image: '/services/thumbnails/real-estate-marketing.jpg'
  },
  {
    title: 'Display Advertisement',
    slug: 'display-advertisement',
    image: '/services/thumbnails/display-ads.jpg'
  },
  {
    title: 'Blog Articles',
    slug: 'blog-articles',
    image: '/services/thumbnails/blog-articles.jpg'
  },
  {
    title: 'Classified Portal Management',
    slug: 'classified-portal',
    image: '/services/thumbnails/classified-portal.jpg'
  }
];



export default function OnlineServicesPage() {


  // featured: top 5 priority services
  const featured = [
    {
      title: 'Digital Marketing Service',
      slug: 'digital-marketing-service',
      img1: '/services/pro-feature-1-left.svg',
      img2: '/services/pro-feature-1-right.svg',
    },
    {
      title: 'Search Engine Optimization',
      slug: 'seo',
      img1: '/services/pro-feature-2-left.svg',
      img2: '/services/pro-feature-2-right.svg',
    },
    {
      title: 'Search Engine Marketing',
      slug: 'sem',
      img1: '/services/pro-feature-3-left.svg',
      img2: '/services/pro-feature-3-right.svg',
    },
    {
      title: 'Online Reputation Management',
      slug: 'online-reputation-management',
      img1: '/services/pro-feature-4-left.svg',
      img2: '/services/pro-feature-4-right.svg',
    },
    {
      title: 'Social Media Marketing',
      slug: 'social-media-marketing',
      img1: '/services/pro-feature-5-left.svg',
      img2: '/services/pro-feature-5-right.svg',
    },
  ];



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

      // compute left/right positions so images sit near the left/right edges
      const imgW = 190; // matches CSS image width
      const imgH = 190;
      const inset = 24; // how far from the container edge the image should sit

      // pin images near the edges
      let leftPos = inset;
      let rightPos = containerRect.width - imgW - inset;

      // vertical offset: left slightly above, right slightly below
      const offsetY = 36;
      let leftTop = centerY - offsetY;
      let rightTop = centerY + offsetY;

      // clamp positions to container bounds (so images don't overflow)
      leftPos = Math.max(8, leftPos);
      rightPos = Math.min(containerRect.width - imgW - 8, rightPos);

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
        <h1 className={styles.title}>Online Services</h1>
        <p className={styles.subtitle}>
          Explore our comprehensive online advertising and digital marketing solutions
        </p>
      </div>

      {/* Featured vertical list */}
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

      {/* Services Grid similar to offline */}
      <div className={styles.servicesGrid}>
        {onlineServices.map((service, index) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className={styles.serviceCard}
            title={service.title}
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className={styles.serviceThumbWrap}>
              <img src={service.image} alt={`${service.title} thumbnail`} className={styles.serviceThumb} />
            </div>
            <h3 className={styles.serviceCardTitle}>{service.title}</h3>
            <p className={styles.serviceCardDescription}>Explore this service</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
