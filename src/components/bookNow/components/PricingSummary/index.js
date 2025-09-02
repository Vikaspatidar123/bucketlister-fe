"use client";
import React from "react";
import styles from "./style.module.scss";

const PricingSummary = ({ 
  baseAmount = 45000, 
  quantity = 1, 
  discountAmount = 5000, 
  vehicleType = "SUV or Toyota Hiace bus or Toyota Coaster bus",
  onAmountsCalculated,
  compact = false,
  tripData = null
}) => {
  const subtotal = baseAmount * quantity;
  const discountedAmount = subtotal - discountAmount;
  const gstRate = 0.05;
  const tcsRate = 0.021;
  
  const gstAmount = discountedAmount * gstRate;
  const tcsAmount = discountedAmount * tcsRate;
  const totalPackageAmount = discountedAmount + gstAmount + tcsAmount;
  const bookingAmount = totalPackageAmount * 0.1; // 10% of total package
  const remainingAmount = totalPackageAmount - bookingAmount;

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Pass calculated amounts to parent
  React.useEffect(() => {
    if (onAmountsCalculated) {
      onAmountsCalculated({
        totalPackageAmount,
        bookingAmount,
        remainingAmount
      });
    }
  }, [totalPackageAmount, bookingAmount, remainingAmount, onAmountsCalculated]);

  return (
    <div className={`${styles.pricingSummaryContainer} ${compact ? styles.compact : ''}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {compact ? "Summary" : "Package Summary"}
          {tripData && compact && (
            <div className={styles.tripInfo}>
              <span className={styles.tripName}>{tripData.title}</span>
            </div>
          )}
        </h2>
        <div className={styles.totalAmount}>{formatCurrency(totalPackageAmount)}</div>
      </div>

      <div className={styles.breakdown}>
        <div className={styles.breakdownRow}>
          <div className={styles.label}>Travel Mode</div>
        </div>
        
        <div className={styles.breakdownRow}>
          <div className={styles.sublabel}>{vehicleType}</div>
        </div>

        <div className={styles.breakdownRow}>
          <div className={styles.label}>Amount</div>
          <div className={styles.value}>{formatCurrency(subtotal)}</div>
        </div>

        <div className={styles.breakdownRow}>
          <div className={styles.label}>Discount (WRAVELER)</div>
          <div className={styles.value}>- ₹ {discountAmount.toLocaleString('en-IN')}</div>
        </div>

        <div className={styles.breakdownRow}>
          <div className={styles.label}>GST (5%)</div>
          <div className={styles.value}>{formatCurrency(gstAmount)}</div>
        </div>

        <div className={styles.breakdownRow}>
          <div className={styles.label}>TCS (Tax collection at source)</div>
          <div className={styles.value}>{formatCurrency(tcsAmount)}</div>
        </div>

        <div className={`${styles.breakdownRow} ${styles.subtotalRow}`}>
          <div className={styles.label}>Subtotal</div>
          <div className={styles.value}>{formatCurrency(totalPackageAmount)}</div>
        </div>

        <div className={`${styles.breakdownRow} ${styles.finalRow}`}>
          <div className={styles.label}>Amount To Pay</div>
          <div className={styles.value}>{formatCurrency(totalPackageAmount)}</div>
        </div>
      </div>
    </div>
  );
};

export default PricingSummary;