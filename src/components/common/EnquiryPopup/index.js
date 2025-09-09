"use client";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./style.module.scss";
import { crmApi } from '@/utils/crmApi';

const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";

const lockBodyScroll = (shouldLock) => {
  if (!isBrowser) return;
  const html = document.documentElement;
  if (shouldLock) {
    const scrollBarWidth = window.innerWidth - html.clientWidth;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
  } else {
    html.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }
};

const ensurePortalContainer = (containerId) => {
  if (!isBrowser) return null;
  const targetId = containerId || "modal-root";
  let container = document.getElementById(targetId);
  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", targetId);
    document.body.appendChild(container);
  }
  return container;
};

const EnquiryPopup = ({ 
  isOpen, 
  onClose, 
  destinationName = "",
  tripTitle = "" 
}) => {
  const portalContainerRef = React.useRef(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    portalContainerRef.current = ensurePortalContainer("modal-root");
    setMounted(true);
  }, []);
  const [formData, setFormData] = useState({
    fullName: "",
    name: "",
    phone: "",
    email: "",
    destination: destinationName || tripTitle || "",
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle body scroll lock when popup is open
  React.useEffect(() => {
    lockBodyScroll(isOpen);
    return () => lockBodyScroll(false);
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
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.destination.trim()) {
      newErrors.destination = "Destination is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitToEmail = async () => {
    try {
      // Prepare form data for Web3Forms
      const body = new FormData();
      body.append('name', formData.fullName || formData.name);
      body.append('email', formData.email);
      body.append('phone', formData.phone);
      body.append('destination', formData.destination);
      body.append('access_key', process.env.WEB3FORMS_API_KEY);
      body.append('subject', 'New Travel Enquiry from Bucketlister Website');
      body.append('from_name', 'Bucketlister Website');
      
      // Add additional context in the message
      const message = `
New Travel Enquiry Details:
- Name: ${formData.name}
- Email: ${formData.email}
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
      return data && data.success;
    } catch (error) {
      console.error('Email submission error:', error);
      return false;
    }
  };

  const submitToCRM = async () => {
    try {
      const { firstName, lastName } = crmApi.parseFullName(formData.fullName || formData.name);
      const formattedPhone = crmApi.formatPhoneNumber(formData.phone);
      
      const leadData = {
        firstName,
        lastName,
        email: formData.email,
        phone: formattedPhone,
        source: 'Website',
        notes: `Interested Destination: ${formData.destination}`
      };

      const result = await crmApi.createLead(leadData);
      return result.success;
    } catch (error) {
      console.error('CRM submission error:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Submit to email first, then CRM
      const emailResult = await submitToEmail();
      const crmResult = await submitToCRM();

      // Consider successful if either submission works
      if (crmResult || emailResult) {
        // Show success state
        setIsSuccess(true);
        setErrors({});
        
        // Log results for debugging
        console.log('CRM Result:', crmResult);
        console.log('Email Result:', emailResult);
        
        // Auto-close popup after showing success message
        setTimeout(() => {
          setFormData({
            fullName: "",
            name: "",
            phone: "",
            email: "",
            destination: destinationName || tripTitle || "",
          });
          setIsSuccess(false);
          onClose();
        }, 2000);
        
      } else {
        setErrors({ submit: 'Failed to submit enquiry. Please try again or contact us directly.' });
      }
      
    } catch (error) {
      console.error('Enquiry submission error:', error);
      setErrors({ submit: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted || !isOpen || !portalContainerRef.current) return null;

  const node = (
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
                <label htmlFor="enquiry-email" className={styles.label}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="enquiry-email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`${styles.input} ${errors.email ? styles.error : ''}`}
                  required
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
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

  return ReactDOM.createPortal(node, portalContainerRef.current);
};

export default EnquiryPopup;