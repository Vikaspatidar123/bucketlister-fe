import React from 'react';
import styles from './style.module.scss';

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>International Tours</h1>
                <p className={styles.heroSubtitle}>
                    International Escapes: curated journeys from Kyoto's temples to Tuscany's vineyards.
                </p>
            </div>
        </section>
    );
};

export default HeroSection; 