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
      const phoneNumber = "917021664759"; // +91 70216 64759 without + and spaces
      const message = "Hi! I'm interested in your travel packages and would like to know more about trip details, pricing, and availability. Please help me plan my next adventure!";
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error("Failed to open WhatsApp:", error);
    }
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
    <div className={styles.fabContainer}>
      {/* Desktop: Only WhatsApp Icon */}
      <button
        className={styles.desktopWhatsApp}
        onClick={handleWhatsApp}
        aria-label="Open WhatsApp"
      >
        <Image src={whatsappIcon} alt="WhatsApp" width={32} height={32} />
      </button>

      {/* Mobile: Full FAB with + and all actions */}
      <div className={`${styles.mobileFab} ${open ? styles.open : ""}`}>
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
    </div>
  );
};

export default FloatingActions;
