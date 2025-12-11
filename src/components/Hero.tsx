'use client';

import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import styles from './Hero.module.css';
import Background3D from './Background3D';

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 20,
            },
        },
    };

    const textVariants: Variants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                delay: 0.8,
            },
        },
    };

    return (
        <section className={styles.hero}>
            <Background3D />
            <div className="container">
                <motion.div
                    className={styles.heroContent}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 className={styles.heroTitle} variants={itemVariants}>
                        Best Advertising Agency in{' '}
                        <motion.span
                            className={styles.animatedText}
                            variants={textVariants}
                        >
                            Bangalore
                        </motion.span>
                    </motion.h1>

                    <motion.p className={styles.heroDescription} variants={itemVariants}>
                        We are a full-service creative powerhouse dedicated to transforming brands through innovative strategies, stunning design, and data-driven marketing. From digital dominance to traditional excellence, we craft campaigns that resonate and convert.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <a href="/contact" className={styles.ctaButton}>
                            Enquiry Now
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
