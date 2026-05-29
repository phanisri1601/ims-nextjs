import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";
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
        <div className={styles.backgroundImage}></div>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>CONTACT US</h1>
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

      <section className={styles.mapSection}>
        <div className="container">
          <ContactMap />
        </div>
      </section>
    </main>
  );
}

