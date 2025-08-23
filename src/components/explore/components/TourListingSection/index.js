import React, { useState } from 'react';
import TourCard from './TourCard';
import styles from './style.module.scss';

const TourListingSection = () => {
    const [activeFilters, setActiveFilters] = useState(['Thailand', 'Indonesia']);
    const [selectedDate, setSelectedDate] = useState('All');

    const dateOptions = ['All', 'May \'25', 'Jun \'25', 'Jul \'25', 'Aug \'25', 'Sep \'25', 'Oct \'25', 'Nov \'25'];

    const tours = [
        {
            id: 1,
            title: 'Beach & Sands',
            code: '7D-8N',
            image: '/assets/png/001-photographer.png',
            dates: 'Upcoming: 12 Jul, 25 Jul, 8 Aug, 13 Aug, 21 Aug. +12 dates',
            price: 'Rs. 23,000/-',
            labels: ['New Addition']
        },
        {
            id: 2,
            title: 'Summer Fun',
            code: '7D-8N',
            image: '/assets/png/003-tourists.png',
            dates: 'Customisable',
            price: 'Rs. 23,000/-',
            labels: ['Luxe']
        },
        {
            id: 3,
            title: 'Crystal Waters',
            code: '7D-8N',
            image: '/assets/png/004-summer-camp.png',
            dates: 'Upcoming: 12 Jul, 25 Jul, 8 Aug, 13 Aug, 21 Aug. +12 dates',
            price: 'Rs. 23,000/-',
            labels: ['Nature Overload']
        },
        {
            id: 4,
            title: 'Out & About',
            code: '7D-8N',
            image: '/assets/png/006-cash.png',
            dates: 'Customisable',
            price: 'Rs. 23,000/-',
            labels: []
        },
        {
            id: 5,
            title: 'Suba safari',
            code: '7D-8N',
            image: '/assets/png/001-photographer.png',
            dates: 'Upcoming: 12 Jul, 25 Jul, 8 Aug, 13 Aug, 21 Aug. +12 dates',
            price: 'Rs. 23,000/-',
            labels: ['New Addition']
        }
    ];

    const removeFilter = (filterToRemove) => {
        setActiveFilters(activeFilters.filter(filter => filter !== filterToRemove));
    };

    return (
        <section className={styles.tourListingSection}>
            <div className={styles.container}>
                {/* Filter Bar */}
                <div className={styles.filterBar}>
                    <div className={styles.filterOptions}>
                        <select className={styles.filterSelect}>
                            <option>Destinations</option>
                        </select>
                        <select className={styles.filterSelect}>
                            <option>Price</option>
                        </select>
                        <select className={styles.filterSelect}>
                            <option>Dates</option>
                        </select>
                        <select className={styles.filterSelect}>
                            <option>Features</option>
                        </select>
                        <button className={styles.applyButton}>Apply</button>
                        <button className={styles.clearButton}>Clear filters</button>
                    </div>
                    <div className={styles.sortOptions}>
                        <select className={styles.sortSelect}>
                            <option>Default Sort</option>
                        </select>
                    </div>
                </div>

                {/* Date Filters */}
                <div className={styles.dateFilters}>
                    <span className={styles.dateLabel}>By Date:</span>
                    {dateOptions.map((date) => (
                        <button
                            key={date}
                            className={`${styles.dateButton} ${selectedDate === date ? styles.activeDate : ''}`}
                            onClick={() => setSelectedDate(date)}
                        >
                            {date}
                        </button>
                    ))}
                </div>

                {/* Active Filters */}
                {activeFilters.length > 0 && (
                    <div className={styles.activeFilters}>
                        {activeFilters.map((filter) => (
                            <span key={filter} className={styles.filterPill}>
                                {filter}
                                <button
                                    className={styles.removeFilter}
                                    onClick={() => removeFilter(filter)}
                                >
                                    ×
                                </button>
                            </span>
                        ))}
                    </div>
                )}

                {/* Tour Grid */}
                <div className={styles.tourGrid}>
                    {tours.map((tour) => (
                        <TourCard key={tour.id} tour={tour} />
                    ))}
                </div>

                {/* Pagination */}
                <div className={styles.pagination}>
                    <button className={`${styles.pageButton} ${styles.activePage}`}>1</button>
                    <button className={styles.pageButton}>2</button>
                    <button className={styles.pageButton}>3</button>
                    <button className={styles.pageButton}>4</button>
                    <button className={styles.pageButton}>5</button>
                    <button className={styles.pageButton}>6</button>
                    <button className={styles.pageButton}>&gt;</button>
                </div>
            </div>
        </section>
    );
};

export default TourListingSection; 