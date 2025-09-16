"use client";
import React from "react";
import styles from "./style.module.scss";
import Accordion from "@/common/Accordion";

const List = ({ items = [] }) => (
  <ul className={styles.list}>
    {items.map((text, i) => (
      <li key={i}>{text}</li>
    ))}
  </ul>
);

const Inclusions = ({ trip }) => {
  const includes = Array.isArray(trip?.includes)
    ? trip.includes
    : [
        "6 nights' accommodation with breakfast.",
        "All transportation by A/C Vehicles on a shared basis.",
        "Island tour with boat and local lunch.",
        "Overnight party experience at key destination.",
      ];

  const excludes = Array.isArray(trip?.excludes)
    ? trip.excludes
    : [
        "Any expense of a personal nature.",
        "Any meals not explicitly mentioned in the itinerary.",
        "GST and TCS as applicable.",
      ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.column}>
          <h3 className={styles.heading}>Whats Included</h3>
          <List items={includes} />
          <Accordion
            renderHeader={({ open, toggle }) => (
              <div className={styles.headerRight}>
                <button
                  className={styles.viewMore}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle();
                  }}
                  type="button"
                >
                  {open ? "View Less" : "View More"}
                  <span
                    className={`${styles.caret} ${open ? styles.caretUp : ""}`}
                  >
                    ▾
                  </span>
                </button>
              </div>
            )}
            renderContent={() => (
              <div className={styles.moreText}>
                Additional inclusions will be provided on request.
              </div>
            )}
          />
        </div>

        <div className={styles.divider} />

        <div className={styles.column1}>
          <h3 className={styles.heading}>Whats Not Included</h3>
          <List items={excludes} />
          <Accordion
            renderHeader={({ open, toggle }) => (
              <div className={styles.headerRight}>
                <button
                  className={styles.viewMore}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle();
                  }}
                  type="button"
                >
                  {open ? "View Less" : "View More"}
                  <span
                    className={`${styles.caret} ${open ? styles.caretUp : ""}`}
                  >
                    ▾
                  </span>
                </button>
              </div>
            )}
            renderContent={() => (
              <div className={styles.moreText}>
                Detailed exclusions are available in the final invoice.
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Inclusions;
