'use client';

import { FaArrowRight } from 'react-icons/fa';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './CareersPage.module.css';

export default function CareersPage() {
  return (
    <main className={styles.container}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <ScrollReveal delay={0.1} direction="up">
            <div className={styles.heroLeftEyebrow}>CAREERS AT IM SOLUTIONS</div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} direction="up">
            <h1 className={styles.heroTitle}>
              Build your story.<br />
              Shape what&apos;s next.
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3} direction="up">
            <div className={styles.heroVerticalLine}></div>
            <p className={styles.heroDescription}>
              At IM Solutions, we don&apos;t just create solutions for our clients &mdash; we build careers that create impact.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} direction="up">
            <button
              type="button"
              className={styles.exploreBtn}
              onClick={() => document.getElementById('culture')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className={styles.iconCircle}>
                <FaArrowRight />
              </div>
              EXPLORE OPPORTUNITIES
            </button>
          </ScrollReveal>
        </div>

        <div className={styles.heroRightContent}>
          <ScrollReveal delay={0.5} direction="left">
            <div className={styles.rightItem}>PEOPLE</div>
          </ScrollReveal>
          <ScrollReveal delay={0.6} direction="left">
            <div className={styles.rightItem}>IDEAS</div>
          </ScrollReveal>
          <ScrollReveal delay={0.7} direction="left">
            <div className={styles.rightItem}>IMPACT</div>
            <div className={styles.heroRightVerticalLine}></div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. CULTURE SECTION */}
      <section id="culture" className={styles.cultureSection}>
        <div className={styles.cultureLeft}>
          <ScrollReveal delay={0.2} direction="up" className={styles.cultureLeftContent}>
            <div className={styles.cultureEyebrow}>OUR CULTURE</div>
            <div className={styles.cultureTitleLine}></div>
            <h2 className={styles.cultureTitle}>
              Where talent<br />
              thrives and<br />
              ideas evolve.
            </h2>
            <div className={styles.cultureTitleLine}></div>
            <p className={styles.cultureDesc}>
              A culture of trust, freedom, and responsibility. A space to grow, to think, to create and to lead.
            </p>
          </ScrollReveal>
        </div>
        
        <div className={styles.cultureRight}>
          <div className={styles.valuesGridTop}>
            <ScrollReveal delay={0.1} direction="up" className={styles.valueCard}>
              <h3 className={styles.valueTitle}>GROWTH</h3>
              <p className={styles.valueDesc}>
                We invest in your growth with continuous learning and real opportunities.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="up" className={styles.valueCard}>
              <h3 className={styles.valueTitle}>EXCELLENCE</h3>
              <p className={styles.valueDesc}>
                We hold ourselves to the highest standards in everything we do.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} direction="up" className={styles.valueCard}>
              <h3 className={styles.valueTitle}>COLLABORATION</h3>
              <p className={styles.valueDesc}>
                Great ideas come from diverse minds working towards one goal.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.valuesGridBottom}>
            <ScrollReveal delay={0.4} direction="up" className={styles.valueCard}>
              <h3 className={styles.valueTitle}>PURPOSE</h3>
              <p className={styles.valueDesc}>
                We work on meaningful projects that create real-world impact.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5} direction="up" className={styles.valueCard}>
              <h3 className={styles.valueTitle}>FREEDOM</h3>
              <p className={styles.valueDesc}>
                We empower you to think, create and lead with ownership.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION */}
      <section className={styles.statsSection}>
        <div className={styles.statsContentWrapper}>
          <div className={styles.statsLeft}>
            <ScrollReveal delay={0.2} direction="up">
              <h2 className={styles.statsTitle}>
                TOGETHER,<br />
                WE CREATE IMPACT<br />
                THAT LASTS.
              </h2>
              <div className={styles.statsArrow}>
                <FaArrowRight />
              </div>
            </ScrollReveal>
          </div>
          
          <div className={styles.statsRight}>
            <div className={styles.statsGrid}>
              <ScrollReveal delay={0.1} direction="up" className={styles.statItem}>
                <div className={styles.statNumber}>250+</div>
                <div className={styles.statLabel}>PROJECTS DELIVERED</div>
              </ScrollReveal>
              <ScrollReveal delay={0.2} direction="up" className={styles.statItem}>
                <div className={styles.statNumber}>25+</div>
                <div className={styles.statLabel}>NATIONALITIES</div>
              </ScrollReveal>
              <ScrollReveal delay={0.3} direction="up" className={styles.statItem}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>YEARS OF IMPACT</div>
              </ScrollReveal>
              <ScrollReveal delay={0.4} direction="up" className={styles.statItem}>
                <div className={styles.statNumber}>Endless</div>
                <div className={styles.statLabel}>POSSIBILITIES</div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
