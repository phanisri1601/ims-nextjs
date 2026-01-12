import ContactForm from "@/components/ContactForm";
import styles from "./ContactPage.module.css";

export const metadata = {
  title: "Contact Us | IM Solutions",
  description:
    "Get in touch with IM Solutions for advertising, marketing, and digital growth. Call, mail, or drop a message and we will respond quickly.",
};

const contacts = [
  { label: "Email", value: "info@imsolutions.mobi" },
  { label: "Phone", value: "+91 8880564488" },
  { label: "Address", value: "Bangalore, Karnataka, India" },
];

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <p className={styles.kicker}>Contact Us</p>
              <h1>Get in touch</h1>
              <p className={styles.lead}>
                We are always delighted to hear from you. Fill the enquiry form
                or reach out via phone and email—we typically respond within a
                business day.
              </p>
            </div>

            <div className={styles.heroCard}>
              <div className={styles.cardTitle}>Have any questions?</div>
              <p className={styles.cardDesc}>
                Leave us a note and we will get back as soon as possible.
              </p>
              <div className={styles.badges}>
                <span>Strategy</span>
                <span>Creative</span>
                <span>Technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formHead}>
            <h2>Have any questions?</h2>
            <p>Please contact us using the form and we’ll get back to you.</p>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}

