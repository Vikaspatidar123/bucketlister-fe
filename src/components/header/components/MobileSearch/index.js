"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { searchIcon } from "@/assets/svg";
import styles from "../style.module.scss";
import SearchForm from "@/components/home/components/SearchForm";

const MobileSearch = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!wrapperRef.current) return;
      const clickedInside = wrapperRef.current.contains(e.target);
      const anySelectOpen =
        document.body.getAttribute("data-custom-select-open") === "true";
      const clickedSelectPortal = !!(
        e.target.closest && e.target.closest(`.${styles.searchDropdownInline}`)
      );
      if (open && !clickedInside && !anySelectOpen && !clickedSelectPortal) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);
  return (
    <div className={styles.mobileSearchWrapper} ref={wrapperRef}>
      <button
        className={styles.mobileSearchBtn}
        aria-label="Search"
        onClick={() => setOpen((v) => !v)}
      >
        <Image src={searchIcon} alt="search" width={24} height={24} />
      </button>
      <div
        className={`${styles.searchDropdownInline} ${open ? styles.open : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.searchPanel}>
          <div className={styles.searchBody}>
            <SearchForm onSubmitted={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
