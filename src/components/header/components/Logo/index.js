"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BRAND_INFO } from "../../constants";
import styles from "../style.module.scss";

const Logo = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <div className={styles.logo} onClick={handleLogoClick}>
      <Image
        src={BRAND_INFO.logoPath}
        alt="The Bucketlister Logo"
        width={284}
        height={79}
        className={styles.logoImage}
      />
    </div>
  );
};

export default Logo;
