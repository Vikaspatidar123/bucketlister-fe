"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./style.module.scss";

const TripHeader = ({ title, price, hasBatches = true }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log("Scroll position:", scrollTop);
      setIsSticky(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get responsive top position
  const getTopPosition = () => {
    if (typeof window === "undefined") return "60px";
    return window.innerWidth <= 768 ? "64px" : "60px";
  };

  const formatPrice = (p) =>
    typeof p === "number" ? `Rs. ${p.toLocaleString()}/-` : p || "";

  const stickyHeader =
    mounted && isSticky
      ? createPortal(
          <div
            style={{
              position: "fixed",
              top: getTopPosition(), // Responsive positioning below main header
              left: "0",
              right: "0",
              background: "#fff",
              borderBottom: "1px solid #dde1e6",
              zIndex: 1000, // Below main header but above content
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              transform: "translateZ(0)",
              willChange: "transform",
            }}
          >
            <div
              style={{
                maxWidth: "90vw",
                margin: "0 auto",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h1
                style={{
                  fontSize: 'var(--fs-22)',
                  fontWeight: "800",
                  lineHeight: "1.2",
                  fontFamily: "Montserrat Alternates",
                  margin: 0,
                }}
              >
                Beautiful {title}
              </h1>
              {hasBatches && (
                <div style={{ textAlign: "left" }}>
                  <div
                    style={{
                      fontFamily: "Montserrat Alternates",
                      fontWeight: "400",
                      fontSize: 'var(--fs-12)',
                      lineHeight: "72%",
                      color: "#000000",
                      marginBottom: "10px",
                    }}
                  >
                    Starting from
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat Alternates",
                      fontWeight: "700",
                      fontSize: 'var(--fs-22)',
                      lineHeight: "72%",
                    }}
                  >
                    {formatPrice(price)}
                    <span className={styles.perPerson}></span>
                  </div>
                </div>
              )}
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      {/* Original header */}
      <div className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Beautiful {title}</h1>
          {hasBatches && (
            <div className={styles.priceBlock}>
              <div className={styles.caption}>Starting from</div>
              <div className={styles.price}>
                {formatPrice(price)}
                <span className={styles.perPerson}> per person</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Render sticky header using portal */}
      {stickyHeader}
    </>
  );
};

export default TripHeader;
