import React from 'react';
import styles from './style.module.scss';

const TourCard = ({ tour }) => {
    return (
        <div className={styles.tourCard}>
            <div className={styles.cardImage}>
                <img src={tour.image} alt={tour.title} />
                {tour.labels.length > 0 && (
                    <div className={styles.labels}>
                        {tour.labels.map((label, index) => (
                            <span key={index} className={`${styles.label} ${styles[label.toLowerCase().replace(' ', '')]}`}>
                                {label}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className={styles.cardContent}>
                <div className={styles.tourHeader}>
                    <h3 className={styles.tourTitle}>{tour.title}</h3>
                    <span className={styles.tourCode}>{tour.code}</span>
                </div>
                <p className={styles.tourDates}>{tour.dates}</p>
                <div className={styles.tourFooter}>
                    <span className={styles.tourPrice}>{tour.price}</span>
                </div>
            </div>
        </div>
    );
};

export default TourCard; 