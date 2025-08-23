'use client';
import { useState, useMemo, useEffect, useRef } from 'react';
import { TRAVEL_PACKAGES_DATA } from '../constants';

// Custom hook for handling click outside
const useClickOutside = (isOpen, onClose) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return ref;
};

export const useTravelPackages = () => {
  const [filters, setFilters] = useState({
    destinations: [],
    priceRange: [0, 100000], // Default price range
    dates: null,
    features: []
  });
  const [activeDateTab, setActiveDateTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');
  const [isPriceFilterOpen, setIsPriceFilterOpen] = useState(false);

  const itemsPerPage = 8;

  // Use the click outside hook
  const priceFilterRef = useClickOutside(isPriceFilterOpen, () => setIsPriceFilterOpen(false));

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = TRAVEL_PACKAGES_DATA.filter(packageItem => {
      // Filter by destinations
      if (filters.destinations.length > 0) {
        if (!filters.destinations.some(dest => dest.value === packageItem.destination)) {
          return false;
        }
      }

      // Filter by price range
      if (filters.priceRange && filters.priceRange.length === 2) {
        const packagePrice = parseInt(packageItem.price.replace(/[^\d]/g, ''));
        const [minPrice, maxPrice] = filters.priceRange;
        if (packagePrice < minPrice || packagePrice > maxPrice) {
          return false;
        }
      }

      // Filter by dates
      if (filters.dates && activeDateTab !== 'all') {
        if (!packageItem.availableDates.includes(activeDateTab)) {
          return false;
        }
      }

      // Filter by features
      if (filters.features.length > 0) {
        if (!filters.features.some(feature => packageItem.features.includes(feature.value))) {
          return false;
        }
      }

      return true;
    });

    // Sort data
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
          const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-high':
        filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
          const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
          return priceB - priceA;
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
  }, [filters, activeDateTab, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const paginatedData = filteredAndSortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (filterType, value) => {
    // Store current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    setCurrentPage(1); // Reset to first page when filters change
    
    // Maintain scroll position after filter change
    setTimeout(() => {
      window.scrollTo(0, currentScrollPosition);
    }, 0);
  };

  const handlePriceRangeChange = (priceRange) => {
    console.log('Price range changed:', priceRange); // Debug log
    
    // Store current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    setFilters(prev => ({
      ...prev,
      priceRange: priceRange
    }));
    setCurrentPage(1); // Reset to first page when price range changes
    
    // Maintain scroll position after price range change
    setTimeout(() => {
      window.scrollTo(0, currentScrollPosition);
    }, 0);
  };

  const clearFilters = () => {
    // Store current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    setFilters({
      destinations: [],
      priceRange: [0, 100000],
      dates: null,
      features: []
    });
    setCurrentPage(1);
    setActiveDateTab('all');
    setSortBy('default');
    
    // Maintain scroll position after clearing filters
    setTimeout(() => {
      window.scrollTo(0, currentScrollPosition);
    }, 0);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Prevent scroll to top by maintaining current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    setTimeout(() => {
      window.scrollTo(0, currentScrollPosition);
    }, 0);
  };

  const setActiveDateTabHandler = (tabId) => {
    // Store current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    setActiveDateTab(tabId);
    setCurrentPage(1);
    
    // Maintain scroll position after date tab change
    setTimeout(() => {
      window.scrollTo(0, currentScrollPosition);
    }, 0);
  };

  const setSortByHandler = (sortValue) => {
    // Store current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    setSortBy(sortValue);
    setCurrentPage(1);
    
    // Maintain scroll position after sort change
    setTimeout(() => {
      window.scrollTo(0, currentScrollPosition);
    }, 0);
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
    
    // Computed values
    filteredAndSortedData,
    totalPages,
    paginatedData,
    
    // Actions
    handleFilterChange,
    handlePriceRangeChange,
    clearFilters,
    handlePageChange,
    setActiveDateTab: setActiveDateTabHandler,
    setSortBy: setSortByHandler,
    togglePriceFilter,
    closePriceFilter,
    priceFilterRef
  };
};
