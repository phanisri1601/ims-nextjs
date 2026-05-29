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
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);
  const card4Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduceMotion) return;

    const section = sectionRef.current;
    const stack = stackRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;
    const card4 = card4Ref.current;

    if (!section || !stack || !card1 || !card2 || !card3 || !card4) return;

    const ctx = gsap.context(() => {
      gsap.set([card1, card2, card3, card4], { willChange: 'transform' });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: stack,
          start: 'center center',
          end: '+=300%',
          scrub: 1,
          pin: section,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const offscreenDistance = () => window.innerWidth * 1.4;

      // Card 1: visible at start, fades out and moves left
      tl.fromTo(card1, 
        { x: 0, opacity: 1 }, 
        { x: () => -offscreenDistance(), opacity: 0, duration: 0.6 }, 
        0
      );

      // Card 2: fades in, then fades out and moves right
      tl.fromTo(card2, 
        { x: 0, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.3 }, 
        0.2
      );
      tl.to(card2, 
        { x: () => offscreenDistance(), opacity: 0, duration: 0.6 }, 
        0.8
      );

      // Card 3: fades in, then fades out and moves left
      tl.fromTo(card3, 
        { x: 0, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.3 }, 
        1.0
      );
      tl.to(card3, 
        { x: () => -offscreenDistance(), opacity: 0, duration: 0.6 }, 
        1.6
      );

      // Card 4: fades in and stays visible
      tl.fromTo(card4, 
        { x: 0, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.4 }, 
        1.8
      );
    }, section);

    // Ensure trigger positions are correct after images/layout settle
    const t = setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
        </div>

        <div className={styles.stackWrapper}>
          <div ref={stackRef} className={styles.stack}>
            <div ref={card1Ref} className={`${styles.card} ${styles.card1}`}>
              <div className={styles.cardContent}>
                <div className={styles.textPane}>
                  <h3 className={styles.cardTitle}>{cardsContent[0].title}</h3>
                  <p className={styles.cardText}>{cardsContent[0].description}</p>
                  <ul className={styles.list}>
                    {cardsContent[0].items.map((item) => (
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

            <div ref={card2Ref} className={`${styles.card} ${styles.card2}`}>
              <div className={styles.cardContent}>
                <div className={styles.textPane}>
                  <h3 className={styles.cardTitle}>{cardsContent[1].title}</h3>
                  <p className={styles.cardText}>{cardsContent[1].description}</p>
                  <ul className={styles.list}>
                    {cardsContent[1].items.map((item) => (
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

            <div ref={card3Ref} className={`${styles.card} ${styles.card3}`}>
              <div className={styles.cardContent}>
                <div className={styles.textPane}>
                  <h3 className={styles.cardTitle}>{cardsContent[2].title}</h3>
                  <p className={styles.cardText}>{cardsContent[2].description}</p>
                  <ul className={styles.list}>
                    {cardsContent[2].items.map((item) => (
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

            <div ref={card4Ref} className={`${styles.card} ${styles.card4}`}>
              <div className={styles.cardContent}>
                <div className={styles.textPane}>
                  <h3 className={styles.cardTitle}>{cardsContent[3].title}</h3>
                  <p className={styles.cardText}>{cardsContent[3].description}</p>
                  <ul className={styles.list}>
                    {cardsContent[3].items.map((item) => (
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


