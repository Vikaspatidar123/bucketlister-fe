import React from 'react';
import { FOOTER_SERVICES } from '../../constants';
import styles from './style.module.scss';

const ServicesSection = () => {
  return (
    <div className={styles.servicesSection}>
      <h2 className={styles.title}>Curate your next trip with us</h2>
      <div className={styles.servicesGrid}>
        {FOOTER_SERVICES.map((service) => (
          <div key={service.id} className={styles.serviceItem}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
