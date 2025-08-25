"use client";
import React, { useMemo } from "react";
import styles from "./style.module.scss";
import Accordion from "@/common/Accordion";
import { peopleIcon } from "@/assets/svg";
import Image from "next/image";

const RouteChips = ({ route = [] }) => {
  if (!Array.isArray(route) || route.length === 0) return null;
  return (
    <div className={styles.routeChips}>
      {route.map((stop, i) => (
        <span key={`${stop}-${i}`} className={styles.chip}>
          {stop}
        </span>
      ))}
    </div>
  );
};

const DayRow = ({ dayNumber, summary, details }) => (
  <div className={styles.dayRow}>
    <div className={styles.markerCol}>
      <span className={styles.dayMarker} />
      <span className={styles.dayLine} />
    </div>
    <div className={styles.dayContent}>
      <Accordion
        defaultOpen={false}
        renderHeader={({ open, toggle }) => (
          <div className={styles.dayHeader}>
            <div className={styles.dayHeaderLeft}>
              <span className={styles.dayTitle}>{`Day ${dayNumber}`}</span>
              {!open && (
                <span className={styles.summaryPreview} title={summary}>
                  {summary}
                </span>
              )}
            </div>
            <button className={styles.viewMore} onClick={toggle} type="button">
              {open ? "View Less" : "View More"}
              <span className={`${styles.caret} ${open ? styles.caretUp : ""}`}>
                ▾
              </span>
            </button>
          </div>
        )}
        renderContent={() => (
          <>
            <div className={styles.daySummary}>{summary}</div>
            {details && <div className={styles.dayDetails}>{details}</div>}
          </>
        )}
      />
    </div>
  </div>
);

const buildFallbackDays = (destinationName, nights) => {
  const count = Number.isFinite(nights) && nights > 0 ? nights : 5;
  return Array.from({ length: count }, (_, i) => ({
    day: i + 1,
    summary: `Arrive in ${
      destinationName || "destination"
    } and explore. Overnight stay.`,
    details: `Detailed activities for day ${
      i + 1
    } will be shared in the finalized itinerary.`,
  }));
};

const Itinerary = ({ destination, trip }) => {
  // Duration format like "9D-8N" → we use nights as day rows per the reference
  let nights = null;
  try {
    const parts = String(trip?.duration || "").split("-");
    if (parts.length === 2) {
      nights = parseInt(parts[1]);
    }
  } catch {}

  const days = useMemo(() => {
    if (Array.isArray(trip?.itinerary) && trip.itinerary.length > 0) {
      return trip.itinerary.map((d, idx) => ({
        day: d.day || idx + 1,
        summary: d.summary || d.title || "",
        details: d.details || "",
      }));
    }
    return buildFallbackDays(destination?.destination_name, nights);
  }, [trip, destination, nights]);

  const route = useMemo(() => {
    return Array.isArray(trip?.route) ? trip.route : [];
  }, [trip]);

  return (
    <section className={styles.itinerary}>
      <div className={styles.headerRow}>
        <div className={styles.headerRowLeft}>
          <Image src={peopleIcon} alt="calendar" width={22} height={22} />
          <h2 className={styles.title}>Itinerary</h2>
        </div>
        <button className={styles.downloadBtn} type="button">
          Download Itinerary
        </button>
      </div>

      <div className={styles.subHeader}>
        <div className={styles.subHeaderLabel}>Upcoming Trips</div>
        <div className={styles.timeline}>
          {days.map((d, idx) => (
            <div key={idx} className={styles.timelineStep}>
              <span className={styles.timelineLabel}>{`Day ${d.day}`}</span>
              <span
                className={`${styles.timelineDot} ${
                  idx === days.length - 1 ? styles.last : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <RouteChips route={route} />

      <div className={styles.startEnd}>
        Start and End from {destination?.baseCity || "Mumbai"}
      </div>

      <div className={styles.daysList}>
        {days.map((d) => (
          <DayRow
            key={d.day}
            dayNumber={d.day}
            summary={d.summary}
            details={d.details}
          />
        ))}
      </div>
    </section>
  );
};

export default Itinerary;
