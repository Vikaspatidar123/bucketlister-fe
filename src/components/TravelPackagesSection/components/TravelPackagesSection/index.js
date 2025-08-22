"use client";
import React from 'react';
import CustomSelect from '../../../../common/CustomSelect';
import Tabs from '../../../../common/Tabs';
import Pagination from '../../../../common/Pagination';
import { FILTER_OPTIONS, DATE_TABS } from '../../constants';
import { useTravelPackages } from '../../hooks/useTravelPackages';
import styles from './style.module.scss';

const TravelPackagesSection = () => {
  const {
    filters,
    activeDateTab,
    currentPage,
    sortBy,
    filteredAndSortedData,
    totalPages,
    paginatedData,
    handleFilterChange,
    clearFilters,
    handlePageChange,
    setActiveDateTab,
    setSortBy
  } = useTravelPackages();

  return (
    <section className={styles.travelPackagesSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Explore Travel Packages</h2>
          <p className={styles.sectionDescription}>
            Discover amazing destinations and create unforgettable memories
          </p>
        </div>

        {/* Filter Bar */}
        <div className={styles.filterBar}>
          <div className={styles.filterControls}>
            <CustomSelect
              options={FILTER_OPTIONS.destinations}
              value={filters.destinations}
              onChange={(value) => handleFilterChange('destinations', value)}
              placeholder="Destinations"
              isMulti={true}
              isSearchable={true}
              className={styles.filterSelect}
            />

            <CustomSelect
              options={FILTER_OPTIONS.price}
              value={filters.price}
              onChange={(value) => handleFilterChange('price', value)}
              placeholder="Price Range"
              className={styles.filterSelect}
            />

            <CustomSelect
              options={FILTER_OPTIONS.dates}
              value={filters.dates}
              onChange={(value) => handleFilterChange('dates', value)}
              placeholder="Travel Dates"
              className={styles.filterSelect}
            />

            <CustomSelect
              options={FILTER_OPTIONS.features}
              value={filters.features}
              onChange={(value) => handleFilterChange('features', value)}
              placeholder="Features"
              isMulti={true}
              className={styles.filterSelect}
            />
          </div>

          <div className={styles.filterActions}>
            <button className={styles.applyButton}>
              Apply Filters
            </button>
            <button 
              className={styles.clearButton}
              onClick={clearFilters}
            >
              Clear filters
            </button>
          </div>

          <div className={styles.sortControl}>
            <CustomSelect
              options={FILTER_OPTIONS.sort}
              value={sortBy}
              onChange={setSortBy}
              placeholder="Default Sort"
              className={styles.sortSelect}
            />
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

        {/* Results Count */}
        <div className={styles.resultsInfo}>
          <span className={styles.resultsCount}>
            {filteredAndSortedData.length} packages found
          </span>
        </div>

        {/* Travel Package Cards Grid */}
        <div className={styles.packagesGrid}>
          {paginatedData.map((packageItem) => (
            <div key={packageItem.id} className={styles.packageCard}>
              <div className={styles.cardImage}>
                <img 
                  src={packageItem.image} 
                  alt={packageItem.title}
                  className={styles.packageImage}
                />
                {packageItem.badge && (
                  <div className={`${styles.badge} ${styles[packageItem.badge.type]}`}>
                    {packageItem.badge.text}
                  </div>
                )}
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.packageTitle}>{packageItem.title}</h3>
                <div className={styles.packageDuration}>{packageItem.duration}</div>
                
                <div className={styles.packageDetails}>
                  {packageItem.availableDates && (
                    <div className={styles.availableDates}>
                      Upcoming: {packageItem.availableDates.slice(0, 4).join(', ')}
                      {packageItem.availableDates.length > 4 && ` ... +${packageItem.availableDates.length - 4} dates`}
                    </div>
                  )}
                  
                  {packageItem.customizable && (
                    <span className={styles.customizable}>Customisable</span>
                  )}
                </div>
                
                <div className={styles.packagePrice}>
                  {packageItem.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
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
