'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import styles from './ServicesWorkCtaSection.module.css';

export default function ServicesWorkCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Work with us">
      <div className={styles.media} aria-hidden>
        <video
          ref={videoRef}
          className={styles.video}
          src="/bg-footer.mp4"
          loop
          muted
          playsInline
          preload="metadata"
          autoPlay={!reduceMotion}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.heading}>
          <span>Work with us.</span>
          <span>Or work among</span>
          <span>us.</span>
        </h2>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.cta}>
            Contact Us
          </Link>
          <Link href="/careers" className={styles.cta}>
            Career
          </Link>
        </div>
      </div>
    </section>
  );
}
