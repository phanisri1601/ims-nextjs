"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import styles from "./WantToKnowMore.module.css";

const services = [
    {
        title: "Web Design",
        description: "Crafting immersive digital experiences that captivate and convert.",
        image: "/wcu_branding.png", // Reuse high-quality asset
        link: "services/website-design-development"
    },
    {
        title: "SEO Optimization",
        description: "Driving organic growth with data-driven search strategies.",
        image: "/blog_seo.png", // Reuse high-quality asset
        link: "services/seo"
    },
    {
        title: "Full Stack Marketing ",
        description: "360° campaigns that amplify your brand's voice across all channels.",
        image: "/wcu_marketing.png", // Reuse high-quality asset
        link: "services/digital-marketing-service"
    },
    {
        title: "Brand Identity",
        description: "Building resilient brands with distinctive visual storytelling.",
        image: "/wcu_branding.png",
        link: "services/branding"
    },
    {
        title: "Social Media",
        description: "Transforming audience attention into meaningful brand engagement.",
        image: "/wcu_marketing.png",
        link: "/services/social-media-optimization"
    },
    {
        title: "Content Strategy",
        description: "Compelling narratives that resonate with your target audience.",
        image: "/blog_seo.png",
        link: "services/content"
    }
];

export default function WantToKnowMore() {
    const [activeIndex, setActiveIndex] = useState(0);
    const gridRef = useRef<HTMLDivElement>(null);

    const handleRipple = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const card = e.currentTarget;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        card.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const handleScroll = () => {
            const cardWidth = 350 + 32; // card width + gap
            const scrollLeft = grid.scrollLeft;
            const index = Math.round(scrollLeft / cardWidth);
            setActiveIndex(Math.min(index, services.length - 1));
        };

        grid.addEventListener("scroll", handleScroll);
        return () => grid.removeEventListener("scroll", handleScroll);
    }, []);

    // Auto-scroll functionality - smooth continuous movement
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        let animationId: number;
        let isHovered = false;
        const scrollSpeed = 1; // pixels per frame

        const autoScroll = () => {
            if (!isHovered && grid) {
                const maxScroll = grid.scrollWidth - grid.clientWidth;
                
                // If at the end, reset to start
                if (grid.scrollLeft >= maxScroll - 1) {
                    grid.scrollLeft = 0;
                } else {
                    grid.scrollLeft += scrollSpeed;
                }
                
                // Update active index based on scroll position
                const cardWidth = 350 + 32;
                const index = Math.round(grid.scrollLeft / cardWidth);
                setActiveIndex(Math.min(index, services.length - 1));
            }
            animationId = requestAnimationFrame(autoScroll);
        };

        const handleMouseEnter = () => { isHovered = true; };
        const handleMouseLeave = () => { isHovered = false; };

        grid.addEventListener("mouseenter", handleMouseEnter);
        grid.addEventListener("mouseleave", handleMouseLeave);
        
        // Start immediately
        animationId = requestAnimationFrame(autoScroll);

        return () => {
            cancelAnimationFrame(animationId);
            grid.removeEventListener("mouseenter", handleMouseEnter);
            grid.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const scrollToCard = (index: number) => {
        if (gridRef.current) {
            const cardWidth = 350 + 32;
            gridRef.current.scrollTo({
                left: index * cardWidth,
                behavior: "smooth"
            });
            setActiveIndex(index);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={styles.eyebrow}
                    >
                        EXPLORE OUR EXPERTISE
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={styles.title}
                    >
                        Want To Know More?
                    </motion.h2>
                </div>

                <div className={styles.grid} ref={gridRef}>
                    {services.map((service, index) => (
                        <motion.a
                            href={service.link}
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover="hover"
                        >
                            <div className={styles.imageWrapper}>
                                <img src={service.image} alt={service.title} className={styles.image} />
                                <div className={styles.contentOverlay}>
                                    <h3 className={styles.cardTitle}>{service.title}</h3>
                                    <p className={styles.cardDesc}>{service.description}</p>
                                </div>
                                <div className={styles.arrowOverlay}>
                                    <FaArrowRight className={styles.arrowIcon} />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
