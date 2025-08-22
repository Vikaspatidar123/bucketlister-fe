import React from 'react';
import styles from './style.module.scss';

const TravellersTestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
      name: "JAMES THOMAS",
      location: "Sri Lanka (Jul 2024)",
      profileImage: "/api/placeholder/80/80",
      imageAlt: "Smiling woman with dark wavy hair wearing red top"
    },
    {
      id: 2,
      text: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
      name: "JAMES THOMAS",
      location: "Coorg (Oct 2025)",
      profileImage: "/api/placeholder/80/80",
      imageAlt: "Young man with curly hair wearing dark hat and t-shirt"
    },
    {
      id: 3,
      text: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
      name: "JAMES THOMAS",
      location: "Coorg (Oct 2025)",
      profileImage: "/api/placeholder/80/80",
      imageAlt: "Smiling Black man with shaved head wearing green and white patterned shirt"
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titlePart1}>What Travellers are</span>
          <span className={styles.titlePart2}> saying about us</span>
        </h2>
        
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                {"\u201C"}
              </div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.userProfile}>
                <div className={styles.profileImageContainer}>
                  <img 
                    src={testimonial.profileImage} 
                    alt={testimonial.imageAlt}
                    className={styles.profileImage}
                  />
                </div>
                <div className={styles.userInfo}>
                  <h4 className={styles.userName}>{testimonial.name}</h4>
                  <p className={styles.userLocation}>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravellersTestimonialsSection;
