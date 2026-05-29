'use client';

import Link from 'next/link';
import styles from './OfflineServices.module.css';
import { useEffect, useRef, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import ScrollReveal from '@/components/ScrollReveal';
import StackingCardsSection from '@/components/StackingCardsSection';
import ServicesVolumeGrid from '@/components/ServicesVolumeGrid';

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
};

const offlineServices = [
  { title: 'Bus Branding', slug: 'bus-branding', image: '/services/service_bus-branding.png' },
  { title: 'RWA Activation', slug: 'rwa-activation', image: '/services/service_rwa-activation.png' },
  { title: 'BTL Advertising', slug: 'btl-advertising', image: '/services/service_btl-advertising.png' },
  { title: 'Advertising Activities In Malls & Multiplex', slug: 'mall-advertising', image: '/services/service_mall-advertising.png' },
  { title: 'Advertisements In Tech Parks', slug: 'tech-park-ads', image: '/services/service_tech-park-ads.png' },
  { title: 'Advertising in Airports', slug: 'airport-advertising', image: '/services/service_airport-advertising.png' },
  { title: 'Paper Insertion', slug: 'paper-insertion', image: '/services/service_paper-insertion.png' },
  { title: 'Advertisements In Cafes Gyms & Super Markets', slug: 'cafe-gym-ads', image: '/services/service_cafe-gym-ads.png' },
  { title: 'Advertisement in ATMs', slug: 'atm-ads', image: '/services/service_atm-ads.png' },
  { title: 'Auto Rickshaw Advertising', slug: 'auto-rickshaw-ads', image: '/services/service_auto-rickshaw-ads.png' },
  { title: 'Advertisement in Magazines', slug: 'magazine-ads', image: '/services/service_magazine-ads.png' },
  { title: 'Advertising in Public & Private Parking Lots', slug: 'parking-ads', image: '/services/service_parking-ads.png' },
  { title: 'Branding Re-Branding', slug: 'branding-rebranding', image: '/services/service_branding-rebranding.png' },
  { title: 'Corporate Gifts', slug: 'corporate-gifts', image: '/services/service_corporate-gifts.png' },
  { title: 'Corporate Training Services', slug: 'corporate-training', image: '/services/service_corporate-training.png' },
  { title: 'Event Management', slug: 'event-management', image: '/services/service_event-management.png' },
  { title: 'FM Campaigns', slug: 'fm-campaigns', image: '/services/service_fm-campaigns.png' },
  { title: 'Fabrications', slug: 'fabrications', image: '/services/service_fabrications.png' },
  { title: 'Hoarding Services', slug: 'hoarding-services', image: '/services/service_hoarding-services.png' },
  { title: 'Marketing Collaterals', slug: 'marketing-collaterals', image: '/services/service_marketing-collaterals.png' },
  { title: 'Marketing Services for Start-ups', slug: 'startup-marketing', image: '/services/service_startup-marketing.png' },
  { title: 'Photographic Services', slug: 'photographic-services', image: '/services/service_photographic-services.png' },
  { title: 'PR Services', slug: 'pr-services', image: '/services/service_pr-services.png' },
  { title: 'Printing Services', slug: 'printing-services', image: '/services/service_printing-services.png' },
  { title: 'Retail Advertising', slug: 'retail-advertising', image: '/services/service_retail-advertising.png' },
  { title: 'Real Estate Videography', slug: 'real-estate-videography', image: '/services/service_real-estate-videography.png' },
  { title: 'Signage', slug: 'signage', image: '/services/service_signage.png' },
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

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is outdoor advertising and how does it benefit my business?',
      answer: 'Outdoor advertising refers to promotional activities conducted outside traditional indoor spaces. It includes hoarding, bus branding, mall activations, and more. It benefits your business by increasing brand visibility, reaching a wider audience, creating memorable brand impressions, and driving foot traffic to your location.'
    },
    {
      question: 'Which offline advertising service would work best for my brand?',
      answer: 'The best offline service depends on your target audience and business goals. Bus branding reaches commuters, hoarding targets specific locations, mall activations engage shoppers, and RWA activation connects with residential communities. Our team can analyze your goals and recommend the optimal service for maximum ROI.'
    },
    {
      question: 'How do you measure the success of offline advertising campaigns?',
      answer: 'We measure offline campaign success through foot traffic analysis, brand recall surveys, sales uplift tracking, customer feedback, and engagement metrics. We provide detailed reports on campaign performance, audience reach, and conversion metrics to ensure transparency and demonstrate the value of your investment.'
    },
    {
      question: 'What is the timeline for launching an offline advertising campaign?',
      answer: 'Timeline varies based on the service type. Simple campaigns like paper insertions or magazine ads can launch within 2-4 weeks. Complex projects like hoarding or bus branding typically take 4-8 weeks for design, approvals, and execution. We provide a customized timeline during the planning phase.'
    },
    {
      question: 'Can I combine multiple offline services for better results?',
      answer: 'Absolutely! Combining multiple offline services creates a comprehensive advertising strategy. For example, pairing hoarding with mall activations and bus branding creates multiple touchpoints with your target audience, increasing brand recall and overall campaign effectiveness.'
    },
    {
      question: 'What areas does IM Solutions cover for outdoor advertising?',
      answer: 'IM Solutions operates across Bangalore and nearby areas, covering major commercial hubs, residential communities, transit points, and shopping destinations. We have established relationships with key outdoor advertising locations and can secure premium placements for maximum visibility and impact.'
    },
    {
      question: 'How much does offline advertising cost?',
      answer: 'Offline advertising costs vary based on the service type, duration, location premium, and campaign scale. Hoarding rates differ from bus branding or mall activations. We offer flexible packages to fit different budgets and can provide a detailed quote after understanding your specific requirements.'
    },
    {
      question: 'Do you provide design services for offline advertising campaigns?',
      answer: 'Yes! IM Solutions provides complete design services including conceptualization, creative design, artwork development, and production-ready files. Our team ensures your offline advertisements are visually compelling, on-brand, and optimized for maximum impact and audience engagement.'
    },
    {
      question: 'What is the ROI I can expect from offline advertising?',
      answer: 'ROI varies based on campaign type, placement quality, and audience targeting. Well-executed campaigns typically show 200-400% ROI through increased brand awareness, foot traffic, and sales conversions. We work with you to set realistic KPIs and continuously optimize for better returns on your advertising investment.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Offline Services</h1>
        </div>
      </div>

      <StackingCardsSection />

      <section className={styles.servicesListing}>
        <div className={styles.sectionTitleWrapper}>
          <h2 className={styles.sectionTitle}>Offline Services</h2>
        </div>
          <ServicesVolumeGrid
          services={offlineServices.map((service) => ({
            ...service,
            href: getServiceUrl(service.title),
          }))}
        />
      </section>

      <section className={styles.faqSection}>
        <div className={styles.faqContent}>
          <ScrollReveal delay={0.2}>
            <h2 className={styles.faqTitle}>OFFLINE SERVICES FAQ&apos;S</h2>
          </ScrollReveal>
          <div className={styles.faqContainer}>
            {faqs.slice(0, 7).map((faq, index) => (
              <ScrollReveal key={index} delay={0.3 + index * 0.15}>
                <div className={`${styles.faqItem} ${openFaqIndex === index ? styles.open : ''}`}>
                  <button className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                    <span>{faq.question}</span>
                    <span className={styles.faqIcon}>
                      {openFaqIndex === index ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
