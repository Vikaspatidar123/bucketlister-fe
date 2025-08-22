'use client';
import { useState, useMemo } from 'react';
import { TRAVEL_PACKAGES_DATA } from '../constants';

export const useTravelPackages = () => {
  const [filters, setFilters] = useState({
    destinations: [],
    price: null,
    dates: null,
    features: []
  });
  const [activeDateTab, setActiveDateTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');

  const itemsPerPage = 8;

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
      if (filters.price) {
        const packagePrice = parseInt(packageItem.price.replace(/[^\d]/g, ''));
        const [minPrice, maxPrice] = filters.price.value.split('-').map(p => parseInt(p));
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
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const clearFilters = () => {
    setFilters({
      destinations: [],
      price: null,
      dates: null,
      features: []
    });
    setActiveDateTab('all');
    setSortBy('default');
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setActiveDateTabHandler = (tabId) => {
    setActiveDateTab(tabId);
    setCurrentPage(1); // Reset to first page when date tab changes
  };

  const setSortByHandler = (sortValue) => {
    setSortBy(sortValue);
    setCurrentPage(1); // Reset to first page when sort changes
  };

  return {
    // State
    filters,
    activeDateTab,
    currentPage,
    sortBy,
    
    // Computed values
    filteredAndSortedData,
    totalPages,
    paginatedData,
    
    // Actions
    handleFilterChange,
    clearFilters,
    handlePageChange,
    setActiveDateTab: setActiveDateTabHandler,
    setSortBy: setSortByHandler
  };
};
