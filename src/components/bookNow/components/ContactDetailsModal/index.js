"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";

const ContactDetailsModal = ({ isOpen, onClose, onSubmit, bookingAmount, title, subtitle, hideAmount = false }) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await onSubmit({
        email: formData.email.trim(),
        phone: formData.phone.trim(),
      });
    } catch (error) {
      console.error("Error submitting contact details:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title || "Contact Details"}</h2>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>
        
        {!hideAmount && bookingAmount && (
          <div className={styles.paymentInfo}>
            <div className={styles.paymentAmount}>
              <span className={styles.paymentLabel}>Booking Amount:</span>
              <span className={styles.amount}>{formatCurrency(bookingAmount)}</span>
            </div>
            <p className={styles.paymentNote}>
              You&apos;re paying the booking amount now. The remaining amount will be collected later.
            </p>
          </div>
        )}

        {subtitle && (
          <div className={styles.subtitleInfo}>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`${styles.input} ${errors.email ? styles.error : ""}`}
              placeholder="Enter your email address"
              disabled={isSubmitting}
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number <span className={styles.required}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className={`${styles.input} ${errors.phone ? styles.error : ""}`}
              placeholder="Enter your 10-digit phone number"
              maxLength={10}
              disabled={isSubmitting}
            />
            {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
          </div>

          <div className={styles.modalActions}>
            <button 
              type="button" 
              className={styles.cancelBtn} 
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className={styles.proceedBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : (hideAmount ? "Continue" : "Proceed to Payment")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactDetailsModal;