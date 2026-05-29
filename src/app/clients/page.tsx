import styles from "./ClientsPage.module.css";
import fs from "fs";
import path from "path";
import ClientsHeadlineScroll from "./ClientsHeadlineScroll";

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
      <header className={styles.header}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Our Clients</h1>
        </div>
      </header>


      <ClientsHeadlineScroll />

      <section className={styles.gridSection}>
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
      </section>
    </main>
  );
}

