import React from "react";
import Image from "next/image";
import { advertiseBanner } from "@/assets/webp";
import styles from "./style.module.scss";
import { useRouter } from "next/navigation";

const AdvertiseBanner = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/explore?destinationId=1");
  };
  return (
    <div className={styles.advertiseBanner}>
      <Image
        onClick={handleClick}
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
