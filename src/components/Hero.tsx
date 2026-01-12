'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import styles from './Hero.module.css';
import Background3D from './Background3D';

export default function Hero() {
    const reduceMotion = useReducedMotion();

    const expandVariants: Variants = {
        hidden: { 
            width: 50, 
            height: 50, 
            borderRadius: "25px", 
            opacity: 0 
        },
        visible: { 
            width: ["54px", "min(90vw, 550px)"],
            height: 54, 
            borderRadius: "27px", 
            opacity: 1,
            transition: {
                width: { duration: 0.8, ease: "circOut", delay: 0.5 },
                opacity: { duration: 0.4, delay: 0.3 }
            }
        },
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 2.2,
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
                <div className={styles.searchContainer}>
                    <motion.div
                        className={styles.searchBox}
                        variants={expandVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <FiSearch className={styles.searchIcon} />
                        <div className={styles.searchText}>
                            {reduceMotion ? (
                                <span>Creative marketing solutions...</span>
                            ) : (
                                <TypeAnimation
                                    sequence={[
                                        'Creative marketing solutions...',
                                        1200,
                                        'Digital marketing services...',
                                        1200,
                                        'Branding & design services...',
                                        1200,
                                        'Offline advertising services...',
                                        1200,
                                    ]}
                                    speed={55}
                                    deletionSpeed={40}
                                    repeat={Infinity}
                                    wrapper="span"
                                    cursor={false}
                                />
                            )}
                            <span className={styles.cursor} />
                        </div>
                    </motion.div>
                </div>

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
