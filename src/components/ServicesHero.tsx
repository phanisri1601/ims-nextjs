'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import styles from './ServicesHero.module.css';

interface ServicesHeroProps {
  eyebrow?: string;
  headingBlack: string;
  headingRed: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

// Cube hotspot positions (% from top-left of the image)
// Mapped by carefully analysing the strtegy pop.png layout
const CUBES = [
  {
    id: 'strategy',
    label: 'Strategy',
    num: '01',
    video: '/videos/strategy video+reverse.mp4',
    // top-face center of the top cube
    top: '20%',
    left: '50%',
    color: '#B5AC9A',
  },
  {
    id: 'creative',
    label: 'Creative',
    num: '02',
    video: '/videos/creative video+reverse.mp4',
    top: '43%',
    left: '34%',
    color: '#3D5240',
  },
  {
    id: 'technology',
    label: 'Technology',
    num: '03',
    video: '/videos/tech video+reverse.mp4',
    top: '43%',
    left: '72%',
    color: '#B5AC9A',
  },
  {
    id: 'media',
    label: 'Media',
    num: '04',
    video: '/videos/media video + reverse.mp4',
    top: '66%',
    left: '27%',
    color: '#1a1a1a',
  },
  {
    id: 'production',
    label: 'Production',
    num: '05',
    video: '/videos/production video + reverse.mp4',
    top: '74%',
    left: '50%',
    color: '#1E3A4F',
  },
  {
    id: 'growth',
    label: 'Growth',
    num: '06',
    video: '/videos/growth video+ reverse.mp4',
    top: '66%',
    left: '74%',
    color: '#6B2020',
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as any },
  },
});

export default function ServicesHero({
  eyebrow = 'OUR PHILOSOPHY',
  headingBlack,
  headingRed,
  description,
  ctaLabel = 'EXPLORE OUR SYSTEM',
  ctaHref = '/contact',
}: ServicesHeroProps) {
  const [activeVideo, setActiveVideo] = useState<(typeof CUBES)[0] | null>(null);
  const [hoveredCube, setHoveredCube] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Auto-play when modal opens
  useEffect(() => {
    if (activeVideo && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [activeVideo]);

  const openVideo = (cube: (typeof CUBES)[0]) => {
    setActiveVideo(cube);
  };

  const closeModal = () => {
    if (videoRef.current) videoRef.current.pause();
    setActiveVideo(null);
  };

  return (
    <>
      <section className={styles.hero}>
        {/* ── LEFT panel ── */}
        <motion.div
          className={styles.left}
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } } }}
        >
          <motion.p className={styles.eyebrow} variants={fadeUp(0)}>
            {eyebrow}
          </motion.p>
          <motion.div
            className={styles.eyebrowRule}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          />

          <motion.h1 className={styles.heading} variants={fadeUp(0.1)}>
            {headingBlack}
            <br />
            <span className={styles.headingRed}>{headingRed}</span>
          </motion.h1>

          <motion.p className={styles.description} variants={fadeUp(0.25)}>
            {description}
          </motion.p>

          <motion.div
            className={styles.watermark}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            IM
          </motion.div>

          <motion.div variants={fadeUp(0.4)}>
            <Link href={ctaHref} className={styles.cta}>
              <span className={styles.ctaLabel}>{ctaLabel}</span>
              <span className={styles.ctaArrow}>
                <svg width="18" height="12" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="0" y1="7" x2="16" y2="7" />
                  <polyline points="10 1 16 7 10 13" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* ── RIGHT panel — Cube image + hotspots ── */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] as any }}
        >
          <div className={styles.cubeWrapper}>
            <Image
              src="/strtegy pop.png"
              alt="IM Solutions – Strategy, Creative, Technology, Media, Production, Growth"
              fill
              className={styles.cubeImg}
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
            />

            {/* ── Hotspot overlay ── */}
            {CUBES.map((cube, i) => (
              <motion.button
                key={cube.id}
                className={`${styles.hotspot} ${hoveredCube === cube.id ? styles.hotspotActive : ''}`}
                style={{ top: cube.top, left: cube.left }}
                onClick={() => openVideo(cube)}
                onMouseEnter={() => setHoveredCube(cube.id)}
                onMouseLeave={() => setHoveredCube(null)}
                aria-label={`Play ${cube.label} video`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.1, ease: 'backOut' }}
              >
                <span className={styles.hotspotRing} />
                <span className={styles.hotspotDot} />
                {/* Tooltip */}
                <span className={styles.hotspotTooltip}>
                  <span className={styles.tooltipNum}>{cube.num}</span>
                  <span className={styles.tooltipLabel}>{cube.label}</span>
                  <span className={styles.tooltipPlay}>▶ Play</span>
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Video Modal ── */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeModal}
            ref={modalRef}
          >
            <motion.div
              className={styles.modalCard}
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>
                  <span className={styles.modalNum}>{activeVideo.num}</span>
                  <span className={styles.modalLabel}>{activeVideo.label}</span>
                </div>
                <button className={styles.modalClose} onClick={closeModal} aria-label="Close video">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Video */}
              <video
                ref={videoRef}
                className={styles.modalVideo}
                controls
                autoPlay
                playsInline
              >
                <source src={activeVideo.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
