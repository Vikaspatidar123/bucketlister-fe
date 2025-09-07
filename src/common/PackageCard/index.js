"use client";
import React from "react";
import styles from "./style.module.scss";
import { banner1 } from "@/assets/png";

const getDurationText = (duration) => {
  if (!duration) return "";
  try {
    const [daysPart, nightsPart] = String(duration).split("-");
    const days = parseInt(daysPart);
    const nights = parseInt(nightsPart);
    if (Number.isFinite(days) && Number.isFinite(nights)) {
      return `${nights} nights / ${days} days`;
    }
  } catch {}
  return duration;
};

const getDatesFooter = (trip) => {
  if (Array.isArray(trip?.availableDates) && trip.availableDates.length > 0) {
    const shown = trip.availableDates.slice(0, 3);
    const extra = trip.availableDates.length - shown.length;
    return `Dates: ${shown.join(", ")}${extra > 0 ? ` +${extra} more` : ""}`;
  }
  return "Dates on Request";
};

const PackageCard = ({ trip, onClick }) => {
  if (!trip) return null;

  const imageSrc =
    trip.image || trip.thumbnail_image || trip.hero_image || banner1;

  return (
    <div className={styles.packageCard} onClick={onClick} role="button" tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick && onClick(); } }}
    >
      <div className={styles.cardImage}>
        <img src={imageSrc} alt={trip.title} className={styles.packageImage} />
        {/* {trip.badge && trip.badge.text ? (
          <div className={`${styles.badge} ${styles[trip.badge.type || ""] || ""}`}>
            {trip.badge.text}
          </div>
        ) : null} */}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.metaRow}>
          <span className={styles.metaIcon}>⏳</span>
          <span className={styles.metaDuration}>{getDurationText(trip.duration)}</span>
        </div>
        <h3 className={styles.cardTitle}>{trip.title}</h3>

        <div className={styles.priceRow}>
          <span className={styles.currentPrice}>{trip.price}</span>
          {trip.originalPrice ? (
            <span className={styles.oldPrice}>{trip.originalPrice}</span>
          ) : null}
          {trip.discountAmount ? (
            <span className={styles.discount}>₹ {trip.discountAmount} Off</span>
          ) : null}
        </div>

        <div className={styles.footerRow}>{getDatesFooter(trip)}</div>
      </div>
    </div>
  );
};

export default PackageCard;


