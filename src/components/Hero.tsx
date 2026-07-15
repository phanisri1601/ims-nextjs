'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as any },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  },
});

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* ── Left  Text content ── */}
      <div className={styles.heroLeft}>
        <motion.p
          className={styles.heroTagline}
          initial="hidden"
          animate="visible"
          
        >
          STRATEGY. CREATIVITY. TECHNOLOGY. GROWTH.
        </motion.p>
        <motion.div
          className={styles.heroTaglineRule}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        />

        <motion.h1
          className={styles.heroHeading}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
          }}
        >
          <motion.span className={styles.heroLine} variants={fadeUp(0)}>
            One Partner<span className={styles.heroDot}>.</span>
          </motion.span>
          <motion.span className={styles.heroLine} variants={fadeUp(0.12)}>
            Every Possibility<span className={styles.heroDot}>.</span>
          </motion.span>
        </motion.h1>

        <motion.p
          className={styles.heroSubtext}
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.55)}
        >
          Everything your brand needs,<br />working as one.
        </motion.p>

        <motion.div
          className={styles.heroCta}
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.7)}
        >
          <Link href="/contact" className={styles.heroCtaBtn} aria-label="Start the journey">
            <span className={styles.heroCtaCircle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
            <span className={styles.heroCtaLabel}>START THE JOURNEY</span>
          </Link>
        </motion.div>
      </div>

      {/* ── Right  Cube image ── */}
      <motion.div
        className={styles.heroRight}
        initial={{ opacity: 0, x: 60, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as any }}
      >
        <Image
          src="/Cube home.png"
          alt="IM Solutions – Strategy, Creative, Technology, Media, Growth"
          fill
          className={styles.heroCubeImg}
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className={styles.heroScroll}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <span className={styles.heroScrollLabel}>SCROLL TO CONTINUE</span>
        <motion.div
          className={styles.heroScrollArrow}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="0" x2="8" y2="16" />
            <polyline points="2 10 8 16 14 10" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
