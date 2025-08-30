"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "./style.module.scss";

const cards = [
  {
    title: "Leh Ladakh",
    price: "Starting Price Rs. 21,999/-",
    image: "https://wanderon-images.gumlet.io//ladakh_card.jpeg?updatedAt=1690541894161",
    href: "/india-trips/leh-ladakh-tour-packages",
  },
  {
    title: "Spiti",
    price: "Starting Price Rs. 17,999/-",
    image: "https://wanderon-images.gumlet.io//spiti_card.jpeg?updatedAt=1690541894161",
    href: "/india-trips/spiti-valley-tour-packages",
  },
  {
    title: "Meghalaya",
    price: "Starting Price Rs. 21,499/-",
    image: "https://wanderon-images.gumlet.io//meghalya_card.jpeg?updatedAt=1690541894161",
    href: "/india-trips/meghalaya-tour-packages",
  },
  {
    title: "Arunachal Pradesh",
    price: "Starting Price Rs. 38,990/-",
    image: "https://wanderon-images.gumlet.io/Arunachal-Pradesh-img.webp",
    href: "/india-trips/arunachal-pradesh-tour-packages",
  },
  {
    title: "Kerala",
    price: "Starting Price Rs. 12,999/-",
    image: "https://wanderon-images.gumlet.io//kerala_card.jpeg?updatedAt=1690541894161",
    href: "/india-trips/kerala-tour-packages",
  },
  {
    title: "Himachal",
    price: "Starting Price Rs. 7,999/-",
    image: "https://wanderon-images.gumlet.io//himachal-backpacking_card.jpeg?updatedAt=1690541894161",
    href: "/india-trips/himachal-pradesh-tour-packages",
  },
  {
    title: "Kashmir",
    price: "Starting Price Rs. 24,499/-",
    image: "https://wanderon-images.gumlet.io/kashmir_card.jpeg?updatedAt=1690541894161",
    href: "/india-trips/kashmir-tour-packages",
  },
  {
    title: "Rajasthan",
    price: "Starting Price Rs. 12,999/-",
    image: "https://wanderon-images.gumlet.io//rajasthan_card.jpeg?updatedAt=1690541894161",
    href: "/india-trips/rajasthan-tour-packages",
  },
  {
    title: "Uttarakhand",
    price: "Starting Price Rs. 7,999/-",
    image: "https://wanderon-images.gumlet.io//uttarakhand_card.jpeg?updatedAt=1690541894161",
    href: "/india-trips/uttarakhand-tour-packages",
  },
  {
    title: "Andaman",
    price: "Starting Price Rs. 29,999/-",
    image: "https://wanderon-images.gumlet.io/andaman_card.jpeg?updatedAt=1690541894161",
    href: "/india-trips/andaman-tour-packages",
  },
  {
    title: "Sikkim",
    price: "Starting Price Rs. 14,999/-",
    image: "https://wanderon-images.gumlet.io//sikkim_card.jpeg?updatedAt=1690541894161",
    href: "/india-trips/sikkim-tour-packages",
  },
];

const SwiperCards = () => {
  return (
    <div className={styles.cardsSwiperContainer}>
      <Swiper
        modules={[EffectCards]}
        effect="cards"
        grabCursor={true}
        className={styles.cardsSwiper}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.title} className={styles.cardSlide}>
            <a href={card.href} className={styles.cardLink}>
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

export default SwiperCards;
