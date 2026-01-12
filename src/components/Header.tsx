'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// Lightweight inline icons to avoid client-side chunk loading issues
function BarsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
    </svg>
  );
}

function MicIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2z" />
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
import { serviceUrlMap } from '../data/services';
import styles from './Header.module.css';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [closeDropdownTimer, setCloseDropdownTimer] = useState<NodeJS.Timeout | null>(null);

  const recognitionRef = useRef<any>(null);
  const [isListening, setIsListening] = useState(false);
  const [voiceError, setVoiceError] = useState<string | null>(null);

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

  const normalize = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  const keywordRoutes = useMemo(() => {
    return [
      { keys: ['home', 'homepage'], url: '/' },
      { keys: ['about', 'about us', 'company'], url: '/about' },
      { keys: ['services', 'service'], url: '/services' },
      { keys: ['online services', 'digital services', 'digital marketing services'], url: '/services/online' },
      { keys: ['offline services', 'btl', 'outdoor', 'offline marketing'], url: '/services/offline' },
      { keys: ['clients', 'our clients'], url: '/clients' },
      { keys: ['careers', 'career', 'jobs', 'job'], url: '/careers' },
      { keys: ['blog', 'blogs', 'articles'], url: '/blog' },
      { keys: ['contact', 'contact us', 'call', 'email'], url: '/contact' },
    ];
  }, []);

  const serviceMatchers = useMemo(() => {
    return Object.entries(serviceUrlMap)
      .map(([serviceName, url]) => ({
        name: serviceName,
        norm: normalize(serviceName),
        url,
      }))
      .filter(e => e.norm)
      // Prefer more specific (longer) service names first
      .sort((a, b) => b.norm.length - a.norm.length);
  }, []);

  const findBestRoute = (rawTranscript: string) => {
    const t = normalize(rawTranscript);

    // If user speaks a URL-like path, navigate directly
    if (rawTranscript.includes('/') && rawTranscript.trim().startsWith('/')) {
      return rawTranscript.trim();
    }

    // 1) Prefer service URL matches first (more specific than generic page keywords)
    for (const svc of serviceMatchers) {
      if (t.includes(svc.norm)) return svc.url;
    }

    // 2) Then fall back to general pages
    for (const entry of keywordRoutes) {
      if (entry.keys.some(k => t.includes(normalize(k)))) return entry.url;
    }

    if (t.includes('seo')) return serviceUrlMap['Search Engine Optimization'] || '/services/seo';
    if (t.includes('sem') || t.includes('ppc')) return serviceUrlMap['Search Engine Marketing'] || '/services/sem';

    return null;
  };

  const stopListening = () => {
    const rec = recognitionRef.current;
    if (rec) {
      try {
        rec.stop();
      } catch {
        // ignore
      }
    }
    setIsListening(false);
  };

  const startListening = () => {
    setVoiceError(null);

    if (typeof window === 'undefined') return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setVoiceError('Voice search is not supported in this browser.');
      return;
    }

    const rec = new SpeechRecognition();
    recognitionRef.current = rec;
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 1;

    rec.onresult = (event: any) => {
      const transcript = event?.results?.[0]?.[0]?.transcript || '';
      const route = findBestRoute(transcript);
      stopListening();

      if (route) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
        setIsMobileServicesOpen(false);
        router.push(route);
      } else {
        setVoiceError('Could not match your request. Try saying “Services”, “Blog”, or a service name.');
      }
    };

    rec.onerror = () => {
      stopListening();
      setVoiceError('Voice search failed. Please try again.');
    };

    rec.onend = () => {
      setIsListening(false);
    };

    try {
      setIsListening(true);
      rec.start();
    } catch {
      setIsListening(false);
      setVoiceError('Unable to start voice search.');
    }
  };

  useEffect(() => {
    return () => {
      const rec = recognitionRef.current;
      if (rec) {
        try {
          rec.abort();
        } catch {
          // ignore
        }
      }
    };
  }, []);

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

          <div className={styles.headerActions}>
            <button
              type="button"
              className={`${styles.micButton} ${isListening ? styles.micListening : ''}`}
              onClick={() => (isListening ? stopListening() : startListening())}
              aria-label={isListening ? 'Stop voice search' : 'Start voice search'}
            >
              <MicIcon />
            </button>

            {/* Add hamburger menu button */}
            <button
              className={styles.menuToggle}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <TimesIcon /> : <BarsIcon />}
            </button>
          </div>
        </div>

        {voiceError ? (
          <div className={styles.voiceToast} role="status" aria-live="polite">
            {voiceError}
          </div>
        ) : null}
    </header>
  );
}
