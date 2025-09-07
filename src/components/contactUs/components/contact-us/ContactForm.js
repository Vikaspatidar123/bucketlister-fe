import React from 'react';
import styles from './ContactForm.module.scss';
import { useContactForm } from '../../hook/useContactForm';

const ContactForm = ({ onSuccess, submitLabel = 'Send Message' }) => {
  const {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit
  } = useContactForm();

  const onSubmit = async (e) => {
    const success = await handleSubmit(e);
    if (success && typeof onSuccess === 'function') {
      try { 
        onSuccess(); 
      } catch {}
    }
  };

  return (
    <div className={styles.contactForm}>
      <form onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`${styles.input} ${errors.name ? styles.error : ''}`}
            required
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`${styles.input} ${errors.email ? styles.error : ''}`}
            required
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="contactNumber" className={styles.label}>Phone Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            placeholder="Where can we call you?"
            value={formData.contactNumber}
            onChange={(e) => handleInputChange('contactNumber', e.target.value)}
            className={`${styles.input} ${errors.contactNumber ? styles.error : ''}`}
            required
          />
          {errors.contactNumber && <span className={styles.errorText}>{errors.contactNumber}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="destination" className={styles.label}>Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Where do you want to travel?"
            value={formData.destination}
            onChange={(e) => handleInputChange('destination', e.target.value)}
            className={`${styles.input} ${errors.destination ? styles.error : ''}`}
            required
          />
          {errors.destination && <span className={styles.errorText}>{errors.destination}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="comment" className={styles.label}>Message (optional)</label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Tell us more about your travel plans"
            value={formData.comment}
            onChange={(e) => handleInputChange('comment', e.target.value)}
            className={styles.textarea}
            rows={4}
          />
        </div>

        {errors.submit && <div className={styles.errorText}>{errors.submit}</div>}
        
        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : submitLabel}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;