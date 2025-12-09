"use client";

import { motion } from "framer-motion";
import styles from "./CareerSection.module.css";

export default function CareerSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.title}
                >
                    CAREER
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.text}
                >
                    Interested in joining our phenomenal family? As a rapidly expanding company, we are always on the lookout for young, energetic and creative blood to help us maintain our reputation as the most trendy web design and digital marketing agency.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={styles.text}
                >
                    If you want to explore your creative side and have an eye for detail, then you are welcome to join us. We want to be awed by your passion for creativity and artistic expertise!
                </motion.p>

                <motion.a
                    href="/careers"
                    className={styles.applyButton}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    APPLY
                </motion.a>
            </div>
        </section>
    );
}
