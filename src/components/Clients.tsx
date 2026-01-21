import fs from 'fs';
import path from 'path';

import ScrollReveal from './ScrollReveal';
import styles from './Clients.module.css';

function getClientLogoPaths() {
    const clientsDir = path.join(process.cwd(), 'public', 'clients');
    if (!fs.existsSync(clientsDir)) return [];

    const allowedExt = new Set(['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif']);
    return fs
        .readdirSync(clientsDir)
        .filter((file) => allowedExt.has(path.extname(file).toLowerCase()))
        .map((file) => `/clients/${file}`);
}

export default function Clients() {
    const clients = getClientLogoPaths();
    const marqueeClients = [...clients, ...clients];

    return (
        <section className={styles.clients}>
            <div className="container">
                <ScrollReveal delay={0.2}>
                    <h2 className="section-title">OUR CLIENTS</h2>
                    <p className={styles.subtitle}>
                        Trusted by leading brands across industries
                    </p>
                </ScrollReveal>
            </div>

            <div className={styles.marquee}>
                <div className={styles.track}>
                    {marqueeClients.map((client, index) => (
                        <div key={`${client}-${index}`} className={styles.clientCard}>
                            <div className={styles.clientLogo}>
                                <img
                                    src={client}
                                    alt={`Client ${index + 1}`}
                                    className={styles.logoImage}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
