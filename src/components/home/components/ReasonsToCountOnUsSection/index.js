import React from 'react';
import styles from './style.module.scss';

const ReasonsToCountOnUsSection = () => {
  const reasons = [
    {
      id: 1,
      icon: (
        <div className={styles.iconContainer}>
          <div className={styles.personIcon}>
            <div className={styles.backpack}></div>
            <div className={styles.camera}></div>
            <div className={styles.person}></div>
          </div>
        </div>
      ),
      title: "Expertise and Experience",
      description: "With expert guidance and years of experience, we're your trusted partner for unforgettable journeys."
    },
    {
      id: 2,
      icon: (
        <div className={styles.iconContainer}>
          <div className={styles.groupIcon}>
            <div className={styles.person1}></div>
            <div className={styles.person2}></div>
            <div className={styles.person3}></div>
            <div className={styles.flag}></div>
          </div>
        </div>
      ),
      title: "Like-Minded Travellers",
      description: "Join a community of traveler's who share your passion and create lasting memories."
    },
    {
      id: 3,
      icon: (
        <div className={styles.iconContainer}>
          <div className={styles.ticketIcon}>
            <div className={styles.ticket}></div>
            <div className={styles.dollarSign}>$</div>
          </div>
        </div>
      ),
      title: "Transparent pricing",
      description: "We promise clear, transparent pricing with no hidden costs—so you always know what you're getting."
    },
    {
      id: 4,
      icon: (
        <div className={styles.iconContainer}>
          <div className={styles.safeIcon}>
            <div className={styles.person4}></div>
            <div className={styles.person5}></div>
            <div className={styles.camera2}></div>
          </div>
        </div>
      ),
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
                {reason.icon}
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
