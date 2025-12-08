"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import styles from "./MissionVision.module.css";

const missionContent = {
    title: "MISSON",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum enim, deleniti fuga magnam soluta eveniet omnis dicta pariatur odio nisi accusantium neque molestiae ullam! Dicta corrupti nulla voluptates commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas illo facere eos perferendis! Fuga possimus laboriosam placeat consectetur quidem illo commodi deserunt, totam iste dolor est dolore vero maiores iure!"
};

const visionContent = {
    title: "VISION",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum enim, deleniti fuga magnam soluta eveniet omnis dicta pariatur odio nisi accusantium neque molestiae ullam! Dicta corrupti nulla voluptates commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas illo facere eos perferendis! Fuga possimus laboriosam placeat consectetur quidem illo commodi deserunt, totam iste dolor est dolore vero maiores iure!",
    additionalText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum enim, deleniti fuga magnam soluta eveniet omnis dicta pariatur odio nisi accusantium neque molestiae ullam! Dicta corrupti nulla voluptates commodi?"
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
                        <ScrollReveal direction="left" delay={0.4}>
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

                        <ScrollReveal direction="right" delay={0.5}>
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

