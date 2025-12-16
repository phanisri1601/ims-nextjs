'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './OfflineServices.module.css';

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
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/" className={styles.backButton}>
          <FaArrowLeft /> Back to Home
        </Link>
        <h1 className={styles.title}>Offline Services</h1>
        <p className={styles.subtitle}>
          Explore our comprehensive offline advertising and experiential marketing solutions
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {offlineServices.map((service, index) => (
          <Link
            key={index}
            href={getServiceUrl(service)}
            className={styles.serviceCard}
            title={service}
          >
            <div className={styles.serviceCardIcon}>🎯</div>
            <h3 className={styles.serviceCardTitle}>{service}</h3>
            <p className={styles.serviceCardDescription}>Learn more</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
