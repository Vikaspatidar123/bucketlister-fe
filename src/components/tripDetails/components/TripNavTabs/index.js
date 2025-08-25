"use client";
import React, { useState } from "react";
import Tabs from "@/common/Tabs";
import styles from "./style.module.scss";

const DEFAULT_TABS = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "included", label: "What's Included" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "similar", label: "Similar Trips" },
];

const TripNavTabs = ({ tabs = DEFAULT_TABS, initial = "overview", onTabChange }) => {
  const [active, setActive] = useState(initial);

  const handleChange = (id) => {
    setActive(id);
    if (typeof onTabChange === "function") onTabChange(id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Tabs
          tabs={tabs}
          activeTab={active}
          onTabChange={handleChange}
          variant="pills"
          size="medium"
          className={styles.tabs}
        />
        <button type="button" className={styles.shareBtn} aria-label="Share">
          ↗
        </button>
      </div>
    </div>
  );
};

export default TripNavTabs;


