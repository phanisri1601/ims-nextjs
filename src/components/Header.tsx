'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <img
              src="/weblogo.png"
              alt="IM Solutions"
              style={{ height: '50px', width: 'auto' }} // Inline style for immediate sizing control
            />
          </Link>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About Us</Link>

            <div
              className={styles.dropdown}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={styles.navLink}>
                Services <FaChevronDown className={styles.chevron} />
              </button>
              {isServicesOpen && (
                <div className={styles.dropdownMenu}>
                  <Link href="/services#online" className={styles.dropdownItem}>Online Services</Link>
                  <Link href="/services#offline" className={styles.dropdownItem}>Offline Services</Link>
                </div>
              )}
            </div>

            <Link href="/clients" className={styles.navLink}>Our Clients</Link>
            <Link href="/careers" className={styles.navLink}>Careers</Link>
            <Link href="/blog" className={styles.navLink}>Blog</Link>
            <Link href="/contact" className={styles.navLink}>Contact Us</Link>
          </nav>

          <button
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
