'use client';

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import styles from './FAQ.module.css';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: 'Which is the best advertising agency in Bangalore?',
            answer: 'IM Solutions is recognized as one of the best advertising agencies in Bangalore, offering comprehensive 360° marketing solutions, creative design services, and proven lead generation strategies. With 7+ years of experience and 300+ satisfied clients, we deliver exceptional results for brands across all industries.'
        },
        {
            question: 'Why an advertising agency is important for business growth?',
            answer: 'An advertising agency brings specialized expertise, creative talent, and strategic insights that help businesses reach their target audience effectively. We provide access to cutting-edge tools, industry knowledge, and proven strategies that accelerate brand growth, increase market visibility, and drive measurable ROI.'
        },
        {
            question: 'Why should start-ups hire an advertising agency?',
            answer: 'Start-ups benefit immensely from hiring an advertising agency as it provides cost-effective access to professional marketing expertise without the overhead of building an in-house team. We help startups establish strong brand identity, reach their target market efficiently, and scale their marketing efforts as they grow.'
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.faq}>
            <div className="container">
                <ScrollReveal delay={0.2}>
                    <h2 className="section-title">ADVERTISING FAQ&apos;s</h2>
                </ScrollReveal>

                <div className={styles.faqContainer}>
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={0.3 + index * 0.15}>
                            <div
                                className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span>{faq.question}</span>
                                    <span className={styles.icon}>
                                        {openIndex === index ? <FaMinus /> : <FaPlus />}
                                    </span>
                                </button>
                                <div className={styles.faqAnswer}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
