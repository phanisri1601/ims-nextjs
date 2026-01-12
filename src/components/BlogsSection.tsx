"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./BlogsSection.module.css";

const blogPosts = [
    { image: "/blog_seo.png", title: "SEO Trends 2025" },
    { image: "/wcu_marketing.png", title: "Strategic Marketing" },
    { image: "/wcu_branding.png", title: "Brand Identity" }
];

export default function BlogsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // 3D Scroll Transformations
    // Left Card: Moves Left & Scales slightly
    const xLeft = useTransform(scrollYProgress, [0.2, 0.8], [0, -160]);
    const scaleSide = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [1, 1.15, 1]);

    // Right Card: Moves Right & Scales slightly
    const xRight = useTransform(scrollYProgress, [0.2, 0.8], [0, 160]);

    // Center Card: Pop Out significantly (Z-axis + Scale)
    const zCenter = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 150, 0]); // Peaks in middle of view
    const scaleCenter = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [1, 1.6, 1]); // Dramatic zoom

    return (
        <section className={styles.section} ref={containerRef}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>INSIGHTS & NEWS</span>
                    <h2 className={styles.title}>Latest From Our Blog</h2>
                </div>

                <div className={styles.gridWrapper}>
                    <div className={styles.grid}>
                        {/* Left Card */}
                        <motion.div
                            className={styles.card}
                            style={{ x: xLeft, scale: scaleSide }}
                        >
                            <img src={blogPosts[0].image} alt={blogPosts[0].title} className={styles.image} />
                            <div className={styles.overlay}>
                                <h3 className={styles.blogTitle}>{blogPosts[0].title}</h3>
                            </div>
                        </motion.div>

                        {/* Center Card */}
                        <motion.div
                            className={styles.card}
                            style={{
                                z: zCenter,
                                scale: scaleCenter,
                                zIndex: 10
                            }}
                        >
                            <img src={blogPosts[1].image} alt={blogPosts[1].title} className={styles.image} />
                            <div className={styles.overlay}>
                                <h3 className={styles.blogTitle}>{blogPosts[1].title}</h3>
                            </div>
                        </motion.div>

                        {/* Right Card */}
                        <motion.div
                            className={styles.card}
                            style={{ x: xRight, scale: scaleSide }}
                        >
                            <img src={blogPosts[2].image} alt={blogPosts[2].title} className={styles.image} />
                            <div className={styles.overlay}>
                                <h3 className={styles.blogTitle}>{blogPosts[2].title}</h3>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <motion.a
                        href="/blog"
                        className={styles.viewAllButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Blogs
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
