import React from 'react';
import { truncateText } from '@/utils/textFormatter';
import styles from './style.module.scss';

const HeroSection = ({ destinationName, description, heroImage, heroImageDescription }) => {
    // Use hero_image_description if available, fallback to description
    const displayDescription = heroImageDescription || description;
    const limitedDescription = displayDescription ? truncateText(displayDescription, 100) : '';
    
    if (destinationName && displayDescription && heroImage) {
        return (
            <section className={styles.heroSection}>
                <div className={styles.heroBackground} style={{ backgroundImage: `url(${heroImage})` }}>
                    <div className={styles.heroOverlay}>
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroTitle}>{destinationName}</h1>
                            <p className={styles.heroSubtitle}>
                                {limitedDescription}
                            </p>
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