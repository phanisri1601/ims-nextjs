"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    {/* Left Content - Image */}
                    <motion.div 
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <TiltImage />
                    </motion.div>

                    {/* Right Content - Text */}
                    <div className={styles.textContent}>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                            className={styles.eyebrow}
                        >
                            ABOUT
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={styles.title}
                        >
                            IM SOLUTIONS
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className={styles.subtitle}
                        >
                            Where we take advertising to the next big level!
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className={styles.description}
                        >
                            <p>
                                With the right advertising, you don&apos;t just get results but you multiply your profits. IM Solutions delivers just that. We are a team of experts creating unconventional ads that truly makes an impression. Our ads are short, simple and straight to the point targeting ideal customers for a faster outcome. From digital space to every nook and corner of the offline market, we cover it all. IM Solutions connects people and businesses across the digital and physical world, powering people-based marketing. Presentation matters! We help brands present themselves better and reach their customers with our advertising expertise. In simple, we amplifying your business and enhance your branding. Why wait when you can start now? Contact us for more details.
                            </p>
                        </motion.div>
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
