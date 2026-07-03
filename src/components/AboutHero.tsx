'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FiSearch, FiTarget, FiBox, FiSend, FiZap } from 'react-icons/fi';
import styles from './AboutHero.module.css';

const colorStory = [
  {
    num: '01',
    title: 'CLARITY',
    desc: 'Every journey begins with clarity of purpose.',
    img: '/Z1.png',
    icon: <FiSearch />,
  },
  {
    num: '02',
    title: 'GROWTH',
    desc: 'We turn insight into strategy that drives meaningful growth.',
    img: '/Z2.png',
    icon: <FiZap />,
  },
  {
    num: '03',
    title: 'PRECISION',
    desc: 'Precision in every detail creates powerful brand experiences.',
    img: '/Z3.png',
    icon: <FiTarget />,
  },
  {
    num: '04',
    title: 'LEGACY',
    desc: 'Great brands create impact that lasts beyond time.',
    img: '/Z4.png',
    icon: <FiBox />,
  },
  {
    num: '05',
    title: 'ACTION',
    desc: 'We move brands forward with bold ideas and fearless execution.',
    img: '/Z5.png',
    icon: <FiSend />,
  },
];

const processSteps = [
  { label: 'DISCOVER', icon: <FiSearch /> },
  { label: 'STRATEGIZE', icon: <FiTarget /> },
  { label: 'CREATE', icon: <FiBox /> },
  { label: 'LAUNCH', icon: <FiSend /> },
  { label: 'LEAVE IMPACT', icon: <FiZap /> },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] } },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay, ease: 'easeOut' } },
});

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      {/* ── Main 3-column grid ── */}
      <div className={styles.heroGrid}>

        {/* LEFT — Philosophy */}
        <motion.div
          className={styles.leftPanel}
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
        >
          <motion.span className={styles.eyebrow} variants={fadeIn(0)}>OUR PHILOSOPHY</motion.span>

          <motion.h1 className={styles.heroTitle} variants={fadeUp(0.1)}>
            Every brand<br />follows a journey.<br />
            <span className={styles.redLine}>We design it.</span>
          </motion.h1>

          <motion.p className={styles.heroDesc} variants={fadeUp(0.25)}>
            At IM Solutions, we combine strategy,<br />
            creativity and technology to build<br />
            brands that grow, influence<br />
            and leave a legacy.
          </motion.p>

          <motion.div className={styles.imWatermark} variants={fadeIn(0.4)}>IM</motion.div>

          <motion.a href="/services" className={styles.exploreLink} variants={fadeUp(0.45)}>
            EXPLORE OUR SYSTEM <FiArrowRight className={styles.arrowIcon} />
          </motion.a>
        </motion.div>

        {/* CENTER — Cube */}
        <motion.div
          className={styles.centerPanel}
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.cubeWrapper}>
            <Image
              src="/Cube.jpeg"
              alt="Brand journey cubes – Clarity, Growth, Precision, Legacy"
              fill
              className={styles.cubeImage}
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT — Color Story */}
        <div className={styles.rightPanel}>
          <motion.div
            className={styles.colorStoryHeader}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            OUR COLOR STORY
          </motion.div>

          <div className={styles.colorStoryList}>
            {colorStory.map((item, i) => (
              <motion.div
                key={item.title}
                className={`${styles.colorStoryItem} ${i === 0 ? styles.themeLight : styles.themeDark}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Full-bleed background image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className={styles.storyBgImg}
                />
                {/* Overlay slot (display: none by default) */}
                <div className={styles.storyBgOverlay} />
                {/* Content on top */}
                <div className={styles.colorStoryText}>
                  <span className={styles.storyNum}>{item.num}</span>
                  <strong className={styles.storyTitle}>{item.title}</strong>
                  <p className={styles.storyDesc}>{item.desc}</p>
                </div>
                <div className={styles.storyIconWrap}>{item.icon}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Process Bar ── */}
      <motion.div
        className={styles.processBar}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
      >
        <div className={styles.processLeft}>
          <span className={styles.processTagline}>STRATEGY<br />TO LEGACY.</span>
          <span className={styles.processSub}>WE BUILD WHAT<br />MATTERS.</span>
        </div>

        <div className={styles.processSteps}>
          {processSteps.map((step, i) => (
            <div key={step.label} className={styles.processStep}>
              <span className={styles.processStepIcon}>{step.icon}</span>
              <span className={styles.processStepLabel}>{step.label}</span>
              {i < processSteps.length - 1 && <span className={styles.processDivider}>—</span>}
            </div>
          ))}
        </div>

        <div className={styles.processRight}>
          <span className={styles.processEnd}>ONE SYSTEM.<br />ENDLESS IMPACT.</span>
          <span className={styles.processIM}>IM</span>
        </div>
      </motion.div>
    </section>
  );
}
