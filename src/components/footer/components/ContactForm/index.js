import React from 'react';
import { useFooter } from '../../hook/useFooter';
import styles from './style.module.scss';

const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    resetForm
  } = useFooter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const success = await handleSubmit();
    if (success) {
      resetForm();
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
          <label htmlFor="contactNumber" className={styles.label}>Contact Number</label>
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
          <label htmlFor="comment" className={styles.label}>Any Comment? (optional)</label>
          <textarea
            id="comment"
            name="comment"
            placeholder="help us get to you with what you want"
            value={formData.comment}
            onChange={(e) => handleInputChange('comment', e.target.value)}
            className={styles.textarea}
            rows={4}
          />
        </div>
        
        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Enquire Now'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
