"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { instagramIcon, whatsappIcon, playIcon } from "@/assets/svg";

const FloatingActions = () => {
  const [open, setOpen] = React.useState(true);

  const toggle = () => setOpen((v) => !v);

  const handleWhatsApp = () => {
    try {
      window.open("https://wa.me/", "_blank");
    } catch {}
  };

  const handleReel = () => {
    try {
      window.location.href = "/reels";
    } catch {}
  };

  return (
    <div className={`${styles.fabContainer} ${open ? styles.open : ""}`}>
      <button className={styles.fabMain} onClick={toggle} aria-label="More actions">
        <span className={styles.plusIcon}>+</span>
      </button>
      <div className={styles.fabActions} aria-hidden={!open}>
        <button className={styles.fabAction} onClick={handleReel} aria-label="Open Reels">
          <Image src={playIcon} alt="Reels" width={45} height={45} />
        </button>
        <button className={styles.fabAction} onClick={handleWhatsApp} aria-label="Open WhatsApp">
          <Image src={whatsappIcon} alt="WhatsApp" width={35} height={35} />
        </button>
      </div>
    </div>
  );
};

export default FloatingActions;


