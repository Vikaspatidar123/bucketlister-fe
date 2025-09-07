import React from 'react';
import styles from './style.module.scss';
import { getAssetUrlWithFallback } from '@/utils/cdn';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsPage}>
      <section className={styles.heroSection}>
        <div className={styles.backgroundImage}>
          <div className={styles.overlay} />
        </div>
        <div className={styles.content}>
          <div className={styles.container}>
            <h1 className={styles.mainHeading}>
              <span className={styles.line1}>About Us</span>
            </h1>
          </div>
        </div>
      </section>

      <section className={styles.companyDescription}>
        <div className={styles.container}>
          <div className={styles.descriptionContent}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titlePart1}>Your Gateway to </span>
              <span className={styles.titlePart2}>Extraordinary Adventures</span>
            </h2>
            <p className={styles.description}>
              At The Bucketlister, we believe that travel is more than just visiting new places—it&apos;s about creating memories that last a lifetime. Founded with a passion for exploration and a commitment to excellence, we curate unique travel experiences that connect you with diverse cultures, breathtaking landscapes, and unforgettable moments.
            </p>
            <p className={styles.description}>
              From the serene temples of Kyoto to the rolling vineyards of Tuscany, we design every journey with meticulous attention to detail, ensuring that your adventure is both seamless and spectacular.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.founderSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titlePart1}>Meet Our </span>
            <span className={styles.titlePart2}>Founder</span>
          </h2>
          <div className={styles.founderCard}>
            <div className={styles.founderImage}>
              <img 
                {...getAssetUrlWithFallback("/assets/png/profile-1.jpg")} 
                alt="Founder" 
              />
            </div>
            <div className={styles.founderContent}>
              <h3 className={styles.founderName}>Harsh Vira</h3>
              <p className={styles.founderTitle}>Founder & CEO</p>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>
                  <img 
                    {...getAssetUrlWithFallback("/assets/svg/instagram.svg")} 
                    alt="Instagram" 
                  />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <img 
                    {...getAssetUrlWithFallback("/assets/svg/linkedin.svg")} 
                    alt="LinkedIn" 
                  />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <img 
                    {...getAssetUrlWithFallback("/assets/svg/twitter.svg")} 
                    alt="Twitter" 
                  />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <img 
                    {...getAssetUrlWithFallback("/assets/svg/facebook.svg")} 
                    alt="Facebook" 
                  />
                </a>
              </div>
              <p className={styles.founderDescription}>
                With over 15 years of experience in the travel industry, Harsh founded The Bucketlister with a vision to make extraordinary travel accessible to everyone. His passion for authentic experiences and commitment to personalized service has helped thousands of travelers discover the world in ways they never imagined.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titlePart1}>Our </span>
            <span className={styles.titlePart2}>Team</span>
          </h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img 
                  {...getAssetUrlWithFallback("/assets/webp/rakshit.webp")} 
                  alt="Rakshit Dedhia" 
                />
              </div>
              <h4 className={styles.memberName}>Rakshit Dedhia</h4>
              <p className={styles.memberDesignation}>Travel Consultant</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img 
                  {...getAssetUrlWithFallback("/assets/webp/kerul.webp")} 
                  alt="Kerul Shah Vira" 
                />
              </div>
              <h4 className={styles.memberName}>Kerul Shah Vira</h4>
              <p className={styles.memberDesignation}>Operations Manager</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img 
                  {...getAssetUrlWithFallback("/assets/png/profile.png")} 
                  alt="Shrey" 
                />
              </div>
              <h4 className={styles.memberName}>Shrey</h4>
              <p className={styles.memberDesignation}>Customer Experience</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img 
                  {...getAssetUrlWithFallback("/assets/webp/dhaval.webp")} 
                  alt="Dhaval" 
                />
              </div>
              <h4 className={styles.memberName}>Dhaval</h4>
              <p className={styles.memberDesignation}>Tour Coordinator</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.missionVisionSection}>
        <div className={styles.container}>
          <div className={styles.missionVisionGrid}>
            <div className={styles.missionCard}>
              <h3 className={styles.cardTitle}>Our Mission</h3>
              <p className={styles.cardDescription}>
                To create transformative travel experiences that inspire, educate, and connect people from all walks of life. We are committed to sustainable tourism practices and supporting local communities wherever we operate.
              </p>
            </div>
            <div className={styles.visionCard}>
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <p className={styles.cardDescription}>
                To be the world&apos;s leading travel company, known for our innovative itineraries, exceptional service, and commitment to making every journey a life-changing adventure that creates lasting memories and meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
