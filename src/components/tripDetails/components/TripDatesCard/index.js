"use client";
import React from "react";
import styles from "./style.module.scss";
import CustomSelect from "@/common/CustomSelect";
import EnquiryPopup from "@/components/common/EnquiryPopup";

const buildMonthOptions = (batches = []) => {
  const seen = new Set();
  const opts = [];
  batches.forEach((obj) => {
    if (obj && typeof obj === "object") {
      const key = Object.keys(obj)[0];
      if (key && !seen.has(key)) {
        seen.add(key);
        opts.push({ value: key, label: key });
      }
    }
  });
  return opts;
};

const TripDatesCard = ({ trip, destination }) => {
  const [selectedMonth, setSelectedMonth] = React.useState(null);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [isEnquiryPopupOpen, setIsEnquiryPopupOpen] = React.useState(false);
  const monthOptions = React.useMemo(
    () => buildMonthOptions(trip?.batches),
    [trip]
  );

  React.useEffect(() => {
    if (!selectedMonth && monthOptions && monthOptions.length > 0) {
      setSelectedMonth(monthOptions[0]);
    }
  }, [monthOptions, selectedMonth]);

  const datesForMonth = React.useMemo(() => {
    if (!selectedMonth || !trip?.batches) return [];
    const entry = trip.batches.find(
      (o) => Object.keys(o)[0] === selectedMonth.value
    );
    const arr = entry ? entry[selectedMonth.value] : [];
    if (!Array.isArray(arr)) return [];
    return Array.from(new Set(arr));
  }, [selectedMonth, trip]);

  React.useEffect(() => {
    setSelectedDate(null);
    if (datesForMonth && datesForMonth.length > 0) {
      setSelectedDate(datesForMonth[0]);
    }
  }, [selectedMonth, datesForMonth]);

  const formatStart = (range) => {
    try {
      const [startRaw] = String(range).split(/\s*-\s*/);
      const [dd, mm, yy] = startRaw.split("/")?.map((s) => s.trim());
      const map = {
        1: "Jan",
        "01": "Jan",
        2: "Feb",
        "02": "Feb",
        3: "Mar",
        "03": "Mar",
        4: "Apr",
        "04": "Apr",
        5: "May",
        "05": "May",
        6: "Jun",
        "06": "Jun",
        7: "Jul",
        "07": "Jul",
        8: "Aug",
        "08": "Aug",
        9: "Sep",
        "09": "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec",
      };
      const mon = map[mm] || mm;
      const fullYear = String(yy || "").length === 2 ? `20${yy}` : yy;
      return `${String(dd).padStart(2, "0")} ${mon} ${fullYear}`;
    } catch {
      return range;
    }
  };

  return (
    <div className={styles.card}>
      {/* <div className={styles.headerRow}>
        <div className={styles.titleWrap}>
          <div className={styles.priceLabel}>Trip Starts From</div>
          <div className={styles.priceValue}>₹ {Number(trip?.price || 0).toLocaleString("en-IN")}</div>
        </div>
        <div className={styles.perPerson}>Per Person</div>
      </div> */}

      <div className={styles.sectionWrap}>
        <div className={styles.sectionTitle}>
          <span className={styles.dateIcon}>📅</span> Trip Dates
        </div>

        <div className={styles.monthSelectWrap}>
          <CustomSelect
            options={monthOptions}
            value={selectedMonth}
            onChange={(v) => setSelectedMonth(Array.isArray(v) ? v[0] : v)}
            placeholder="Select Month"
            isMulti={false}
          />
        </div>
      </div>

      <div className={styles.datesList}>
        {datesForMonth.map((range) => (
          <label
            key={`${selectedMonth?.value || "m"}-${range}`}
            className={styles.dateRow}
          >
            <span className={styles.dateText}>{formatStart(range)}</span>
            <input
              type="checkbox"
              className={styles.radio}
              checked={selectedDate === range}
              onChange={() => setSelectedDate(range)}
            />
          </label>
        ))}
        {(!datesForMonth || datesForMonth.length === 0) && (
          <div className={styles.noDates}>
            {!trip?.batches || trip.batches.length === 0 
              ? "No upcoming batches for this trip. Send us an enquiry to customize your trip on your preferred dates."
              : "Select a month to view dates"
            }
          </div>
        )}
      </div>

      <button 
        className={styles.primaryBtn}
        onClick={() => setIsEnquiryPopupOpen(true)}
      >
        Send Enquiry
      </button>
      
      <EnquiryPopup
        isOpen={isEnquiryPopupOpen}
        onClose={() => setIsEnquiryPopupOpen(false)}
        destinationName={destination?.destination_name}
        tripTitle={trip?.title}
      />
    </div>
  );
};

export default TripDatesCard;
