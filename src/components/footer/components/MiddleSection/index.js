import React from 'react';
import CompanyInfo from '../CompanyInfo';
import styles from './style.module.scss';

const MiddleSection = () => {
  return (
    <div className={styles.middleSection}>
      <div className={styles.container}>
        <CompanyInfo />
      </div>
    </div>
  );
};

export default MiddleSection;
