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
        title: "Vice President – Corporate Sales",
        description: "Lead corporate sales initiatives and drive business growth."
    },
    {
        title: "Visual Content Creator",
        description: "Create engaging visual content for digital marketing campaigns."
    },
    {
        title: "SR Graphic Designer",
        description: "Create visual graphics and design materials for marketing campaigns."
    },
    {
        title: "Campaign Manager",
        description: "Plan and execute marketing campaigns across various channels."
    },
    {
        title: "Marketing Operations Executive",
        description: "Oversee marketing operations and optimize campaign performance."
    },
    {
        title: "Content Writer",
        description: "Create compelling content for marketing and communication."
    },
    {
        title: "Business Development Associate",
        description: "Support business development and partnership initiatives."
    },
    {
        title: "SEO Analyst",
        description: "Analyze SEO performance and recommend optimization strategies."
    },
    {
        title: "SEO Executive",
        description: "Optimize website content and improve search engine rankings."
    },
    {
        title: "Junior Graphic Designer",
        description: "Assist in creating visual assets and design materials."
    },
    {
        title: "Web Developer",
        description: "Develop and maintain websites and web applications."
    },
    {
        title: "Business Development Manager",
        description: "Lead business development strategies and partnership opportunities."
    },
    {
        title: "Associate Campaign Manager",
        description: "Support campaign planning and execution activities."
    }
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
                                    <input type="text" placeholder="EXPERIENCE*" required />
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
        </section>
    );
}
