import React from "react";
import styles from "./style.module.scss";
import { getHomePageTestimonials, getDestinationReviews } from "@/data/destinationReviews";

const TravellersTestimonialsSection = ({
  reviews = null,
  destinationName = null,
}) => {
  // Use passed reviews if available, otherwise use default testimonials
  let testimonials = [];

  try {
    if (reviews && Array.isArray(reviews) && reviews.length > 0) {
      testimonials = reviews.map((review, index) => ({
        id: index + 1,
        text: review.description || '',
        name: review.name || 'Anonymous',
        location: `${destinationName || "Destination"} (${review.rating || 5}★)`,
      }));
    } else if (destinationName) {
      // Get specific destination reviews
      const destReviews = getDestinationReviews(destinationName);
      if (Array.isArray(destReviews)) {
        testimonials = destReviews.map((review, index) => ({
          id: index + 1,
          text: review.description || '',
          name: review.name || 'Anonymous',
          location: `${destinationName} (${review.rating || 5}★)`,
        }));
      }
    } else {
      // Get mixed reviews for home page
      const homeReviews = getHomePageTestimonials(12);
      if (Array.isArray(homeReviews)) {
        testimonials = homeReviews.map((review, index) => ({
          id: index + 1,
          text: review.description || '',
          name: review.name || 'Anonymous',
          location: `${review.location || 'Travel'} (${review.rating || 5}★)`,
        }));
      }
    }
  } catch (error) {
    console.error('Error loading testimonials:', error);
    testimonials = [];
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
              <div className={styles.testimonialContent}>
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
