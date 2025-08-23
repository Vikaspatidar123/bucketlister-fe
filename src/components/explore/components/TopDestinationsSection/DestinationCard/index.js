import React from 'react';
import styles from './style.module.scss';

const DestinationCard = ({ destination }) => {
    return (
        <div className={styles.destinationCard}>
            <div className={styles.cardImage}>
                <img src={destination.image} alt={destination.name} />
                <div className={styles.cardOverlay}>
                    <h3 className={styles.destinationName}>{destination.name}</h3>
                    <p className={styles.destinationPrice}>{destination.price}</p>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard; 