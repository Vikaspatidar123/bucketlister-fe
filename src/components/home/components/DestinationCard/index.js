"use client";
import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

const DestinationCard = ({ destination, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(destination);
    }
  };
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.destinationCard} onClick={handleClick}>
        <div className={styles.cardImage}>
          {destination?.image ? (
            <Image
              src={destination.image}
              alt={destination?.name || "Destination"}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={styles.image}
            />
          ) : (
            <div className={styles.imagePlaceholder}></div>
          )}
        </div>
      </div>
      <h3 className={styles.destinationName}>{destination.name}</h3>
    </div>
  );
};

export default DestinationCard;
