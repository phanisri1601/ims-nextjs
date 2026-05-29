'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';
import styles from './TestAnimation.module.css';

gsap.registerPlugin(ScrollTrigger);

const cardsContent = [
  {
    title: 'Performance Marketing',
    description: 'We help your business grow with marketing that delivers real results',
    items: ['Paid Ads / PPC', 'Conversion Optimization', 'ROI Analysis', 'Retargeting & Remarketing', 'Keyword Strategy'],
  },
  {
    title: 'Brand Strategy',
    description: 'Position your brand with clarity, consistency, and impact across every channel',
    items: ['Brand Identity', 'Messaging', 'Creative Direction', 'Campaign Planning', 'Market Research'],
  },
  {
    title: 'Content & Social',
    description: 'Build engagement with content designed for people and platforms',
    items: ['Content Planning', 'Reels & Shorts', 'Copywriting', 'Community Building', 'Analytics'],
  },
  {
    title: 'Offline Presence',
    description: 'Extend your reach beyond screens with targeted offline campaigns',
    items: ['OOH Advertising', 'Print Media', 'Events', 'Local Activations', 'Partnerships'],
  },
];

export default function TestAnimation() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (reduceMotion) return;

    const section = sectionRef.current;
    const stack = stackRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!section || !stack || cards.length === 0) return;

    const ctx = gsap.context(() => {
      const getPanes = (card: HTMLDivElement) => ({
        text: card.querySelector<HTMLElement>(`.${styles.textPane}`),
        media: card.querySelector<HTMLElement>(`.${styles.mediaPane}`),
      });

      cards.forEach((card, index) => {
        const { text, media } = getPanes(card);
        gsap.set(card, { opacity: index === 0 ? 1 : 0, zIndex: cards.length - index });
        gsap.set([text, media].filter(Boolean), {
          opacity: index === 0 ? 1 : 0,
          y: index === 0 ? 0 : 36,
        });
        if (media) gsap.set(media, { scale: index === 0 ? 1 : 0.97 });
      });

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        scrollTrigger: {
          trigger: stack,
          start: 'top top',
          end: `+=${cards.length * 52}%`,
          scrub: 1.35,
          pin: section,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const step = 1;

      for (let i = 1; i < cards.length; i += 1) {
        const prev = cards[i - 1];
        const next = cards[i];
        const prevPanes = getPanes(prev);
        const nextPanes = getPanes(next);
        const at = (i - 1) * step;

        tl.to(prev, { opacity: 0, duration: 0.45 }, at);
        tl.to([prevPanes.text, prevPanes.media].filter(Boolean), { y: -28, opacity: 0, duration: 0.35 }, at);

        tl.to(next, { opacity: 1, duration: 0.45 }, at);
        tl.fromTo(
          nextPanes.text,
          { y: 44, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
          at + 0.08
        );
        tl.fromTo(
          nextPanes.media,
          { y: 28, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 0.55, ease: 'power3.out' },
          at + 0.12
        );
      }
    }, section);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener('resize', onResize);
      ctx.revert();
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    const card = cardsContent[cardsContent.length - 1];
    return (
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.stackWrapper}>
            <div className={styles.stack}>
              <div className={`${styles.card} ${styles.card4}`} style={{ position: 'relative', opacity: 1 }}>
                <div className={styles.cardContent}>
                  <div className={styles.textPane}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardText}>{card.description}</p>
                    <ul className={styles.list}>
                      {card.items.map((item) => (
                        <li key={item} className={styles.listItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.mediaPane}>
                    <video
                      className={styles.video}
                      src="/12642073_1920_1080_24fps.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.stackWrapper}>
          <div ref={stackRef} className={styles.stack}>
            {cardsContent.map((card, index) => (
              <div
                key={card.title}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`${styles.card} ${index === 0 ? styles.card1 : index === 1 ? styles.card2 : index === 2 ? styles.card3 : styles.card4}`}
              >
                <div className={styles.cardContent}>
                  <div className={styles.textPane}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardText}>{card.description}</p>
                    <ul className={styles.list}>
                      {card.items.map((item) => (
                        <li key={item} className={styles.listItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.mediaPane}>
                    <video
                      className={styles.video}
                      src="/12642073_1920_1080_24fps.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
