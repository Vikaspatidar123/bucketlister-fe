"use client";
import React, { useState, useMemo, useCallback } from "react";
import styles from "./style.module.scss";

const Accordion = ({
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  renderHeader,
  renderContent,
  className = "",
}) => {
  const isControlled = typeof controlledOpen === "boolean";
  const [uncontrolledOpen, setUncontrolledOpen] = useState(!!defaultOpen);

  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = useCallback(
    (next) => {
      if (isControlled) {
        onOpenChange && onOpenChange(next);
      } else {
        setUncontrolledOpen(next);
      }
    },
    [isControlled, onOpenChange]
  );

  const toggle = useCallback(() => setOpen(!open), [open, setOpen]);

  return (
    <div className={`${styles.accordion} ${className}`}>
      <div className={styles.header} onClick={toggle}>
        {typeof renderHeader === "function" ? renderHeader({ open, toggle }) : null}
      </div>
      {open && (
        <div className={styles.content}>
          {typeof renderContent === "function" ? renderContent({ open, toggle }) : null}
        </div>
      )}
    </div>
  );
};

export default Accordion;


