"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./IMSystemSection.module.css";

interface Panel {
    id: string;
    num: string;
    label: string;
    heading: string[]; // rendered as separate lines
    content: string[]; // paragraphs
    quote?: string;
    accent: string; // tint used for this stage's visual card
}

const SYSTEM: Panel = {
    id: "system",
    num: "00",
    label: "The IM System™",
    heading: ["One System.", "Infinite Possibilities."],
    content: [
        "A structured framework that moves every project through six interconnected stages, turning ideas into measurable business growth.",
    ],
    quote: "Not scattered. Not reactive. Designed to perform.",
    accent: "#1a1a1a",
};

const STAGES: Panel[] = [
    {
        id: "discover",
        num: "01",
        label: "Discover",
        heading: ["Every Great Brand Begins", "With Understanding."],
        content: [
            "We study markets before we shape messages — market research, consumer behaviour and brand discovery workshops uncover the opportunities others overlook.",
        ],
        quote: "The strongest ideas rarely come first.",
        accent: "#B5895B",
    },
    {
        id: "strategize",
        num: "02",
        label: "Strategize",
        heading: ["Clarity Creates Direction."],
        content: [
            "Brand positioning, communication strategy and go-to-market planning — every decision engineered to move your business towards measurable growth.",
        ],
        quote: "Without strategy, creativity becomes decoration.",
        accent: "#28425E",
    },
    {
        id: "create",
        num: "03",
        label: "Create",
        heading: ["Ideas Deserve", "Extraordinary Execution."],
        content: [
            "Brand identities, campaigns, websites and digital experiences — work that's visually compelling and commercially effective.",
        ],
        quote: "Beautiful design earns attention. Meaningful design earns loyalty.",
        accent: "#5B3A6B",
    },
    {
        id: "amplify",
        num: "04",
        label: "Amplify",
        heading: ["Visibility Without Strategy", "Is Noise."],
        content: [
            "Performance advertising, SEO, SEM and social — reaching the right audience with the right message at the right moment.",
        ],
        accent: "#1E6E63",
    },
    {
        id: "scale",
        num: "05",
        label: "Scale",
        heading: ["Growth Is Never", "An Accident."],
        content: [
            "Performance analytics, optimisation and automation — growing your business with confidence and consistency.",
        ],
        quote: "Brands that thrive don't advertise more. They improve continuously.",
        accent: "#1F5C3C",
    },
    {
        id: "legacy",
        num: "06",
        label: "Legacy",
        heading: ["The Greatest Brands", "Outlive Campaigns."],
        content: [
            "We build businesses that continue to create value, influence industries and stay relevant for years to come.",
        ],
        quote: "Campaigns create conversations. Brands create memories.",
        accent: "#8A6D1E",
    },
];

const headerStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as any } },
};

function StageVisual({ panel, className }: { panel: Panel; className: string }) {
    return (
        <div
            className={className}
            style={{
                background: `radial-gradient(120% 120% at 25% 20%, ${panel.accent}2e 0%, ${panel.accent}12 45%, #ffffff 100%)`,
            }}
        >
            <span className={styles.ghostNumber} style={{ color: `${panel.accent}26` }}>
                {panel.num}
            </span>
        </div>
    );
}

export default function IMSystemSection() {
    const prefersReducedMotion = useReducedMotion();
    const viewport = { once: true, amount: 0.3 as const };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* ── Header — system overview ── */}
                <motion.div
                    className={styles.header}
                    initial={prefersReducedMotion ? undefined : "hidden"}
                    whileInView={prefersReducedMotion ? undefined : "visible"}
                    viewport={viewport}
                    variants={headerStagger}
                >
                    <motion.span variants={fadeUp} className={styles.label}>
                        {SYSTEM.label}
                    </motion.span>

                    <motion.h2 variants={fadeUp} className={styles.heading}>
                        {SYSTEM.heading.map((line) => (
                            <span key={line} className={styles.headingLine}>{line}</span>
                        ))}
                    </motion.h2>

                    {SYSTEM.content.map((paragraph) => (
                        <motion.p key={paragraph} variants={fadeUp} className={styles.paragraph}>
                            {paragraph}
                        </motion.p>
                    ))}

                    {SYSTEM.quote && (
                        <motion.p variants={fadeUp} className={styles.quote}>
                            {SYSTEM.quote}
                        </motion.p>
                    )}
                </motion.div>

                {/* ── Stages — a normal, editorial scrolling timeline (no pin, no scroll-jacking) ── */}
                <div className={styles.stages}>
                    {STAGES.map((panel, i) => (
                        <motion.div
                            key={panel.id}
                            className={styles.stageRow}
                            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 36 }}
                            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                            viewport={viewport}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any, delay: i % 2 === 0 ? 0 : 0.05 }}
                        >
                            <StageVisual panel={panel} className={styles.stageVisual} />
                            <div className={styles.stageContent}>
                                <span className={styles.stageLabel}>{panel.label}</span>
                                <h3 className={styles.stageHeading}>
                                    {panel.heading.map((line) => (
                                        <span key={line} className={styles.headingLine}>{line}</span>
                                    ))}
                                </h3>
                                {panel.content.map((paragraph) => (
                                    <p key={paragraph} className={styles.stageParagraph}>
                                        {paragraph}
                                    </p>
                                ))}
                                {panel.quote && <p className={styles.stageQuote}>{panel.quote}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
