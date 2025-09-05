"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "./style.module.scss";
import { andamanImage, coorgImage, himachalImage, kashmirImage, keralaImage, sikkimImage, thailandImage, uttarakhandImage } from "@/assets/svg";

const defaultCards = [
  {
    title: "Leh Ladakh",
    price: "Starting Price Rs. 21,999/-",
    image: "/assets/png/banner1.jpg",
    // href: "/india-trips/leh-ladakh-tour-packages",
  },
  {
    title: "Spiti",
    price: "Starting Price Rs. 17,999/-",
    image: sikkimImage,
    // href: "/india-trips/spiti-valley-tour-packages",
  },
  {
    title: "Meghalaya",
    price: "Starting Price Rs. 21,499/-",
    image: thailandImage,
    // href: "/india-trips/meghalaya-tour-packages",
  },
  {
    title: "Arunachal Pradesh",
    price: "Starting Price Rs. 38,990/-",
    image: himachalImage,
    // href: "/india-trips/arunachal-pradesh-tour-packages",
  },
  {
    title: "Kerala",
    price: "Starting Price Rs. 12,999/-",
    image: keralaImage,
    // href: "/india-trips/kerala-tour-packages",
  },
  {
    title: "Himachal",
    price: "Starting Price Rs. 7,999/-",
    image: himachalImage,
    // href: "/india-trips/himachal-pradesh-tour-packages",
  },
  {
    title: "Kashmir",
    price: "Starting Price Rs. 24,499/-",
    image: kashmirImage,
    // href: "/india-trips/kashmir-tour-packages",
  },
  {
    title: "Rajasthan",
    price: "Starting Price Rs. 12,999/-",
    image: coorgImage,
    // href: "/india-trips/rajasthan-tour-packages",
  },
  {
    title: "Uttarakhand",
    price: "Starting Price Rs. 7,999/-",
    image: uttarakhandImage,
    // href: "/india-trips/uttarakhand-tour-packages",
  },
  {
    title: "Andaman",
    price: "Starting Price Rs. 29,999/-",
    image: andamanImage,
    // href: "/india-trips/andaman-tour-packages",
  },
  {
    title: "Sikkim",
    price: "Starting Price Rs. 14,999/-",
    image: sikkimImage,
    // href: "/india-trips/sikkim-tour-packages",
  },
];

const SwiperCards = ({ customData = null }) => {
  // Use custom data if provided, otherwise use default cards
  const cardsToShow = useMemo(() => customData || defaultCards, [customData]);

  return (
    <div className={styles.cardsSwiperContainer}>
      <Swiper
        modules={[EffectCards]}
        effect="cards"
        grabCursor={true}
        className={styles.cardsSwiper}
        touchEventsTarget="container"
        touchReleaseOnEdges={true}
        touchMoveStopPropagation={false}
        allowTouchMove={true}
        passiveListeners={true}
        resistance={true}
        resistanceRatio={0.85}
        followFinger={true}
        threshold={5}
        longSwipesRatio={0.5}
        longSwipesMs={300}
        shortSwipes={true}
      >
        {cardsToShow.map((card, index) => (
          <SwiperSlide key={card.id || card.title || index} className={styles.cardSlide}>
            <a href={card.href || "#"} className={styles.cardLink}>
              <img src={card.image} alt={card.title} className={styles.cardImage} />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardSubtitle}>{card.price}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default React.memo(SwiperCards);
