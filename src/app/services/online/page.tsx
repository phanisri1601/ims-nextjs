'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './OnlineServices.module.css';

const serviceUrlMap: { [key: string]: string } = {
  'Advertising Agency In Bangalore': '/services/advertising-agency-bangalore',
  'Digital Marketing Service': '/services/digital-marketing-service',
  'Search Engine Optimization': '/services/seo',
  'Search Engine Marketing': '/services/sem',
  'Online Reputation Management': '/services/online-reputation-management',
  'Website Designing and Development': '/services/website-design-development',
  'Social Media Optimization': '/services/social-media-optimization',
  'Social Media Marketing': '/services/social-media-marketing',
  'Software Design & Development': '/services/software-design-development',
  'Geolocation Analytical SMS': '/services/geolocation-sms',
  'AI Advertising Agency': '/services/ai-advertising-agency',
  'Creative Designing': '/services/creative-designing',
  'API Integration': '/services/api-integration',
  'Ecommerce Solutions': '/services/ecommerce-solutions',
  'Email Marketing': '/services/email-marketing',
  'Mobile Application Development': '/services/mobile-app-development',
  'Real Estate Online Marketing Service': '/services/real-estate-marketing',
  'Display Advertisement': '/services/display-advertisement',
  'Blog Articles': '/services/blog-articles',
  'Classified Portal Management': '/services/classified-portal',
  'Press Releases Services': '/services/press-releases',
};

const onlineServices = [
  'Advertising Agency In Bangalore',
  'Digital Marketing Service',
  'Search Engine Optimization',
  'Search Engine Marketing',
  'Online Reputation Management',
  'Website Designing and Development',
  'Social Media Optimization',
  'Social Media Marketing',
  'Software Design & Development',
  'Geolocation Analytical SMS',
  'AI Advertising Agency',
  'Creative Designing',
  'API Integration',
  'Ecommerce Solutions',
  'Email Marketing',
  'Mobile Application Development',
  'Real Estate Online Marketing Service',
  'Display Advertisement',
  'Blog Articles',
  'Classified Portal Management',
  'Press Releases Services',
];

const getServiceUrl = (service: string) => {
  return serviceUrlMap[service] || '/services';
};

export default function OnlineServicesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/" className={styles.backButton}>
          <FaArrowLeft /> Back to Home
        </Link>
        <h1 className={styles.title}>Online Services</h1>
        <p className={styles.subtitle}>
          Explore our comprehensive online advertising and digital marketing solutions
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {onlineServices.map((service, index) => (
          <Link
            key={index}
            href={getServiceUrl(service)}
            className={styles.serviceCard}
            title={service}
          >
            <div className={styles.serviceCardIcon}>📱</div>
            <h3 className={styles.serviceCardTitle}>{service}</h3>
            <p className={styles.serviceCardDescription}>Learn more</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
