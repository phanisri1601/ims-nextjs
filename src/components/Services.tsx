'use client';

import { FaSearch, FaBullhorn, FaChartBar, FaBuilding, FaPlane, FaBus } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import styles from './Services.module.css';

export default function Services() {
    const services = [
        {
            icon: <FaSearch />,
            title: 'Online Reputation Management',
            description: 'Protect and enhance your brand image across digital platforms with strategic reputation management.'
        },
        {
            icon: <FaBullhorn />,
            title: 'Digital Marketing',
            description: 'Comprehensive digital marketing strategies to boost your online presence and drive conversions.'
        },
        {
            icon: <FaChartBar />,
            title: 'SEO',
            description: 'Improve your search engine rankings and increase organic traffic with proven SEO techniques.'
        },
        {
            icon: <FaBuilding />,
            title: 'RWA Activation',
            description: 'Engage residential welfare associations with targeted activation campaigns and community outreach.'
        },
        {
            icon: <FaPlane />,
            title: 'Airport Advertising',
            description: 'Capture high-value audiences with premium advertising placements at major airports.'
        },
        {
            icon: <FaBus />,
            title: 'Bus Branding',
            description: 'Mobile advertising solutions that reach thousands of commuters daily across the city.'
        }
    ];

    const onlineServices = services.slice(0, 3);
    const offlineServices = services.slice(3, 6);

    return (
        <section className={styles.services} id="services">
            <div className="container">
                <ScrollReveal delay={0.2}>
                    <h2 className="section-title">OUR ADVERTISING SERVICES</h2>
                    <p className={styles.subtitle}>
                        Comprehensive solutions for all your advertising and marketing needs
                    </p>
                </ScrollReveal>

                {/* Online Services Section */}
                <div id="online-services" style={{ scrollMarginTop: '100px' }}>
                    <ScrollReveal delay={0.3}>
                        <h3 className={styles.sectionHeading}>Online Services</h3>
                    </ScrollReveal>
                    <div className={styles.servicesGrid}>
                        {onlineServices.map((service, index) => (
                            <ScrollReveal key={index} delay={0.1 + index * 0.1}>
                                <div className={styles.serviceCard}>
                                    <div className={styles.iconContainer}>
                                        {service.icon}
                                    </div>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceDescription}>{service.description}</p>
                                    <button className={styles.learnMore}>Learn More →</button>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Offline Services Section */}
                <div id="offline-services" style={{ scrollMarginTop: '100px', marginTop: '4rem' }}>
                    <ScrollReveal delay={0.4}>
                        <h3 className={styles.sectionHeading}>Offline Services</h3>
                    </ScrollReveal>
                    <div className={styles.servicesGrid}>
                        {offlineServices.map((service, index) => (
                            <ScrollReveal key={index} delay={0.1 + index * 0.1}>
                                <div className={styles.serviceCard}>
                                    <div className={styles.iconContainer}>
                                        {service.icon}
                                    </div>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceDescription}>{service.description}</p>
                                    <button className={styles.learnMore}>Learn More →</button>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
