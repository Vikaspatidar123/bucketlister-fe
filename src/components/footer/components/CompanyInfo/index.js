import React from "react";
import Image from "next/image";
import { COMPANY_INFO } from "../../constants";
import styles from "./style.module.scss";

const CompanyInfo = () => {
  return (
    <div className={styles.companyInfo}>
      <div className={styles.logoSection}>
        <h1 className={styles.companyName}>
          <Image
            src={COMPANY_INFO.logo}
            alt={COMPANY_INFO.name}
            width={365}
            height={100}
            className={styles.logo}
          />
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
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            title={social.name}
            aria-label={`Visit our ${social.name} page`}
          >
            <Image src={social.icon} alt={social.name} width={40} height={40} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CompanyInfo;
