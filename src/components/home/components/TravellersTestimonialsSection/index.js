import React from "react";
import styles from "./style.module.scss";

const TravellersTestimonialsSection = ({
  reviews = null,
  destinationName = null,
}) => {
  // Use passed reviews if available, otherwise use default testimonials
  let testimonials;

  if (reviews && reviews.length > 0) {
    testimonials = reviews.map((review, index) => ({
      id: index + 1,
      text: review.description,
      name: review.name,
      location: `${destinationName || "Destination"} (${review.rating}★)`,
      profileImage: "/assets/png/profile-1.jpg",
      imageAlt: `Profile of ${review.name}`,
    }));
  } else {
    testimonials = [
      {
        id: 1,
        text: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
        name: "JAMES THOMAS",
        location: "Sri Lanka (Jul 2024)",
        profileImage: "/assets/png/profile-1.jpg",
        imageAlt: "Smiling woman with dark wavy hair wearing red top",
      },
      {
        id: 2,
        text: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
        name: "JAMES THOMAS",
        location: "Coorg (Oct 2025)",
        profileImage: "/assets/png/profile-1.jpg",
        imageAlt: "Young man with curly hair wearing dark hat and t-shirt",
      },
      {
        id: 3,
        text: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
        name: "JAMES THOMAS",
        location: "Coorg (Oct 2025)",
        profileImage: "/assets/png/profile-1.jpg",
        imageAlt:
          "Smiling Black man with shaved head wearing green and white patterned shirt",
      },
      // extra sample cards to enable horizontal scroll demo
      { id: 4, text: "Amazing hospitality and well-planned itinerary.", name: "PRIYA NAIR", location: "Maldives (Aug 2025)", profileImage: "/assets/png/profile-1.jpg", imageAlt: "Profile" },
      { id: 5, text: "Loved the local experiences curated by the team!", name: "ARJUN SINGH", location: "Japan (Apr 2026)", profileImage: "/assets/png/profile-1.jpg", imageAlt: "Profile" },
      { id: 6, text: "Great value and unforgettable sights.", name: "NEHA PATEL", location: "Europe (Sep 2025)", profileImage: "/assets/png/profile-1.jpg", imageAlt: "Profile" },
      { id: 7, text: "Friendly guides and smooth logistics.", name: "VIKRAM MALHOTRA", location: "Canada (Jul 2025)", profileImage: "/assets/png/profile-1.jpg", imageAlt: "Profile" },
      { id: 8, text: "Perfect balance of adventure and relaxation.", name: "ANANYA SHARMA", location: "Thailand (Jun 2025)", profileImage: "/assets/png/profile-1.jpg", imageAlt: "Profile" },
    ];
  }

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        {reviews && reviews.length > 0 ? (
          <h2 className={styles.sectionTitle1}>
            <span className={styles.titlePart1}>Reviews</span>
          </h2>
        ) : (
          <>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titlePart1}>What Travellers are</span>
              <span className={styles.titlePart2}> saying about us</span>
            </h2>
          </>
        )}

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.profileImageContainer}>
                <img
                  src={testimonial.profileImage}
                  alt={testimonial.imageAlt}
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.testimonialContent}>
                {/* <div className={styles.quoteIcon}>
                  {"\u201C"}
                </div> */}
                <p className={styles.testimonialText}>
                  <span className={styles.quoteIcon}>{"\u201C"}</span>

                  {testimonial.text}
                </p>
                <h4 className={styles.userName}>{testimonial.name}</h4>
                <p className={styles.userLocation}>{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravellersTestimonialsSection;
