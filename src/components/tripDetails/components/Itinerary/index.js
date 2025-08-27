"use client";
import React, { useMemo, useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";
import Accordion from "@/common/Accordion";
import { peopleIcon } from "@/assets/svg";
import Image from "next/image";

const RouteChips = ({ route = [], onChipClick, getChipRef }) => {
  if (!Array.isArray(route) || route.length === 0) return null;
  return (
    <div className={styles.routeChips}>
      {route.map((stop, i) => (
        <button
          key={`${stop}-${i}`}
          type="button"
          className={styles.chip}
          onClick={() => onChipClick && onChipClick(i)}
          ref={(el) => getChipRef && getChipRef(i, el)}
        >
          {stop}
        </button>
      ))}
    </div>
  );
};

const DayRow = ({ dayNumber, summary, details, open, onToggle }) => (
  <div className={styles.dayRow}>
    <div className={styles.markerCol}>
      <span className={styles.dayMarker} />
      <span className={styles.dayLine} />
    </div>
    <div className={styles.dayContent}>
      <Accordion
        open={open}
        onOpenChange={onToggle}
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

  // Measure chip widths to render dynamic timeline segments above
  const chipElementsRef = useRef([]);
  const [segmentWidths, setSegmentWidths] = useState([]);

  const setChipRef = (idx, el) => {
    chipElementsRef.current[idx] = el;
  };

  const recalcWidths = () => {
    const widths = route.map((_, idx) => {
      const el = chipElementsRef.current[idx];
      if (!el) return 80;
      const rectWidth = el.getBoundingClientRect().width;
      const cs = window.getComputedStyle(el);
      const borderRight = parseFloat(cs.borderRightWidth || '0') || 0;
      const adjust = borderRight + 4; // leave a small gap before divider
      return Math.max(8, rectWidth - adjust);
    });
    setSegmentWidths(widths);
  };

  useEffect(() => {
    recalcWidths();
    const handle = () => {
      window.requestAnimationFrame(recalcWidths);
    };
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  const [openIndex, setOpenIndex] = React.useState(null);
  const TAIL_GAP_PX = 36; // extra right gap to mirror chips' right padding

  const handleChipClick = (idx) => {
    setOpenIndex(idx);
    const target = document.getElementById(`itinerary-day-${idx + 1}`);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
        <div className={styles.timelineDynamic}>
          {segmentWidths.map((w, idx) => (
            <div key={`seg-${idx}`} className={styles.segment} style={{ width: w }}>
              <span className={styles.segmentDot} />
              <span className={styles.segmentLabel}>{`Day ${idx + 1}`}</span>
              <span className={styles.segmentLine} />
              {idx === segmentWidths.length - 1 && (
                <span className={styles.segmentDot} />
              )}
            </div>
          ))}
          {segmentWidths.length > 0 && (
            <span className={styles.segmentTailLine} style={{ width: TAIL_GAP_PX }} />
          )}
        </div>
      </div>

      <RouteChips route={route} onChipClick={handleChipClick} getChipRef={setChipRef} />

      <div className={styles.startEnd}>
        Start and End from {destination?.baseCity || "Mumbai"}
      </div>

      <div className={styles.daysList}>
        {days.map((d, idx) => (
          <DayRow
            key={d.day}
            dayNumber={d.day}
            summary={d.summary}
            details={d.details}
            open={openIndex === idx}
            onToggle={(next) => setOpenIndex(next ? idx : null)}
          />
        ))}
      </div>
      <div style={{display: 'none'}}>
        {days.map((_, idx) => (
          <div key={`anchor-${idx}`} id={`itinerary-day-${idx + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default Itinerary;
