"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import Tabs from "@/common/Tabs";

const Batches = ({ selectedBatch, onBatchSelect, tripData }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const monthFilters = [
    { id: "All", label: "All" },
    { id: "Sep", label: "Sep" },
    { id: "Oct", label: "Oct" },
    { id: "Nov", label: "Nov" },
    { id: "Dec", label: "Dec" },
    { id: "Jan", label: "Jan" },
    { id: "Feb", label: "Feb" },
    { id: "Mar", label: "Mar" },
  ];

  // You can modify this to use trip-specific batches if available
  const batches = [
    {
      id: 1,
      dateRange: "20-Sep To 27-Sep",
      status: "Available",
      month: "Sep",
    },
    {
      id: 2,
      dateRange: "04-Oct To 11-Oct",
      status: "Available", 
      month: "Oct",
    },
    {
      id: 3,
      dateRange: "18-Oct To 25-Oct",
      status: "Available",
      month: "Oct",
    },
    {
      id: 4,
      dateRange: "01-Nov To 08-Nov",
      status: "Available",
      month: "Nov",
    },
  ];

  const filteredBatches = activeFilter === "All" 
    ? batches 
    : batches.filter(batch => batch.month === activeFilter);

  const handleBatchSelect = (batchId) => {
    onBatchSelect(batchId);
  };

  return (
    <div className={styles.batchesContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Batches</h2>
        <div className={styles.filterTabs}>
          <Tabs
            tabs={monthFilters}
            activeTab={activeFilter}
            onTabChange={setActiveFilter}
            variant="pills"
            size="small"
          />
        </div>
      </div>

      <div className={styles.batchesGrid}>
        {filteredBatches.length > 0 ? (
          filteredBatches.map((batch) => (
            <div
              key={batch.id}
              className={`${styles.batchCard} ${
                selectedBatch === batch.id ? styles.selected : ""
              }`}
              onClick={() => handleBatchSelect(batch.id)}
            >
              <div className={styles.batchRadio}>
                <input
                  type="radio"
                  name="batch"
                  checked={selectedBatch === batch.id}
                  onChange={() => handleBatchSelect(batch.id)}
                  className={styles.radioInput}
                />
              </div>
              <div className={styles.batchInfo}>
                <h3 className={styles.dateRange}>{batch.dateRange}</h3>
              </div>
              <div className={styles.statusContainer}>
                <span className={`${styles.status} ${styles.available}`}>
                  {batch.status}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noBatchesMessage}>
            <p>No upcoming batches for this trip. Send us an enquiry to customize your trip on your preferred dates.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Batches;