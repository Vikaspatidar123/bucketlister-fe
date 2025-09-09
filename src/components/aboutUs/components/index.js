import React from "react";
import styles from "./style.module.scss";
import { getAssetUrl } from "@/utils/cdn";
import Image from "next/image";
import {
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  twitterIcon,
} from "@/assets/svg";
import { profile1, shrey } from "@/assets/png";
import { dhaval, kerul, rakshit } from "@/assets/webp";

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
              <span className={styles.titlePart2}>
                Extraordinary Adventures
              </span>
            </h2>
            <p className={styles.description}>
              At The Bucketlister, we believe that travel is more than just
              visiting new places—it&apos;s about creating memories that last a
              lifetime. Founded with a passion for exploration and a commitment
              to excellence, we curate unique travel experiences that connect
              you with diverse cultures, breathtaking landscapes, and
              unforgettable moments.
            </p>
            <p className={styles.description}>
              From the serene temples of Kyoto to the rolling vineyards of
              Tuscany, we design every journey with meticulous attention to
              detail, ensuring that your adventure is both seamless and
              spectacular.
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
              <Image src={profile1} alt="Founder" width={100} height={100} />
            </div>
            <div className={styles.founderContent}>
              <h3 className={styles.founderName}>Harsh Vira</h3>
              <p className={styles.founderTitle}>Founder & CEO</p>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>
                  <Image
                    src={instagramIcon}
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <Image
                    src={linkedinIcon}
                    alt="LinkedIn"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <Image
                    src={twitterIcon}
                    alt="Twitter"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <Image
                    src={facebookIcon}
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
              <p className={styles.founderDescription}>
                With over 15 years of experience in the travel industry, Harsh
                founded The Bucketlister with a vision to make extraordinary
                travel accessible to everyone. His passion for authentic
                experiences and commitment to personalized service has helped
                thousands of travelers discover the world in ways they never
                imagined.
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
                <Image
                  src={rakshit}
                  alt="Rakshit Dedhia"
                  width={120}
                  height={120}
                />
              </div>
              <h4 className={styles.memberName}>Rakshit Dedhia</h4>
              <p className={styles.memberDesignation}>Travel Consultant</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <Image
                  src={kerul}
                  alt="Kerul Shah Vira"
                  width={120}
                  height={120}
                />
              </div>
              <h4 className={styles.memberName}>Kerul Shah Vira</h4>
              <p className={styles.memberDesignation}>Operations Manager</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <Image src={shrey} alt="Shrey" width={120} height={120} />
              </div>
              <h4 className={styles.memberName}>Shrey</h4>
              <p className={styles.memberDesignation}>Customer Experience</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <Image src={dhaval} alt="Dhaval" width={120} height={120} />
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
                To create transformative travel experiences that inspire,
                educate, and connect people from all walks of life. We are
                committed to sustainable tourism practices and supporting local
                communities wherever we operate.
              </p>
            </div>
            <div className={styles.visionCard}>
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <p className={styles.cardDescription}>
                To be the world&apos;s leading travel company, known for our
                innovative itineraries, exceptional service, and commitment to
                making every journey a life-changing adventure that creates
                lasting memories and meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
