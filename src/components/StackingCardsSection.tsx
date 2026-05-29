'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef } from 'react';
import styles from './StackingCardsSection.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

type StackCard = {
  title: string;
  slug: string;
  description: string;
  tag: string;
  number: number;
  image: string;
};

export default function StackingCardsSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  const cards = useMemo<StackCard[]>(
    () => [
      {
        title: 'Bus Branding',
        slug: 'offline/bus-branding',
        description:
          'Turn city traffic into brand visibility with high-impact transit branding designed for maximum reach.',
        tag: 'Outdoor',
        number: 1,
        image: '/services/pro-thumb-1.svg',
      },
      {
        title: 'RWA Activation',
        slug: 'offline/rwa-activation',
        description:
          'Engage residential communities with on-ground activations that create trust, attention and enquiries.',
        tag: 'Activation',
        number: 2,
        image: '/services/pro-thumb-2.svg',
      },
      {
        title: 'BTL Advertising',
        slug: 'offline/btl-advertising',
        description:
          'Drive direct response with targeted below-the-line campaigns—sampling, kiosks, and hyperlocal promotions.',
        tag: 'BTL',
        number: 3,
        image: '/services/pro-thumb-3.svg',
      },
      {
        title: 'Advertising Activities In Malls & Multiplex',
        slug: 'offline/mall-advertising',
        description:
          'Capture attention where footfall is high with experiential mall and multiplex advertising that converts.',
        tag: 'Experiential',
        number: 4,
        image: '/services/pro-thumb-4.svg',
      },
    ],
    []
  );

  useEffect(() => {
    if (reduceMotion) return;

    const section = sectionRef.current;
    const cardEls = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!section || cardEls.length === 0) return;

    const ctx = gsap.context(() => {
      const baseOffsetPx = 18;

      cardEls.forEach((el, i) => {
        gsap.set(el, {
          y: i === 0 ? 0 : '100vh',
          yPercent: 0,
          zIndex: i + 1,
          scale: 1,
          willChange: 'transform',
        });
      });

      const stickyEl = section.querySelector(`.${styles.sticky}`) as Element | null;
      if (!stickyEl) return;

      const segments = Math.max(1, cardEls.length - 1);
      const segmentScroll = 110;
      const releaseBuffer = 35;

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: stickyEl,
          start: 'center center',
          end: `+=${segments * segmentScroll + releaseBuffer}%`,
          scrub: 1,
          pin: stickyEl,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 1; i < cardEls.length; i += 1) {
        const current = cardEls[i];
        const previous = cardEls[i - 1];

        tl.to(
          current,
          {
            yPercent: 0,
            y: 0,
            duration: 1,
          },
          i - 1
        );

        tl.to(
          previous,
          {
            scale: 0.97,
            duration: 1,
          },
          i - 1
        );
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, [reduceMotion, cards.length]);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>SERVICES</div>
          <h2 className={styles.title}>How We Help You Grow</h2>
        </div>

        <div className={styles.stackArea} style={{ height: `${(cards.length - 1) * 110 + 140}vh` }}>
          <div className={styles.sticky}>
            <div className={styles.stackViewport}>
              {cards.map((c, i) => (
                <div
                  key={c.title}
                  ref={(el) => {
                    cardsRef.current[i] = el;
                  }}
                  className={styles.card}
                >
                  <div className={styles.cardInner}>
                    <div className={styles.textContent}>
                      <div className={styles.cardHeader}>
                        <div className={styles.animatedIndex} aria-label={`Step ${c.number}`}>
                          <span className={styles.animatedIndexStroke}>
                            {String(c.number).padStart(2, '0')}
                          </span>
                          <span className={styles.animatedIndexFill} aria-hidden>
                            {String(c.number).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                      <div className={styles.divider} />
                      <div className={styles.textContentInner}>
                        <h3 className={styles.cardTitle}>{c.title}</h3>
                        <p className={styles.cardDesc}>{c.description}</p>
                        <Link href={`/services/${c.slug}`} className={styles.animatedCta}>
                          <span className={styles.animatedCtaText}>Get Started</span>
                        </Link>
                      </div>
                    </div>
                    <div className={styles.media} aria-hidden>
                      <img
                        src={`/services/service_${c.slug}.png`}
                        alt=""
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = c.image;
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
