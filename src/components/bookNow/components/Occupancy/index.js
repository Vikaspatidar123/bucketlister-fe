"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import Tabs from "@/common/Tabs";

const Occupancy = ({ occupancyDetails, onOccupancyChange, tripData }) => {
  const activeOccupancy = occupancyDetails?.type || "Triple Occupancy";
  const quantity = occupancyDetails?.quantity || 1;
  const occupancyTabs = [
    { id: "Triple Occupancy", label: "Triple Occupancy" },
    { id: "Double Occupancy", label: "Double Occupancy" },
  ];

  // Use trip price if available, otherwise use default pricing
  const baseTripPrice = tripData?.price || 40000;
  const pricing = {
    "Triple Occupancy": {
      originalPrice: Math.round(baseTripPrice * 1.125), // 12.5% markup for original
      currentPrice: baseTripPrice,
    },
    "Double Occupancy": {
      originalPrice: Math.round((baseTripPrice + 2500) * 1.375), // Add INR 2,500 + 37.5% markup for original
      currentPrice: baseTripPrice + 2500, // Add INR 2,500 for double occupancy
    },
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      onOccupancyChange({
        ...occupancyDetails,
        quantity: newQuantity,
      });
    }
  };

  const handleOccupancyTypeChange = (newType) => {
    const baseTripPrice = tripData?.price || 40000;
    const pricing = {
      "Triple Occupancy": { basePrice: baseTripPrice },
      "Double Occupancy": { basePrice: baseTripPrice + 2500 }, // Add INR 2,500 for double occupancy
    };

    onOccupancyChange({
      ...occupancyDetails,
      type: newType,
      basePrice: pricing[newType].basePrice,
    });
  };

  const currentPricing = pricing[activeOccupancy];

  return (
    <div className={styles.occupancyContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Occupancy</h2>
        <p className={styles.subtitle}>(Room Arrangement or Room Sharing)</p>
      </div>

      <div className={styles.occupancyTabs}>
        <Tabs
          tabs={occupancyTabs}
          activeTab={activeOccupancy}
          onTabChange={handleOccupancyTypeChange}
          variant="underline"
          size="medium"
        />
      </div>

      <div className={styles.pricingSection}>
        <div className={styles.pricingCard}>
          <div className={styles.pricingLeft}>
            <div className={styles.occupancyLabel}>Occupancy</div>
            <div className={styles.occupancyType}>{activeOccupancy}</div>
          </div>

          <div className={styles.pricingCenter}>
            <div className={styles.priceLabel}>Price</div>
            <div className={styles.priceContainer}>
              <span className={styles.originalPrice}>
                ₹ {currentPricing.originalPrice.toLocaleString()}
              </span>
              <span className={styles.currentPrice}>
                ₹ {currentPricing.currentPrice.toLocaleString()}
              </span>
            </div>
          </div>

          <div className={styles.pricingRight}>
            <div className={styles.quantityLabel}>Qty.</div>
            <div className={styles.quantityControls}>
              <button
                className={styles.quantityBtn}
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                −
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button
                className={styles.quantityBtn}
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= 10}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.totalSection}>
        <div className={styles.totalPrice}>
          Total: ₹ {(currentPricing.currentPrice * quantity).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default Occupancy;
