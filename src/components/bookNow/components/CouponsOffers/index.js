"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import ContactDetailsModal from "../ContactDetailsModal";

const CouponsOffers = ({ onCouponApply, appliedCoupon = null, compact = false }) => {
  const [showAllCoupons, setShowAllCoupons] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const availableCoupons = [
    {
      code: "WRAVELER",
      discount: 5000,
      description: "Use code WRAVELER & get upto 5000 off on this booking",
      applied: appliedCoupon?.code === "WRAVELER"
    },
    {
      code: "FIRST100",
      discount: 1000,
      description: "First time booking discount of ₹1000",
      applied: false
    },
    {
      code: "WEEKEND50",
      discount: 500,
      description: "Weekend special - Save ₹500",
      applied: false
    }
  ];

  const handleCouponToggle = (coupon) => {
    if (coupon.applied) {
      onCouponApply(null); // Remove coupon
    } else {
      onCouponApply(coupon); // Apply coupon
    }
  };

  const displayedCoupons = compact ? availableCoupons.slice(0, 1) : availableCoupons.slice(0, 1);
  
  const handleContactSubmit = (contactDetails) => {
    setShowContactModal(false);
    setShowAllCoupons(true);
  };

  return (
    <div className={`${styles.couponsContainer} ${compact ? styles.compact : ''}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{compact ? "Coupons" : "Coupons & Offers"}</h2>
        <button 
          className={styles.viewAllBtn}
          onClick={() => setShowContactModal(true)}
        >
          View All Coupons
        </button>
      </div>

      <div className={styles.couponsGrid}>
        {(showAllCoupons ? availableCoupons : displayedCoupons).map((coupon) => (
          <div 
            key={coupon.code} 
            className={`${styles.couponCard} ${coupon.applied ? styles.applied : ""}`}
          >
            <div className={styles.couponHeader}>
              <div className={styles.couponBadge}>
                <span className={styles.saveText}>Save Upto</span>
                <span className={styles.amount}>{coupon.discount.toLocaleString()}</span>
              </div>
              
              <div className={styles.actionSection}>
                {coupon.applied ? (
                  <div className={styles.appliedSection}>
                    <span className={styles.appliedText}>Applied</span>
                    <button 
                      className={styles.removeBtn}
                      onClick={() => handleCouponToggle(coupon)}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <button 
                    className={styles.applyBtn}
                    onClick={() => handleCouponToggle(coupon)}
                  >
                    Apply
                  </button>
                )}
              </div>
            </div>
            
            <div className={styles.couponDetails}>
              <div className={styles.couponCode}>
                <strong>Coupon Code : {coupon.code}</strong>
              </div>
              <div className={styles.couponDescription}>
                {coupon.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {appliedCoupon && (
        <div className={styles.appliedCouponSummary}>
          <div className={styles.summaryText}>
            <span className={styles.couponLabel}>Coupon</span>
            <span className={styles.couponName}>{appliedCoupon.code}</span>
            <span className={styles.appliedLabel}>applied.</span>
          </div>
          <div className={styles.summaryArrow}>›</div>
        </div>
      )}

      <ContactDetailsModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        onSubmit={handleContactSubmit}
        title="Enter Details to View All Coupons"
        subtitle="Please provide your contact details to access all available offers"
        hideAmount={true}
      />
    </div>
  );
};

export default CouponsOffers;