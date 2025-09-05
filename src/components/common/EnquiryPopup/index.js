"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";

const EnquiryPopup = ({ 
  isOpen, 
  onClose, 
  destinationName = "",
  tripTitle = "" 
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    name: "",
    phone: "",
    destination: destinationName || tripTitle || "",
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle body scroll lock when popup is open
  React.useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Handle ESC key to close popup
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name";
    }
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid Indian mobile number";
    }
    
    if (!formData.destination.trim()) {
      newErrors.destination = "Destination is required";
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
      // Prepare form data for Web3Forms
      const body = new FormData();
      body.append('name', formData.fullName || formData.name);
      body.append('phone', formData.phone);
      body.append('destination', formData.destination);
      body.append('access_key', 'c5ef9919-27cb-464e-bd82-1662fbd7989d');
      body.append('subject', 'New Travel Enquiry from Bucketlister Website');
      body.append('from_name', 'Bucketlister Website');
      
      // Add additional context in the message
      const message = `
New Travel Enquiry Details:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Interested Destination: ${formData.destination}
- Enquiry Source: Trip Details Page Popup
      `.trim();
      body.append('message', message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body
      });

      const data = await response.json();

      if (data && data.success) {
        // Show success state
        setIsSuccess(true);
        setErrors({});
        
        // Auto-close popup after showing success message
        setTimeout(() => {
          setFormData({
            name: "",
            phone: "",
            destination: destinationName || tripTitle || "",
          });
          setIsSuccess(false);
          onClose();
        }, 2000);
        
      } else {
        const message = data && data.message ? data.message : 'Failed to submit enquiry';
        setErrors({ submit: message });
      }
      
    } catch (error) {
      console.error('Enquiry submission error:', error);
      setErrors({ submit: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`${styles.enquiryOverlay} ${isOpen ? styles.open : ""}`}>
      <div className={styles.overlayPanel}>
        <div className={styles.overlayHeader}>
          <h3 className={styles.overlayTitle}>Send Enquiry</h3>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            ×
          </button>
        </div>
        
        <div className={styles.overlayContent}>
          {isSuccess ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>Enquiry Sent Successfully!</h3>
              <p className={styles.successText}>
                Thank you for your interest. We&apos;ll get back to you within 24 hours with the best travel options.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="enquiry-fullname" className={styles.label}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="enquiry-fullname"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`${styles.input} ${errors.fullName ? styles.error : ''}`}
                  required
                />
                {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="enquiry-name" className={styles.label}>
                  Name *
                </label>
                <input
                  type="text"
                  id="enquiry-name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`${styles.input} ${errors.name ? styles.error : ''}`}
                  required
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="enquiry-phone" className={styles.label}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="enquiry-phone"
                  name="phone"
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`${styles.input} ${errors.phone ? styles.error : ''}`}
                  required
                />
                {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="enquiry-destination" className={styles.label}>
                  Destination *
                </label>
                <input
                  type="text"
                  id="enquiry-destination"
                  name="destination"
                  placeholder="Where would you like to go?"
                  value={formData.destination}
                  onChange={(e) => handleInputChange('destination', e.target.value)}
                  className={`${styles.input} ${errors.destination ? styles.error : ''}`}
                  required
                />
                {errors.destination && <span className={styles.errorText}>{errors.destination}</span>}
              </div>

              {errors.submit && (
                <div className={styles.errorText}>{errors.submit}</div>
              )}

              <div className={styles.formActions}>
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryPopup;