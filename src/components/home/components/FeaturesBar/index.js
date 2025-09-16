import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

const FeaturesBar = () => {
  const features = [
    {
      id: 1,
      icon: "/assets/png/stars.png",
      text: "Lock In spot in Rs. 5,000",
    },
    {
      id: 2,
      icon: "/assets/png/mobile.png",
      text: "Secure Payments",
    },
    {
      id: 3,
      icon: "/assets/png/pen.png",
      text: "Modify up to 60 days before departure.",
    },
    {
      id: 4,
      icon: "/assets/png/profile.png",
      text: "24/7 Support",
    },
  ];

  return (
    <section className={styles.featuresBar}>
      <div className={styles.container}>
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.featureItem}>
              <Image
                src={feature.icon}
                alt={feature.text}
                width={20}
                height={20}
              />
              <span className={styles.featureText}>{feature.text}</span>
            </div>
          ))}
        </div>
        <div className={styles.mobileMarquee} aria-hidden="true">
          <div className={styles.marqueeInner}>
            <div className={styles.marqueeContent}>
              {features.map((feature) => (
                <div key={`m1-${feature.id}`} className={styles.featureItem}>
                  <Image
                    src={feature.icon}
                    alt={feature.text}
                    width={20}
                    height={20}
                  />
                  <span className={styles.featureText}>{feature.text}</span>
                </div>
              ))}
            </div>
            <div className={styles.marqueeContent} aria-hidden="true">
              {features.map((feature) => (
                <div key={`m2-${feature.id}`} className={styles.featureItem}>
                  <Image
                    src={feature.icon}
                    alt={feature.text}
                    width={20}
                    height={20}
                  />
                  <span className={styles.featureText}>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
