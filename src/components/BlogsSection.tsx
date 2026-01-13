"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./BlogsSection.module.css";

const blogPosts = [
    { image: "/blog_seo.png", title: "SEO Trends 2025" },
    { image: "/wcu_marketing.png", title: "Strategic Marketing" },
    { image: "/wcu_branding.png", title: "Brand Identity" }
];

export default function BlogsSection() {
    const [isDesktop, setIsDesktop] = useState(false);
    const containerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const update = () => setIsDesktop(window.innerWidth >= 769);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xLeft = useTransform(scrollYProgress, [0.2, 0.8], [0, -160]);
    const xRight = useTransform(scrollYProgress, [0.2, 0.8], [0, 160]);
    const scaleSide = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [1, 1.15, 1]);
    const zCenter = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 150, 0]);
    const scaleCenter = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [1, 1.6, 1]);

    const cards = useMemo(
        () => [
            {
                key: "left",
                post: blogPosts[0],
            },
            {
                key: "center",
                post: blogPosts[1],
            },
            {
                key: "right",
                post: blogPosts[2],
            },
        ],
        []
    );

    return (
        <section className={styles.section} ref={containerRef}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>INSIGHTS & NEWS</span>
                    <h2 className={styles.title}>Latest From Our Blog</h2>
                </div>

                <div className={styles.gridWrapper}>
                    <div className={styles.grid}>
                        {cards.map((c) => {
                            if (!isDesktop) {
                                return (
                                    <motion.div
                                        key={c.key}
                                        className={styles.card}
                                        initial={{ opacity: 1, y: 0 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.25 }}
                                        transition={{ duration: 0.45, ease: "easeOut" }}
                                    >
                                        <img src={c.post.image} alt={c.post.title} className={styles.image} />
                                        <div className={styles.overlay}>
                                            <h3 className={styles.blogTitle}>{c.post.title}</h3>
                                        </div>
                                    </motion.div>
                                );
                            }

                            if (c.key === "left") {
                                return (
                                    <motion.div
                                        key={c.key}
                                        className={styles.card}
                                        style={{ x: xLeft, scale: scaleSide }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <img src={c.post.image} alt={c.post.title} className={styles.image} />
                                        <div className={styles.overlay}>
                                            <h3 className={styles.blogTitle}>{c.post.title}</h3>
                                        </div>
                                    </motion.div>
                                );
                            }

                            if (c.key === "right") {
                                return (
                                    <motion.div
                                        key={c.key}
                                        className={styles.card}
                                        style={{ x: xRight, scale: scaleSide }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <img src={c.post.image} alt={c.post.title} className={styles.image} />
                                        <div className={styles.overlay}>
                                            <h3 className={styles.blogTitle}>{c.post.title}</h3>
                                        </div>
                                    </motion.div>
                                );
                            }

                            return (
                                <motion.div
                                    key={c.key}
                                    className={styles.card}
                                    style={{ z: zCenter, scale: scaleCenter, zIndex: 10 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <img src={c.post.image} alt={c.post.title} className={styles.image} />
                                    <div className={styles.overlay}>
                                        <h3 className={styles.blogTitle}>{c.post.title}</h3>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.footer}>
                    {isDesktop ? (
                        <motion.a
                            href="/blog"
                            className={styles.viewAllButton}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All Blogs
                        </motion.a>
                    ) : (
                        <a href="/blog" className={styles.viewAllButton}>
                            View All Blogs
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}
