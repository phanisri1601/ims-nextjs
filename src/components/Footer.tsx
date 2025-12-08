'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerColumn}>
                        <h3 className={styles.columnTitle}>IM Solutions</h3>
                        <p className={styles.columnDescription}>
                            Leading advertising agency in Bangalore providing comprehensive marketing solutions for brands across all industries.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" aria-label="Facebook"><FaFacebook /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="#" aria-label="YouTube"><FaYoutube /></a>
                        </div>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4 className={styles.columnTitle}>Quick Links</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/clients">Our Clients</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4 className={styles.columnTitle}>Services</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/services#digital">Digital Marketing</Link></li>
                            <li><Link href="/services#seo">SEO</Link></li>
                            <li><Link href="/services#branding">Brand Activation</Link></li>
                            <li><Link href="/services#advertising">Advertising</Link></li>
                            <li><Link href="/services#design">Creative Design</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4 className={styles.columnTitle}>Contact</h4>
                        <ul className={styles.linkList}>
                            <li>Bangalore, Karnataka</li>
                            <li>India</li>
                            <li>Phone: +91 98765 43210</li>
                            <li>Email: info@imsolutions.com</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} IM Solutions. All rights reserved.</p>
                    <div className={styles.footerLinks}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
