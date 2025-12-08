"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    {/* Left Content - Text */}
                    <div className={styles.textContent}>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className={styles.eyebrow}
                        >
                            ABOUT IM SOLUTIONS
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={styles.title}
                        >
                            <span className={styles.gradientText}>IM SOLUTIONS</span>
                            <br />

                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className={styles.description}
                        >
                            <p>
                                With the right advertising, you don&apos;t just get results but you <span className={styles.highlight}>multiply your profits.</span> IM Solutions delivers just that. We are a team of experts creating unconventional ads that truly makes an impression.
                            </p>
                            <p>
                                Our ads are short, simple and straight to the point targeting ideal customers for a faster outcome. From digital space to every nook and corner of the offline market, we cover it all. IM Solutions connects people and businesses across the digital and physical world, powering people-based marketing.
                            </p>

                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            className={styles.ctaButton}
                        >
                            Get Started Now
                            <FaArrowRight />
                        </motion.button>
                    </div>

                    {/* Right Content - 3D Animated Image */}
                    <div className={styles.imageWrapper}>
                        <TiltImage />
                    </div>
                </div>
            </div>
        </section>
    );
}

function TiltImage() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Mouse tilt logic
    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        // Calculate mouse position relative to center of element (-0.5 to 0.5)
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className={styles.imageContainer}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
            }}
        >
            {/* Adding a float animation layer on top of the tilt */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ width: "100%", height: "100%" }}
            >
                <img
                    src="/image copy.png"
                    alt="IM Solutions Office"
                    className={styles.image}
                />
            </motion.div>
        </motion.div>
    );
}
