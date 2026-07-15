import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import Clients from "@/components/Clients";
import ContactHero from "@/components/ContactHero";
import styles from "./ContactPage.module.css";

export const metadata = {
  title: "Contact Us | IM Solutions",
  description:
    "Get in touch with IM Solutions for advertising, marketing, and digital growth. Call, mail, or drop a message and we will respond quickly.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      {/* Hero Section — animated */}
      <ContactHero />

      {/* Partners Section */}
      <section className={styles.partnersSection}>
        <div className={styles.partnersContainer}>
          <div className={styles.partnersLeft}>
            <h2 className={styles.partnersTitle}>OUR PARTNERS</h2>
            <div className={styles.partnersDivider}></div>
            <p className={styles.partnersDesc}>
              We partner with ambitious businesses across industries to create brands that endure and lead.
            </p>
          </div>
          <div className={styles.partnersRight}>
            <div className={styles.partnersGrid}>
              <div className={styles.partnerLogo}><Image src="/clients/tatahousing.png" alt="Tata" fill className={styles.partnerImg} /></div>
              <div className={styles.partnerLogo}><Image src="/clients/RMZcorp.png" alt="RMZ" fill className={styles.partnerImg} /></div>
              <div className={styles.partnerLogo}><Image src="/clients/prestigegroup.png" alt="Prestige" fill className={styles.partnerImg} /></div>
              <div className={styles.partnerLogo}><Image src="/clients/kotak.png" alt="Kotak" fill className={styles.partnerImg} /></div>
              <div className={styles.partnerLogo}><Image src="/clients/homelane.png" alt="HomeLane" fill className={styles.partnerImg} /></div>
              <div className={styles.partnerLogo}><Image src="/clients/houseofhiranandani.png" alt="Hiranandani" fill className={styles.partnerImg} /></div>
              <div className={styles.partnerLogo}><Image src="/clients/lakmesalon.png" alt="Lakme" fill className={styles.partnerImg} /></div>
              <div className={styles.partnerLogo}><Image src="/clients/sleepwell.png" alt="Sleepwell" fill className={styles.partnerImg} /></div>
              <div className={styles.partnerLogo}><Image src="/clients/living-water.png" alt="Living Water" fill className={styles.partnerImg} /></div>
              <div className={styles.partnerLogo}><Image src="/clients/sjr.png" alt="SJR" fill className={styles.partnerImg} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <ContactForm />

      {/* Bottom Section */}
      <section className={styles.bottomSection}>
        <div className={styles.bottomGrid}>
          {/* Left — conversation block with background image */}
          <div className={styles.conversationBlock}>
            <div className={styles.conversationContent}>
              <h2 className={styles.conversationTitle}>Great things start<br />with a conversation.</h2>
              <span className={styles.conversationEyebrow}>WE LOOK FORWARD TO CONNECTING</span>
              <button className={styles.circleBtn} aria-label="Get in touch">
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Middle — Head Office */}
          <div className={styles.officeBlock}>
            <div className={styles.officeContent}>
              <span className={styles.officeEyebrow}>OUR HEAD OFFICE</span>
              <h3 className={styles.companyName}>IM Solutions Pvt. Ltd.</h3>
              <p className={styles.address}>
                921, Laxmi Tower, 4th Floor, 5th,<br />
                Main Rd, Sector 7, HSR Layout,<br />
                Bengaluru, Karnataka
              </p>
              <a href="#map" className={styles.viewMapLink}>
                VIEW ON MAP
                <span className={styles.circleIcon}>
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>

          {/* Right — Google Maps Embed */}
          <div className={styles.mapBlock} id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0799!2d77.6300791!3d12.9097456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1491d13b6519%3A0x3cb3ab2f8e060d9!2sIM%20Solutions!5e0!3m2!1sen!2sin!4v1751452800000"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IM Solutions Office Location"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

