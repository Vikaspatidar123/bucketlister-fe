"use client";
import React from "react";
import { useRouter } from "next/navigation";
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

const TravelPackagesSection = ({
  selectedTripId = null,
  destinationName = null,
}) => {
  const router = useRouter();

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
  } = useTravelPackages(selectedTripId, destinationName);

  const handleTripClick = (trip) => {
    const destination = TRAVEL_PACKAGES_DATA.find(
      (dest) => dest.trips && dest.trips.some((t) => t.tripId === trip.tripId)
    );
    if (destination) {
      router.push(`/trip?destinationId=${destination.destination_id}&tripId=${trip.tripId}`);
    }
  };

  const formatPriceRange = () => {
    const [min, max] = filters.priceRange;
    if (min === 0 && max === 100000) {
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

  return (
    <section
      className={`${styles.travelPackagesSection} ${
        destinationName ? styles.explorePage : ""
      }`}
    >
      <div
        className={`${styles.container} ${
          destinationName ? styles.explorePageContainer : ""
        }`}
      >
        {/* Filter Bar - Only show when not showing a specific trip or destination */}
        {!selectedTripId && !destinationName && (
          <>
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
                    <div className={styles.priceFilterDropdown}>
                      <PriceRangeSlider
                        min={0}
                        max={100000}
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
                  onChange={(value) => handleFilterChange("destinationType", value)}
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
