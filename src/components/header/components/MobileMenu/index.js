"use client";
import { mobileMenuIcon } from "@/assets/svg";
import Image from "next/image";
import { useState } from "react";
import ContactInfo from "../ContactInfo";
import MobileNavigation from "../MobileNavigation";
import styles from "../style.module.scss";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className={styles.mobileMenuButton}
        aria-label="Menu"
        onClick={() => setOpen(true)}
      >
        <Image src={mobileMenuIcon} alt="menu" width={28} height={28} />
      </button>
      <div
        className={`${styles.mobileSheet} ${open ? styles.open : ""}`}
        aria-hidden={!open}
      >
        <div
          className={styles.mobileSheetBackdrop}
          onClick={() => setOpen(false)}
        />
        <div
          className={styles.mobileSheetPanel}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.mobileSheetCloseWrapper}>
            <button
              className={styles.mobileSheetClose}
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </div>
          <div className={styles.mobileSheetContent}>
            <MobileNavigation sheetOpen={open} />
            <div className={styles.mobileContactRow}>
              <ContactInfo showSearch={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
