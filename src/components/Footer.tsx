'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdMail, MdPhone } from 'react-icons/md';
import styles from './Footer.module.css';

export default function Footer() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* Powered By Section */}
                <div className={styles.footerColumn}>
                    <h4 className={styles.columnTitle}>Powered By</h4>
                    <div className={styles.companyInfo}>
                        <img src="/weblogo.png" alt="IM Solutions Logo" className={styles.logoImage} />
                        <p className={styles.tagline}>Your Path Our Success</p>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.contactItem}>
                            <MdMail className={styles.icon} />
                            <a href="mailto:info@imsolutions.mobi">info@imsolutions.mobi</a>
                        </div>
                        <div className={styles.contactItem}>
                            <MdPhone className={styles.icon} />
                            <a href="tel:+918880564488">+91 888 056 4488</a>
                        </div>
                    </div>
                    <div className={styles.socialLinks}>
                        <span>Follow Us :</span>
                        <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Address Section */}
                <div className={styles.footerColumn}>
                    <h4 className={styles.columnTitle}>Address</h4>
                    <div className={styles.addressBlock}>
                        <h5 className={styles.addressTitle}>Corporate Office</h5>
                        <p className={styles.addressText}>
                            921, Laxmi Tower, 4th Floor, 5th Main Rd, Sector 7, HSR Layout, Bengaluru, Karnataka 560102
                        </p>
                    </div>
                    
                </div>

                {/* Quick Links Section */}
                <div className={styles.footerColumn}>
                    <h4 className={styles.columnTitle}>Quick Links</h4>
                    <ul className={styles.linkList}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><span className={styles.linkLabel}>Services</span></li>
                        <li className={styles.subLinkItem}><Link href="/services/online">Online Services</Link></li>
                        <li className={styles.subLinkItem}><Link href="/services/offline">Offline Services</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/careers">Career</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Enquire Now Section */}
                <div className={styles.footerColumn}>
                    <h4 className={styles.columnTitle}>Enquire Now</h4>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="tel" placeholder="+91 Phone Number" required />
                        <textarea placeholder="Message" rows={3} required></textarea>
                        <button type="submit" className={styles.submitBtn}>Submit</button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className={styles.footerBottom}>
                <p>&copy; Copyright {new Date().getFullYear()} IM Solutions</p>
                <div className={styles.bottomLinks}>
                    <Link href="/privacy">Privacy policy</Link>
                    <Link href="/terms">Terms and conditions</Link>
                    <Link href="/copyright">Copyright</Link>
                </div>
            </div>
        </footer>
    );
}
