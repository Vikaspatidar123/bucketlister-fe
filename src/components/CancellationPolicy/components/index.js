import React from "react";
import styles from "./style.module.scss";

const CancellationPolicy = () => {
  return (
    <div className={styles.policyPage}>
      <section className={styles.heroSection}>
        <div className={styles.backgroundImage}>
          <div className={styles.overlay} />
        </div>
        <div className={styles.content}>
          <div className={styles.container}>
            <h1 className={styles.mainHeading}>
              <span className={styles.line1}>Cancellation Policy</span>
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
                <h2 className={styles.sectionHeading}>1. Policy Overview</h2>
                <p className={styles.text}>
                  Our cancellation policy varies based on destination
                  categories. Please review the applicable section for your
                  travel destination below.
                </p>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>
                  2. Destination Categories
                </h2>

                <div className={styles.tableContainer}>
                  <table className={styles.dataTable}>
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Destinations</th>
                        <th>Policy Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Short Haul</td>
                        <td>
                          Domestic India, Bhutan, Nepal, Sri Lanka, Thailand,
                          Singapore, Bali, Dubai, Vietnam, Malaysia, Maldives,
                          Mauritius
                        </td>
                        <td>Standard cancellation terms</td>
                      </tr>
                      <tr>
                        <td>Long Haul</td>
                        <td>
                          Europe, UK, USA, Canada, Japan, South Korea, Turkey,
                          Egypt, Australia, New Zealand, South Africa, Kenya,
                          South America
                        </td>
                        <td>Extended cancellation terms</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>
                  3. Short Haul Cancellation Terms
                </h2>

                <div className={styles.tableContainer}>
                  <table className={styles.dataTable}>
                    <thead>
                      <tr>
                        <th>Days Before Departure</th>
                        <th>Cancellation Charges</th>
                        <th>Refund Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>31+ days</td>
                        <td>Booking amount</td>
                        <td>Balance as credit note</td>
                      </tr>
                      <tr>
                        <td>16-30 days</td>
                        <td>50% of tour price</td>
                        <td>Balance as credit note</td>
                      </tr>
                      <tr>
                        <td>≤15 days</td>
                        <td>100% of tour cost</td>
                        <td>No refund</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={styles.warningBox}>
                  <p>
                    <strong>Additional Terms:</strong>
                  </p>
                  <ul className={styles.bulletList}>
                    <li>Airline cancellation charges apply separately</li>
                    <li>Non-refundable elements are excluded from refunds</li>
                    <li>5% GST applies to all cancellation charges</li>
                    <li>Policies are non-negotiable</li>
                  </ul>
                </div>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>
                  4. Long Haul Cancellation Terms
                </h2>

                <div className={styles.tableContainer}>
                  <table className={styles.dataTable}>
                    <thead>
                      <tr>
                        <th>Days Before Departure</th>
                        <th>Cancellation Charges</th>
                        <th>Refund Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>46+ days</td>
                        <td>Booking amount</td>
                        <td>Balance as credit note</td>
                      </tr>
                      <tr>
                        <td>31-45 days</td>
                        <td>60% of package cost</td>
                        <td>Balance as credit note</td>
                      </tr>
                      <tr>
                        <td>21-30 days</td>
                        <td>80% of package cost</td>
                        <td>Balance as credit note</td>
                      </tr>
                      <tr>
                        <td>≤20 days</td>
                        <td>100% of package cost</td>
                        <td>No refund</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={styles.warningBox}>
                  <p>
                    <strong>Additional Terms:</strong>
                  </p>
                  <ul className={styles.bulletList}>
                    <li>Flight cancellation costs billed per airline rules</li>
                    <li>Non-refundable services strictly excluded</li>
                    <li>5% GST charged on cancellation amounts</li>
                    <li>Fees may vary by destination and season</li>
                  </ul>
                </div>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>5. Important Notes</h2>

                <div className={styles.subsection}>
                  <h3 className={styles.subheading}>Cancellation Process</h3>
                  <ul className={styles.bulletList}>
                    <li>All cancellations must be submitted in writing</li>
                    <li>
                      Charges apply as per the policy communicated at booking
                    </li>
                    <li>Credit notes may be issued instead of refunds</li>
                    <li>
                      Processing timeframes will be communicated upon request
                    </li>
                  </ul>
                </div>

                <div className={styles.subsection}>
                  <h3 className={styles.subheading}>Non-negotiable Elements</h3>
                  <ul className={styles.bulletList}>
                    <li>Visa fees and processing charges</li>
                    <li>Travel insurance premiums</li>
                    <li>Non-refundable hotel bookings</li>
                    <li>Special event or festival bookings</li>
                  </ul>
                </div>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>
                  6. Contact Information
                </h2>
                <p className={styles.text}>
                  For cancellation requests or questions about this policy:
                </p>

                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <strong>Email:</strong> sales.thebucketlister@gmail.com
                  </div>
                  <div className={styles.contactItem}>
                    <strong>Phone:</strong> +91-702664759
                  </div>
                  <div className={styles.contactItem}>
                    <strong>Address:</strong>
                    <br />
                    Sai leela commercial complex, 502,
                    <br />
                    Swami Vivekananda Rd, opp. Moksh Plaza,
                    <br />
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

export default CancellationPolicy;
