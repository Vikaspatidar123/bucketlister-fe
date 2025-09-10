"use client";
import React, { useMemo, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HERO_DATA } from "../../constants";
import { useHeroSearch } from "../../hooks/useHeroSearch";
import styles from "./style.module.scss";
import CustomSelect from "@/common/CustomSelect";
import {
  FILTER_OPTIONS,
  DATE_TABS,
} from "@/components/TravelPackagesSection/constants";

const SearchForm = ({ onSubmitted = null }) => {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mql.matches);
    update();
    try {
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    } catch (_) {
      // Safari fallback
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }
  }, []);

  const { searchData, handleInputChange, isSearching, resetSearch } =
    useHeroSearch();

  const destinationOptions = useMemo(() => FILTER_OPTIONS.destinations, []);
  const dateOptions = useMemo(
    () =>
      DATE_TABS.map((tab) => ({
        value: tab.id,
        label: tab.label,
      })),
    []
  );

  // Function to convert date to month+year format (e.g., "2024-10-15" -> "oct24")
  const formatDateToMonthYear = (dateString) => {
    if (!dateString) return "";
    
    const date = new Date(dateString);
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 
                   'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of year
    
    return `${month}${year}`;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const rawDestination =
      typeof searchData.destination === "string"
        ? searchData.destination.trim()
        : (
            searchData.destination?.label ||
            searchData.destination?.value ||
            ""
          ).trim();
    const date = searchData.date || "";
    const isDateRequired = !isMobile;
    if (!rawDestination || (isDateRequired && !date)) return;

    // Try to normalize destination to a known option value
    const exact = destinationOptions.find(
      (o) => o.value.toLowerCase() === rawDestination.toLowerCase()
    );
    const partial = exact
      ? null
      : destinationOptions.find((o) =>
          o.label.toLowerCase().includes(rawDestination.toLowerCase())
        );
    const destination = (exact || partial)?.value || rawDestination;

    let url = `/explore/list?destination=${encodeURIComponent(destination)}`;
    if (!isMobile && date) {
      // Convert date to month+year format
      const formattedDate = formatDateToMonthYear(date);
      url += `&date=${encodeURIComponent(formattedDate)}`;
    }   
    router.push(url);

    // Reset fields after triggering search
    resetSearch();

    // Removed in-page scroll; we now redirect to the list page

    try {
      onSubmitted && onSubmitted();
    } catch (_) {}
  };

  return (
    <div className={styles.searchForm}>
      <form onSubmit={onSubmit}>
        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="destination"
              name="destination"
              placeholder={HERO_DATA.searchForm.destination.placeholder}
              value={
                typeof searchData.destination === "string"
                  ? searchData.destination
                  : searchData.destination?.label || ""
              }
              onChange={(e) => handleInputChange("destination", e.target.value)}
              className={styles.input}
              required
            />
          </div>

          <div className={`${styles.inputGroup} ${styles.hideOnMobile}`}>
            {/* <CustomSelect
              options={dateOptions}
              value={searchData.date}
              onChange={(opt) => handleInputChange("date", opt)}
              placeholder={HERO_DATA.searchForm.date.placeholder}
              isSearchable={false}
              className={styles.selectLikeInput}
            /> */}
             <div style={{ position: 'relative', width: '100%' }}>
               <input
                 type="date"
                 id="date"
                 name="date"
                 placeholder={HERO_DATA.searchForm.date.placeholder}
                 value={searchData.date || ""}
                 onChange={(e) => {
                   const selectedDate = e.target.value;
                   const formattedDate = formatDateToMonthYear(selectedDate);
                   console.log("Date selected:", selectedDate);
                   console.log("Formatted date (month+year):", formattedDate);
                   handleInputChange("date", selectedDate);
                 }}
                 className={styles.input}
                 required
               />
               {/* {searchData.date && (
                 <div style={{ 
                   position: 'absolute', 
                   top: '100%', 
                   left: 0, 
                   right: 0, 
                   background: '#f0f0f0', 
                   padding: '4px 8px', 
                   fontSize: '12px', 
                   color: '#666',
                   borderRadius: '0 0 8px 8px',
                   textAlign: 'center'
                 }}>
                   Will search for: {formatDateToMonthYear(searchData.date)}
                 </div>
               )} */}
             </div>
          </div>

          <button
            type="submit"
            className={styles.searchButton}
            disabled={isSearching}
            onClick={() => {
              console.log("Search button clicked");
              console.log("Current search data:", searchData);
            }}
          >
            {isSearching ? "Searching..." : HERO_DATA.searchForm.searchButton}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
