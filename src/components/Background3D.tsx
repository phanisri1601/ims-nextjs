import styles from './Background3D.module.css';

export default function Background3D() {
    return (
        <div className={styles.backgroundContainer}>
            <div className={styles.gridPlane} />
            <div className={`${styles.orb} ${styles.orb1}`} />
            <div className={`${styles.orb} ${styles.orb2}`} />
        </div>
    );
}
