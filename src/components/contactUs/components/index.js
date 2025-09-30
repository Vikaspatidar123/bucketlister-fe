import React from "react";
import ContactForm from "./contact-us/ContactForm";
import { COMPANY_INFO } from "@/components/footer/constants";
import styles from "./style.module.scss";
import Image from "next/image";
import { banner1 } from "@/assets/png";

const ContactUs = () => {
  const handleMapClick = () => {
    const address = encodeURIComponent(COMPANY_INFO.address);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(mapUrl, "_blank");
  };

  return (
    <div className={styles.contactUsPage}>
      <section className={styles.heroSection}>
        <div className={styles.mapHero}>
          <iframe
            title="Office Location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              COMPANY_INFO.address,
            )}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapIframe}
          />
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.titlePart1}>Get in </span>
                <span className={styles.titlePart2}>Touch</span>
              </h2>
              <p className={styles.description}>
                Ready to embark on your next adventure? We&apos;re here to help
                you plan the perfect journey. Reach out to us and let&apos;s
                make your travel dreams come true.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <h3 className={styles.itemTitle}>Address</h3>
                  <p className={styles.itemText}>{COMPANY_INFO.address}</p>
                  <button onClick={handleMapClick} className={styles.mapButton}>
                    View us on map
                  </button>
                </div>

                <div className={styles.contactItem}>
                  <h3 className={styles.itemTitle}>Phone</h3>
                  {COMPANY_INFO.phone.map((phone, index) => (
                    <p key={index} className={styles.itemText}>
                      <a href={`tel:+91${phone}`} className={styles.phoneLink}>
                        +91-{phone}
                      </a>
                    </p>
                  ))}
                </div>

                <div className={styles.contactItem}>
                  <h3 className={styles.itemTitle}>Email</h3>
                  <p className={styles.itemText}>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className={styles.emailLink}
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                </div>

                <div className={styles.contactItem}>
                  <h3 className={styles.itemTitle}>Find us online</h3>
                  <div className={styles.socialRow}>
                    {Array.isArray(COMPANY_INFO.socialMedia) &&
                      COMPANY_INFO.socialMedia.map((s) => (
                        <a
                          key={s.name}
                          href={s.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className={styles.socialIcon}
                          aria-label={s.name}
                          title={s.name}
                        >
                          <Image src={s.icon} alt={s.name} width={20} height={20} />
                        </a>
                      ))}
                  </div>
                </div>

              </div>
            </div>

            <div className={styles.contactFormContainer}>
              <h3 className={styles.formTitle}>Send us a message</h3>
              <ContactForm submitLabel="Send Message" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
