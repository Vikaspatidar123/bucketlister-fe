import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './style.module.scss';

const TestimonialsSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: true,
        skipSnaps: false,
        dragFree: true,
        containScroll: 'trimSnaps',
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 640px)': { slidesToScroll: 1 },
            '(min-width: 768px)': { slidesToScroll: 1 },
            '(min-width: 1024px)': { slidesToScroll: 1 },
        }
    });

    // Auto-scroll functionality
    useEffect(() => {
        if (emblaApi) {
            const interval = setInterval(() => {
                emblaApi.scrollNext();
            }, 5000); // Auto-scroll every 5 seconds

            return () => clearInterval(interval);
        }
    }, [emblaApi]);

    const testimonials = [
        {
            id: 1,
            quote: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
            name: "JAMES THOMAS",
            location: "Sri Lanka (Jul 2024)",
            image: "/assets/png/profile-1.jpg"
        },
        {
            id: 2,
            quote: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
            name: "JAMES THOMAS",
            location: "Sri Lanka (Jul 2024)",
            image: "/assets/png/profile-1.jpg"
        },
        {
            id: 3,
            quote: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
            name: "JAMES THOMAS",
            location: "Sri Lanka (Jul 2024)",
            image: "/assets/png/profile-1.jpg"
        },
        {
            id: 4,
            quote: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
            name: "JAMES THOMAS",
            location: "Sri Lanka (Jul 2024)",
            image: "/assets/png/profile-1.jpg"
        },
        {
            id: 5,
            quote: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
            name: "JAMES THOMAS",
            location: "Sri Lanka (Jul 2024)",
            image: "/assets/png/profile-1.jpg"
        }
    ];

    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.container}>
                <div className={styles.carouselContainer}>
                    <div className={styles.carouselWrapper} ref={emblaRef}>
                        <div className={styles.carouselViewport}>
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className={styles.carouselSlide}>
                                    <div className={styles.testimonialCard}>
                                        {/* Quote marks at top left */}
                                        {/* <div className={styles.quoteMarks}>"</div> */}

                                        {/* Quote text */}
                                        <div className={styles.testimonialCardContent}>
                                            {/* <div className={styles.authorSection}> */}
                                            <div className={styles.profileImage}>
                                                <img src={testimonial.image} alt={testimonial.name} />
                                                {/* </div> */}

                                            </div>
                                            <div>
                                                <blockquote className={styles.testimonialQuote}>
                                                    {testimonial.quote}
                                                </blockquote>
                                                <div className={styles.authorInfo}>
                                                    <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                                                    <p className={styles.testimonialLocation}>{testimonial.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Author info with profile picture */}

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection; 