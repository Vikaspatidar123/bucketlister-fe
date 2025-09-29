"use client";
import React from "react";
import Accordion from "@/common/Accordion";
import styles from "./style.module.scss";

const FAQS = [
  {
    q: "Can we travel from Srinagar to Leh in one day?",
    a: "It's a journey of approximately 430 km, taking 12–16 hours. It's not advisable to complete it in a single day. Most travelers break the journey into two days, with a stop at Kargil or Lamayuru to visit major attractions.",
  },
  {
    q: "How much does a Leh Ladakh bike trip cost?",
    a: "Costs vary by route, duration, and inclusions. Group trips typically start around ₹20,000–₹40,000 excluding flights; premium or custom trips can be higher.",
  },
  {
    q: "Is a Leh Ladakh bike trip worth it?",
    a: "Absolutely—spectacular high‑altitude passes, surreal landscapes, and unique culture make it a bucket‑list adventure. Ensure proper acclimatization and safety.",
  },
  {
    q: "Is a permit required for areas like Nubra Valley and Pangong Lake?",
    a: "Yes, Inner Line Permits (ILP) are required for Indian nationals and Protected Area Permits (PAP) for foreign nationals for certain regions like Nubra, Pangong, and Tso Moriri.",
  },
  {
    q: "What is the best time for a Leh Ladakh backpacking trip?",
    a: "May to September offers the best road access and weather. Winter trips are possible but require specialized planning and gear.",
  },
  {
    q: "What are some must‑visit places in Ladakh?",
    a: "Pangong Tso, Nubra Valley, Khardung La, Tso Moriri, Magnetic Hill, Lamayuru, and monasteries like Hemis and Thiksey.",
  },
  {
    q: "What is the starting price for Leh Ladakh tour packages?",
    a: "Starter group packages often begin around ₹20,000–₹25,000 per person excluding flights; actual prices depend on duration and inclusions.",
  },
];

const FAQSection = () => {
  return (
    <section className={styles.faqSection} aria-labelledby="faq-heading">
      <div className={styles.container}>
        <h2 id="faq-heading" className={styles.heading}>FAQs</h2>

        <div className={styles.list}>
          {FAQS.map((item, idx) => (
            <Accordion
              key={idx}
              className={styles.item}
              renderHeader={({ open }) => (
                <div className={`${styles.row} ${open ? styles.open : ""}`}>
                  <div className={styles.question}>{item.q}</div>
                  <div className={styles.chevron} aria-hidden>
                    {open ? "▾" : "▸"}
                  </div>
                </div>
              )}
              renderContent={() => (
                <div className={styles.answer}>{item.a}</div>
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;


