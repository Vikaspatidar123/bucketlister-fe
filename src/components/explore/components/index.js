"use client";
import FeaturesBar from "@/components/home/components/FeaturesBar";
import TravellersTestimonialsSection from "@/components/home/components/TravellersTestimonialsSection";
import TravelPackagesSection from "@/components/TravelPackagesSection/components/TravelPackagesSection";
import { TRAVEL_PACKAGES_DATA } from "@/components/TravelPackagesSection/constants";
import { useSearchParams } from "next/navigation";
import HeroSection from "./HeroSection";
import styles from "./style.module.scss";

const ExplorePage = () => {
  const searchParams = useSearchParams();
  // const dataParam = searchParams.get("data");
  const destinationIdParam = searchParams.get("destinationId");
  let destinationData = null;


  if (!destinationData && destinationIdParam) {
    const idNum = parseInt(destinationIdParam);
    const found = TRAVEL_PACKAGES_DATA.find((d) => d.destination_id === idNum);
    if (found) {
      destinationData = {
        destination_name: found.destination_name,
        name: found.destination_name,
        description: found.description,
        thumbnail_image: found.thumbnail_image,
        hero_image: found.hero_image,
        reviews: found.reviews,
        trips: found.trips,
      };
    }
  }

  return (
    <div className={styles.explorePage}>
      {destinationData && (
        <>
          <HeroSection
            destinationName={destinationData.destination_name}
            description={destinationData.description}
            heroImage={destinationData.hero_image}
          />
          <section className={styles.destinationDescriptionSection}>
            <div className={styles.container}>
              <p className={styles.destinationName}>
                About {destinationData.destination_name} Tours & Packages
              </p>
              <p className={styles.destinationDescription}>
                {destinationData.description}
              </p>
            </div>
          </section>
          <TravelPackagesSection
            destinationName={destinationData.destination_name}
          />
          <TravellersTestimonialsSection
            reviews={destinationData.reviews}
            destinationName={destinationData.destination_name}
          />
          <FeaturesBar />
        </>
      )}
    </div>
  );
};

export default ExplorePage;
