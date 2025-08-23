'use client';
import React from 'react';
import HeroSection from './HeroSection';
import TopDestinationsSection from './TopDestinationsSection';
import TestimonialsSection from './TestimonialsSection';
import FeaturesBar from './FeaturesBar';
import TourListingSection from './TourListingSection';
import CurateTripSection from './CurateTripSection';
import styles from './style.module.scss';
import TravelPackagesSection from '@/components/TravelPackagesSection/components/TravelPackagesSection';

const ExplorePage = () => {
    return (
        <div className={styles.explorePage}>
            <HeroSection />
            <TopDestinationsSection />
            <TestimonialsSection />
            <FeaturesBar />
            <TravelPackagesSection />
            {/* <CurateTripSection /> */}
        </div>
    );
};

export default ExplorePage; 