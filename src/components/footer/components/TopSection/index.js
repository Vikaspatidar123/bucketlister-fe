import React from 'react';
import ServicesSection from '../ServicesSection';
import ContactForm from '../ContactForm';
import styles from './style.module.scss';

const TopSection = () => {
  return (
    <div className={styles.topSection}>
      <div className={styles.container}>
        <ServicesSection />
        <ContactForm />
      </div>
    </div>
  );
};

export default TopSection;
