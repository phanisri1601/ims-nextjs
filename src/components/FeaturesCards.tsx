"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import styles from "./FeaturesCards.module.css";

const features = [
    {
        title: "Enhanced Online Visibility",
        description: "Stand out where it matters most - online.We combine SEO, content, social strategy, and performance campaigns to place your brand exactly where your audience is searching. From visibility to credibility, we build digital presence that converts attention into authority and results"
    },
    {
        title: "Extensive Offline Presence",
        description: "Strong brands build presence beyond screens. Through strategic offline campaigns, we create impactful experiences that engage audiences where it matters most. With smart targeting and deep market understanding, we expand your brand’s reach across cities, regions, and global markets."
    },
    {
        title: "Accelerated Marketing",
        description: "Growth happens faster when strategy works together.We integrate online and offline marketing into one seamless system that drives momentum at every stage of the customer journey.The result? Stronger engagement, smarter positioning, and sustainable brand growth."
    }
];

export default function FeaturesCards() {
    return (
        <section className={styles.featuresSection}>
            <div className={styles.container}>
                <ScrollReveal delay={0.1}>

                    <h3 className={styles.mainTitle}>Powering Brand Growth</h3>
                </ScrollReveal>

                <div className={styles.cardsGrid}>
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                            <motion.div
                                className={styles.card}
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.iconWrapper}>
                                    <div className={styles.imagePlaceholder} />
                                </div>
                                <h4 className={styles.cardTitle}>{feature.title}</h4>
                                <p className={styles.cardDescription}>{feature.description}</p>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.6}>
                    <div className={styles.divider}>
                        <span className={styles.dividerLine}></span>
                        <p className={styles.dividerText}>Committed to providing solutions for commercial affairs</p>
                        <span className={styles.dividerLine}></span>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

