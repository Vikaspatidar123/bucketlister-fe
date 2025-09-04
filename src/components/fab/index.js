"use client";
import { phoneIcon, playIcon } from "@/assets/png";
import { whatsappIcon } from "@/assets/svg";
import { CONTACT_INFO } from "@/components/header/constants";
import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";

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

  const handleCall = () => {
    try {
      const raw = (CONTACT_INFO?.phone || "").toString();
      const sanitized = raw.replace(/[^\d+]/g, "");
      if (!sanitized) return;
      window.location.href = `tel:${sanitized}`;
    } catch {}
  };

  return (
    <div className={`${styles.fabContainer} ${open ? styles.open : ""}`}>
      <button
        className={styles.fabMain}
        onClick={toggle}
        aria-label="More actions"
      >
        <span className={styles.plusIcon}>+</span>
      </button>
      <div className={styles.fabActions} aria-hidden={!open}>
        <button
          className={styles.fabAction}
          onClick={handleCall}
          aria-label="Call us"
        >
          <Image src={phoneIcon} alt="Call" width={45} height={45} />
        </button>
        <button
          className={styles.fabAction}
          onClick={handleReel}
          aria-label="Open Reels"
        >
          <Image src={playIcon} alt="Reels" width={40} height={40} />
        </button>
        <button
          className={styles.fabAction}
          onClick={handleWhatsApp}
          aria-label="Open WhatsApp"
        >
          <Image src={whatsappIcon} alt="WhatsApp" width={35} height={35} />
        </button>
      </div>
    </div>
  );
};

export default FloatingActions;
