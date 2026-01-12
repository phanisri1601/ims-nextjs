import styles from "./ClientsPage.module.css";
import fs from "fs";
import path from "path";

const clientFiles = fs
  .readdirSync(path.join(process.cwd(), "public", "clients"))
  .filter((file) => /\.(png|jpe?g|webp|svg)$/i.test(file))
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

const clients = clientFiles.map((file) => {
  const base = file.replace(/\.[^/.]+$/, "");
  const name = base
    .replace(/\(\s*\d+\s*\)/g, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return {
    src: `/clients/${file}`,
    name,
  };
});

export const metadata = {
  title: "Our Clients | IM Solutions",
  description:
    "Brands that trust IM Solutions for advertising, marketing, and digital growth. Explore the clients we partner with across industries.",
};

export default function ClientsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Our Clients</p>
            <h1>Partnerships built on results</h1>
            <p className={styles.lead}>
              We collaborate closely with ambitious brands to craft strategies,
              amplify reach, and deliver measurable ROI. Our team adapts to
              different cultures and business models so every engagement feels
              bespoke and outcome-driven.
            </p>
            <div className={styles.meta}>
              <span>300+ brand engagements</span>
              <span>7+ years of growth stories</span>
              <span>360° digital & offline expertise</span>
            </div>
          </div>
        </div>
        <div className={styles.heroGlow} aria-hidden />
      </section>



      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2>Brands that trust IM Solutions</h2>
            <p>
              A diverse portfolio across real estate, retail, healthcare,
              education, hospitality, and technology.
            </p>
          </div>

          <div className={styles.clientGrid}>
            {clients.map((client) => (
              <div key={client.src} className={styles.clientCard}>
                <div className={styles.logoWrap}>
                  <img src={client.src} alt={`${client.name} logo`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

