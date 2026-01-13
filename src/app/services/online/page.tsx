'use client';

import Link from 'next/link';
import styles from './OnlineServices.module.css';
import { useEffect, useRef, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';



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
    image: '/services/thumbnails/ecommerce-solutions.jpg'
  },
  {
    title: 'Email Marketing',
    slug: 'email-marketing',
    image: '/services/thumbnails/email-marketing.jpg'
  },
  {
    title: 'Mobile Application Development',
    slug: 'mobile-application-development',
    image: '/services/thumbnails/mobile-app-development.jpg'
  },
  {
    title: 'Real Estate Online Marketing Service',
    slug: 'real-estate-online-marketing',
    image: '/services/thumbnails/real-estate-marketing.jpg'
  },
  {
    title: 'Display Advertisement',
    slug: 'display-advertisement',
    image: '/services/thumbnails/display-advertisement.jpg'
  },
  {
    title: 'Blog Articles',
    slug: 'blog-articles',
    image: '/services/thumbnails/blog-articles.jpg'
  },
  {
    title: 'Classified Portal Management',
    slug: 'classified-portal-management',
    image: '/services/thumbnails/classified-portal.jpg'
  },
  {
    title: 'Press Releases Services',
    slug: 'press-releases-services',
    image: '/services/thumbnails/press-releases.jpg'
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
  const [isMobile, setIsMobile] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 640px)');
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncMobile = () => setIsMobile(mobileQuery.matches);
    const syncReduceMotion = () => setReduceMotion(reduceMotionQuery.matches);

    syncMobile();
    syncReduceMotion();

    mobileQuery.addEventListener('change', syncMobile);
    reduceMotionQuery.addEventListener('change', syncReduceMotion);

    return () => {
      mobileQuery.removeEventListener('change', syncMobile);
      reduceMotionQuery.removeEventListener('change', syncReduceMotion);
    };
  }, []);

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

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is digital marketing and how can it help my business?',
      answer: 'Digital marketing encompasses all online marketing activities including SEO, social media marketing, content marketing, and paid advertising. It helps your business reach targeted audiences, increase brand awareness, drive website traffic, and generate qualified leads with measurable ROI.'
    },
    {
      question: 'How long does it take to see results from digital marketing?',
      answer: 'Results vary by strategy. Paid campaigns (PPC, SEM) can show immediate results within days. Organic strategies (SEO, content marketing) typically take 3-6 months to show significant results. We focus on long-term sustainable growth while delivering early wins through strategic planning.'
    },
    {
      question: 'Which digital marketing channels should I focus on?',
      answer: 'The best channels depend on your target audience and business goals. Social media works great for brand awareness, SEO for organic traffic, SEM for immediate conversions, and email marketing for customer retention. We analyze your audience and recommend an optimal mix of channels for maximum impact.'
    },
    {
      question: 'What is the difference between SEO and SEM?',
      answer: 'SEO (Search Engine Optimization) focuses on organic search results through content optimization and technical improvements. SEM (Search Engine Marketing) includes paid search advertising. Both are valuable—SEO provides long-term results while SEM offers immediate visibility. A combination strategy often works best.'
    },
    {
      question: 'How do you measure the success of digital marketing campaigns?',
      answer: 'We track KPIs including website traffic, conversion rates, cost-per-acquisition, ROI, engagement metrics, leads generated, and sales revenue. Custom dashboards provide real-time performance data so you can see exactly how your investment is performing and make informed decisions.'
    },
    {
      question: 'Why is social media marketing important?',
      answer: 'Social media reaches billions of users where they spend significant time. It builds brand community, improves customer engagement, drives website traffic, and provides valuable customer insights. Consistent social presence strengthens brand authority and creates loyal customer relationships.'
    },
    {
      question: 'What services do you offer for website design and development?',
      answer: 'We provide website design, responsive development, e-commerce solutions, API integration, performance optimization, and ongoing maintenance. Our websites are SEO-friendly, mobile-optimized, and designed to convert visitors into customers while providing excellent user experiences.'
    },
    {
      question: 'How important is content marketing?',
      answer: 'Content marketing is crucial for establishing authority, improving SEO rankings, and providing value to your audience. Quality content attracts organic traffic, builds trust, educates prospects, and supports other marketing channels. We create strategic content that aligns with your business goals and audience needs.'
    },
    {
      question: 'Can I integrate digital marketing with offline advertising?',
      answer: 'Absolutely! Integrated marketing campaigns combining online and offline tactics create powerful synergies. QR codes, unique coupon codes, and retargeting campaigns bridge online-offline gaps. We create cohesive campaigns where each channel amplifies the others for maximum impact and ROI.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
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
            className={`${styles.serviceCard} ${reduceMotion ? styles.noMotion : ''}`}
            title={service.title}
            style={{ animationDelay: reduceMotion ? '0ms' : `${index * (isMobile ? 30 : 60)}ms` }}
          >
            <div className={styles.serviceThumbWrap}>
              <img src={service.image} alt={`${service.title} thumbnail`} className={styles.serviceThumb} />
            </div>
            <h3 className={styles.serviceCardTitle}>{service.title}</h3>
            <p className={styles.serviceCardDescription}>Explore this service</p>
          </Link>
        ))}
      </div>

      <section className={styles.faqSection}>
        <div className={styles.faqContent}>
          <h2 className={styles.faqTitle}>ONLINE SERVICES FAQ&apos;S</h2>
          <div className={styles.faqContainer}>
            {faqs.slice(0, 7).map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${openFaqIndex === index ? styles.open : ''}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className={styles.faqIcon}>
                    {openFaqIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
