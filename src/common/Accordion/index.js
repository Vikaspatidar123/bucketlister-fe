"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";

const Accordion = ({
  defaultOpen = false,
  renderHeader,
  renderContent,
  className = "",
}) => {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div className={`${styles.accordion} ${className}`}>
      <div className={styles.header} onClick={() => setOpen(!open)}>
        {typeof renderHeader === "function" ? renderHeader({ open, toggle: () => setOpen(!open) }) : null}
      </div>
      {open && (
        <div className={styles.content}>
          {typeof renderContent === "function" ? renderContent({ open, toggle: () => setOpen(!open) }) : null}
        </div>
      )}
    </div>
  );
};

export default Accordion;


