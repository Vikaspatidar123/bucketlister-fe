"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BANNER_DATA, FEATURED_DESTINATIONS } from '../constants';
import SwiperCards from '@/common/swiper';
import styles from './style.module.scss';

/**
 * BannerSection Component - Responsive banner with desktop and mobile views
 * 
 * @param {Object} props
 * @param {string} props.title - Banner title for desktop view
 * @param {string} props.description - Banner description for desktop view
 * @param {string} props.ctaButton - CTA button text
 * @param {Array} props.featuredDestinations - Array of destination objects for desktop cards
 * @param {string} props.mobileHeading - Heading text for mobile view (default: "International")
 * @param {Array} props.mobileSwiperData - Custom data for mobile swiper (optional)
 * @param {Function} props.onExploreClick - Click handler for explore button
 * @param {Function} props.onDestinationClick - Click handler for destination cards
 * 
 * @example
 * // Basic usage with default mobile heading
 * <BannerSection />
 * 
 * @example
 * // Custom mobile heading
 * <BannerSection mobileHeading="Domestic Trips" />
 * 
 * @example
 * // Custom mobile swiper data
 * <BannerSection 
 *   mobileHeading="Weekend Getaways"
 *   mobileSwiperData={weekendDestinations}
 * />
 */
const BannerSection = ({ 
  title = BANNER_DATA.title,
  description = BANNER_DATA.description,
  ctaButton = BANNER_DATA.ctaButton,
  featuredDestinations = FEATURED_DESTINATIONS,
  mobileHeading = "International", // Dynamic mobile heading
  mobileSwiperData = null, // Custom swiper data for mobile
  onExploreClick,
  onDestinationClick
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const handleImageError = () => {
    setImageError(true);
  };

  // Mobile view - show only heading and SwiperCards
  if (isMobile) {
    return (
      <section className={styles.bannerSection}>
        <div className={styles.mobileSection}>
          <h2 className={styles.mobileHeading}>{mobileHeading}</h2>
          <div className={styles.mobileSwiperWrapper}>
            {mobileSwiperData ? (
              // Custom swiper data if provided
              <SwiperCards customData={mobileSwiperData} />
            ) : (
              // Default swiper data
              <SwiperCards />
            )}
          </div>
        </div>
      </section>
    );
  }

  // Desktop view - show original banner with cards
  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerContainer}>
        {!imageError && (
          <Image 
            src="/assets/png/banner1.jpg" 
            alt="Banner background" 
            className={styles.bannerImage}
            fill
            priority
            style={{ objectFit: 'cover' }}
            onError={handleImageError}
            onLoad={() => setImageError(false)}
          />
        )}
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerTitle}>{title}</h1>
            <p className={styles.bannerDescription}>{description}</p>
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
                  <Image 
                    src={destination.image} 
                    alt={destination.name}
                    className={styles.destinationImage}
                    fill
                    style={{ objectFit: 'cover' }}
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
    </section>
  );
};

export default BannerSection;
