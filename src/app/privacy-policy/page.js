"use client";
import React from 'react';
import styles from './style.module.scss';

const PrivacyPolicy = () => {
  return (
    <div className={styles.policyPage}>
      <section className={styles.heroSection}>
        <div className={styles.backgroundImage}>
          <div className={styles.overlay} />
        </div>
        <div className={styles.content}>
          <div className={styles.container}>
            <h1 className={styles.mainHeading}>
              <span className={styles.line1}>Privacy Policy</span>
            </h1>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.lastUpdated}>
              <p>Last updated: 4th September 2025</p>
            </div>
            
            <div className={styles.policyContent}>
              
              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>1. Data Collection & Use</h2>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subheading}>Categories of Information Collected</h3>
                  <div className={styles.tableContainer}>
                    <table className={styles.dataTable}>
                      <thead>
                        <tr>
                          <th>Data Type</th>
                          <th>Purpose</th>
                          <th>Examples</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Personal Information</td>
                          <td>Service delivery & communication</td>
                          <td>Name, email, phone, address</td>
                        </tr>
                        <tr>
                          <td>Travel Details</td>
                          <td>Booking management</td>
                          <td>Passport info, preferences, dietary requirements</td>
                        </tr>
                        <tr>
                          <td>Payment Information</td>
                          <td>Transaction processing</td>
                          <td>Card details, billing address</td>
                        </tr>
                        <tr>
                          <td>Technical Data</td>
                          <td>Website optimization</td>
                          <td>IP address, browser type, usage patterns</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className={styles.subsection}>
                  <h3 className={styles.subheading}>Cookies & Tracking</h3>
                  <p className={styles.text}>We use cookies and similar technologies to enhance user experience, track website usage, and remember preferences. These technologies assign random identifiers and do not store personal identities.</p>
                </div>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>2. Data Protection & Security</h2>
                <p className={styles.text}>The Bucketlister implements comprehensive security measures including:</p>
                <ul className={styles.bulletList}>
                  <li>Encrypted data storage behind secure firewalls</li>
                  <li>Password-protected database access with limited authorization</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Secure transmission protocols for all data transfers</li>
                </ul>
                
                <div className={styles.warningBox}>
                  <p><strong>Important:</strong> While we maintain robust security controls, no internet transmission or electronic storage is completely secure. We cannot guarantee absolute protection against unauthorized access during online transfers.</p>
                </div>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>3. Information Sharing</h2>
                <p className={styles.text}>We share personal information only in these specific circumstances:</p>
                
                <div className={styles.tableContainer}>
                  <table className={styles.dataTable}>
                    <thead>
                      <tr>
                        <th>Sharing Scenario</th>
                        <th>Recipients</th>
                        <th>Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Legal Compliance</td>
                        <td>Law enforcement, judicial agencies</td>
                        <td>Identity verification, legal requirements</td>
                      </tr>
                      <tr>
                        <td>Service Delivery</td>
                        <td>Affiliated companies, internal team</td>
                        <td>Trip execution under strict confidentiality</td>
                      </tr>
                      <tr>
                        <td>Third-party Services</td>
                        <td>Vetted service providers</td>
                        <td>Hotel bookings, transport arrangements</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>4. External Websites</h2>
                <p className={styles.text}>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. Users should review the privacy policies of any third-party websites they visit.</p>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>5. Policy Updates</h2>
                <p className={styles.text}>This Privacy Policy may be updated periodically to reflect changes in our practices or legal requirements. Any information collected will always be governed by the policy in effect at the time of collection.</p>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>6. Contact Information</h2>
                <p className={styles.text}>For privacy-related questions or concerns, please contact us:</p>
                
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <strong>Email:</strong> sales.thebucketlister@gmail.com
                  </div>
                  <div className={styles.contactItem}>
                    <strong>Phone:</strong> +91-702664759, +91-9137911579
                  </div>
                  <div className={styles.contactItem}>
                    <strong>Address:</strong><br/>
                    Sai leela commercial complex, 502,<br/>
                    Swami Vivekananda Rd, opp. Moksh Plaza,<br/>
                    Datta Park Borivali, Mumbai, Maharashtra 400092
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;