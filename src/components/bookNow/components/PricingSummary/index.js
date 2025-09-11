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
  paymentType = "slot", // "slot" or "full"
  onPaymentTypeChange,
  selectedBatchInfo = null
}) => {
  const subtotal = baseAmount * quantity;
  
  // Apply coupon discount
  const couponDiscount = appliedCoupon ? appliedCoupon.discount : 0;
  const totalDiscount = discountAmount + couponDiscount;
  const discountedAmount = Math.max(subtotal - totalDiscount, 0); // Ensure non-negative
  
  // Calculate fees
  const convenienceFeeRate = 0.02; // 2%
  const convenienceFee = discountedAmount * convenienceFeeRate;
  const amountAfterConvenience = discountedAmount + convenienceFee;
  
  const gstRate = 0.05;
  const gstAmount = amountAfterConvenience * gstRate;
  
  // TCS only for international bookings
  const isInternational = tripData?.destination && ![
    'Meghalaya', 'Spiti Valley', 'Himachal', 'Gokarna', 'Hampi', 'Coorg', 
    'Ladakh', 'Kashmir', 'Kerala', 'Arunachal Pradesh', 'Sikkim', 'Rajasthan', 
    'Andaman'
  ].includes(tripData.destination);
  
  const tcsRate = 0.021;
  const tcsAmount = isInternational ? amountAfterConvenience * tcsRate : 0;
  
  const totalPackageAmount = amountAfterConvenience + gstAmount + tcsAmount;
  
  // Payment discounts
  const bookingDiscount = paymentType === "slot" ? 500 : 0; // ₹500 off for booking amount
  const fullPaymentDiscount = paymentType === "full" ? Math.min(totalPackageAmount * 0.10, 1500) : 0; // Up to 10% off, max ₹1500
  
  const discountedTotal = Math.max(totalPackageAmount - bookingDiscount - fullPaymentDiscount, 0); // Ensure non-negative
  const bookingAmount = Math.max(paymentType === "full" ? discountedTotal : discountedTotal * 0.2, 0); // Ensure non-negative
  const remainingAmount = Math.max(discountedTotal - bookingAmount, 0); // Ensure non-negative

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Pass calculated amounts to parent
  React.useEffect(() => {
    if (onAmountsCalculated) {
      onAmountsCalculated({
        totalPackageAmount: discountedTotal,
        bookingAmount,
        remainingAmount,
        paymentType,
        originalTotal: totalPackageAmount,
        bookingDiscount,
        fullPaymentDiscount
      });
    }
  }, [discountedTotal, bookingAmount, remainingAmount, paymentType, totalPackageAmount, bookingDiscount, fullPaymentDiscount, onAmountsCalculated]);

  return (
    <div className={`${styles.pricingSummaryContainer} ${compact ? styles.compact : ''}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {compact ? "Summary" : "Package Summary"}
          {tripData && compact && (
            <div className={styles.tripInfo}>
              <span className={styles.tripName}>{tripData.title}</span>
              {selectedBatchInfo && (
                <span className={styles.batchInfo}>Batch: {selectedBatchInfo.dateRange}</span>
              )}
            </div>
          )}
        </h2>
        <div className={styles.totalAmount}>{formatCurrency(totalPackageAmount)}</div>
      </div>

      <div className={styles.breakdown}>
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
          <div className={styles.label}>Convenience Fees</div>
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
        
        {(bookingDiscount > 0 || fullPaymentDiscount > 0) && (
          <div className={styles.breakdownRow}>
            <div className={styles.label}>Booking Discount</div>
            <div className={styles.value}>- ₹{(bookingDiscount + fullPaymentDiscount).toLocaleString('en-IN')}</div>
          </div>
        )}

        <div className={`${styles.breakdownRow} ${styles.subtotalRow}`}>
          <div className={styles.label}>Payable Amount</div>
          <div className={styles.value}>{formatCurrency(discountedTotal)}</div>
        </div>
      </div>


      {/* Payment Selection Cards */}
      <div className={styles.paymentCards}>
        <div 
          className={`${styles.paymentCard} ${paymentType === 'slot' ? styles.selected : ''}`}
          onClick={() => onPaymentTypeChange && onPaymentTypeChange('slot')}
        >
          <div className={styles.cardHeader}>
            <h3>Book my Slot</h3>
            <span className={styles.discount}>Save Flat ₹500</span>
          </div>
          <div className={styles.tooltip}>
            Pending amount to be paid 15 days prior trip
          </div>
        </div>
        
        <div 
          className={`${styles.paymentCard} ${paymentType === 'full' ? styles.selected : ''}`}
          onClick={() => onPaymentTypeChange && onPaymentTypeChange('full')}
        >
          <div className={styles.cardHeader}>
            <h3>Pay Full Amount</h3>
            <span className={styles.discount}>Save upto ₹1500</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSummary;