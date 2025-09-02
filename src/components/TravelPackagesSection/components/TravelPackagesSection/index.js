"use client";
import React, { useEffect, useState } from "react";
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

const TravelPackagesSection = ({
  selectedTripId = null,
  destinationName = null,
  isHomePage = false,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    filters,
    activeDateTab,
    currentPage,
    sortBy,
    filteredAndSortedData,
    totalPages,
    paginatedData,
    handleFilterChange,
    handlePriceRangeChange,
    clearFilters,
    handlePageChange,
    setActiveDateTab,
    setSortBy,
    isPriceFilterOpen,
    togglePriceFilter,
    priceFilterRef,
    maxPrice,
  } = useTravelPackages(selectedTripId, destinationName);

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

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
      setActiveDateTab(date);
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
    } catch (e) {}
    return duration;
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
    if (Array.isArray(trip?.availableDates) && trip.availableDates.length > 0) {
      const shown = trip.availableDates.slice(0, 3);
      const extra = trip.availableDates.length - shown.length;
      return `Dates: ${shown.join(", ")}${extra > 0 ? ` +${extra} more` : ""}`;
    }
    return "Dates on Request";
  };

  // Check if any filters are active
  const hasActiveFilters = () => {
    const hasDestinations = filters.destinations && filters.destinations.length > 0;
    const hasFeatures = filters.features && filters.features.length > 0;
    const hasDestinationType = filters.destinationType && filters.destinationType.length > 0;
    const hasPriceFilter = filters.priceRange && (filters.priceRange[0] > 0 || filters.priceRange[1] < maxPrice);
    
    return hasDestinations || hasFeatures || hasDestinationType || hasPriceFilter;
  };

  return (
    <section
      id="travel-packages"
      className={`${styles.travelPackagesSection} ${
        destinationName ? styles.explorePage : ""
      }`}
    >
      <div
        className={`${styles.container} ${
          destinationName ? styles.explorePageContainer : ""
        }`}
      >
        {/* Section Title - Only show on homepage */}
        {isHomePage && (
          <div className={styles.sectionTitle}>
            <div className={styles.titleRow}>
              <h2>Upcoming Trips</h2>
              <button
                className={styles.showMoreButton}
                onClick={() => router.push("/explore")}
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
                  className={`${styles.priceFilterContainer} ${
                    isPriceFilterOpen ? styles.open : ""
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
                      className={`${styles.priceFilterArrow} ${
                        isPriceFilterOpen ? styles.rotated : ""
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
                  {filteredAndSortedData.length} packages found
                </span>
              </div>
              <div className={styles.filterActions}>
                <button className={styles.clearButton} onClick={clearFilters}>
                  Clear filters
                </button>
              </div>
            </div>

            {/* Mobile Filters Overlay */}
            <div
              className={`${styles.mobileFiltersOverlay} ${
                isMobileFiltersOpen ? styles.open : ""
              }`}
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
                    className={`${styles.priceFilterContainer} ${
                      isPriceFilterOpen ? styles.open : ""
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
                        className={`${styles.priceFilterArrow} ${
                          isPriceFilterOpen ? styles.rotated : ""
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
                <div className={styles.overlayFooter}>
                  <div
                    // className={styles.}
                    // onClick={() => setIsMobileFiltersOpen(false)}
                  >
                    {/* Apply */}
                  </div>
                  <button className={styles.clearButton} onClick={clearFilters}>
                    Clear filters
                  </button>
                </div>
              </div>
            </div>

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
          {paginatedData.map((trip) => (
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
                    "/assets/png/banner1.jpg"
                  }
                  alt={trip.title}
                  className={styles.packageImage}
                />

                {trip.badge && (
                  <div className={`${styles.badge} ${styles[trip.badge.type]}`}>
                    {trip.badge.text}
                  </div>
                )}
              </div>

              <div className={styles.cardBody}>
                <div className={styles.metaRow}>
                  <span className={styles.metaIcon}>⏳</span>
                  <span className={styles.metaDuration}>
                    {getDurationText(trip.duration)}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{trip.title}</h3>

                <div className={styles.priceRow}>
                  <span className={styles.currentPrice}>{trip.price}</span>
                  {trip.originalPrice && (
                    <span className={styles.oldPrice}>
                      {trip.originalPrice}
                    </span>
                  )}
                  {trip.discountAmount && (
                    <span className={styles.discount}>
                      ₹ {trip.discountAmount} Off
                    </span>
                  )}
                </div>

                <div className={styles.footerRow}>{getDatesFooter(trip)}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - Only show when not showing a specific trip or destination */}
        {!selectedTripId && !destinationName && totalPages > 1 && (
          <div className={styles.paginationWrapper}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              size="medium"
              showFirstLast={false}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default TravelPackagesSection;
