'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section className={styles.contact}>
            <div className="container">
                <ScrollReveal delay={0.2}>
                    <h2 className="section-title">Get In Touch</h2>
                    <p className={styles.subtitle}>
                        Let&apos;s discuss how we can help your brand grow
                    </p>
                </ScrollReveal>

                <div className={styles.contactContainer}>
                    <ScrollReveal delay={0.3} direction="left">
                        <div className={styles.contactInfo}>
                            <h3 className={styles.infoTitle}>IM Solutions</h3>
                            <p className={styles.infoDescription}>
                                Your trusted partner for comprehensive advertising and marketing solutions in Bangalore.
                            </p>

                            <div className={styles.infoItems}>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <p>info@imsolutions.com</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4>Address</h4>
                                        <p>Bangalore, Karnataka, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4} direction="right">
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message <FaPaperPlane />
                                    </>
                                )}
                            </button>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
