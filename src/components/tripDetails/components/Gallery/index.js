"use client";
import React, { useMemo, useState } from "react";
import styles from "./style.module.scss";

const Gallery = ({ trip }) => {
  const images = useMemo(() => {
    const arr = [];
    const pickUrl = (item) => {
      if (!item) return null;
      if (typeof item === "string") return item;
      if (typeof item === "object") return item.image || item.url || item.src || null;
      return null;
    };

    const main = pickUrl(trip?.image);
    if (main) arr.push(main);

    if (Array.isArray(trip?.other_images)) {
      for (const it of trip.other_images) {
        const url = pickUrl(it);
        if (url) arr.push(url);
      }
    }

    return arr.filter(Boolean);
  }, [trip]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images.length) return null;

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageWrapper}>
        <img src={images[selectedIndex]} alt={trip?.title || "Trip image"} className={styles.mainImage} />
      </div>
      <div className={styles.thumbsScroller}>
        {images.map((src, idx) => (
          <button
            key={`${src}-${idx}`}
            className={`${styles.thumb} ${idx === selectedIndex ? styles.active : ""}`}
            onClick={() => setSelectedIndex(idx)}
            type="button"
            aria-label={`Select image ${idx + 1}`}
          >
            <img src={src} alt={`thumb-${idx + 1}`} className={styles.thumbImg} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;