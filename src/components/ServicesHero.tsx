'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './ServicesHero.module.css';

interface ServicesHeroProps {
  eyebrow?: string;
  headingBlack: string;
  headingRed: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

// Cube hotspot positions — measured directly from the 1456×816 image.
// top/left are % of the imageHolder which matches the image's natural 16:9 ratio.
const CUBES = [
  {
    id: 'strategy',
    label: 'Strategy',
    num: '01',
    video: '/videos/strategy video+reverse.mp4',
    // 01 Strategy — top beige cube face center: x≈728, y≈215 in 1456×816
    top: '26%',
    left: '50%',
    color: '#B5AC9A',
  },
  {
    id: 'creative',
    label: 'Creative',
    num: '02',
    video: '/videos/creative video+reverse.mp4',
    // 02 Creative — dark green left cube face center: x≈525, y≈400 in 1456×816
    top: '49%',
    left: '36%',
    color: '#3D5240',
  },
  {
    id: 'technology',
    label: 'Technology',
    num: '03',
    video: '/videos/tech video+reverse.mp4',
    // 03 Technology — light right cube face center: x≈930, y≈400 in 1456×816
    top: '49%',
    left: '64%',
    color: '#B5AC9A',
  },
  {
    id: 'media',
    label: 'Media',
    num: '04',
    video: '/videos/media video + reverse.mp4',
    // 04 Media — black bottom-left cube face center: x≈445, y≈580 in 1456×816
    top: '71%',
    left: '31%',
    color: '#1a1a1a',
  },
  {
    id: 'production',
    label: 'Production',
    num: '05',
    video: '/videos/production video + reverse.mp4',
    // 05 Production — navy bottom-center cube face center: x≈728, y≈640 in 1456×816
    top: '78%',
    left: '50%',
    color: '#1E3A4F',
  },
  {
    id: 'growth',
    label: 'Growth',
    num: '06',
    video: '/videos/growth video+ reverse.mp4',
    // 06 Growth — dark-red bottom-right cube face center: x≈930, y≈565 in 1456×816
    top: '69%',
    left: '64%',
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
  const [activeCube, setActiveCube] = useState<(typeof CUBES)[0] | null>(null);
  const [hoveredCube, setHoveredCube] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // When a cube is clicked, show video and autoplay
  const openVideo = useCallback((cube: (typeof CUBES)[0]) => {
    setActiveCube(cube);
    setShowVideo(true);
  }, []);

  // When video ends, revert to the cube image
  const handleVideoEnded = useCallback(() => {
    setShowVideo(false);
    setActiveCube(null);
  }, []);

  // Autoplay when video src is ready
  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [showVideo, activeCube]);

  return (
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

      {/* ── RIGHT panel — Cube image + inline video ── */}
      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] as any }}
      >
        <div className={styles.cubeWrapper}>
          {/* ─── Image (shown when no video playing) ─── */}
          <AnimatePresence>
            {!showVideo && (
              <motion.div
                className={styles.imageHolder}
                key="cube-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/strtegy pop.png"
                  alt="IM Solutions – Strategy, Creative, Technology, Media, Production, Growth"
                  fill
                  className={styles.cubeImg}
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                />

                {/* ── Hotspot overlay — positioned over the IMAGE area ── */}
                <div className={styles.hotspotLayer}>
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
            )}
          </AnimatePresence>

          {/* ─── Inline Video (replaces image when playing) ─── */}
          <AnimatePresence>
            {showVideo && activeCube && (
              <motion.div
                className={styles.videoHolder}
                key="cube-video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Label overlay */}
                <div className={styles.videoLabel}>
                  <span className={styles.videoLabelNum}>{activeCube.num}</span>
                  <span className={styles.videoLabelText}>{activeCube.label}</span>
                </div>

                <video
                  ref={videoRef}
                  className={styles.inlineVideo}
                  autoPlay
                  playsInline
                  onEnded={handleVideoEnded}
                  key={activeCube.id}
                >
                  <source src={activeCube.video} type="video/mp4" />
                </video>

                {/* Skip button */}
                <button
                  className={styles.skipBtn}
                  onClick={() => {
                    if (videoRef.current) videoRef.current.pause();
                    setShowVideo(false);
                    setActiveCube(null);
                  }}
                  aria-label="Skip video"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  Skip
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
