"use client";
import React from "react";
import styles from "./style.module.scss";

const Tabs = ({
  tabs = [],
  activeTab,
  onTabChange,
  variant = "default",
  size = "medium",
  className = "",
  disabled = false,
}) => {
  const handleTabClick = (tabId) => {
    if (!disabled && onTabChange) {
      onTabChange(tabId);
    }
  };

  const getTabClass = (tab) => {
    const isActive = tab.id === activeTab;
    const baseClass = styles.tab;
    const variantClass = styles[variant];
    const sizeClass = styles[size];
    const activeClass = isActive ? styles.active : "";
    const disabledClass = disabled ? styles.disabled : "";

    return `${baseClass} ${variantClass} ${sizeClass} ${activeClass} ${disabledClass}`.trim();
  };

  const getTabsContainerClass = () => {
    const baseClass = styles.tabsContainer;
    const variantClass = styles[`${variant}Container`];
    const sizeClass = styles[`${size}Container`];

    return `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();
  };

  return (
    <div className={getTabsContainerClass()}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={getTabClass(tab)}
          onClick={() => handleTabClick(tab.id)}
          disabled={disabled || tab.disabled}
          type="button"
        >
          {tab.icon && <span className={styles.tabIcon}>{tab.icon}</span>}
          <span className={styles.tabLabel}>{tab.label}</span>
          {tab.badge && <span className={styles.tabBadge}>{tab.badge}</span>}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
