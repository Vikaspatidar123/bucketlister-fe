"use client";
import React from "react";
import TopSection from "../TopSection";
import MiddleSection from "../MiddleSection";
import FooterLinks from "../FooterLinks";
import styles from "./style.module.scss";

const Footers = () => {
  return (
    <footer className={styles.footer}>
      <TopSection />
      <MiddleSection />
      <FooterLinks />
    </footer>
  );
};

export default Footers;
