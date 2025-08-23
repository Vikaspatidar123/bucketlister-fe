import React from 'react';
import styles from './style.module.scss';

const CurateTripSection = () => {
    const features = [
        {
            id: 1,
            icon: '🏷️',
            title: 'Transparent Pricing',
            description: 'No hidden fees, no surprises'
        },
        {
            id: 2,
            icon: '🏔️',
            title: 'Curated Offbeat Journeys',
            description: 'Handpicked hidden gems'
        },
        {
            id: 3,
            icon: '🏠',
            title: 'Immersive Local Culture',
            description: 'Home-stays, street-food & meet-ups'
        },
        {
            id: 4,
            icon: '🎧',
            title: '24/7 Support',
            description: 'Help whenever you need it'
        }
    ];

    return (
        <section className={styles.curateTripSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.leftContent}>
                        <h2 className={styles.sectionTitle}>Curate your next trip with us</h2>
                        <div className={styles.featuresList}>
                            {features.map((feature) => (
                                <div key={feature.id} className={styles.featureItem}>
                                    <span className={styles.featureIcon}>{feature.icon}</span>
                                    <div className={styles.featureContent}>
                                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                                        <p className={styles.featureDescription}>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.rightContent}>
                        <form className={styles.contactForm}>
                            <h3 className={styles.formTitle}>Get in Touch</h3>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className={styles.formInput}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <input
                                    type="tel"
                                    placeholder="Where can we call you?"
                                    className={styles.formInput}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <textarea
                                    placeholder="help us get to you with what you want"
                                    className={styles.formTextarea}
                                    rows="4"
                                />
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                Enquire Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurateTripSection; 