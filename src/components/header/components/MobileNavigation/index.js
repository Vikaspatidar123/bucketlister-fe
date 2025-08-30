'use client'
import React, { useState, useEffect } from 'react';
import styles from '../style.module.scss';
import {
  NAVIGATION_ITEMS,
  INTERNATIONAL_DESTINATIONS,
  DOMESTIC_DESTINATIONS,
  MORE_LINKS
} from '../../constants';

const getSubLinksFor = (label) => {
  if (label === 'International') return INTERNATIONAL_DESTINATIONS;
  if (label === 'Domestic') return DOMESTIC_DESTINATIONS;
  if (label === 'More') return MORE_LINKS;
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

  const toggle = (label) => setOpen((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <nav className={styles.mobileNav}>
      {NAVIGATION_ITEMS.map((item) => {
        const subLinks = item.hasDropdown ? getSubLinksFor(item.label) : [];
        const isOpen = !!open[item.label];
        return (
          <div key={item.label} className={styles.mobileNavItem}>
            <button
              className={styles.mobileNavHeader}
              onClick={() => (item.hasDropdown ? toggle(item.label) : (window.location.href = item.href))}
            >
              <span className={`${styles.mobileNavLabel} ${item.isHighlighted ? styles.highlighted : ''}`}>{item.label}</span>
              {item.hasDropdown ? (
                <span className={`${styles.mobileChevron} ${isOpen ? styles.open : ''}`}>▾</span>
              ) : null}
            </button>
            {item.hasDropdown && isOpen && (
              <div className={styles.mobileSubList}>
                {subLinks.map((link) =>
                  link.href ? (
                    <a key={link.label} href={link.href} className={styles.mobileSubLink}>
                      {link.label}
                    </a>
                  ) : (
                    <span key={link.label} className={styles.mobileSubLink}>
                      {link.label}
                    </span>
                  )
                )}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default MobileNavigation;


