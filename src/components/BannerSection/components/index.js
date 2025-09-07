"use client";
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BANNER_DATA } from '../constants';
import { TRAVEL_PACKAGES_DATA } from '@/components/TravelPackagesSection/constants';
import SwiperCards from '@/common/swiper';
import styles from './style.module.scss';
import { banner1 } from '@/assets/png';

const BannerSection = ({ 
  title = BANNER_DATA.title,
  description = BANNER_DATA.description,
  ctaButton = BANNER_DATA.ctaButton,
  featuredDestinations = null,
  category = 'international',
  mobileHeading = "International", // Dynamic mobile heading
  mobileSwiperData = null, // Custom swiper data for mobile
  onExploreClick,
  onDestinationClick
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imageError, setImageError] = useState(false);
  const router = useRouter();

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    
    return () => window.removeEventListener('resize', checkMobile, { passive: true });
  }, [checkMobile]);

  const handleExploreClick = useCallback(() => {
    if (onExploreClick) {
      onExploreClick();
    }
  }, [onExploreClick]);

  const handleDestinationClick = useCallback((destination) => {
    if (onDestinationClick) {
      onDestinationClick(destination);
      return;
    }
    if (destination?.href) {
      router.push(destination.href);
    }
  }, [onDestinationClick, router]);

  // handlers will be defined after `featured` is computed

  const handleImageError = () => {
    setImageError(true);
  };

  // Build featured list from TRAVEL_PACKAGES_DATA if not provided
  const computedFeatured = React.useMemo(() => {
    try {
      const trips = [];
      TRAVEL_PACKAGES_DATA.forEach((destination) => {
        if (destination?.category === category && Array.isArray(destination.trips)) {
          // destination.trips.forEach((trip, index) => {
            const trip = destination.trips[0];
            const id = trip.tripId ?? trip.id ?? `${destination.destination_id}-${index}`;
            const tripId = trip.tripId ?? trip.id;
            const destinationId = destination.destination_id;
            trips.push({
              id,
              name: trip.title ?? destination.destination_name,
              title: trip.title ?? destination.destination_name,
              price: typeof trip.price === 'number' ? `₹ ${trip.price.toLocaleString('en-IN')}` : (trip.price || ''),
              image: trip.image || destination.thumbnail_image || destination.hero_image || banner1,
              duration: trip.duration ?? '',
              destinationId,
              tripId,
              href: (destinationId && tripId) ? `/trip?destinationId=${destinationId}&tripId=${tripId}` : undefined,
            });
          // });
        }
      });
      return trips;
    } catch (e) {
      return [];
    }
  }, [category]);

  // Use provided featuredDestinations or computed ones
  const featured = featuredDestinations && Array.isArray(featuredDestinations) && featuredDestinations.length > 0
    ? featuredDestinations
    : computedFeatured;

  const handleNextCards = useCallback(() => {
    if (!featured || featured.length === 0) return;
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % featured.length);
  }, [featured]);

  const handlePrevCards = useCallback(() => {
    if (!featured || featured.length === 0) return;
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + featured.length) % featured.length);
  }, [featured]);

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
              <SwiperCards customData={featured} />
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
            src={banner1}
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
            {featured && featured.length > 0 && Array.from({ length: 4 }).map((_, i) => {
              const destination = featured[(currentCardIndex + i) % featured.length];
              if (!destination) return null;
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

export default React.memo(BannerSection);
