"use client";
import React from 'react';
import styles from './style.module.scss';

const TermsAndConditions = () => {
  return (
    <div className={styles.policyPage}>
      <section className={styles.heroSection}>
        <div className={styles.backgroundImage}>
          <div className={styles.overlay} />
        </div>
        <div className={styles.content}>
          <div className={styles.container}>
            <h1 className={styles.mainHeading}>
              <span className={styles.line1}>Terms & Conditions</span>
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
              <p className={styles.description}>
                Please read these Terms and Conditions carefully before using The Bucketlister's services.
              </p>
              
              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>1. Introduction</h2>
                <p className={styles.text}>These Terms & Conditions govern the relationship between you (the client) and The Bucketlister. By booking any service, you accept these Terms in full.</p>
                <p className={styles.text}>The Bucketlister operates tours and customized trips in India and internationally, including group tours, customized itineraries, and adventure-style experiences.</p>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>2. Booking & Payments</h2>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subheading}>Payment Terms</h3>
                  <ul className={styles.bulletList}>
                    <li>A specified deposit is required to secure your booking</li>
                    <li>Quotes are tentative until final payment and may change based on availability</li>
                    <li>Accepted payment modes: cards, bank transfers, approved gateways (INR only)</li>
                    <li>Failure to pay by due date may result in booking cancellation</li>
                  </ul>
                </div>

                <div className={styles.subsection}>
                  <h3 className={styles.subheading}>International Payments</h3>
                  <p className={styles.text}>For international payments exceeding regulatory thresholds, applicable Indian government TCS rules apply. Cash deposits without proper attribution are liable to forfeiture.</p>
                </div>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>3. Pricing & Inclusions</h2>
                <p className={styles.text}>Final prices are confirmed at booking and depend on availability and exchange rates. Your booking confirmation details all inclusions and exclusions - anything not expressly listed is excluded and payable separately.</p>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>4. Payment Schedules by Destination</h2>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subheading}>Short-haul Destinations</h3>
                  <p className={styles.smallText}>Domestic India, Bhutan, Nepal, Sri Lanka, Thailand, Singapore, Bali, Dubai, Vietnam, Malaysia, Maldives, Mauritius</p>
                  
                  <div className={styles.tableContainer}>
                    <table className={styles.dataTable}>
                      <thead>
                        <tr>
                          <th>Timeline</th>
                          <th>Payment Required</th>
                          <th>Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>At Booking</td>
                          <td>25% of tour cost</td>
                          <td>Non-refundable & non-transferable</td>
                        </tr>
                        <tr>
                          <td>45 days before</td>
                          <td>50% of tour cost</td>
                          <td>Non-refundable & non-transferable</td>
                        </tr>
                        <tr>
                          <td>30 days before</td>
                          <td>75% of tour cost</td>
                          <td>Non-refundable & non-transferable</td>
                        </tr>
                        <tr>
                          <td>20 days before</td>
                          <td>100% of tour cost</td>
                          <td>Full advance payment required</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className={styles.subsection}>
                  <h3 className={styles.subheading}>Long-haul Destinations</h3>
                  <p className={styles.smallText}>Europe, UK, USA, Canada, Japan, South Korea, Turkey, Egypt, Australia, New Zealand, South Africa, Kenya, South America</p>
                  
                  <div className={styles.tableContainer}>
                    <table className={styles.dataTable}>
                      <thead>
                        <tr>
                          <th>Timeline</th>
                          <th>Payment Required</th>
                          <th>Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>At Booking</td>
                          <td>₹40,000 per person</td>
                          <td>Non-refundable & non-transferable</td>
                        </tr>
                        <tr>
                          <td>60 days before</td>
                          <td>50% of tour cost</td>
                          <td>Non-refundable & non-transferable</td>
                        </tr>
                        <tr>
                          <td>45 days before</td>
                          <td>75% of tour cost</td>
                          <td>Non-refundable & non-transferable</td>
                        </tr>
                        <tr>
                          <td>30 days before</td>
                          <td>100% of tour cost</td>
                          <td>Full advance payment required</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>5. Travel Requirements</h2>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subheading}>Documentation</h3>
                  <ul className={styles.bulletList}>
                    <li><strong>International Travel:</strong> Valid passport (6+ months validity), appropriate visas</li>
                    <li><strong>Domestic Travel:</strong> Government-issued photo ID required</li>
                    <li><strong>ECR Passport Holders:</strong> OTB/OK-to-Board may be required</li>
                  </ul>
                </div>

                <div className={styles.subsection}>
                  <h3 className={styles.subheading}>Health & Safety</h3>
                  <ul className={styles.bulletList}>
                    <li>Clients responsible for destination health requirements and vaccinations</li>
                    <li>Medical conditions must be disclosed before booking</li>
                    <li>Comprehensive travel insurance strongly recommended</li>
                    <li>Safety instructions must be followed at all times</li>
                  </ul>
                </div>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>6. Service Modifications</h2>
                <p className={styles.text}>We may alter itineraries, accommodations, or transport due to unforeseen circumstances including weather, political events, or operational issues. Advance notice will be provided when possible.</p>
                
                <div className={styles.warningBox}>
                  <p><strong>Group Tours:</strong> Minimum group size required. If unmet, alternative dates/tours will be offered, or refunds/credit notes issued for land portions minus non-refundable costs.</p>
                </div>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>7. Airline & Accommodation Policies</h2>
                
                <div className={styles.subsection}>
                  <h3 className={styles.subheading}>Airline Terms</h3>
                  <ul className={styles.bulletList}>
                    <li>We are not responsible for airline delays, cancellations, or disruptions</li>
                    <li>Baggage delays/losses are airline liabilities</li>
                    <li>Government taxes and surcharges may increase before ticket issuance</li>
                    <li>Meal inclusion depends on carrier class and policy</li>
                  </ul>
                </div>

                <div className={styles.subsection}>
                  <h3 className={styles.subheading}>Hotel Guidelines</h3>
                  <ul className={styles.bulletList}>
                    <li>Standard check-in/check-out times apply</li>
                    <li>Room amenities vary by destination and category</li>
                    <li>City taxes and room services payable directly at hotel</li>
                    <li>Air-conditioning may be unavailable in certain regions</li>
                  </ul>
                </div>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>8. Liability & Force Majeure</h2>
                <p className={styles.text}>The Bucketlister acts as an intermediary and is not liable for losses caused by third-party providers. Force majeure events (natural disasters, wars, strikes, pandemics) may excuse performance without liability.</p>
                
                <div className={styles.warningBox}>
                  <p><strong>Client Responsibility:</strong> You are responsible for personal belongings, respectful behavior, and compliance with local laws and customs during the tour.</p>
                </div>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>9. Governing Law</h2>
                <p className={styles.text}>These Terms are governed by Indian law. Disputes will be addressed through mediation/arbitration with exclusive jurisdiction in Mumbai courts.</p>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>10. Contact Information</h2>
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <strong>Email:</strong> sales.thebucketlister@gmail.com
                  </div>
                  <div className={styles.contactItem}>
                    <strong>Phone:</strong> +91-702664759
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

export default TermsAndConditions;