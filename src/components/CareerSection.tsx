"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./CareerSection.module.css";

export default function CareerSection() {
    const buttonRef = useRef<HTMLAnchorElement>(null);

    const handleRipple = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.title}
                >
                    CAREER
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.text}
                >
                    Interested in joining our phenomenal family? As a rapidly growing company, we are always on the lookout for young, energetic and creative people to help us maintain our reputation as the most trustworthy web design and digital marketing agency.

If you want to showcase your creative side and have an eye for detail, then you are welcome to join us. We want to be awed by your passion for creativity and artistic expertise!


                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={styles.text}
                >
                    Currently, we have vacancies across different disciplines - Social media marketing, Search engine optimization, Web design and development, Content writing, Graphic and web designing, Digital marketing manager, HR executive, and many other profiles.

Only full-time candidates are encouraged to apply. If you are interested, fill in the form below and we'll be in touch with you shortly.
                </motion.p>

                <motion.a
                    href="/careers"
                    className={styles.applyButton}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    APPLY
                </motion.a>
            </div>
        </section>
    );
}
