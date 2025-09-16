"use client";
import React, { useState, useEffect } from "react";
import styles from "../style.module.scss";
import {
  NAVIGATION_ITEMS,
  INTERNATIONAL_DESTINATIONS,
  DOMESTIC_DESTINATIONS,
  DOMESTIC_WEEKEND_GETAWAYS,
  MORE_LINKS,
} from "../../constants";

const getSubLinksFor = (label) => {
  if (label === "International") return INTERNATIONAL_DESTINATIONS;
  if (label === "Domestic") return DOMESTIC_DESTINATIONS;
  if (label === "Weekend Trips") return DOMESTIC_WEEKEND_GETAWAYS.items || [];
  if (label === "More") return MORE_LINKS;
  return [];
};

const MobileNavigation = ({ sheetOpen = false }) => {
  const [open, setOpen] = useState({});

  // When the sheet closes, collapse all open accordions
  useEffect(() => {
    if (!sheetOpen) {
      setOpen({});
    }
  }, [sheetOpen]);

  const toggle = (label) =>
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }));

  // Build mobile-specific items: remove 'More', add 'Weekend Trips'
  const mobileItems = React.useMemo(() => {
    const base = NAVIGATION_ITEMS.filter((i) => i.label !== "More");
    // Insert Weekend Trips after Domestic
    const insertAt = base.findIndex((i) => i.label === "Domestic");
    const weekendItem = {
      label: "Weekend Trips",
      hasDropdown: true,
      href: "/weekend",
    };
    if (insertAt >= 0) {
      return [
        ...base.slice(0, insertAt + 1),
        weekendItem,
        ...base.slice(insertAt + 1),
      ];
    }
    return [...base, weekendItem];
  }, []);

  return (
    <nav className={styles.mobileNav}>
      {mobileItems.map((item) => {
        const subLinks = item.hasDropdown ? getSubLinksFor(item.label) : [];
        const isOpen = !!open[item.label];
        return (
          <div key={item.label} className={styles.mobileNavItem}>
            <button
              className={styles.mobileNavHeader}
              onClick={() =>
                item.hasDropdown
                  ? toggle(item.label)
                  : (window.location.href = item.href)
              }
            >
              <span
                className={`${styles.mobileNavLabel} ${item.isHighlighted ? styles.highlighted : ""}`}
              >
                {item.label}
              </span>
              {item.hasDropdown ? (
                <span
                  className={`${styles.mobileChevron} ${isOpen ? styles.open : ""}`}
                >
                  ▾
                </span>
              ) : null}
            </button>
            {item.hasDropdown && isOpen && (
              <div className={styles.mobileSubList}>
                {subLinks.map((link) =>
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      className={styles.mobileSubLink}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span key={link.label} className={styles.mobileSubLink}>
                      {link.label}
                    </span>
                  ),
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Inline 'More' links directly without dropdown */}
      {MORE_LINKS && MORE_LINKS.length > 0 && (
        <div className={styles.mobileNavItem}>
          <div className={styles.mobileSubList}>
            {MORE_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.mobileSubLinkMore}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNavigation;
