// Home Components Index - Main entry point for home folder

// Main Home component that combines all sections
import React from "react";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
// import BannerSection from "./BannerSection";
import ExploreDestinations from "./ExploreDestinations";
import TravelPackagesSection from "../../TravelPackagesSection/components/TravelPackagesSection";
import styles from "./style.module.scss";
import BannerSection from "@/components/BannerSection/components";
import YourAdventureSection from "./YourAdventure";
import HappyMomentsSection from "./HappyMomentsSection";
import ReasonsToCountOnUsSection from "./ReasonsToCountOnUsSection";
import TravellersTestimonialsSection from "./TravellersTestimonialsSection";
import MomentsInMotionSection from "./MomentsInMotionSection";
import FeaturesBar from "./FeaturesBar";
import AdvertiseBanner from "./advertiseBanner";
import FAQSection from "./FAQSection";

const Home = () => {
  return (
    <div className={styles.home}>
      <HeroSection />
      <StatsSection />
      <ExploreDestinations />
      <BannerSection
        category="international"
        mobileHeading="International Trips"
      />
      <AdvertiseBanner />
      <TravelPackagesSection isHomePage={true} />
      <YourAdventureSection />
      <HappyMomentsSection />
      <FeaturesBar />
      <ReasonsToCountOnUsSection />
      <TravellersTestimonialsSection />
      <div className={styles.desktopOnly}>
        <MomentsInMotionSection />
      </div>
      <FAQSection />
    </div>
  );
};

export default Home;

// Individual component exports
// export { default as HeroSection } from './HeroSection';
// export { default as StatsSection } from './StatsSection';
// export { default as BannerSection } from './BannerSection';
// export { default as ExploreDestinations } from './ExploreDestinations';
// export { default as DestinationCard } from './DestinationCard';
// export { default as SearchForm } from './SearchForm';
