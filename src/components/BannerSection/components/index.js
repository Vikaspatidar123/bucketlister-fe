"use client";
import React, { useState } from 'react';
import { BANNER_DATA, FEATURED_DESTINATIONS } from '../constants';
import styles from './style.module.scss';

const BannerSection = ({ 
  title = BANNER_DATA.title,
  description = BANNER_DATA.description,
  ctaButton = BANNER_DATA.ctaButton,
  featuredDestinations = FEATURED_DESTINATIONS,
  onExploreClick,
  onDestinationClick
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleExploreClick = () => {
    if (onExploreClick) {
      onExploreClick();
    }
  };

  const handleDestinationClick = (destination) => {
    if (onDestinationClick) {
      onDestinationClick(destination);
    }
  };

  const handleNextCards = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % featuredDestinations.length);
  };

  const handlePrevCards = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + featuredDestinations.length) % featuredDestinations.length);
  };

  return (
    <section className={styles.bannerSection}>
                   {/* Static Main Banner */}
      {/* <div className={styles.mainBanner}> */}
        <div className={styles.bannerContainer}>
          <img 
            src="/assets/png/banner1.jpg" 
            alt="Banner background" 
            className={styles.bannerImage}
          />
          <div className={styles.bannerOverlay}>
            <div className={styles.bannerContent}>
              <h1 className={styles.bannerTitle}>{title}</h1>
              <p className={styles.bannerDescription}>{description}</p>
              {/* <button className={styles.ctaButton} onClick={handleExploreClick}>
                {ctaButton}
              </button> */}
            </div>
          </div>
          
          {/* Navigation Arrows - Both on Right Side */}
          <div className={styles.navigationContainer}>
            <button className={styles.navArrow} onClick={handlePrevCards}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.navArrow} onClick={handleNextCards}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Destination Cards Section - Overlaid on Banner */}
          <div className={styles.destinationCardsSection}>
            <div className={styles.cardsRow}>
              {Array.from({ length: 4 }).map((_, i) => {
                const destination = featuredDestinations[(currentCardIndex + i) % featuredDestinations.length];
                return (
                <div 
                  key={destination.id}
                  className={styles.destinationCard}
                  onClick={() => handleDestinationClick(destination)}
                >
                  <div className={styles.cardImage}>
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className={styles.destinationImage}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.destinationName}>{destination.name}</h3>
                    <span className={styles.duration}>{destination.duration}</span>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default BannerSection;
