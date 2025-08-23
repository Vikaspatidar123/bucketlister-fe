import React from 'react';
import styles from './style.module.scss';

const FeaturesBar = () => {
    const features = [
        {
            id: 1,
            icon: '',
            text: 'Lock In spot in Rs. 5,000'
        },
        {
            id: 2,
            icon: '',
            text: 'Secure Payments'
        },
        {
            id: 3,
            icon: '',
            text: 'Modify up to 60 days before departure.'
        },
        {
            id: 4,
            icon: '',
            text: '24/7 Support'
        }
    ];

    return (
        <section className={styles.featuresBar}>
            <div className={styles.container}>
                <div className={styles.featuresGrid}>
                    {features.map((feature) => (
                        <div key={feature.id} className={styles.featureItem}>
                            {/* <span className={styles.featureIcon}>{feature.icon}</span> */}
                            <span className={styles.featureText}>{feature.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesBar; 