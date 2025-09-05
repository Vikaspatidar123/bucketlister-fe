"use client";
import React, { useMemo, useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";
import Accordion from "@/common/Accordion";
import Modal, { useModal } from "@/common/Modal";
import ContactForm from "@/components/footer/components/ContactForm";
import { peopleIcon } from "@/assets/svg";
import Image from "next/image";
import jsPDF from "jspdf";
import TripDatesCard from "../TripDatesCard";

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
      const borderRight = parseFloat(cs.borderRightWidth || "0") || 0;
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
    window.addEventListener("resize", handle, { passive: true });
    return () => window.removeEventListener("resize", handle, { passive: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  const [openIndex, setOpenIndex] = React.useState(null);
  const TAIL_GAP_PX = 36; // extra right gap to mirror chips' right padding

  const handleChipClick = (idx) => {
    setOpenIndex(idx);
    const target = document.getElementById(`itinerary-day-${idx + 1}`);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const modal = useModal();

  const getPdfFileName = () => {
    const base = trip?.title || destination?.destination_name || "itinerary";
    const safe = String(base)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    return `${safe || "itinerary"}.pdf`;
  };

  const triggerPdfDownload = () => {
    try {
      const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const marginX = 15;
      const marginTop = 15;
      const marginBottom = 15;
      const contentWidth = pageWidth - marginX * 2;
      let y = marginTop;

      const titleText =
        trip?.title || destination?.destination_name || "Trip Itinerary";
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      const titleLines = doc.splitTextToSize(titleText, contentWidth);
      doc.text(titleLines, marginX, y);
      y += 8 + (titleLines.length - 1) * 6;

      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      const meta = [
        `Duration: ${trip?.duration || "N/A"}`,
        `Base City: ${destination?.baseCity || "N/A"}`,
        route && route.length ? `Route: ${route.join(" → ")}` : null,
        `Generated: ${new Date().toLocaleString()}`,
      ]
        .filter(Boolean)
        .join("  |  ");
      const metaLines = doc.splitTextToSize(meta, contentWidth);
      doc.text(metaLines, marginX, y);
      y += 8 + (metaLines.length - 1) * 6;

      const drawSeparator = () => {
        doc.setDrawColor(220);
        doc.setLineWidth(0.4);
        doc.line(marginX, y, marginX + contentWidth, y);
        y += 6;
      };
      drawSeparator();

      // Days
      days.forEach((d, index) => {
        const ensureSpace = (needed = 20) => {
          if (y + needed > pageHeight - marginBottom) {
            doc.addPage();
            y = marginTop;
          }
        };

        doc.setFont("helvetica", "bold");
        doc.setFontSize(13);
        ensureSpace(12);
        doc.text(`Day ${d.day}`, marginX, y);
        y += 6;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        const summaryLines = doc.splitTextToSize(d.summary || "", contentWidth);
        ensureSpace(summaryLines.length * 6 + 6);
        doc.text(summaryLines, marginX, y);
        y += summaryLines.length * 6 + 2;

        if (d.details) {
          doc.setFontSize(11);
          const detailsLines = doc.splitTextToSize(d.details, contentWidth);
          ensureSpace(detailsLines.length * 6 + 6);
          doc.text(detailsLines, marginX, y);
          y += detailsLines.length * 6 + 2;
        }

        if (index < days.length - 1) {
          drawSeparator();
        }
      });

      doc.save(getPdfFileName());
    } catch (e) {
      console.error("Failed to generate PDF:", e);
    }
  };

  const handleContactSuccess = () => {
    triggerPdfDownload();
    modal.close();
  };

  return (
    <section className={styles.itinerary}>
      <div className={styles.headerRow}>
        <div className={styles.headerRowLeft}>
          <Image src={peopleIcon} alt="calendar" width={22} height={22} />
          <h2 className={styles.title}>Itinerary</h2>
        </div>
        {/* <button className={styles.downloadBtn} type="button" onClick={modal.open}>
          Download Itinerary
        </button> */}
      </div>

      <div className={styles.subHeader}>
        {/* <div className={styles.subHeaderLabel}>Upcoming Trips</div> */}
        <div className={styles.timelineDynamic}>
          {segmentWidths.map((w, idx) => (
            <div
              key={`seg-${idx}`}
              className={styles.segment}
              style={{ width: w }}
            >
              <span className={styles.segmentDot} />
              <span className={styles.segmentLabel}>{`Day ${idx + 1}`}</span>
              <span className={styles.segmentLine} />
              {idx === segmentWidths.length - 1 && (
                <span className={styles.segmentDot} />
              )}
            </div>
          ))}
          {segmentWidths.length > 0 && (
            <span
              className={styles.segmentTailLine}
              style={{ width: TAIL_GAP_PX }}
            />
          )}
        </div>
      </div>

      <RouteChips
        route={route}
        onChipClick={handleChipClick}
        getChipRef={setChipRef}
      />

      <div className={styles.startEnd}>
        Start and End from {destination?.baseCity || "Mumbai"}
      </div>

      <div className={styles.daysListWrap}>
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
        <TripDatesCard trip={trip} />
      </div>
      <div style={{ display: "none" }}>
        {days.map((_, idx) => (
          <div key={`anchor-${idx}`} id={`itinerary-day-${idx + 1}`} />
        ))}
      </div>

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title="Download Itinerary"
        size="md"
        footer={
          <ContactForm
            onSuccess={handleContactSuccess}
            submitLabel="Submit & Download PDF"
          />
        }
      >
        <div>
          <p style={{ marginBottom: 8 }}>
            Provide your contact details to receive this itinerary file.
          </p>
          <p style={{ color: "#6b7280", fontSize: 14 }}>
            File will download automatically after successful submission.
          </p>
        </div>
      </Modal>
    </section>
  );
};

export default Itinerary;
