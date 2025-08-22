import React from 'react';
import { HERO_DATA } from '../../constants';
import { useHeroSearch } from '../../hooks/useHeroSearch';
import styles from './style.module.scss';

const SearchForm = () => {
  const {
    searchData,
    handleInputChange,
    handleSubmit,
    isSearching
  } = useHeroSearch();

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
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
              value={searchData.destination}
              onChange={(e) => handleInputChange('destination', e.target.value)}
              className={styles.input}
              required
            />
          </div>
          
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="date"
              name="date"
              placeholder={HERO_DATA.searchForm.date.placeholder}
              value={searchData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              className={styles.input}
              required
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
