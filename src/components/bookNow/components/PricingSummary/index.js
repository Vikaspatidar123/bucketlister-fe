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
  tripData = null,
  appliedCoupon = null,
  paymentType = "slot" // "slot" or "full"
}) => {
  const subtotal = baseAmount * quantity;
  
  // Apply coupon discount
  const couponDiscount = appliedCoupon ? appliedCoupon.discount : 0;
  const totalDiscount = discountAmount + couponDiscount;
  const discountedAmount = subtotal - totalDiscount;
  
  // Calculate fees
  const convenienceFeeRate = 0.025; // 2.5%
  const convenienceFee = discountedAmount * convenienceFeeRate;
  const amountAfterConvenience = discountedAmount + convenienceFee;
  
  const gstRate = 0.05;
  const gstAmount = amountAfterConvenience * gstRate;
  
  // TCS only for international bookings
  const isInternational = tripData?.destination && ![
    'Meghalaya', 'Spiti Valley', 'Himachal', 'Gokarna', 'Hampi', 'Coorg', 
    'Ladakh', 'Kashmir', 'Kerala', 'Arunachal Pradesh', 'Sikkim', 'Rajasthan', 
    'Andaman & Nicobar Islands'
  ].includes(tripData.destination);
  
  const tcsRate = 0.021;
  const tcsAmount = isInternational ? amountAfterConvenience * tcsRate : 0;
  
  const totalPackageAmount = amountAfterConvenience + gstAmount + tcsAmount;
  const bookingAmount = paymentType === "full" ? totalPackageAmount : totalPackageAmount * 0.1; // Full amount or 10%
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
        remainingAmount,
        paymentType
      });
    }
  }, [totalPackageAmount, bookingAmount, remainingAmount, paymentType, onAmountsCalculated]);

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

        {totalDiscount > 0 && (
          <div className={styles.breakdownRow}>
            <div className={styles.label}>Discount</div>
            <div className={styles.value}>- ₹{totalDiscount.toLocaleString('en-IN')}</div>
          </div>
        )}
        
        {appliedCoupon && (
          <div className={styles.breakdownRow}>
            <div className={styles.sublabel}>Coupon: {appliedCoupon.code}</div>
            <div className={styles.value}>- ₹{couponDiscount.toLocaleString('en-IN')}</div>
          </div>
        )}
        
        <div className={styles.breakdownRow}>
          <div className={styles.label}>Convenience Fee (2.5%)</div>
          <div className={styles.value}>{formatCurrency(convenienceFee)}</div>
        </div>

        <div className={styles.breakdownRow}>
          <div className={styles.label}>GST (5%)</div>
          <div className={styles.value}>{formatCurrency(gstAmount)}</div>
        </div>

        {isInternational && (
          <div className={styles.breakdownRow}>
            <div className={styles.label}>TCS (Tax collection at source)</div>
            <div className={styles.value}>{formatCurrency(tcsAmount)}</div>
          </div>
        )}

        <div className={`${styles.breakdownRow} ${styles.subtotalRow}`}>
          <div className={styles.label}>Subtotal</div>
          <div className={styles.value}>{formatCurrency(totalPackageAmount)}</div>
        </div>

        <div className={`${styles.breakdownRow} ${styles.bookingRow}`}>
          <div className={styles.label}>
            {paymentType === "full" ? "Full Payment" : "Booking Amount (10%)"}
          </div>
          <div className={styles.value}>{formatCurrency(bookingAmount)}</div>
        </div>
        
        {paymentType === "slot" && (
          <div className={styles.breakdownRow}>
            <div className={styles.label}>Remaining Amount</div>
            <div className={styles.value}>{formatCurrency(remainingAmount)}</div>
          </div>
        )}
        
        <div className={`${styles.breakdownRow} ${styles.finalRow}`}>
          <div className={styles.label}>Amount To Pay Now</div>
          <div className={styles.value}>{formatCurrency(bookingAmount)}</div>
        </div>
      </div>
    </div>
  );
};

export default PricingSummary;