'use client';

import { useEffect, useRef } from 'react';
import styles from './ClientsPage.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from '@/components/CountUp';

gsap.registerPlugin(ScrollTrigger);

export default function ClientsHeadlineScroll() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const line1Ref = useRef<HTMLSpanElement | null>(null);
  const line2Ref = useRef<HTMLSpanElement | null>(null);
  const line3Ref = useRef<HTMLSpanElement | null>(null);
  const image1Ref = useRef<HTMLSpanElement | null>(null);
  const image2Ref = useRef<HTMLSpanElement | null>(null);
  const image3Ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const line3 = line3Ref.current;
    const image1 = image1Ref.current;
    const image2 = image2Ref.current;
    const image3 = image3Ref.current;

    if (!section || !line1 || !line2 || !line3 || !image1 || !image2 || !image3) return;

    const setActive = (el: HTMLElement, active: boolean) => {
      if (active) el.classList.add(styles.headlineLineActive);
      else el.classList.remove(styles.headlineLineActive);
    };

    // initial state
    [line1, line2, line3].forEach((el) => {
      el.classList.add(styles.headlineLine);
      el.classList.remove(styles.headlineLineActive);
    });

    // Set initial hidden state for images
    gsap.set([image1, image2, image3], {
      opacity: 0,
      scale: 0.8,
      rotation: -10,
    });

    const triggers: ScrollTrigger[] = [];

    const makeLineTrigger = (el: HTMLElement, start: string, end: string) => {
      const t = ScrollTrigger.create({
        trigger: section,
        start,
        end,
        onEnter: () => setActive(el, true),
        onEnterBack: () => setActive(el, true),
        onLeave: () => setActive(el, false),
        onLeaveBack: () => setActive(el, false),
      });
      triggers.push(t);
    };

    const makeLineTriggerSticky = (el: HTMLElement, start: string) => {
      const t = ScrollTrigger.create({
        trigger: section,
        start,
        onEnter: () => setActive(el, true),
        onEnterBack: () => setActive(el, true),
      });
      triggers.push(t);
    };

    // 3-step highlight as you scroll through the section
    makeLineTriggerSticky(line1, 'top 75%');
    makeLineTriggerSticky(line2, 'top 55%');
    makeLineTrigger(line3, 'top 35%', 'bottom 35%');

    // Image animations
    const animateImage = (image: HTMLElement, start: string) => {
      const t = ScrollTrigger.create({
        trigger: section,
        start,
        onEnter: () => {
          gsap.to(image, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          });
        },
        onEnterBack: () => {
          gsap.to(image, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          });
        },
        onLeave: () => {
          gsap.to(image, {
            opacity: 0,
            scale: 0.8,
            rotation: -10,
            duration: 0.4,
            ease: "power2.in",
          });
        },
        onLeaveBack: () => {
          gsap.to(image, {
            opacity: 0,
            scale: 0.8,
            rotation: -10,
            duration: 0.4,
            ease: "power2.in",
          });
        },
      });
      triggers.push(t);
    };

    animateImage(image1, 'top 70%');
    animateImage(image2, 'top 50%');
    animateImage(image3, 'top 30%');

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.imageHeadlineSection}>
      <div className="container">
        <div className={styles.imageHeadlineWrap}>
          <h2 className={styles.imageHeadline}>
            <span ref={line1Ref}>
              Elevate your digital presence with distinction, immerse{' '}
              <span ref={image1Ref} className={styles.inlinePill}>
                <img src="/clients/brigade.png" alt="" />
              </span>{' '}
              in boundless creativity.
            </span>
            <span ref={line2Ref}>
              Our team of designers and development{' '}
              <span ref={image2Ref} className={styles.inlinePill}>
                <img src="/clients/prestigegroup.png" alt="" />
              </span>{' '}
              trailblazers
            </span>
            <span ref={line3Ref}>
              ignites{' '}
              <span ref={image3Ref} className={styles.inlinePill}>
                <img src="/clients/kotak.png" alt="" />
              </span>{' '}
              your digital vision
            </span>
          </h2>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>
                <CountUp end={40} suffix="+" />
              </div>
              <div className={styles.statLabel}>Satisfied clients</div>
            </div>
            <div className={styles.statDivider} aria-hidden />
            <div className={styles.statItem}>
              <div className={styles.statValue}>
                <CountUp end={100} suffix="+" />
              </div>
              <div className={styles.statLabel}>Projects delivered</div>
            </div>
            <div className={styles.statDivider} aria-hidden />
            <div className={styles.statItem}>
              <div className={styles.statValue}>
                <CountUp end={12} suffix="+" />
              </div>
              <div className={styles.statLabel}>years of experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
