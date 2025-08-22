"use client";
import React from 'react';
import { DOMESTIC_BANNER_DATA, DOMESTIC_DESTINATIONS } from '../../constants';
import BannerSection from '@/components/BannerSection/components';

const DomesticTripsSection = () => {
  const handleExploreClick = () => {
    console.log('Explore Domestic Trips clicked');
    // Add your navigation logic here
  };

  const handleDestinationClick = (destination) => {
    console.log('Destination clicked:', destination);
    // Add your destination navigation logic here
  };

  return (
    <BannerSection
      title={DOMESTIC_BANNER_DATA.title}
      description={DOMESTIC_BANNER_DATA.description}
      ctaButton={DOMESTIC_BANNER_DATA.ctaButton}
      carouselSlides={DOMESTIC_BANNER_DATA.carouselSlides}
      featuredDestinations={DOMESTIC_DESTINATIONS}
      onExploreClick={handleExploreClick}
      onDestinationClick={handleDestinationClick}
    />
  );
};

export default DomesticTripsSection;
