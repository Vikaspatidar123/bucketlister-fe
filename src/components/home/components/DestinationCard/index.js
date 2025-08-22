"use client";
import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

const DestinationCard = ({ destination, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(destination);
    }
  };

  return (
    <div className={styles.destinationCard} onClick={handleClick}>
      <div className={styles.cardImage}>
        {/* Placeholder for image - you can add actual images later */}
        <div className={styles.imagePlaceholder}></div>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.destinationName}>{destination.name}</h3>
      </div>
    </div>
  );
};

export default DestinationCard;
