"use client";
import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { HERO_DATA } from '../../constants';
import { useHeroSearch } from '../../hooks/useHeroSearch';
import styles from './style.module.scss';
import CustomSelect from '@/common/CustomSelect';
import { FILTER_OPTIONS } from '@/components/TravelPackagesSection/constants';

const SearchForm = () => {
  const router = useRouter();

  const {
    searchData,
    handleInputChange,
    isSearching,
    resetSearch
  } = useHeroSearch();

  const destinationOptions = useMemo(() => FILTER_OPTIONS.destinations, []);
  const dateOptions = useMemo(() => FILTER_OPTIONS.dates, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const rawDestination = typeof searchData.destination === 'string'
      ? searchData.destination.trim()
      : (searchData.destination?.label || searchData.destination?.value || '').trim();
    const date = searchData.date?.value || '';
    if (!rawDestination || !date) return;

    // Try to normalize destination to a known option value
    const exact = destinationOptions.find(o => o.value.toLowerCase() === rawDestination.toLowerCase());
    const partial = exact ? null : destinationOptions.find(o => o.label.toLowerCase().includes(rawDestination.toLowerCase()));
    const destination = (exact || partial)?.value || rawDestination;

    const url = `/?destination=${encodeURIComponent(destination)}&date=${encodeURIComponent(date)}#travel-packages`;
    router.push(url);

    // Reset fields after triggering search
    resetSearch();

    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const el = document.getElementById('travel-packages');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
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
              value={typeof searchData.destination === 'string' ? searchData.destination : (searchData.destination?.label || '')}
              onChange={(e) => handleInputChange('destination', e.target.value)}
              className={styles.input}
              required
            />
          </div>
          
          <div className={styles.inputGroup}>
            <CustomSelect
              options={dateOptions}
              value={searchData.date}
              onChange={(opt) => handleInputChange('date', opt)}
              placeholder={HERO_DATA.searchForm.date.placeholder}
              isSearchable={false}
              className={styles.selectLikeInput}
            />
          </div>
          
          <button type="submit" className={styles.searchButton} disabled={isSearching}>
            {isSearching ? 'Searching...' : HERO_DATA.searchForm.searchButton}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
