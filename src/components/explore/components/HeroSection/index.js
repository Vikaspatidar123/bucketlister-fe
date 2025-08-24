import React from 'react';
import styles from './style.module.scss';

const HeroSection = ({ destinationName, description, heroImage }) => {
    if (destinationName && description && heroImage) {
        return (
            <section className={styles.heroSection}>
                <div className={styles.heroBackground} style={{ backgroundImage: `url(${heroImage})` }}>
                    <div className={styles.heroOverlay}>
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroTitle}>{destinationName}</h1>
                            <p className={styles.heroSubtitle}>{description}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>International Tours</h1>
                <p className={styles.heroSubtitle}>
                    International Escapes: curated journeys from Kyoto&apos;s temples to Tuscany&apos;s vineyards.
                </p>
            </div>
        </section>
    );
};

export default HeroSection; 