"use client";
import React from "react";
import EnquiryPopup from ".";

const isBrowser = typeof window !== "undefined";

const SUBMITTED_KEY = "enquiry_submitted";
const SNOOZE_KEY = "enquiry_snooze_until";

const getLocalStorage = (key) => {
  if (!isBrowser) return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

const setLocalStorage = (key, value) => {
  if (!isBrowser) return;
  try {
    window.localStorage.setItem(key, value);
  } catch {}
};

const removeLocalStorage = (key) => {
  if (!isBrowser) return;
  try {
    window.localStorage.removeItem(key);
  } catch {}
};

const GlobalEnquiryPopupManager = () => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const scheduleOpenAfter = (ms) => {
    clearTimer();
    if (ms <= 0) {
      const submitted = getLocalStorage(SUBMITTED_KEY);
      if (submitted === "true") return;
      const snoozeUntil = Number(getLocalStorage(SNOOZE_KEY) || 0);
      if (snoozeUntil && snoozeUntil > Date.now()) {
        scheduleOpenAfter(snoozeUntil - Date.now());
        return;
      }
      setOpen(true);
      return;
    }
    timerRef.current = setTimeout(() => {
      const submitted = getLocalStorage(SUBMITTED_KEY);
      if (submitted === "true") {
        timerRef.current = null;
        return;
      }
      const snoozeUntil = Number(getLocalStorage(SNOOZE_KEY) || 0);
      if (snoozeUntil && snoozeUntil > Date.now()) {
        timerRef.current = null;
        scheduleOpenAfter(snoozeUntil - Date.now());
        return;
      }
      setOpen(true);
      timerRef.current = null;
    }, ms);
  };

  React.useEffect(() => {
    if (!isBrowser) return;

    const submitted = getLocalStorage(SUBMITTED_KEY);
    if (submitted === "true") {
      return;
    }

    const snoozeUntil = Number(getLocalStorage(SNOOZE_KEY) || 0);
    const now = Date.now();
    if (snoozeUntil && snoozeUntil > now) {
      scheduleOpenAfter(snoozeUntil - now);
    } else {
      scheduleOpenAfter(15000);
    }

    return () => clearTimer();
  }, []);

  const handleClose = (info) => {
    if (info && info.reason === "success") {
      setLocalStorage(SUBMITTED_KEY, "true");
      removeLocalStorage(SNOOZE_KEY);
      setOpen(false);
      clearTimer();
      return;
    }

    const snoozeMs = 3 * 60 * 1000;
    const until = Date.now() + snoozeMs;
    setLocalStorage(SNOOZE_KEY, String(until));
    setOpen(false);
    scheduleOpenAfter(snoozeMs);
  };

  return (
    <EnquiryPopup isOpen={open} onClose={handleClose} />
  );
};

export default GlobalEnquiryPopupManager;


