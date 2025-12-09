"use client";

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
        title: "Digital Marketing",
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
        description: "Engaging communities with creative content and strategic outreach.",
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

                <div className={styles.grid}>
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
                                {/* The Hover Arrow Overlay */}
                                <div className={styles.arrowOverlay}>
                                    <FaArrowRight className={styles.arrowIcon} />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.description}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
