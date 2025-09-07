"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import { useRouter, useSearchParams } from "next/navigation";
import CustomSelect from "../../../../common/CustomSelect";
import Tabs from "../../../../common/Tabs";
import Pagination from "../../../../common/Pagination";
import {
  FILTER_OPTIONS,
  DATE_TABS,
  TRAVEL_PACKAGES_DATA,
} from "../../constants";
import { useTravelPackages } from "../../hooks/useTravelPackages";
import styles from "./style.module.scss";
import PriceRangeSlider from "../../../../common/PriceRangeSlider";
import Image from "next/image";
import { filterIcon } from "@/assets/svg";
import { banner1 } from "@/assets/png";

const TravelPackagesSection = ({
  selectedTripId = null,
  destinationName = null,
  isHomePage = false,
  listLayout = false,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    filters,
    activeDateTab,
    currentPage,
    sortBy,
    filteredAndSortedData,
    totalItems,
    hasMoreItems,
    displayedData,
    handleFilterChange,
    handlePriceRangeChange,
    clearFilters,
    handlePageChange,
    handleLoadMore,
    setActiveDateTab,
    setSortBy,
    isPriceFilterOpen,
    togglePriceFilter,
    priceFilterRef,
    maxPrice,
  } = useTravelPackages(selectedTripId, destinationName);

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPortalRoot(document.body);
    }
  }, []);

  // Lock background scroll when the mobile filters overlay is open
  useEffect(() => {
    if (!isMobileFiltersOpen) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [isMobileFiltersOpen]);

  // Apply filters from query params (destination, date)
  useEffect(() => {
    if (!searchParams) return;
    const destination = searchParams.get("destination");
    const date = searchParams.get("date");

    if (destination) {
      const option = FILTER_OPTIONS.destinations.find(
        (o) => o.value === destination
      );
      if (option) {
        handleFilterChange("destinations", [option]);
      }
    }

    if (date) {
      const raw = String(date).trim().toLowerCase();
      const exists = (id) => Array.isArray(DATE_TABS) && DATE_TABS.some(t => t.id === id);
      const month3 = raw.slice(0, 3);

      let normalized = raw;

      // If format is monYYYY -> convert to monYY
      if (/^[a-z]{3}\d{4}$/.test(raw)) {
        normalized = `${month3}${raw.slice(-2)}`;
      }

      // If only month given -> pick the first matching tab id (e.g., "dec" -> "dec25")
      if (/^[a-z]{3}$/.test(normalized)) {
        const firstMatch = DATE_TABS.find(t => String(t.id).startsWith(month3));
        if (firstMatch) normalized = firstMatch.id;
      }

      // If monYY format but not present, try to fallback to first tab with same month
      if (/^[a-z]{3}\d{2}$/.test(normalized) && !exists(normalized)) {
        const firstMatch = DATE_TABS.find(t => String(t.id).startsWith(month3));
        if (firstMatch) normalized = firstMatch.id;
      }

      setActiveDateTab(normalized);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleTripClick = (trip) => {
    const destination = TRAVEL_PACKAGES_DATA.find(
      (dest) => dest.trips && dest.trips.some((t) => t.tripId === trip.tripId)
    );
    if (destination) {
      router.push(
        `/trip?destinationId=${destination.destination_id}&tripId=${trip.tripId}`
      );
    }
  };

  const formatPriceRange = () => {
    const [min, max] = filters.priceRange;
    if (min === 0 && max === maxPrice) {
      return "Price Range";
    }
    return `₹${min.toLocaleString()} - ₹${max.toLocaleString()}`;
  };

  // Helpers for card UI formatting
  const getDurationText = (duration) => {
    if (!duration) return "";
    try {
      const [daysPart, nightsPart] = duration.split("-");
      const days = parseInt(daysPart);
      const nights = parseInt(nightsPart);
      if (Number.isFinite(days) && Number.isFinite(nights)) {
        return `${nights} nights / ${days} days`;
      }
    } catch (e) { }
    return duration;
  };

  // Helper to check if trip has active batches
  const hasBatches = (trip) => {
    return Array.isArray(trip?.batches) && trip.batches.length > 0;
  };

  // const parsePriceNumber = (priceString) => {
  //   if (!priceString) return null;
  //   const n = parseInt(String(priceString).replace(/[^\d]/g, ''));
  //   return Number.isFinite(n) ? n : null;
  // };

  // const formatINR = (value) => {
  //   if (value == null) return '';
  //   return `₹ ${Number(value).toLocaleString('en-IN')}`;
  // };

  const getDatesFooter = (trip) => {
    // Prefer batches (array of { MonthName: [dateRangeStrings...] })
    if (Array.isArray(trip?.batches) && trip.batches.length > 0) {
      const allStartDates = [];
      const monthMap = {
        'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 
        'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 
        'September': 'Sep', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec'
      };

      // Extract all start dates from batches
      for (const batch of trip.batches) {
        if (!batch || typeof batch !== 'object') continue;
        
        for (const [monthName, dateRanges] of Object.entries(batch)) {
          if (!Array.isArray(dateRanges)) continue;
          
          const monthAbbr = monthMap[monthName] || monthName.slice(0, 3);
          
          for (const dateRange of dateRanges) {
            try {
              const [startDateStr] = String(dateRange).split(/\s*-\s*/);
              const [day, month, year] = startDateStr.split('/').map(s => s.trim());
              
              if (day && month && year) {
                allStartDates.push(`${monthAbbr} ${parseInt(day)}`);
              }
            } catch (e) {
              // Skip invalid date formats
            }
          }
        }
      }

      if (allStartDates.length > 0) {
        const maxShow = 4;
        const shown = allStartDates.slice(0, maxShow);
        const extra = Math.max(0, allStartDates.length - maxShow);
        
        return shown.join(', ') + (extra > 0 ? `, +${extra}more` : '');
      }
    }
    
    // Fallback to availableDates (legacy)
    if (Array.isArray(trip?.availableDates) && trip.availableDates.length > 0) {
      const shown = trip.availableDates.slice(0, 4).map((code) => {
        const mon = (code || '').replace(/\d+/g, '').toLowerCase();
        const yr = (code || '').replace(/\D+/g, '');
        const map = { jan: 'Jan', feb: 'Feb', mar: 'Mar', apr: 'Apr', may: 'May', jun: 'Jun', jul: 'Jul', aug: 'Aug', sep: 'Sep', oct: 'Oct', nov: 'Nov', dec: 'Dec' };
        return `${map[mon] || mon}${yr}`;
      });
      const extra = Math.max(0, trip.availableDates.length - 4);
      return shown.join(', ') + (extra > 0 ? `, +${extra}more` : '');
    }
    
    return 'Customizable Dates';
  };

  // Check if any filters are active
  const hasActiveFilters = () => {
    const hasDestinations = Array.isArray(filters.destinations) && filters.destinations.length > 0;
    const hasFeatures = Array.isArray(filters.features) && filters.features.length > 0;
    const hasDestinationType = !!(filters.destinationType && (filters.destinationType.value || filters.destinationType.label));
    const hasPriceFilter = Array.isArray(filters.priceRange) && (filters.priceRange[0] > 0 || filters.priceRange[1] < maxPrice);

    return hasDestinations || hasFeatures || hasDestinationType || hasPriceFilter;
  };

  return (
    <section
      id="travel-packages"
      className={`${styles.travelPackagesSection} ${destinationName ? styles.explorePage : ""} ${listLayout ? styles.listLayout : ""} ${isHomePage ? styles.homePage : ""}`}
    >
      <div
        className={`${styles.container} ${destinationName ? styles.explorePageContainer : ""
          }`}
      >
        {listLayout && (
          <div className={styles.listBanner}>
            <Image
              src={banner1}
              alt="Explore trips"
              fill
              priority
              sizes="100vw"
              className={styles.bannerImage}
            />
          </div>
        )}

        {listLayout && (
          <div className={styles.listHeadingWrap}>
            <h2 className={styles.listHeading}>Upcoming Trips</h2>
          </div>
        )}
        {/* Section Title - Only show on homepage */}
        {isHomePage && (
          <div className={styles.sectionTitle}>
            <div className={styles.titleRow}>
              <h2>Upcoming Trips</h2>
              <button
                className={styles.showMoreButton}
                onClick={() => router.push("/explore/list")}
              >
                <span>View All</span>
                <span className={styles.arrowIcon}>→</span>
              </button>
            </div>
          </div>
        )}
        {/* Filter Bar - Only show when not showing a specific trip or destination */}
        {!selectedTripId && !destinationName && (
          <>
            <div className={styles.mobileFilterBar}>
              <div className={styles.mobileTopRow}>
                <Tabs
                  tabs={DATE_TABS}
                  activeTab={activeDateTab}
                  onTabChange={setActiveDateTab}
                  variant="pills"
                  size="small"
                  className={styles.mobileDateTabs}
                />
                <button
                  className={`${styles.mobileFilterButton} ${hasActiveFilters() ? styles.hasActiveFilters : ''}`}
                  onClick={() => setIsMobileFiltersOpen(true)}
                >
                  <span className={styles.filterIcon}>
                    <Image
                      src={filterIcon}
                      alt="filter"
                      width={24}
                      height={24}
                    />
                  </span>
                  {hasActiveFilters() && <span className={styles.filterDot}></span>}
                </button>
              </div>
            </div>
            <div className={styles.filterBar}>
              <div className={styles.filterControls}>
                <CustomSelect
                  options={FILTER_OPTIONS.destinations}
                  value={filters.destinations}
                  onChange={(value) =>
                    handleFilterChange("destinations", value)
                  }
                  placeholder="Destinations"
                  isMulti={true}
                  isSearchable={true}
                  className={styles.filterSelect}
                />

                {/* Collapsible Price Range Filter */}
                <div
                  ref={priceFilterRef}
                  className={`${styles.priceFilterContainer} ${isPriceFilterOpen ? styles.open : ""
                    }`}
                >
                  <div
                    className={styles.priceFilterHeader}
                    onClick={togglePriceFilter}
                  >
                    <span className={styles.priceFilterDisplay}>
                      {formatPriceRange()}
                    </span>
                    <span
                      className={`${styles.priceFilterArrow} ${isPriceFilterOpen ? styles.rotated : ""
                        }`}
                    >
                      ▼
                    </span>
                  </div>

                  {isPriceFilterOpen && (
                    <div className={styles.priceFilterDropdown} data-price-slider="true">
                      <PriceRangeSlider
                        min={0}
                        max={maxPrice}
                        step={1000}
                        value={filters.priceRange}
                        onChange={handlePriceRangeChange}
                        currency="₹"
                        showLabels={true}
                        showValues={true}
                        className={styles.priceSlider}
                      />
                    </div>
                  )}
                </div>

                <CustomSelect
                  options={FILTER_OPTIONS.features}
                  value={filters.features}
                  onChange={(value) => handleFilterChange("features", value)}
                  placeholder="Features"
                  isMulti={true}
                  className={styles.filterSelect}
                />
                <CustomSelect
                  options={FILTER_OPTIONS.destinationType}
                  value={filters.destinationType}
                  onChange={(value) =>
                    handleFilterChange("destinationType", value)
                  }
                  placeholder="Destination Type"
                  isMulti={false}
                  className={styles.filterSelect}
                />
              </div>
              <div className={styles.resultsInfo}>
                <span className={styles.resultsCount}>
                  {/* {filteredAndSortedData.length} packages found */}
                </span>
              </div>
              <div className={styles.filterActions}>
                <button className={styles.clearButton} onClick={clearFilters}>
                  Clear filters
                </button>
              </div>
            </div>

            {/* Mobile Filters Overlay */}
            {portalRoot && createPortal(
              <div
                className={`${styles.mobileFiltersOverlay} ${isMobileFiltersOpen ? styles.open : ""}`}
                aria-hidden={!isMobileFiltersOpen}
              >
                <div
                  className={styles.overlayBackdrop}
                  onClick={() => setIsMobileFiltersOpen(false)}
                />
                <div
                  className={styles.overlayPanel}
                  role="dialog"
                  aria-modal="true"
                >
                  <div className={styles.overlayHeader}>
                    <span className={styles.overlayTitle}>Filters</span>
                    <button
                      className={styles.closeButton}
                      onClick={() => setIsMobileFiltersOpen(false)}
                      aria-label="Close"
                    >
                      ×
                    </button>
                  </div>
                  <div className={styles.overlayContent}>
                    <CustomSelect
                      options={FILTER_OPTIONS.destinations}
                      value={filters.destinations}
                      onChange={(value) =>
                        handleFilterChange("destinations", value)
                      }
                      placeholder="Destinations"
                      isMulti={true}
                      isSearchable={true}
                      className={styles.filterSelect}
                    />

                    <div
                      ref={priceFilterRef}
                      className={`${styles.priceFilterContainer} ${isPriceFilterOpen ? styles.open : ""}`}
                    >
                      <div
                        className={styles.priceFilterHeader}
                        onClick={togglePriceFilter}
                      >
                        <span className={styles.priceFilterDisplay}>
                          {formatPriceRange()}
                        </span>
                        <span
                          className={`${styles.priceFilterArrow} ${isPriceFilterOpen ? styles.rotated : ""}`}
                        >
                          ▼
                        </span>
                      </div>

                      {isPriceFilterOpen && (
                        <div className={styles.priceFilterDropdown} data-price-slider="true">
                          <PriceRangeSlider
                            min={0}
                            max={maxPrice}
                            step={1000}
                            value={filters.priceRange}
                            onChange={handlePriceRangeChange}
                            currency="₹"
                            showLabels={true}
                            showValues={true}
                            className={styles.priceSlider}
                          />
                        </div>
                      )}
                    </div>

                    <CustomSelect
                      options={FILTER_OPTIONS.features}
                      value={filters.features}
                      onChange={(value) => handleFilterChange("features", value)}
                      placeholder="Features"
                      isMulti={true}
                      className={styles.filterSelect}
                    />
                    <CustomSelect
                      options={FILTER_OPTIONS.destinationType}
                      value={filters.destinationType}
                      onChange={(value) =>
                        handleFilterChange("destinationType", value)
                      }
                      placeholder="Destination Type"
                      isMulti={false}
                      className={styles.filterSelect}
                    />
                  </div>
                  <div className={styles.overlayFooter}>
                    <div>
                      {/* Apply */}
                    </div>
                    <button className={styles.clearButton} onClick={clearFilters}>
                      Clear filters
                    </button>
                  </div>
                </div>
              </div>,
              portalRoot
            )}

            {/* Date Selection Tabs */}
            <div className={styles.dateSection}>
              <div className={styles.dateHeader}>
                <span className={styles.dateLabel}>By Date</span>
                <Tabs
                  tabs={DATE_TABS}
                  activeTab={activeDateTab}
                  onTabChange={setActiveDateTab}
                  variant="pills"
                  size="medium"
                  className={styles.dateTabs}
                />
              </div>
            </div>
          </>
        )}
        {/* Travel Package Cards Grid */}
        <div className={styles.packagesGrid}>
          {displayedData.map((trip) => (
            <div
              key={trip.tripId}
              className={styles.packageCard}
              onClick={() => handleTripClick(trip)}
            >
              <div className={styles.cardImage}>
                <img
                  src={
                    trip.image ||
                    trip.thumbnail_image ||
                    trip.hero_image ||
                    banner1
                  }
                  alt={trip.title}
                  className={styles.packageImage}
                />

                {/* {trip.badge && (
                  <div className={`${styles.badge} ${styles[trip.badge.type]}`}>
                    {trip.badge.text}
                  </div>
                )} */}
              </div>

              <div className={styles.cardBody}>
                <div className={styles.metaRow}>
                  <span className={styles.metaIcon}>⏳</span>
                  <span className={styles.metaDuration}>
                    {getDurationText(trip.duration)}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{trip.title}</h3>

                {hasBatches(trip) && (
                  <div className={styles.priceRow}>
                    <span className={styles.currentPrice}>
                      ₹{typeof trip.price === 'number' ? trip.price.toLocaleString('en-IN') : trip.price}
                    </span>
                    {trip.originalPrice && (
                      <span className={styles.oldPrice}>
                        ₹{typeof trip.originalPrice === 'number' ? trip.originalPrice.toLocaleString('en-IN') : trip.originalPrice}
                      </span>
                    )}
                    {trip.discountAmount && (
                      <span className={styles.discount}>
                        ₹{typeof trip.discountAmount === 'number' ? trip.discountAmount.toLocaleString('en-IN') : trip.discountAmount} Off
                      </span>
                    )}
                  </div>
                )}

                <div className={styles.footerRow}>{getDatesFooter(trip)}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button - Only show when not showing a specific trip or destination */}
        {!selectedTripId && !destinationName && hasMoreItems && (
          <div className={styles.loadMoreWrapper}>
            <button
              className={styles.loadMoreButton}
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TravelPackagesSection;
