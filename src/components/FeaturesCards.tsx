"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import styles from "./FeaturesCards.module.css";

const features = [
    {
        title: "Free consultation",
        description: "Quis autem velo eum iure molestiae suam nihil molestiae."
    },
    {
        title: "Qualified attorneys",
        description: "Quis autem velo eum iure molestiae suam nihil molestiae."
    },
    {
        title: "Proven results",
        description: "Quis autem velo eum iure molestiae suam nihil molestiae."
    },
    {
        title: "Legal information",
        description: "Quis autem velo eum iure molestiae suam nihil molestiae."
    }
];

export default function FeaturesCards() {
    return (
        <section className={styles.featuresSection}>
            <div className={styles.container}>
                <ScrollReveal delay={0.1}>
                    <h2 className={styles.smallTitle}>Lorem Lipsom</h2>
                    <h3 className={styles.mainTitle}>Lorem Lipsom</h3>
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
                                    <svg
                                        width="80"
                                        height="80"
                                        viewBox="0 0 80 80"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {/* Lightbulb with radiating lines */}
                                        <circle cx="40" cy="40" r="35" stroke="#999" strokeWidth="1.5" fill="none" />
                                        {/* Bulb shape */}
                                        <path
                                            d="M40 20 C35 20, 30 25, 30 32 C30 35, 32 38, 35 40"
                                            stroke="#666"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            fill="none"
                                        />
                                        <path
                                            d="M40 20 C45 20, 50 25, 50 32 C50 35, 48 38, 45 40"
                                            stroke="#666"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            fill="none"
                                        />
                                        <path
                                            d="M35 40 L30 48 L35 50 L45 50 L50 48 L45 40"
                                            stroke="#666"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                        />
                                        {/* Base */}
                                        <rect x="35" y="50" width="10" height="8" stroke="#666" strokeWidth="2.5" fill="none" rx="1" />
                                        {/* Radiating lines */}
                                        <line x1="5" y1="40" x2="15" y2="40" stroke="#666" strokeWidth="2" strokeLinecap="round" />
                                        <line x1="65" y1="40" x2="75" y2="40" stroke="#666" strokeWidth="2" strokeLinecap="round" />
                                        <line x1="40" y1="5" x2="40" y2="15" stroke="#666" strokeWidth="2" strokeLinecap="round" />
                                        <line x1="40" y1="65" x2="40" y2="75" stroke="#666" strokeWidth="2" strokeLinecap="round" />
                                        <line x1="15.86" y1="15.86" x2="23.43" y2="23.43" stroke="#666" strokeWidth="2" strokeLinecap="round" />
                                        <line x1="56.57" y1="56.57" x2="64.14" y2="64.14" stroke="#666" strokeWidth="2" strokeLinecap="round" />
                                        <line x1="15.86" y1="64.14" x2="23.43" y2="56.57" stroke="#666" strokeWidth="2" strokeLinecap="round" />
                                        <line x1="56.57" y1="23.43" x2="64.14" y2="15.86" stroke="#666" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
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

