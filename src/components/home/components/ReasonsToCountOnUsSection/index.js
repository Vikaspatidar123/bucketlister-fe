import React from 'react';
import styles from './style.module.scss';

const ReasonsToCountOnUsSection = () => {
  const reasons = [
    {
      id: 1,
      icon: "/assets/png/001-photographer.png",
      title: "Expertise and Experience",
      description: "With expert guidance and years of experience, we're your trusted partner for unforgettable journeys."
    },
    {
      id: 2,
      icon: "/assets/png/004-summer-camp.png",
      title: "Like-Minded Travellers",
      description: "Join a community of traveler's who share your passion and create lasting memories."
    },
    {
      id: 3,
      icon: "/assets/png/006-cash.png",
      title: "Transparent pricing",
      description: "We promise clear, transparent pricing with no hidden costs—so you always know what you're getting."
    },
    {
      id: 4,
      icon: "/assets/png/003-tourists.png",
      title: "Your Safe space",
      description: "We offer a judgment-free space to connect deeply, be heard, let go of worries, and truly be yourself."
    }
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
                <img src={reason.icon} alt={reason.title} className={styles.icon} />
              </div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsToCountOnUsSection;
