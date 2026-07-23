'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import CountUp from "./CountUp";
import ScrollReveal from "./ScrollReveal";
import styles from "./ClientsShowcase.module.css";

const bg = (filename: string) => `/clients-showcase/${filename}`;

const industries = [
  { label: "Real Estate", image: bg("real-estate.png") },
  { label: "Jewellery", image: bg("jewellery.png") },
  { label: "Healthcare", image: bg("healthcare.png") },
  { label: "Retail", image: bg("retail.png") },
  { label: "Technology", image: bg("technology.png") },
  { label: "Education", image: bg("education.png") },
  { label: "Hospitality", image: bg("hospitality.png") },
  { label: "Lifestyle", image: bg("lifestyle.png") },
];

const clientStories = [
  {
    logo: "/clients/prestigegroup.png",
    name: "Prestige Group",
    text: "A long-standing real estate partner across brand campaigns and digital growth.",
  },
  {
    logo: "/clients/tatahousing.png",
    name: "Tata Housing",
    text: "Supporting brand consistency and digital presence across multiple project launches.",
  },
  {
    logo: "/clients/brigade.png",
    name: "Brigade Group",
    text: "Collaborating on integrated marketing for residential and commercial developments.",
  },
];

const stats = [
  { value: 12, suffix: "+", label: "Years Of Experience" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 40, suffix: "+", label: "Satisfied Clients" },
  { value: 8, suffix: "", label: "Industries Served" },
];

const partnerLogos = [
  "prestigegroup.png",
  "kotak.png",
  "tatahousing.png",
  "brigade.png",
  "sjr.png",
  "houseofhiranandani.png",
  "lakmesalon.png",
  "caratlane.png",
  "homelane.png",
  "RMZcorp.png",
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggered = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export default function ClientsShowcase() {
  return (
    <div className={styles.showcase}>
      {/* 1. Hero — The Showcase */}
      <section className={styles.hero} style={{ backgroundImage: `url(${bg("hero.png")})` }}>
        <div className={styles.heroInner}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggered}
          >
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              Our Clients
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              The Showcase
            </motion.h1>
            <motion.p className={styles.heroDesc} variants={fadeUp}>
              Partnerships that inspire. Work that drives impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Industries We Serve */}
      <section className={styles.section}>
        <ScrollReveal delay={0.15} direction="up">
          <div className={styles.sectionInner}>
            <span className={styles.eyebrow}>Industries We Serve</span>
            <motion.div
              className={styles.industriesGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggered}
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.label}
                  className={`${styles.industryTile} ${industry.label === 'Education' ? styles.educationTile : ''}`}
                  variants={fadeIn}
                  transition={{ delay: index * 0.06 }}
                >
                  <img
                    src={industry.image}
                    alt={industry.label}
                    className={styles.industryImage}
                  />
                  <span className={styles.industryLabel}>{industry.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. Featured Work */}
      <section className={styles.section}>
        <ScrollReveal delay={0.18} direction="up">
          <div className={styles.sectionInner}>
            <div className={styles.featuredHead}>
              <span className={styles.eyebrow}>Featured Work</span>
              <div className={styles.featuredNav} aria-hidden="true">
                <span className={styles.navCircle}>
                  <FiArrowLeft />
                </span>
                <span className={styles.navCircle}>
                  <FiArrowRight />
                </span>
              </div>
            </div>
            <motion.div
              className={styles.featuredBody}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggered}
            >
              <motion.div
                className={styles.featuredImage}
                style={{ backgroundImage: `url(${bg("featured-jewellery.png")})` }}
                variants={fadeIn}
              />
              <motion.div className={styles.featuredContent} variants={fadeIn}>
                <h3 className={styles.featuredTitle}>Jewellery &amp; Luxury Retail</h3>
                <p className={styles.featuredDesc}>
                  Crafting refined identities and digital campaigns for fine jewellery and luxury
                  retail brands — from product storytelling to performance-driven visibility.
                </p>
                <Link href="/services" className={styles.featuredLink}>
                  Explore Our Services <span aria-hidden="true">&rarr;</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. Client Stories */}
      <section
        className={styles.storiesSection}
        style={{ backgroundImage: `url(${bg("stories-bg.png")})` }}
      >
        <ScrollReveal delay={0.2} direction="up">
          <div className={styles.sectionInner}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggered}
            >
              <motion.span className={styles.eyebrow} variants={fadeUp}>
                Client Stories
              </motion.span>
              <div className={styles.storiesGrid}>
                {clientStories.map((story, index) => (
                  <motion.div
                    key={story.name}
                    className={styles.storyCard}
                    variants={fadeIn}
                    transition={{ delay: index * 0.08 }}
                  >
                    <img src={story.logo} alt={story.name} className={styles.storyLogo} />
                    <p className={styles.storyText}>{story.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. Partnerships stats */}
      <section
        className={styles.statsSection}
        style={{ backgroundImage: `url(${bg("stats-bg.png")})` }}
      >
        <ScrollReveal delay={0.22} direction="up">
          <div className={styles.sectionInner}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggered}
            >
              <motion.span className={styles.eyebrow} variants={fadeUp}>
                Partnerships That Create Impact
              </motion.span>
              <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className={styles.statBlock}
                    variants={fadeIn}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className={styles.statValue}>
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. Let's Build Together — Final CTA */}
      <section className={styles.ctaSection} style={{ backgroundImage: `url(${bg("cta-bg.png")})` }}>
        <ScrollReveal delay={0.25} direction="up">
          <motion.div
            className={styles.sectionInner}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggered}
          >
            <motion.div className={styles.ctaGrid} variants={staggered}>
              <motion.div variants={fadeUp}>
                <h3 className={styles.ctaTitle}>
                  Let&apos;s Build Something Extraordinary Together.
                </h3>
                <Link href="/contact" className={styles.ctaLink}>
                  Let&apos;s Talk <span aria-hidden="true">&rarr;</span>
                </Link>
              </motion.div>
              <motion.div variants={fadeUp}>
                <span className={styles.ctaLabel}>Brands We&apos;ve Partnered With</span>
                <motion.div className={styles.ctaLogos} variants={staggered}>
                  {partnerLogos.map((logo, index) => (
                    <motion.div
                      key={logo}
                      className={styles.ctaLogoChip}
                      variants={fadeIn}
                      transition={{ delay: index * 0.04 }}
                    >
                      <img src={`/clients/${logo}`} alt="" className={styles.ctaLogo} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </section>
    </div>
  );
}
