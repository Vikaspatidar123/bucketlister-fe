import React from "react";
import { NAVIGATION_ITEMS } from "../../constants";
import { useHeader } from "../../hooks/useHeader";
import styles from "../style.module.scss";
import Image from "next/image";
import { downArrow } from "@/assets/svg";

const Navigation = () => {
  const { activeDropdown, toggleDropdown } = useHeader();

  return (
    <nav className={styles.navigation}>
      {NAVIGATION_ITEMS.map((item) => (
        <div key={item.label} className={styles.navItem}>
          <a
            href={item.href}
            className={`${styles.navLink} ${
              item.isHighlighted ? styles.highlighted : ""
            }`}
          >
            {item.label}
          </a>
          {item.hasDropdown && (
            <button
              className={styles.dropdownToggle}
              onClick={() => toggleDropdown(item.label)}
            >
              <Image src={downArrow} alt="down-arrow" width={13} height={10} />
            </button>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
