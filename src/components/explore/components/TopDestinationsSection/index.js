import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import DestinationCard from './DestinationCard';
import styles from './style.module.scss';

const TopDestinationsSection = () => {
    const [emblaRef] = useEmblaCarousel({
        align: 'start',
        loop: false,
        skipSnaps: false,
        dragFree: true,
        containScroll: 'trimSnaps',
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 640px)': { slidesToScroll: 1 },
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 3 },
            '(min-width: 1280px)': { slidesToScroll: 4 },
        }
    });

    const destinations = [
        {
            id: 1,
            name: 'Thailand',
            image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
            price: 'Starting at Rs 65,000/-'
        },
        {
            id: 2,
            name: 'Europe',
            image: 'https://media.istockphoto.com/id/1143539287/photo/channel-in-amsterdam-netherlands-houses-river-amstel.jpg?s=612x612&w=0&k=20&c=tYhG0NPq1eCGP3JgwFrphJK2VQ9mVHmEHZXUudzNCGE=',
            price: 'Starting at Rs 65,000/-'
        },
        {
            id: 3,
            name: 'South Africa',
            image: 'https://media.istockphoto.com/id/682284814/photo/aerial-view-of-cape-town.jpg?s=612x612&w=0&k=20&c=vN-j-NbeH6yVb9wtz5FHXJBzrWjV8h3FQVtEtflpHM8=',
            price: 'Starting at Rs 65,000/-'
        },
        {
            id: 4,
            name: 'Australia',
            image: 'https://www.shutterstock.com/image-photo/sydney-harbour-opera-house-cityscape-600nw-2495680553.jpg',
            price: 'Starting at Rs 65,000/-'
        },
        {
            id: 5,
            name: 'Japan',
            image: 'https://media.istockphoto.com/id/876560704/photo/fuji-japan-in-spring.jpg?s=612x612&w=0&k=20&c=j1VZlzfNcsjQ4q4yHXJEohSrBZJf6nUhh2_smM4eioQ=',
            price: 'Starting at Rs 75,000/-'
        },
        {
            id: 6,
            name: 'New Zealand',
            image: 'https://media.istockphoto.com/id/866887704/photo/wellington-cable-car-the-landmark-of-new-zealand.jpg?s=612x612&w=0&k=20&c=8Q5NkM4ce57tDA6P0WoSsXaGhy-v92PGeu5yK0HBlhw=',
            price: 'Starting at Rs 80,000/-'
        },
        {
            id: 7,
            name: 'Bali',
            image: 'https://media.istockphoto.com/id/675172642/photo/pura-ulun-danu-bratan-temple-in-bali.jpg?s=612x612&w=0&k=20&c=_MPdmDviIyhldqhf7t6s63C-bZbTGfNHMlJP9SIa8Y0=',
            price: 'Starting at Rs 55,000/-'
        },
        {
            id: 8,
            name: 'Switzerland',
            image: 'https://media.istockphoto.com/id/1855074892/photo/lauterbrunnen-switzerland-during-autumn.jpg?s=612x612&w=0&k=20&c=d27-9xXCuR7YApjXqMoDxsaMI309o55bjHkxCVnF4o4=',
            price: 'Starting at Rs 90,000/-'
        }
    ];

    return (
        <section className={styles.topDestinationsSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Top Destinations</h2>

                <div className={styles.carouselContainer}>
                    <div className={styles.carouselWrapper} ref={emblaRef}>
                        <div className={styles.carouselViewport}>
                            {destinations.map((destination) => (
                                <div key={destination.id} className={styles.carouselSlide}>
                                    <DestinationCard destination={destination} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopDestinationsSection; 