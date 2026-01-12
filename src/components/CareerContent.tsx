"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import styles from "./CareerContent.module.css";

type Job = {
    title: string;
    description: string;
};

const jobs: Job[] = [
    {
        title: "Jobs 1",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.",
    },
    {
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien.",
    },
    {
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien.",
    },
    {
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien.",
    },
];

export default function CareerContent() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <ScrollReveal delay={0.1}>
                    <h2 className={styles.heading}>CAREERS</h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <p className={styles.subheading}>
                        Where we take advertising to the next big level!
                    </p>
                </ScrollReveal>

                <div className={styles.grid}>
                    <div className={styles.left}>
                        <ScrollReveal delay={0.3}>
                            <h3 className={styles.sectionTitle}>CURRENT OPENINGS</h3>
                        </ScrollReveal>

                        <div className={styles.accordion}>
                            {jobs.map((job, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <motion.div
                                        key={index}
                                        className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        transition={{ duration: 0.4, delay: 0.1 * index }}
                                    >
                                        <button
                                            className={styles.accordionHeader}
                                            onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        >
                                            <span>{job.title}</span>
                                            <span className={styles.chevron}>{isOpen ? "▾" : "▸"}</span>
                                        </button>
                                        {isOpen && (
                                            <div className={styles.accordionBody}>
                                                <p>{job.description}</p>
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className={styles.right}>
                        <ScrollReveal delay={0.4}>
                            <div className={styles.formCard}>
                                <h3 className={styles.formTitle}>APPLY NOW</h3>
                                <form className={styles.form}>
                                    <div className={styles.inputRow}>
                                        <input type="text" placeholder="NAME*" required />
                                        <input type="email" placeholder="EMAIL*" required />
                                    </div>
                                    <div className={styles.inputRow}>
                                        <input type="text" placeholder="Bengaluru" />
                                        <input type="tel" placeholder="PHONE*" required />
                                    </div>
                                    <div className={styles.inputRow}>
                                        <input type="text" placeholder="APPLY FOR*" required />
                                        <input type="text" placeholder="EXPERIENCE*" />
                                    </div>
                                    <div className={styles.fullRow}>
                                        <input type="file" />
                                    </div>
                                    <div className={styles.fullRow}>
                                        <textarea placeholder="MESSAGE*" rows={4}></textarea>
                                    </div>
                                    <div className={styles.actions}>
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

