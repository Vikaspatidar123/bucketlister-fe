import React from "react";
import { CONTACT_INFO } from "../../constants";
import styles from "../style.module.scss";
import Image from "next/image";
import { searchIcon, phoneIcon } from "@/assets/svg";

const ContactInfo = ({ showSearch = true }) => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.phoneSection}>
        <Image src={phoneIcon} alt="phone-icon" width={18} height={18} />
        <a
          href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
          className={styles.phoneNumber}
        >
          {CONTACT_INFO.phone}
        </a>
      </div>
      {showSearch && <div className={styles.separator}></div>}
      {showSearch && (
        <div className={styles.searchIcon}>
          <Image src={searchIcon} alt="search-icon" width={32} height={32} />
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
