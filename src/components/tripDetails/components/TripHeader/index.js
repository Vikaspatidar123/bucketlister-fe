"use client";
import React from "react";
import styles from "./style.module.scss";

const TripHeader = ({ title, price, hasBatches = true }) => {
  const formatPrice = (p) =>
    typeof p === "number" ? `Rs. ${p.toLocaleString()}/-` : p || "";
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Beautiful {title}</h1>
        {hasBatches && (
          <div className={styles.priceBlock}>
            <div className={styles.caption}>Starting from</div>
            <div className={styles.price}>
              {formatPrice(price)}
              <span className={styles.perPerson}> per person</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripHeader;
