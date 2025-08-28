"use client";
import React, { useEffect, useRef, useCallback, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./style.module.scss";

const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";

const ensurePortalContainer = (containerId) => {
  if (!isBrowser) return null;
  const targetId = containerId || "modal-root";
  let container = document.getElementById(targetId);
  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", targetId);
    document.body.appendChild(container);
  }
  return container;
};

const getFocusableElements = (root) => {
  if (!root) return [];
  const selectors = [
    'a[href]','area[href]','input:not([disabled])','select:not([disabled])','textarea:not([disabled])',
    'button:not([disabled])','iframe','object','embed','[tabindex]:not([tabindex="-1"])','[contenteditable="true"]'
  ];
  return Array.from(root.querySelectorAll(selectors.join(',')))
    .filter((el) => el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement);
};

const lockBodyScroll = (shouldLock) => {
  if (!isBrowser) return;
  const html = document.documentElement;
  if (shouldLock) {
    const scrollBarWidth = window.innerWidth - html.clientWidth;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
  } else {
    html.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }
};

const Modal = ({
  isOpen = false,
  onClose,
  title,
  children,
  footer,
  className = "",
  contentClassName = "",
  size = "md", // sm | md | lg | xl
  closeOnBackdrop = true,
  closeOnEsc = true,
  mountToId,
  initialFocusRef,
  ariaLabel,
  showCloseButton = true,
  disableScrollLock = false,
}) => {
  const [mounted, setMounted] = useState(false);
  const [exiting, setExiting] = useState(false);
  const portalContainerRef = useRef(null);
  const dialogRef = useRef(null);
  const titleId = useMemo(() => (title ? `modal-title-${Math.random().toString(36).slice(2, 8)}` : undefined), [title]);

  // Mount portal container on client
  useEffect(() => {
    portalContainerRef.current = ensurePortalContainer(mountToId);
    setMounted(true);
  }, [mountToId]);

  // Lock scroll while open
  useEffect(() => {
    if (!disableScrollLock) lockBodyScroll(isOpen);
    return () => { if (!disableScrollLock) lockBodyScroll(false); };
  }, [isOpen, disableScrollLock]);

  // Request close with animation
  const handleRequestClose = useCallback((reason) => {
    if (!onClose) return;
    setExiting(true);
    window.setTimeout(() => {
      setExiting(false);
      onClose?.(reason);
    }, 200);
  }, [onClose]);

  // Handle ESC to close
  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        handleRequestClose("escape");
      }
      if (e.key === "Tab") {
        // basic focus trap
        const focusables = getFocusableElements(dialogRef.current);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [isOpen, closeOnEsc, handleRequestClose]);

  // Set initial focus when opened
  useEffect(() => {
    if (!isOpen) return;
    const toFocus = initialFocusRef?.current || dialogRef.current;
    setTimeout(() => {
      toFocus?.focus?.();
    }, 0);
  }, [isOpen, initialFocusRef]);

  const handleBackdropClick = useCallback((e) => {
    if (!closeOnBackdrop) return;
    if (e.target === e.currentTarget) {
      handleRequestClose("backdrop");
    }
  }, [closeOnBackdrop, handleRequestClose]);

  if (!mounted || !isOpen || !portalContainerRef.current) return null;

  const overlayClasses = [
    styles.overlay,
    exiting ? styles.overlayExit : styles.overlayEnter,
  ].join(" ");

  const dialogClasses = [
    styles.dialog,
    styles[size] || "",
    exiting ? styles.dialogExit : styles.dialogEnter,
    className,
  ].filter(Boolean).join(" ");

  const contentClasses = [styles.content, contentClassName].filter(Boolean).join(" ");

  const dialogProps = {
    role: "dialog",
    "aria-modal": true,
    "aria-label": ariaLabel,
    "aria-labelledby": !ariaLabel && title ? titleId : undefined,
    tabIndex: -1,
  };

  const header = (title || showCloseButton) ? (
    <div className={styles.header}>
      {title ? <h3 id={titleId} className={styles.title}>{title}</h3> : null}
      {showCloseButton ? (
        <button
          type="button"
          className={styles.closeButton}
          aria-label="Close"
          onClick={() => handleRequestClose("close-button")}
        >
          ×
        </button>
      ) : null}
    </div>
  ) : null;

  const footerNode = footer ? (
    <div className={styles.footer}>{footer}</div>
  ) : null;

  const node = (
    <div className={overlayClasses} onClick={handleBackdropClick}>
      <div
        className={dialogClasses}
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        {...dialogProps}
      >
        <div className={contentClasses}>
          {header}
          <div className={styles.body}>{children}</div>
          {footerNode}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(node, portalContainerRef.current);
};

export const useModal = (initialOpen = false) => {
  const [isOpen, setIsOpen] = React.useState(!!initialOpen);
  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);
  const toggle = React.useCallback(() => setIsOpen((v) => !v), []);
  return { isOpen, open, close, toggle, setIsOpen };
};

export default Modal;


