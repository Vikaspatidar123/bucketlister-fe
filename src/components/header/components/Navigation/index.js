import React, { useEffect, useRef } from "react";
import { NAVIGATION_ITEMS, INTERNATIONAL_DESTINATIONS, DOMESTIC_DESTINATIONS, DOMESTIC_WEEKEND_GETAWAYS, MORE_LINKS } from "../../constants";
import { useHeader } from "../../hooks/useHeader";
import styles from "../style.module.scss";
import Image from "next/image";
import { downArrow } from "@/assets/svg";

const Navigation = () => {
  const { activeDropdown, toggleDropdown, openDropdown, closeAllDropdowns } = useHeader();
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!navRef.current) return;
      if (activeDropdown && !navRef.current.contains(event.target)) {
        closeAllDropdowns();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [activeDropdown, closeAllDropdowns]);

  return (
    <nav className={styles.navigation} ref={navRef}>
      {NAVIGATION_ITEMS.map((item) => {
        const hasDropdown = item.hasDropdown;
        const isOpen = activeDropdown === item.label;
        const dropdownList = item.label === 'International' ? INTERNATIONAL_DESTINATIONS : item.label === 'Domestic' ? DOMESTIC_DESTINATIONS : item.label === 'More' ? MORE_LINKS : [];

        return (
        <div
          key={item.label}
          className={styles.navItem}
          onMouseEnter={() => hasDropdown && openDropdown(item.label)}
        >
          {(hasDropdown && (item.label === 'International' || item.label === 'Domestic')) ? (
            <span className={`${styles.navLink} ${item.isHighlighted ? styles.highlighted : ""}`}>
              {item.label}
            </span>
          ) : (
            <a
              href={item.href}
              className={`${styles.navLink} ${
                item.isHighlighted ? styles.highlighted : ""
              }`}
            >
              {item.label}
            </a>
          )}
          {hasDropdown && (
            <button
              className={styles.dropdownToggle}
              onClick={() => toggleDropdown(item.label)}
            >
              <Image className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`} src={downArrow} alt="down-arrow" width={13} height={10} />
            </button>
          )}
          {hasDropdown && isOpen && (
            <div className={styles.dropdownPanel}>
              {item.label === 'Domestic' ? (
                <div className={styles.domesticWrapper}>
                  <div className={styles.domesticColumn}>
                    <div className={styles.domesticTitle}>Domestic</div>
                    <div className={styles.domesticList}>
                      {dropdownList.map((link) => (
                        link.href ? (
                          <a key={link.label} href={link.href} className={styles.dropdownItem}>
                            {link.label}
                          </a>
                        ) : (
                          <span key={link.label} className={styles.dropdownItem}>
                            {link.label}
                          </span>
                        )
                      ))}
                    </div>
                  </div>
                  <div className={styles.weekendColumn}>
                    <div className={styles.weekendTitle}>Weekend Trips</div>
                    <div className={styles.weekendList}>
                      {DOMESTIC_WEEKEND_GETAWAYS.items.map((w) => (
                        w.href ? (
                          <a key={w.label} href={w.href} className={styles.dropdownItem}>{w.label}</a>
                        ) : (
                          <span key={w.label} className={styles.dropdownItem}>{w.label}</span>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ) : item.label === 'More' ? (
                <div className={styles.moreList}>
                  {dropdownList.map((link) => (
                    <a key={link.label} href={link.href} className={styles.moreItem}>{link.label}</a>
                  ))}
                </div>
              ) : (
                <div className={styles.dropdownGrid}>
                  {dropdownList.map((link) => (
                    link.href ? (
                      <a key={link.label} href={link.href} className={styles.dropdownItem}>
                        {link.label}
                      </a>
                    ) : (
                      <span key={link.label} className={styles.dropdownItem}>
                        {link.label}
                      </span>
                    )
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      );})}
    </nav>
  );
};

export default Navigation;
