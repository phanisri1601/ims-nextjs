'use client';

import { motion } from 'framer-motion';
import styles from './AboutHero.module.css';

export default function AboutHero() {
    return (
        <section className={styles.aboutHero}>
            <motion.div
                className={styles.backgroundImage}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            ></motion.div>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    ABOUT US
                </motion.h1>
                <motion.nav
                    className={styles.breadcrumb}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a href="/">Home</a>
                    <span> / </span>
                    <span>About Us</span>
                </motion.nav>
            </div>
        </section>
    );
}
