import React from "react";
import Image from "next/image";
import { advertiseBanner } from "@/assets/webp";
import styles from "./style.module.scss";

const AdvertiseBanner = () => {
  return (
    <div className={styles.advertiseBanner}>
      <Image
        src={advertiseBanner}
        alt="Advertise Banner"
        width={1440}
        height={289}
        className={styles.advertiseBannerImage}
      />
    </div>
  );
};

export default AdvertiseBanner;
