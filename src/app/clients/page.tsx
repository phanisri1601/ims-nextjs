import styles from "./ClientsPage.module.css";
import { FaCheckCircle } from "react-icons/fa";

const clientImage = "/client.png";

const pillars = [
  {
    title: "Strategy",
    description:
      "Through proper strategies we define how set goals can be accomplished.",
  },
  {
    title: "Creativity",
    description:
      "We utilize our creativity to help your business stand apart.",
  },
  {
    title: "Technology",
    description:
      "We make use of the latest technology to design and scale your website.",
  },
];

const clients = [
  "Adithya Constructions",
  "Aditya Developers",
  "Alive All",
  "Arya",
  "ASN Shelters",
  "Asset Builders",
  "AssetsGuru",
  "Axis",
  "Brigade",
  "BSR Builders",
  "Buildwell Projects",
  "Cafe Coffee Day",
  "CaratLane",
  "Celebrity Prime",
  "Chartered",
  "Coevolve Estates",
  "Date The Ramp",
  "Dhammanagi Developers",
  "Dr. G. Om Prakasham",
  "DTDS World",
  "Durga Builders",
  "Evershine Smelting",
  "Gajanana Sumuk",
  "GAP Education",
  "G-Corp",
  "GK Shelters",
  "GM Infinite",
  "GM Rejoyz",
  "HomeLane",
  "MG Builders",
  "NBR Homes",
  "Pavani Group",
  "Pionier Developers",
  "Pratham Constructions",
  "Precis Interiors",
  "Preeti Developers",
  "Prestige Group",
  "Qbico Co-Work",
  "QuestMath International",
  "Rainbow Children’s Hospital",
  "Raja Rajeshwari BuildCon",
  "Redbridge Academy",
  "RichBite Catering",
  "RMZ Homes",
  "Sai Associates",
  "Salarpuria Sattva",
  "Sankalp Constructions",
  "SAS Infra",
];

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
              <div key={client} className={styles.clientCard}>
                <div className={styles.logoWrap}>
                  <img src={clientImage} alt={`${client} logo`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

