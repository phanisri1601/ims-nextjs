"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import GSAPScrollReveal from "./GSAPScrollReveal";
import TextReveal from "./TextReveal";
import ImageReveal from "./ImageReveal";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
    return (
        <GSAPScrollReveal className={styles.aboutSection}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    {/* Left Content - Image */}
                    <div className={styles.imageWrapper}>
                        <TiltImage />
                    </div>

                    {/* Right Content - Text */}
                    <div className={styles.textContent}>
                        <TextReveal as="span" animateType="heading" className={styles.eyebrow}>
                            ABOUT
                        </TextReveal>

                        <TextReveal as="h2" animateType="heading" className={styles.title}>
                            IM SOLUTIONS
                        </TextReveal>

                        <TextReveal as="p" animateType="paragraph" className={styles.subtitle}>
                            Where we take advertising to the next big level!
                        </TextReveal>

                        <div className={styles.description}>
                            <TextReveal as="p" animateType="paragraph">
                                With the right advertising, you don&apos;t just get results but you multiply your profits. IM Solutions delivers just that. We are a team of experts creating unconventional ads that truly makes an impression. Our ads are short, simple and straight to the point targeting ideal customers for a faster outcome. From digital space to every nook and corner of the offline market, we cover it all. IM Solutions connects people and businesses across the digital and physical world, powering people-based marketing. Presentation matters! We help brands present themselves better and reach their customers with our advertising expertise. In simple, we amplifying your business and enhance your branding. Why wait when you can start now? Contact us for more details.
                            </TextReveal>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.serviceName}>Digital Marketing</div>
        </GSAPScrollReveal>
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
                <div
                    className={styles.imageBackground}
                    role="img"
                    aria-label="IM Solutions banner"
                />
            </motion.div>
        </motion.div>
    );
}

// Service name is rendered as an overlay in the banner (left bottom)
