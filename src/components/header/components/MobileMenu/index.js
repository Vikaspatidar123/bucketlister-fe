"use client";
import { mobileMenuIcon } from "@/assets/svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import ContactInfo from "../ContactInfo";
import MobileNavigation from "../MobileNavigation";
import styles from "../style.module.scss";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  
  // Lock body scroll when mobile sheet is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const body = document.body;
    if (open) {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      body.style.top = `-${scrollY}px`;
      body.style.position = 'fixed';
      body.style.left = '0';
      body.style.right = '0';
      body.style.width = '100%';
      body.style.overflow = 'hidden';
      return () => {
        const y = Math.abs(parseInt(body.style.top || '0', 10)) || 0;
        body.style.position = '';
        body.style.top = '';
        body.style.left = '';
        body.style.right = '';
        body.style.width = '';
        body.style.overflow = '';
        window.scrollTo(0, y);
      };
    }
  }, [open]);
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
            {/* <div className={styles.mobileContactRow}>
              <ContactInfo showSearch={false} />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
