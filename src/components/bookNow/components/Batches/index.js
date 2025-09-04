"use client";
import React, { useState, useMemo } from "react";
import styles from "./style.module.scss";
import Tabs from "@/common/Tabs";
import { TRAVEL_PACKAGES_DATA } from "@/components/TravelPackagesSection/constants";

const Batches = ({ selectedBatch, onBatchSelect, tripData }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Get trip data from TRAVEL_PACKAGES_DATA based on tripId
  const tripDetails = useMemo(() => {
    if (!tripData?.tripId) return null;

    // Find the trip across all destinations
    for (const destination of TRAVEL_PACKAGES_DATA) {
      if (destination.trips) {
        const trip = destination.trips.find(t => t.tripId.toString() === tripData.tripId.toString());
        if (trip) {
          return { ...trip, destination: destination.destination_name };
        }
      }
    }
    return null;
  }, [tripData?.tripId]);

  // Process batches from trip data
  const batches = useMemo(() => {
    if (!tripDetails?.batches || !Array.isArray(tripDetails.batches) || tripDetails.batches.length === 0) {
      return [];
    }

    const monthMap = {
      'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr',
      'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug',
      'September': 'Sep', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec'
    };

    let batchId = 1;
    const processedBatches = [];

    tripDetails.batches.forEach((batchGroup) => {
      Object.entries(batchGroup).forEach(([monthName, dateRanges]) => {
        if (Array.isArray(dateRanges)) {
          dateRanges.forEach((dateRange) => {
            const monthAbbr = monthMap[monthName] || monthName.slice(0, 3);
            
            // Format the date range for display (e.g., "25/12 - 01/01" -> "Dec 25 - Jan 1")
            let formattedRange = dateRange;
            
            if (dateRange.includes(' - ')) {
              const [startDate, endDate] = dateRange.split(' - ');
              
              // Parse start date
              const [startDay, startMonth] = startDate.split('/');
              const startMonthName = Object.keys(monthMap).find(key => 
                monthMap[key] === Object.keys(monthMap)[parseInt(startMonth) - 1]
              ) || monthName;
              const startMonthAbbr = monthMap[startMonthName] || startMonthName.slice(0, 3);
              
              // Parse end date  
              const [endDay, endMonth] = endDate.split('/');
              const endMonthName = Object.keys(monthMap).find(key => 
                monthMap[key] === Object.keys(monthMap)[parseInt(endMonth) - 1]
              ) || monthName;
              const endMonthAbbr = monthMap[endMonthName] || endMonthName.slice(0, 3);
              
              formattedRange = `${startMonthAbbr} ${parseInt(startDay)} - ${endMonthAbbr} ${parseInt(endDay)}`;
            } else if (dateRange.includes('/')) {
              // Single date format
              const [day, month] = dateRange.split('/');
              formattedRange = `${monthAbbr} ${parseInt(day)}`;
            }
            
            processedBatches.push({
              id: batchId++,
              dateRange: formattedRange,
              status: "Available",
              month: monthAbbr,
              originalMonth: monthName,
              originalRange: dateRange
            });
          });
        }
      });
    });

    return processedBatches;
  }, [tripDetails]);

  // Generate month filters based on available batches
  const monthFilters = useMemo(() => {
    const availableMonths = [...new Set(batches.map(batch => batch.month))];
    const filters = [{ id: "All", label: "All" }];
    
    availableMonths.forEach(month => {
      filters.push({ id: month, label: month });
    });

    return filters;
  }, [batches]);

  const filteredBatches = activeFilter === "All" 
    ? batches 
    : batches.filter(batch => batch.month === activeFilter);

  const handleBatchSelect = (batchId) => {
    onBatchSelect(batchId);
  };

  return (
    <div className={styles.batchesContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Batches</h2>
        <div className={styles.filterTabs}>
          <Tabs
            tabs={monthFilters}
            activeTab={activeFilter}
            onTabChange={setActiveFilter}
            variant="pills"
            size="small"
          />
        </div>
      </div>

      <div className={styles.batchesGrid}>
        {filteredBatches.length > 0 ? (
          filteredBatches.map((batch) => (
            <div
              key={batch.id}
              className={`${styles.batchCard} ${
                selectedBatch === batch.id ? styles.selected : ""
              }`}
              onClick={() => handleBatchSelect(batch.id)}
            >
              <div className={styles.batchRadio}>
                <input
                  type="radio"
                  name="batch"
                  checked={selectedBatch === batch.id}
                  onChange={() => handleBatchSelect(batch.id)}
                  className={styles.radioInput}
                />
              </div>
              <div className={styles.batchInfo}>
                <h3 className={styles.dateRange}>{batch.dateRange}</h3>
              </div>
              <div className={styles.statusContainer}>
                <span className={`${styles.status} ${styles.available}`}>
                  {batch.status}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noBatchesMessage}>
            <p>No upcoming batches for this trip. Send us an enquiry to customize your trip on your preferred dates.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Batches;