import React from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '../../constants';
import styles from './style.module.scss';

const CompanyInfo = () => {
  return (
    <div className={styles.companyInfo}>
      <div className={styles.logoSection}>
        <h1 className={styles.companyName}>
         <Image src={COMPANY_INFO.logo} alt={COMPANY_INFO.name} width={365} height={100} />
        </h1>
      </div>
      
      <div className={styles.contactDetails}>
        <p className={styles.address}>{COMPANY_INFO.address}</p>
        
        <div className={styles.phoneNumbers}>
          {COMPANY_INFO.phone.map((phone, index) => (
            <span key={index} className={styles.phoneNumber}>
              {phone}
            </span>
          ))}
        </div>
        
        <p className={styles.email}>{COMPANY_INFO.email}</p>
      </div>
      
      <div className={styles.socialMedia}>
        {COMPANY_INFO.socialMedia.map((social, index) => (
          <div key={index} className={styles.socialIcon} title={social.name}>
            {social.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyInfo;
