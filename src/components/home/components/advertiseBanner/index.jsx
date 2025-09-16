"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { advertiseBanner } from "@/assets/webp";
import styles from "./style.module.scss";
import { useRouter } from "next/navigation";

const AdvertiseBanner = () => {
  const router = useRouter();

  const bannerData = [
    {
      id: 1,
      image: advertiseBanner,
      alt: "Advertise Banner 1",
      link: "/explore?destinationId=1",
    },
    {
      id: 2,
      image: advertiseBanner,
      alt: "Advertise Banner 2",
      link: "/explore?destinationId=1",
    },
    {
      id: 3,
      image: advertiseBanner,
      alt: "Advertise Banner 3",
      link: "/explore?destinationId=1",
    },
  ];

  const handleClick = (link) => {
    router.push(link);
  };

  return (
    <div className={styles.advertiseBanner}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        className={styles.swiperContainer}
      >
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id} className={styles.swiperSlide}>
            <Image
              onClick={() => handleClick(banner.link)}
              src={banner.image}
              alt={banner.alt}
              width={1440}
              height={289}
              className={styles.advertiseBannerImage}
              priority={banner.id <= 3} // Prioritize first 3 images
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdvertiseBanner;
