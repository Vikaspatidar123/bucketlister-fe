import React, { useState } from "react";
import { useFooter } from "../../hook/useFooter";
import styles from "./style.module.scss";

const ContactForm = ({ onSuccess, submitLabel = "Enquire Now" }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { formData, errors, isSubmitting, handleInputChange, handleSubmit } =
    useFooter();

  const onSubmit = async (e) => {
    const ok = await handleSubmit(e);
    if (ok) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);

      if (typeof onSuccess === "function") {
        try {
          onSuccess();
        } catch {}
      }
    }
  };

  return (
    <div className={styles.contactForm}>
      {isSuccess ? (
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>✓</div>
          <h3 className={styles.successTitle}>Thank You!</h3>
          <p className={styles.successText}>
            Your enquiry has been sent successfully. We&apos;ll get back to you
            within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" Full Name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={`${styles.input} ${errors.name ? styles.error : ""}`}
              required
            />
            {errors.name && (
              <span className={styles.errorText}>{errors.name}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contactNumber" className={styles.label}>
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              placeholder=" Enter Contact Number?"
              value={formData.contactNumber}
              onChange={(e) =>
                handleInputChange("contactNumber", e.target.value)
              }
              className={`${styles.input} ${errors.contactNumber ? styles.error : ""}`}
              required
            />
            {errors.contactNumber && (
              <span className={styles.errorText}>{errors.contactNumber}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="comment" className={styles.label}>
              Any Comment?(Optional)
            </label>
            <textarea
              id="comment"
              name="comment"
              placeholder=" Enter Comments"
              value={formData.comment}
              onChange={(e) => handleInputChange("comment", e.target.value)}
              className={styles.textarea}
              rows={4}
            />
          </div>
          {errors.submit && (
            <div className={styles.errorText}>{errors.submit}</div>
          )}

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : submitLabel}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
