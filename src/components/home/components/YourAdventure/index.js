"use client";
import React from "react";
import {
  DOMESTIC_BANNER_DATA,
  DOMESTIC_DESTINATIONS,
  YOUR_ADVENTURE_DATA,
} from "../../constants";
import styles from "./style.module.scss";
import BannerSection from "@/components/BannerSection/components";
import Image from "next/image";
import { domesticBanner } from "@/assets/webp";

const YourAdventureSection = () => {
  const handleExploreClick = () => {
    console.log("Explore Domestic Trips clicked");
    // Add your navigation logic here
  };

  const handleDestinationClick = (destination) => {
    console.log("Destination clicked:", destination);
    // Add your destination navigation logic here
  };

  return (
    <section className={styles.yourAdventureSection}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <div className={styles.container}>
          <h2 className={styles.title}>{YOUR_ADVENTURE_DATA.title}</h2>
          <p className={styles.subtitle}>{YOUR_ADVENTURE_DATA.subtitle}</p>
        </div>
      </div>

      {/* Travel Types Section */}
      <div className={styles.travelTypesSection}>
        <div className={styles.container}>
          <div className={styles.travelTypesGrid}>
            {YOUR_ADVENTURE_DATA.travelTypes.map((type) => (
              <div key={type.id} className={styles.travelTypeCard}>
                {/* <div className={styles.iconWapper}> */}
                <Image
                  src={type.icon}
                  alt={type.title}
                  className={styles.icon}
                  width={96}
                  height={96}
                />
                {/* </div> */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{type.title}</h3>
                  <p className={styles.cardSubtitle}>{type.subtitle}</p>
                  <p className={styles.cardDescription}>{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner Section with Reduced Width */}
      <div className={styles.bannerWrapper}>
        <BannerSection
          title={DOMESTIC_BANNER_DATA.title}
          description={DOMESTIC_BANNER_DATA.description}
          ctaButton={DOMESTIC_BANNER_DATA.ctaButton}
          category="domestic"
          onExploreClick={handleExploreClick}
          onDestinationClick={handleDestinationClick}
          mobileHeading="Domestic Trips"
          heroBanner={domesticBanner}
        />
      </div>
    </section>
  );
};

export default YourAdventureSection;
