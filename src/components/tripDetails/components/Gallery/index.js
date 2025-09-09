"use client";
import React, { useMemo, useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";

const Gallery = ({ trip }) => {
  const images = useMemo(() => {
    const arr = [];
    const pickUrl = (item) => {
      if (!item) return null;
      if (typeof item === "string") return item;
      if (typeof item === "object")
        return item.image || item.url || item.src || null;
      return null;
    };

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
        <Image
          src={images[selectedIndex]}
          alt={trip?.title || "Trip image"}
          className={styles.mainImage}
          width={500}
          height={500}
        />
      </div>
      <div className={styles.thumbsScroller}>
        {images.map((src, idx) => (
          <button
            key={`${src}-${idx}`}
            className={`${styles.thumb} ${
              idx === selectedIndex ? styles.active : ""
            }`}
            onClick={() => setSelectedIndex(idx)}
            type="button"
            aria-label={`Select image ${idx + 1}`}
          >
            <Image
              src={src}
              alt={`thumb-${idx + 1}`}
              className={styles.thumbImg}
              width={500}
              height={500}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
