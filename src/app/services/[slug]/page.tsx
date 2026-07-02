'use client';

import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import styles from './ServiceDetail.module.css';
import { useEffect, useRef, useState } from 'react';
import { FaPlus, FaMinus, FaLightbulb, FaPaintBrush, FaLaptopCode, FaBullhorn, FaChartLine, FaMedal } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import ScrollReveal from '@/components/ScrollReveal';
import CreativeShowcaseSection from '@/components/CreativeShowcaseSection';
import { blogPosts } from '../../../data/blogPosts';
import { serviceData } from '@/data/servicesData';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  let service: any = null;
  try {
    // Try to load dynamically generated JSON file first
    service = require(`../../../data/services/${slug}.json`);
  } catch (e) {
    // Fallback to legacy static data
    service = serviceData[slug];
  }

  if (!service) {
    notFound();
  }

  const heroRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLImageElement | null>(null);
  const [heroRevealed, setHeroRevealed] = useState(false);

  // parallax for hero background
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (!bgRef.current || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const winH = window.innerHeight || document.documentElement.clientHeight;
      // how far hero is from center (-1 to 1)
      const progress = (rect.top + rect.height / 2 - winH / 2) / (winH / 2);
      const translate = Math.max(-30, Math.min(30, -progress * 20));
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (bgRef.current) bgRef.current.style.transform = `translateY(${translate}px) scale(1.02)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Brand collage hover (for Build Your Brand section)
  const [brandHover, setBrandHover] = useState<number | null>(null);

  // Predefined transform presets for each list item
  const mainTransforms = [
    'translate(-8px,-6px) rotate(-2deg) scale(1.02)',
    'translate(6px,-8px) rotate(2deg) scale(1.03)',
    'translate(-6px,8px) rotate(-1deg) scale(1.01)',
    'translate(8px,6px) rotate(3deg) scale(1.04)'
  ];
  const topTransforms = [
    'translate(12px,-14px) rotate(-8deg) scale(1.06)',
    'translate(-8px,-8px) rotate(6deg) scale(1.04)',
    'translate(10px,6px) rotate(-4deg) scale(1.03)',
    'translate(-12px,8px) rotate(8deg) scale(1.06)'
  ];
  const bottomTransforms = [
    'translate(-10px,12px) rotate(6deg) scale(1.05)',
    'translate(8px,10px) rotate(-6deg) scale(1.04)',
    'translate(-6px,-10px) rotate(4deg) scale(1.03)',
    'translate(12px,-6px) rotate(-8deg) scale(1.06)'
  ];

  const mainStyle = brandHover !== null ? { transform: mainTransforms[brandHover % mainTransforms.length] } : undefined;
  const topStyle = brandHover !== null ? { transform: topTransforms[brandHover % topTransforms.length] } : undefined;
  const bottomStyle = brandHover !== null ? { transform: bottomTransforms[brandHover % bottomTransforms.length] } : undefined;

  // Core Services Slider
  const coreServicesRef = useRef<HTMLDivElement>(null);
  const [coreServicesActiveIndex, setCoreServicesActiveIndex] = useState(0);

  useEffect(() => {
    const grid = coreServicesRef.current;
    if (!grid) return;

    const handleScroll = () => {
      const cardWidth = 380 + 32; // card width (380) + gap (2rem = 32px)
      const scrollLeft = grid.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setCoreServicesActiveIndex(Math.min(index, totalServices - 1));
    };

    grid.addEventListener("scroll", handleScroll);
    return () => grid.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollCoreServicesCard = (index: number) => {
    if (coreServicesRef.current) {
      const cardWidth = 380 + 32;
      coreServicesRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
      setCoreServicesActiveIndex(index);
    }
  };

  const scrollCoreServicesLeft = () => {
    scrollCoreServicesCard(Math.max(0, coreServicesActiveIndex - 1));
  };

  const scrollCoreServicesRight = () => {
    scrollCoreServicesCard(Math.min(totalServices - 1, coreServicesActiveIndex + 1));
  };

  // Reveal on scroll helper
  useEffect(() => {
    // Hero stagger reveal on mount
    const t = setTimeout(() => setHeroRevealed(true), 240);

    // RevealOnScroll observer
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.15 });

    // Use data attribute so we can reliably select elements even with CSS modules
    const els = document.querySelectorAll('[data-reveal="true"]');
    els.forEach(el => io.observe(el));

    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [provideHover, setProvideHover] = useState<number>(0);

  // Related Services Logic
  const serviceImageMap: Record<string, string> = {
    // Online services
    'advertising-agency-bangalore':  '/online services/Advertising Agency In Banglore.png',
    'digital-marketing':             '/popular services/digital services.png',
    'social-media-marketing':        '/online services/Social Media Marketing.png',
    'social-media-optimization':     '/online services/Social Media Optimization.png',
    'seo':                           '/popular services/Search Engine Optimization.png',
    'sem':                           '/popular services/Search Engine Marketing.png',
    'online-reputation-management':  '/popular services/Online Reputation Management.png',
    'creative-designing':            '/online services/Creative Designing.png',
    'web-designing':                 '/online services/Web Designing And Development.png',
    'software-development':          '/online services/Software Design and Development.png',
    'mobile-app-development':        '/online services/Mobile Application Development.png',
    'ecommerce-solutions':           '/online services/Ecommerce Solutions.png',
    'email-marketing':               '/online services/Email Marketing.png',
    'api-integration':               '/online services/API Integration.png',
    'blog-articles':                 '/online services/Blog Articles.png',
    'classified-portal':             '/online services/Classified Portal Management.png',
    'display-advertisement':         '/online services/Display Advertisement.png',
    'press-releases':                '/online services/Press Releases Services.png',
    'real-estate-marketing':         '/online services/Real Estate Online Marketing Service.png',
    'geolocation-sms':               '/online services/Geolocation Analytical SMS.png',
    'ai-advertising-agency':         '/online services/Advertising Agency In Banglore.png',
    // Offline services
    'bus-branding':                  '/offline images/Bus Branding.png',
    'rwa-activation':                '/offline images/rwa activation service.png',
    'btl-advertising':               '/offline images/btl advertising service.png',
    'mall-advertising':              '/offline images/Advertising Activities In Malls & Multiplex service.png',
    'tech-park-ads':                 '/offline images/Advertisements In Tech Parks.png',
    'airport-advertising':           '/offline images/Advertising in Airports.png',
    'paper-insertion':               '/offline images/paper insertion.png',
    'cafe-gym-ads':                  '/offline images/Advertisements In Cafes Gyms & Super Markets.png',
    'atm-ads':                       '/offline images/Advertisement in ATMs.png',
    'auto-rickshaw-ads':             '/offline images/Auto Rickshaw Advertising.png',
    'magazine-ads':                  '/offline images/Advertisement in Magazines.png',
    'parking-ads':                   '/offline images/Advertising in Public & Private Parking Lots.png',
    'branding-rebranding':           '/offline images/Branding Re-Branding.png',
    'corporate-gifts':               '/offline images/Corporate Gifts.png',
    'corporate-training':            '/offline images/Corporate Training.png',
    'event-management':              '/offline images/Event Management.png',
    'fm-campaigns':                  '/offline images/FM Campaigns.png',
    'fabrications':                  '/offline images/Fabrications services.png',
    'hoarding-services':             '/offline images/Hoarding Services.png',
    'marketing-collaterals':         '/offline images/Marketing Collaterals service.png',
    'startup-marketing':             '/offline images/Marketing Services for Start-ups.png',
    'photographic-services':         '/offline images/Photographic Services.png',
    'pr-services':                   '/offline images/PR Services.png',
    'printing-services':             '/offline images/Printing Services.png',
    'retail-advertising':            '/offline images/retail advertising services.png',
    'signage-services':              '/offline images/signage services.png',
    'washroom-advertising':          '/offline images/Washroom Advertising services.png',
  };

  const allServices = Object.entries(serviceData).map(([s, d]) => ({
    slug: s,
    title: d.title,
    category: d.category,
    image: d.heroImage || d.collageMain || serviceImageMap[s] || '/services/pro-thumb-1.svg'
  }));

  const relatedServices = allServices.filter(s => s.category === service.category && s.slug !== slug);
  // Keep a short, focused list for Related Services — show up to 4 items
  const limitedRelated = relatedServices.slice(0, 4);
  const displayRelated = limitedRelated;

  const defaultFaqs = [
    {
      q: 'How long until we see results?',
      a: 'Depending on the channel, initial impact can be seen within a few weeks; measurable outcomes typically within 60-90 days.'
    },
    {
      q: 'Do you handle creative and media buying?',
      a: 'Yes — we do end-to-end campaign management including creative, media planning, buying, and optimization.'
    },
    {
      q: 'Can you work with our internal team?',
      a: 'Absolutely. We work as an extension of your team and integrate with internal stakeholders.'
    },
    {
      q: 'What makes your agency different from competitors?',
      a: 'We combine data-driven strategy with creative excellence. Our team brings hands-on expertise across online and offline channels, transparent reporting, and a focus on measurable ROI. We treat your business goals as our own.'
    },
    {
      q: 'How do you determine the right marketing channels for my business?',
      a: 'We start with in-depth discovery: understanding your target audience, competitor landscape, budget, and goals. We then recommend a channel mix tailored to your specific needs, with flexibility to pivot based on performance data.'
    },
    {
      q: 'What kind of results can I expect?',
      a: 'Results vary by industry and service type. However, our clients typically see 20-40% improvement in lead generation, 2-3x ROI on ad spend, and significant improvements in brand visibility within 3-6 months.'
    },
    {
      q: 'Do you offer flexible contracts or trial periods?',
      a: 'Yes. We work with businesses of all sizes and offer flexible engagement models. Many clients start with a pilot campaign to test our approach before committing to longer-term partnerships.'
    },
    {
      q: 'How do you keep campaigns optimized and relevant?',
      a: 'We continuously monitor performance metrics, A/B test creative and targeting, and provide weekly or monthly optimization reports. Your dedicated account manager reviews performance with you regularly.'
    },
    {
      q: 'What if I have a tight budget?',
      a: 'We work with businesses at all budget levels. We help you prioritize high-impact activities and channels that deliver the best ROI for your specific constraints. Starting lean and scaling up is always an option.'
    }
  ];

  const displayFaqs = (service.faqs ?? defaultFaqs).slice(0, 7);

  const serviceKeywords = Array.from(
    new Set(
      [...slug.split('-'), ...service.title.split(' ')].map((k) => k.trim().toLowerCase()).filter(Boolean)
    )
  );

  const relevantPosts = blogPosts
    .map((p) => {
      const haystack = `${p.title} ${p.excerpt}`.toLowerCase();
      const tags = (p.tags ?? []).map((t) => t.toLowerCase());
      const score = serviceKeywords.reduce((acc, k) => {
        const tagScore = tags.includes(k) ? 3 : 0;
        const titleScore = p.title.toLowerCase().includes(k) ? 2 : 0;
        const textScore = haystack.includes(k) ? 1 : 0;
        return acc + tagScore + titleScore + textScore;
      }, 0);
      return { post: p, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.post.id - a.post.id;
    })
    .map((x) => x.post)
    .slice(0, 3);

  const coreServices = [
    {
      title: 'Strategic Planning',
      desc: 'We develop comprehensive marketing strategies tailored to your business goals, analyzing market trends and competitor landscape to position your brand for success.',
      Icon: FaLightbulb
    },
    {
      title: 'Creative Design',
      desc: 'Our creative team crafts visually stunning campaigns that capture attention and communicate your brand message effectively across all mediums.',
      Icon: FaPaintBrush
    },
    {
      title: 'Digital Excellence',
      desc: 'From SEO to social media, we deliver integrated digital solutions that drive traffic, engagement, and conversions for your business online.',
      Icon: FaLaptopCode
    },
    {
      title: 'Offline Impact',
      desc: 'We create powerful offline campaigns including hoarding, bus branding, and experiential activations that build brand presence in the physical world.',
      Icon: FaBullhorn
    },
    {
      title: 'Data-Driven Results',
      desc: 'Every campaign is backed by analytics and insights. We track performance metrics and optimize continuously to deliver measurable ROI for your investment.',
      Icon: FaChartLine
    },
    {
      title: 'Industry Expertise',
      desc: 'With experience across multiple industries, our team brings specialized knowledge to tackle unique challenges and opportunities in your market.',
      Icon: FaMedal
    }
  ];
  const totalServices = coreServices.length;
  const progressPercentage = ((coreServicesActiveIndex + 1) / totalServices) * 100;

  const provideItems = service.features.slice(0, 4);
  const provideImages = provideItems.map((item: string) => 
    `/service/${item}.png`
  );
  const provideDescriptions = provideItems.map((t: string) =>
    `We deliver ${t.toLowerCase()} as part of our ${service.title}—built to support your goals with clear execution and measurable outcomes.`
  );

  return (
    <main className={styles.serviceDetail}>
      <div className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img ref={bgRef} src={service.category === 'offline' ? '/offline-banner.png' : '/onine-banner.png'} alt="Service background" className={styles.backgroundImage} />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div ref={heroRef} className={`${styles.heroInner} ${styles.stagger} ${heroRevealed ? styles.isRevealed : ''}`}>
            {/* Minimal hero for service detail: only show service title at left-bottom */}
            <div className={styles.serviceLabel}>{service.title}</div>
          </div>
        </div>
      </div>

      <section data-reveal="true" className={`${styles.splitSection} ${styles.revealOnScroll}`}>
        <div className="container">
          <div className={`${styles.splitGrid} revealChild`}>
            <div className={styles.splitContent}>
              <h2 className={styles.splitTitle}>Grow Faster With {service.title}</h2>
              <p className={styles.splitDesc}>
                We plan, build, and optimize campaigns that connect with the right audience—turning attention into leads and
                measurable growth.
              </p>
            </div>
            <div className={styles.splitImageWrap}>
              <img
                src={service.heroImage || serviceImageMap[slug] || `/services/service_${slug}.png`}
                alt={service.title}
                className={styles.splitImage}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/services/digital-marketing-1.svg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creative Animated Showcase Section */}
      <CreativeShowcaseSection />

      <section data-reveal="true" className={`${styles.provideSection} ${styles.revealOnScroll}`}>
        <div className="container">
          <div className={styles.revealChild}>
            <h2 className={styles.provideTitle}>What We Provide</h2>
            <div className={styles.provideGrid}>
              <div className={styles.provideListWrap}>
                <ul className={styles.provideList}>
                  {provideItems.map((item: string, i: number) => (
                    <li
                      key={item}
                      className={`${styles.provideItem} ${provideHover === i ? styles.provideActive : ''}`}
                      onMouseEnter={() => setProvideHover(i)}
                      onFocus={() => setProvideHover(i)}
                      tabIndex={0}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.provideMedia} aria-hidden>
                <img
                  src={provideImages[provideHover] ?? provideImages[0]}
                  alt=""
                  className={styles.provideImage}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/services/pro-thumb-1.svg';
                  }}
                />
              </div>

              <div className={styles.provideContent}>
                <p className={styles.provideDesc}>{provideDescriptions[provideHover] ?? provideDescriptions[0]}</p>
                <Link href="/contact" className={styles.provideCta}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

  <div className={styles.contentSection}>
        <div className="container">
          {/* New creative section: Build Your Brand */}
          <section className={`${styles.buildBrandSection} revealOnScroll`} data-reveal="true">
            <div className="container">
              <div className={`${styles.revealChild} ${styles.grid2}`}>
                <div>
                  <h2 className={styles.showcaseTitle}>Our Advertising Agency Helps You Build Your Brand</h2>
                  <p className="smallMuted">We combine strategic thinking, creativity and media precision to craft campaigns that build visibility, preference and sales. Below are some ways we help brands grow.</p>
                  <ul className={styles.list}>
                    <li onMouseEnter={() => setBrandHover(0)} onMouseLeave={() => setBrandHover(null)}><span className={styles.itemIcon}></span>Brand Strategy & Positioning</li>
                    <li onMouseEnter={() => setBrandHover(1)} onMouseLeave={() => setBrandHover(null)}><span className={styles.itemIcon}></span>Creative Campaign Development</li>
                    <li onMouseEnter={() => setBrandHover(2)} onMouseLeave={() => setBrandHover(null)}><span className={styles.itemIcon}></span>Multi-channel Media Planning</li>
                    <li onMouseEnter={() => setBrandHover(3)} onMouseLeave={() => setBrandHover(null)}><span className={styles.itemIcon}></span>Data-driven Optimization</li>
                  </ul>
                  <div style={{ marginTop: '1rem' }}>
                    <button className={`${styles.ctaButton} ${styles.pulse}`}>Request Case Studies</button>
                    <button className={styles.ctaSecondary} style={{ marginLeft: '0.75rem' }}>Speak to an Expert</button>
                  </div>
                </div>

                <div className={styles.collage} aria-hidden>
                  <img
                    src="/Our Advertising Agency Helps You Build Your Brand.png"
                    alt="Our Advertising Agency Helps You Build Your Brand"
                    className={styles.collageImage}
                    style={{ position: 'relative', width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Additional Brand Content */}
          <section className={`${styles.buildBrandSection} revealOnScroll`} data-reveal="true" style={{ marginTop: '2rem', marginBottom: '0', paddingBottom: '0' }}>
            <div className="container">
              <div
                className={`revealChild ${styles.additionalBrandGrid}`}
              >
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src="/Our Advertising Agency Helps You Build Your Brand 1.png"
                    alt="Our Advertising Agency Helps You Build Your Brand"
                    className={styles.collageImage}
                    style={{
                      position: 'relative',
                      width: '100%',
                      maxWidth: '500px',
                      height: 'auto',
                      borderRadius: '20px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }}
                  />
                </div>
                <div>
                  <div style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                    <p style={{ marginBottom: '1rem' }}>
                      With the right advertising, you don't just get results but you multiply your profits. IM Solutions delivers just that. We are a team of experts creating unconventional ads that truly makes an impression. Our ads are short, simple and straight to the point targeting ideal customers for a faster outcome. From digital space to every nook and corner of the offline market, we cover it all.
                    </p>
                    <p>
                      IM Solutions connects people and businesses across the digital and physical world, powering people-based marketing. Presentation matters! We help brands present themselves better and reach their customers with our advertising expertise. In simple, we amplifying your business and enhance your branding. Why wait when you can start now? Contact us for more details..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Services Section */}
          <section className={`${styles.coreServicesSection} revealOnScroll`} data-reveal="true">
            <div className="container">
              <div className={styles.revealChild}>
                <h2 className={styles.showcaseTitle} style={{ marginBottom: '3rem', textAlign: 'center' }}>Our Core Services</h2>

                <div className={styles.coreServicesGrid} ref={coreServicesRef}>
                  {coreServices.map((service, index) => (
                    <div
                      key={index}
                      className={`${styles.coreServiceCard} ${coreServicesActiveIndex === index ? styles.active : ''}`}
                    >
                      <div className={styles.serviceIconWrapper}>
                        <service.Icon className={styles.serviceIcon} style={{ width: '40px', height: '40px', color: 'var(--color-accent-primary)' }} />
                      </div>
                      <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                      <p className={styles.serviceCardDesc}>{service.desc}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.progressBarContainer}>
                  <div
                    className={styles.progressBar}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>

                <div className={styles.arrowControls}>
                  <button
                    className={styles.arrowButton}
                    onClick={scrollCoreServicesLeft}
                    aria-label="Previous service"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                  </button>
                  <button
                    className={styles.arrowButton}
                    onClick={scrollCoreServicesRight}
                    aria-label="Next service"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className={`${styles.whyChooseUsSection} revealOnScroll`} data-reveal="true">
            <div className="container">
              <div className={styles.revealChild}>
                {/* Row 1: Intro and Impact */}
                <div className={styles.whyChooseUsContent}>
                  <div className={styles.whyChooseUsText}>
                    <h2 className={styles.showcaseTitle}>WHY US?</h2>
                    <div className={styles.whyChooseUsBody}>
                      <p>Want to increase your online visibility and generate more leads for your business? IM Solutions is among the best and leading Marketing Companies in Bangalore excelling in providing top notch digital marketing services. As a leading Digital Marketing Agency in India our clientele is spread across the country. Having years of experience in advertising niche, IM Solutions is an expert navigating the fast-evolving digital landscape and delivering quality digital marketing services.Agency in India our clientele is spread across the country. Having years of experience in advertising niche, IM Solutions is an expert navigating the fast-evolving digital landscape and delivering quality digital marketing services.</p>


                    </div>
                  </div>

                  <div className={styles.whyChooseUsImage}>
                    <img src={service.heroImage ?? '/why-us-illustration.png'} alt="Why Choose IM Solutions" className={styles.whyChooseUsImg} />
                  </div>
                </div>

                {/* Row 2: Reputation and Advantages (Reversed) */}
                <div className={`${styles.whyChooseUsContent} ${styles.reverseRow}`}>
                  <div className={styles.whyChooseUsText}>
                    <div className={styles.whyChooseUsBody}>


                      <h3 className={styles.whyChooseUsSubtitle}>IM Solutions offers the following advantages:</h3>

                      <ul className={styles.whyChooseUsList}>
                        <li>Proactive online reputation management solutions</li>
                        <li>In-house outsourcing solution by experts</li>
                        <li>Receive notifications Trusted Alerts and Reports</li>
                        <li>Customisable scalable solutions</li>
                        <li>Strengthening and building reputation</li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.whyChooseUsImage}>
                    <img src={service.collageTop ?? '/imsolutions offers.png'} alt="Our Advantages" className={styles.whyChooseUsImg} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Services Section */}
          <section className={`${styles.relatedServicesSection} revealOnScroll`} data-reveal="true">
            <div className="container">
              <div className={styles.revealChild}>
                <h2 className={styles.relatedServicesTitle}>Related Services</h2>
              </div>
            </div>
            <div className={styles.marqueeContainer}>
              <div className={styles.marqueeContent}>
                {displayRelated.map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${item.slug}`}
                    className={styles.relatedServiceCard}
                  >
                    <div
                      className={styles.relatedServiceImageWrapper}
                    >
                      <img src={item.image} alt={item.title} className={styles.relatedServiceImage} />
                      <div className={styles.relatedServiceArrow}>
                        <FiArrowRight />
                      </div>
                    </div>
                    <div className={styles.relatedServiceInfo}>
                      <h3 className={styles.relatedServiceName}>{item.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section data-reveal="true" className={styles.revealOnScroll}>
            <div className="container">
              <div className={styles.revealChild}>
                <ScrollReveal delay={0.2}>
                  <h3 className={styles.showcaseTitle}>Frequently Asked Questions</h3>
                </ScrollReveal>
                <div className={styles.faqList}>
                  {displayFaqs.map((f: { q: string; a: string }, i: number) => (
                    <ScrollReveal key={i} delay={0.3 + i * 0.15}>
                      <div className={`${styles.faqItem} ${openFaq === i ? styles.open : ''}`}>
                        <button
                          className={styles.faqQuestion}
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        >
                          <span>{f.q}</span>
                          <span className={styles.faqIcon}>
                            {openFaq === i ? <FaMinus /> : <FaPlus />}
                          </span>
                        </button>
                        <div className={styles.faqAnswer}>
                          <p>{f.a}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section data-reveal="true" className={`${styles.relevantBlogsSection} ${styles.revealOnScroll}`}>
            <div className="container">
              <div className={styles.revealChild}>
                <h3 className={styles.showcaseTitle}>Relevant Blogs</h3>
                <div className={styles.relevantBlogsGrid}>
                  {relevantPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.relevantBlogCard}>
                      <div className={styles.relevantBlogImageWrap}>
                        <img
                          src={post.image || '/blog_seo.png'}
                          alt={post.title}
                          className={styles.relevantBlogImage}
                        />
                      </div>
                      <div className={styles.relevantBlogContent}>
                        <h4 className={styles.relevantBlogTitle}>{post.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className={styles.ctaSection}>
            <h3 className={styles.ctaTitle}>Ready to Get Started?</h3>
            <p className={styles.ctaText}>Let's discuss how our {service.title.toLowerCase()} can benefit your business.</p>
            <button className={`${styles.ctaButton} ${styles.pulse}`}>Contact Us Today</button>
          </div>
        </div>
      </div>
    </main>
  );
}
