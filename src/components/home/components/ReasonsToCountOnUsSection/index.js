import {
  expertExperienceImage,
  likeMindsImage,
  pricingImage,
  safeSpaceImage,
} from "@/assets/webp";
import styles from "./style.module.scss";
import Image from "next/image";

const ReasonsToCountOnUsSection = () => {
  const reasons = [
    {
      id: 1,
      icon: expertExperienceImage,
      title: "Expertise and Experience",
      description:
        "With expert guidance and years of experience, we're your trusted partner for unforgettable journeys.",
    },
    {
      id: 2,
      icon: likeMindsImage,
      title: "Like-Minded Travellers",
      description:
        "Join a community of traveler's who share your passion and create lasting memories.",
    },
    {
      id: 3,
      icon: pricingImage,
      title: "Transparent pricing",
      description:
        "We promise clear, transparent pricing with no hidden costs—so you always know what you're getting.",
    },
    {
      id: 4,
      icon: safeSpaceImage,
      title: "Your Safe space",
      description:
        "We offer a judgment-free space to connect deeply, be heard, let go of worries, and truly be yourself.",
    },
  ];

  return (
    <section className={styles.reasonsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titlePart1}>Reasons to</span>
          <span className={styles.titlePart2}> count on us</span>
        </h2>

        <div className={styles.reasonsGrid}>
          {reasons.map((reason) => (
            <div key={reason.id} className={styles.reasonCard}>
              <div className={styles.iconWrapper}>
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  className={styles.icon}
                  width={96}
                  height={96}
                />
              </div>
              <div className={styles.reasonContent}>
                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                <p className={styles.reasonDescription}>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsToCountOnUsSection;
