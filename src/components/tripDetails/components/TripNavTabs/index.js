"use client";
import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { shareIcon } from "@/assets/svg";

const DEFAULT_TABS = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "included", label: "What's Included" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "similar", label: "Similar Trips" },
];

const TripNavTabs = ({
  tabs = DEFAULT_TABS,
  initial = "overview",
  onTabChange,
}) => {
  const [active, setActive] = useState(initial);

  const handleChange = (id) => {
    setActive(id);
    if (typeof onTabChange === "function") onTabChange(id);
    // Smooth scroll to target section if present
    const el =
      document.getElementById(`trip-${id}`) || document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Ensure Overview is default selected on mount
  useEffect(() => {
    setActive(initial || "overview");
  }, [initial]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <nav
          className={styles.tabNav}
          role="tablist"
          aria-label="Trip sections"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active === t.id}
              className={`${styles.tabLink} ${
                active === t.id ? styles.active : ""
              }`}
              onClick={() => handleChange(t.id)}
            >
              {t.label}
            </button>
          ))}
          <button type="button" className={styles.shareBtn} aria-label="Share">
            <img src={shareIcon} alt="Share" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default TripNavTabs;
