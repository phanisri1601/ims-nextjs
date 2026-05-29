"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import styles from "./MissionVision.module.css";

const missionContent = {
    title: "Our Mission",
    description: "Our mission is to create impactful advertising that inspires audiences and delivers measurable results for brands. We strive to develop strategic, performance-driven marketing solutions that go beyond visibility and generate real business growth. By combining creativity with data-led precision, we aim to build strong, lasting partnerships with our clients and help them excel in competitive markets. Through innovation, collaboration, and accountability, we work to leave a meaningful and lasting impact in the advertising world."
};

const visionContent = {
    title: "Our Vision",
    description: "To become the growth engine behind ambitious brands across industries and borders. We envision a future where marketing is not guesswork, but a structured system built on intelligence and creativity. By uniting strategy, data, and bold execution, we aim to help businesses scale with clarity and confidence. Our goal is not just visibility - but sustainable market leadership",
    additionalText: ""
};

export default function MissionVision() {
    return (
        <section className={styles.missionVisionSection}>
            <div className={styles.container}>
                {/* Mission Section - Text left, Image right */}
                <div className={styles.section}>
                    <div className={styles.contentWrapper}>
                        <ScrollReveal direction="right" delay={0.2}>
                            <div className={styles.textContent}>
                                <h2 className={styles.title}>{missionContent.title}</h2>
                                <p className={styles.description}>{missionContent.description}</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="left" delay={0.3}>
                            <motion.div
                                className={styles.imageWrapper}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img
                                    src="/wcu_marketing.png"
                                    alt="Mission"
                                    className={styles.image}
                                />
                            </motion.div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Vision Section - Image left, Text right */}
                <div className={styles.section}>
                    <div className={styles.contentWrapper}>
                        <ScrollReveal direction="right" delay={0.4}>
                            <motion.div
                                className={styles.imageWrapper}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img
                                    src="/wcu_branding.png"
                                    alt="Vision"
                                    className={styles.image}
                                />
                            </motion.div>
                        </ScrollReveal>

                        <ScrollReveal direction="left" delay={0.5}>
                            <div className={styles.textContent}>
                                <h2 className={styles.title}>{visionContent.title}</h2>
                                <p className={styles.description}>{visionContent.description}</p>
                                <p className={styles.additionalText}>{visionContent.additionalText}</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

