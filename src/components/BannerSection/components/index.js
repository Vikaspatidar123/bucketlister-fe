"use client";
import React, { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { BANNER_DATA, FEATURED_DESTINATIONS } from '../constants';
import styles from './style.module.scss';

const BannerSection = ({ 
  title = BANNER_DATA.title,
  description = BANNER_DATA.description,
  ctaButton = BANNER_DATA.ctaButton,
  carouselSlides = BANNER_DATA.carouselSlides,
  featuredDestinations = FEATURED_DESTINATIONS,
  onExploreClick,
  onDestinationClick
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    autoplay: { delay: 3000, stopOnInteraction: false }
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

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

  return (
    <section className={styles.bannerSection}>
      {/* Full Width Background Banner */}
      <div className={styles.backgroundBanner}>
        <div className={styles.carouselContainer} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {carouselSlides.map((slide) => (
              <div
                key={slide.id}
                className={styles.carouselSlide}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className={styles.slideOverlay}>
                  <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>{title}</h1>
                    <p className={styles.bannerDescription}>
                      {description}
                    </p>
                    <button className={styles.ctaButton} onClick={handleExploreClick}>
                      {ctaButton}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className={styles.navArrow} onClick={scrollPrev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className={styles.navArrow} onClick={scrollNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Carousel Indicators */}
        <div className={styles.carouselIndicators}>
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === selectedIndex ? styles.active : ''
              }`}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Cards Section */}
      <div className={styles.bottomCards}>
        <div className={styles.container}>
          <div className={styles.cardsRow}>
            {featuredDestinations.map((destination) => (
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
                  {destination.badge && (
                    <div className={styles.badge}>
                      {destination.badge}
                    </div>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.destinationName}>{destination.name}</h3>
                  <span className={styles.duration}>{destination.duration}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Next Button on Right Side */}
          <button className={styles.nextButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
