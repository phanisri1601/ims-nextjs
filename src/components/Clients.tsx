"use client";

import ScrollReveal from './ScrollReveal';
import styles from './Clients.module.css';

// Mock Client Logos (Using image as requested)
const clients = Array(12).fill("/client1.png");

// Duplicate list for infinite scroll
const marqueeClients = [...clients, ...clients];

export default function Clients() {
    return (
        <section className={styles.clients}>
            <div className="container">
                <ScrollReveal delay={0.2}>
                    <h2 className="section-title">OUR CLIENTS</h2>
                    <p className={styles.subtitle}>
                        Trusted by leading brands across industries
                    </p>
                </ScrollReveal>
            </div>

            {/* Infinite Marquee Container */}
            <div className={styles.marquee}>
                <div className={styles.track}>
                    {marqueeClients.map((client, index) => (
                        <div key={index} className={styles.clientCard}>
                            <div className={styles.clientLogo}>
                                <img
                                    src={client}
                                    alt={`Client ${index + 1}`}
                                    className={styles.logoImage}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
