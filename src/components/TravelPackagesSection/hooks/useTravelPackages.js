'use client';
import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { TRAVEL_PACKAGES_DATA } from '../constants';
import { debounce } from '@/utils/debounce';

// Custom hook for handling click outside
const useClickOutside = (isOpen, onClose) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // Check if the click is on any price filter related element
        const clickedElement = event.target;
        const isSliderElement = clickedElement.closest('[data-price-slider]') || 
                                clickedElement.closest('.priceSlider') ||
                                clickedElement.closest('.priceRangeSlider');
        
        if (isSliderElement) {
          return; // Don't close if clicking on slider content
        }
        
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside, { passive: true });
      document.addEventListener('touchstart', handleClickOutside, { passive: true });
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, { passive: true });
      document.removeEventListener('touchstart', handleClickOutside, { passive: true });
    };
  }, [isOpen, onClose]);

  return ref;
};

export const useTravelPackages = (selectedTripId = null, destinationName = null) => {
  // Extract month-year codes (e.g., "aug25") from a trip's batches or availableDates
  const extractTripDateCodes = (trip) => {
    const monthNumToKey = {
      '01': 'jan', '1': 'jan',
      '02': 'feb', '2': 'feb',
      '03': 'mar', '3': 'mar',
      '04': 'apr', '4': 'apr',
      '05': 'may', '5': 'may',
      '06': 'jun', '6': 'jun',
      '07': 'jul', '7': 'jul',
      '08': 'aug', '8': 'aug',
      '09': 'sep', '9': 'sep',
      '10': 'oct',
      '11': 'nov',
      '12': 'dec'
    };
    const monthNameToKey = {
      january: 'jan', february: 'feb', march: 'mar', april: 'apr', may: 'may', june: 'jun',
      july: 'jul', august: 'aug', september: 'sep', october: 'oct', november: 'nov', december: 'dec'
    };

    const codes = new Set();

    // Prefer parsing from batches if present
    if (Array.isArray(trip?.batches) && trip.batches.length > 0) {
      for (const obj of trip.batches) {
        if (!obj || typeof obj !== 'object') continue;
        const monthKeyName = Object.keys(obj)[0];
        const dates = obj[monthKeyName];
        if (!Array.isArray(dates)) continue;

        for (const rangeStr of dates) {
          try {
            const [startRaw] = String(rangeStr).split(/\s*-\s*/);
            const parts = String(startRaw).split('/').map(s => s.trim());
            const sm = parts[1]; // month (MM or M)
            const sy = parts[2]; // year (YY)
            const monKey = monthNumToKey[sm?.replace(/^0+/, '') || sm];
            const yy = (sy || '').slice(-2);
            if (monKey && yy) codes.add(`${monKey}${yy}`);
          } catch (_) {
            // Fallback: try using the month name key and year from any digits in the range
            const monKey = monthNameToKey[(monthKeyName || '').toLowerCase()];
            const yy = (String(rangeStr).match(/\b(\d{2})\b/) || [])[1];
            if (monKey && yy) codes.add(`${monKey}${yy}`);
          }
        }
      }
    }

    // Fallback to legacy availableDates directly if batches not usable
    if (codes.size === 0 && Array.isArray(trip?.availableDates)) {
      for (const code of trip.availableDates) {
        if (typeof code === 'string' && code.trim()) {
          codes.add(code.trim().toLowerCase());
        }
      }
    }

    return Array.from(codes);
  };
  const generateBatchesFromAvailableDates = (availableDates) => {
    if (!Array.isArray(availableDates) || availableDates.length === 0) return undefined;
    const monthMap = {
      jan: { num: '01', name: 'January' },
      feb: { num: '02', name: 'February' },
      mar: { num: '03', name: 'March' },
      apr: { num: '04', name: 'April' },
      may: { num: '05', name: 'May' },
      jun: { num: '06', name: 'June' },
      jul: { num: '07', name: 'July' },
      aug: { num: '08', name: 'August' },
      sep: { num: '09', name: 'September' },
      oct: { num: '10', name: 'October' },
      nov: { num: '11', name: 'November' },
      dec: { num: '12', name: 'December' },
    };
    const batches = [];
    for (const code of availableDates) {
      const match = String(code).match(/([a-zA-Z]+)(\d{2})/);
      if (!match) continue;
      const monKey = match[1].toLowerCase();
      const yy = match[2];
      const m = monthMap[monKey];
      if (!m) continue;
      // Create 2 generic ranges per month
      const ranges = [
        `05/${m.num}/${yy} - 11/${m.num}/${yy}`,
        `19/${m.num}/${yy} - 25/${m.num}/${yy}`,
      ];
      batches.push({ [m.name]: ranges });
    }
    return batches.length > 0 ? batches : undefined;
  };
  // Determine dynamic maximum price from data
  const maxPrice = useMemo(() => {
    let max = 0;
    TRAVEL_PACKAGES_DATA.forEach(destination => {
      if (destination.trips && destination.trips.length > 0) {
        destination.trips.forEach(trip => {
          const priceNumber = Number(trip.price);
          if (Number.isFinite(priceNumber) && priceNumber > max) {
            max = priceNumber;
          }
        });
      }
    });
    return Math.max(max, 100000);
  }, []);

  const [filters, setFilters] = useState({
    destinations: [],
    priceRange: [0, /** dynamic */ 0],
    dates: null,
    features: [],
    destinationType: null
  });

  // Initialize price range upper bound once maxPrice is known
  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      priceRange: [0, maxPrice]
    }));
  }, [maxPrice]);
  const [activeDateTab, setActiveDateTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');
  const [isPriceFilterOpen, setIsPriceFilterOpen] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(4);

  const itemsPerLoad = 4;

  // Use the click outside hook
  const priceFilterRef = useClickOutside(isPriceFilterOpen, () => setIsPriceFilterOpen(false));

  // Flatten the data to show individual trips
  const flattenedData = useMemo(() => {
    const flattened = [];
    TRAVEL_PACKAGES_DATA.forEach(destination => {
      if (destination.trips && destination.trips.length > 0) {
        // If a specific trip is selected, only include that trip
        if (selectedTripId) {
          destination.trips.forEach(trip => {
            if (trip.tripId === selectedTripId) {
              flattened.push({
                ...trip,
                destination_name: destination.destination_name,
                thumbnail_image: destination.thumbnail_image,
                hero_image: destination.hero_image,
                description: destination.description,
                reviews: destination.reviews,
                category: destination.category,
                batches: trip.batches || generateBatchesFromAvailableDates(trip.availableDates)
              });
            }
          });
        }
        // If a destination name is provided, only include trips from that destination
        else if (destinationName && destination.destination_name === destinationName) {
          destination.trips.forEach(trip => {
            flattened.push({
              ...trip,
              destination_name: destination.destination_name,
              thumbnail_image: destination.thumbnail_image,
              hero_image: destination.hero_image,
              description: destination.description,
              reviews: destination.reviews,
              category: destination.category,
              batches: trip.batches || generateBatchesFromAvailableDates(trip.availableDates)
            });
          });
        }
        // If neither is provided, include all trips
        else if (!selectedTripId && !destinationName) {
          destination.trips.forEach(trip => {
            flattened.push({
              ...trip,
              destination_name: destination.destination_name,
              thumbnail_image: destination.thumbnail_image,
              hero_image: destination.hero_image,
              description: destination.description,
              reviews: destination.reviews,
              category: destination.category,
              batches: trip.batches || generateBatchesFromAvailableDates(trip.availableDates)
            });
          });
        }
      }
    });
    return flattened;
  }, [selectedTripId, destinationName]);

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = flattenedData.filter(trip => {
      // Filter by destinations
      if (filters.destinations.length > 0) {
        if (!filters.destinations.some(dest => dest.value === trip.destination_name)) {
          return false;
        }
      }

      // Filter by price range
      if (filters.priceRange && filters.priceRange.length === 2) {
        const tripPrice = Number(trip.price);
        const [minPrice, maxPriceSelected] = filters.priceRange;
        if (Number.isFinite(tripPrice)) {
          if (tripPrice < minPrice || tripPrice > maxPriceSelected) {
            return false;
          }
        }
      }

      // Filter by dates (using active tab)
      if (activeDateTab !== 'all') {
        const tripCodes = extractTripDateCodes(trip);
        if (!Array.isArray(tripCodes) || !tripCodes.includes(activeDateTab)) {
          return false;
        }
      }

      // Filter by destination type (category)
      if (filters.destinationType && filters.destinationType.value) {
        if (trip.category !== filters.destinationType.value) {
          return false;
        }
      }

      // Filter by features
      if (filters.features.length > 0) {
        if (!trip.features || !filters.features.some(feature => 
          trip.features.includes(feature.value)
        )) {
          return false;
        }
      }

      return true;
    });

    // Sort data
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => {
          const priceA = Number(a.price);
          const priceB = Number(b.price);
          return (Number.isFinite(priceA) ? priceA : 0) - (Number.isFinite(priceB) ? priceB : 0);
        });
        break;
      case 'price-high':
        filtered.sort((a, b) => {
          const priceA = Number(a.price);
          const priceB = Number(b.price);
          return (Number.isFinite(priceB) ? priceB : 0) - (Number.isFinite(priceA) ? priceA : 0);
        });
        break;
      case 'duration':
        filtered.sort((a, b) => {
          const durationA = parseInt(a.duration.split('-')[0]);
          const durationB = parseInt(b.duration.split('-')[0]);
          return durationA - durationB;
        });
        break;
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Keep original order
        break;
    }

    return filtered;
  }, [flattenedData, filters, activeDateTab, sortBy]);

  // Load More functionality
  const totalItems = filteredAndSortedData.length;
  const hasMoreItems = itemsToShow < totalItems;
  const displayedData = filteredAndSortedData.slice(0, itemsToShow);

  // Debounced scroll position utility
  const debouncedScrollTo = useCallback(
    debounce((position) => {
      window.scrollTo({ top: position, behavior: 'instant' });
    }, 16), // ~1 frame at 60fps
    []
  );

  const handleFilterChange = useCallback((filterType, value) => {
    // Store current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    setCurrentPage(1); // Reset to first page when filters change
    setItemsToShow(4); // Reset to show only 4 items when filters change
    
    // Maintain scroll position after filter change - debounced for performance
    requestAnimationFrame(() => {
      debouncedScrollTo(currentScrollPosition);
    });
  }, [debouncedScrollTo]);

  const handlePriceRangeChange = useCallback((priceRange) => {
    console.log('Price range changed:', priceRange); // Debug log
    
    // Store current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    setFilters(prev => ({
      ...prev,
      priceRange: priceRange
    }));
    setCurrentPage(1); // Reset to first page when price range changes
    setItemsToShow(4); // Reset to show only 4 items when price range changes
    
    // Maintain scroll position after price range change - debounced for performance
    requestAnimationFrame(() => {
      debouncedScrollTo(currentScrollPosition);
    });
  }, [debouncedScrollTo]);

  const clearFilters = useCallback(() => {
    // Store current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    setFilters({
      destinations: [],
      priceRange: [0, maxPrice],
      dates: null,
      features: [],
      destinationType: null
    });
    setCurrentPage(1);
    setItemsToShow(4); // Reset to show only 4 items when clearing filters
    setActiveDateTab('all');
    setSortBy('default');
    
    // Maintain scroll position after clearing filters - debounced for performance
    requestAnimationFrame(() => {
      debouncedScrollTo(currentScrollPosition);
    });
  }, [maxPrice, debouncedScrollTo]);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    // Prevent scroll to top by maintaining current scroll position - debounced for performance
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    requestAnimationFrame(() => {
      debouncedScrollTo(currentScrollPosition);
    });
  }, [debouncedScrollTo]);

  const setActiveDateTabHandler = useCallback((tabId) => {
    // Store current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    setActiveDateTab(tabId);
    setCurrentPage(1);
    setItemsToShow(4); // Reset to show only 4 items when date tab changes
    
    // Maintain scroll position after date tab change - debounced for performance
    requestAnimationFrame(() => {
      debouncedScrollTo(currentScrollPosition);
    });
  }, [debouncedScrollTo]);

  const setSortByHandler = useCallback((sortValue) => {
    // Store current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    setSortBy(sortValue);
    setCurrentPage(1);
    setItemsToShow(4); // Reset to show only 4 items when sort changes
    
    // Maintain scroll position after sort change - debounced for performance
    requestAnimationFrame(() => {
      debouncedScrollTo(currentScrollPosition);
    });
  }, [debouncedScrollTo]);

  const handleLoadMore = () => {
    setItemsToShow(prev => Math.min(prev + itemsPerLoad, totalItems));
  };

  const togglePriceFilter = () => {
    setIsPriceFilterOpen(!isPriceFilterOpen);
  };

  const closePriceFilter = () => {
    setIsPriceFilterOpen(false);
  };

  return {
    // State
    filters,
    activeDateTab,
    currentPage,
    sortBy,
    isPriceFilterOpen,
    maxPrice,
    itemsToShow,
    
    // Computed values
    filteredAndSortedData,
    totalItems,
    hasMoreItems,
    displayedData,
    
    // Actions
    handleFilterChange,
    handlePriceRangeChange,
    clearFilters,
    handlePageChange,
    handleLoadMore,
    setActiveDateTab: setActiveDateTabHandler,
    setSortBy: setSortByHandler,
    togglePriceFilter,
    closePriceFilter,
    priceFilterRef
  };
};
