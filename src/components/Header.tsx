'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// Lightweight inline icons to avoid client-side chunk loading issues
function BarsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
    </svg>
  );
}

function TimesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M18.3 5.71L12 12.01 5.71 5.71 4.29 7.12 10.59 13.41 4.29 19.71 5.71 21.12 12 14.82 18.29 21.12 19.71 19.71 13.41 13.41 19.71 7.12z" />
    </svg>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
    </svg>
  );
}
import styles from './Header.module.css';

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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [closeDropdownTimer, setCloseDropdownTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 968);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  const getServiceUrl = (service: string) => {
    return serviceUrlMap[service] || '/services';
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          <img
            src="/weblogo.png"
            alt="IM Solutions"
            style={{ height: '50px', width: 'auto' }} // Inline style for immediate sizing control
          />
        </Link>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <button
              className={styles.closeMenu}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <TimesIcon />
            </button>
            
            <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About Us</Link>

            <div
              className={styles.dropdown}
              onMouseEnter={() => {
                setIsServicesOpen(true);
                if (closeDropdownTimer) clearTimeout(closeDropdownTimer);
              }}
              onMouseLeave={() => {
                const timer = setTimeout(() => setIsServicesOpen(false), 150);
                setCloseDropdownTimer(timer);
              }}
            >
              <button 
                className={styles.navLink}
                onMouseEnter={() => setIsServicesOpen(true)}
                onClick={() => {
                  if (isMobile) {
                    setIsMobileServicesOpen(!isMobileServicesOpen);
                  }
                }}
              >
                Services <ChevronDownIcon className={`${styles.chevron} ${isServicesOpen || isMobileServicesOpen ? styles.chevronRotated : ''}`} />
              </button>
              {isMobile ? (
                isMobileServicesOpen && (
                  <div 
                    className={`${styles.dropdownMenu} ${styles.mobileDropdown}`}
                  >
                    <Link
                      href="/services/online"
                      className={styles.categoryButton}
                      onClick={() => {
                        setIsMobileServicesOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Online Services
                    </Link>
                    <Link
                      href="/services/offline"
                      className={styles.categoryButton}
                      onClick={() => {
                        setIsMobileServicesOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Offline Services
                    </Link>
                  </div>
                )
              ) : (
                isServicesOpen && (
                  <div 
                    className={`${styles.dropdownMenu}`}
                    onMouseEnter={() => {
                      setIsServicesOpen(true);
                      if (closeDropdownTimer) clearTimeout(closeDropdownTimer);
                    }}
                    onMouseLeave={() => {
                      const timer = setTimeout(() => setIsServicesOpen(false), 150);
                      setCloseDropdownTimer(timer);
                    }}
                  >
                    <Link
                      href="/services/online"
                      className={styles.categoryButton}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Online Services
                    </Link>
                    <Link
                      href="/services/offline"
                      className={styles.categoryButton}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Offline Services
                    </Link>
                  </div>
                )
              )}
            </div>

            <Link href="/clients" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Our Clients</Link>
            <Link href="/careers" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Careers</Link>
            <Link href="/blog" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link href="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          </nav>

          <button
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <TimesIcon /> : <BarsIcon />}
          </button>
        </div>
    </header>
  );
}
