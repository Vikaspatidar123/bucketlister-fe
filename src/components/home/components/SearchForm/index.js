"use client";
import React, { useMemo, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { HERO_DATA } from '../../constants';
import { useHeroSearch } from '../../hooks/useHeroSearch';
import styles from './style.module.scss';
import CustomSelect from '@/common/CustomSelect';
import { FILTER_OPTIONS } from '@/components/TravelPackagesSection/constants';

const SearchForm = ({ onSubmitted = null }) => {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mql.matches);
    update();
    try {
      mql.addEventListener('change', update);
      return () => mql.removeEventListener('change', update);
    } catch (_) {
      // Safari fallback
      window.addEventListener('resize', update);
      return () => window.removeEventListener('resize', update);
    }
  }, []);

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
    const isDateRequired = !isMobile;
    if (!rawDestination || (isDateRequired && !date)) return;

    // Try to normalize destination to a known option value
    const exact = destinationOptions.find(o => o.value.toLowerCase() === rawDestination.toLowerCase());
    const partial = exact ? null : destinationOptions.find(o => o.label.toLowerCase().includes(rawDestination.toLowerCase()));
    const destination = (exact || partial)?.value || rawDestination;

    let url = `/?destination=${encodeURIComponent(destination)}`;
    if (!isMobile && date) {
      url += `&date=${encodeURIComponent(date)}`;
    }
    url += '#travel-packages';
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

    try { onSubmitted && onSubmitted(); } catch (_) {}
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
          
          <div className={`${styles.inputGroup} ${styles.hideOnMobile}`}>
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
