"use client";
import React from 'react';
import { DESTINATION_TABS } from '../../constants';
import { useDestinations } from '../../hooks/useDestinations';
import DestinationCard from '../DestinationCard';
import styles from './style.module.scss';

const ExploreDestinations = () => {
  const {
    activeTab,
    destinations,
    handleTabChange
  } = useDestinations();

  const handleDestinationClick = (destination) => {
    // TODO: Handle destination click - navigate to detail page or open modal
    console.log('Destination clicked:', destination);
  };

  return (
    <section className={styles.exploreDestinations}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Explore Destinations</h2>
        </div>
        
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {DESTINATION_TABS.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className={styles.destinationsContainer}>
          <div className={styles.destinationsRow}>
            {destinations.slice(0, Math.ceil(destinations.length / 2)).map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onClick={handleDestinationClick}
              />
            ))}
          </div>
          <div className={styles.destinationsRow}>
            {destinations.slice(Math.ceil(destinations.length / 2)).map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onClick={handleDestinationClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreDestinations;
