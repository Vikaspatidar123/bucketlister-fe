"use client";
import React from "react";
import styles from "./style.module.scss";
import { advertiseBanner } from "@/assets/webp";
import { GIFT_CARD_ITEMS } from "@/components/giftCard/constants";
import { useRouter } from "next/router";

// Types
// cards: Array<{ id: string|number; title: string; subtitle?: string; imageUrl?: string }>
// onSelect?: (card) => void

const GiftCards = ({
  cards = GIFT_CARD_ITEMS,
  onSelect,
}) => {
  const router = useRouter();

  return (
    <div>
      <div className={styles.bannerWrap}>
        <img
          src={advertiseBanner}
          alt="Gift cards promotional banner"
          className={styles.bannerImage}
        />
      </div>
      <section className={styles.giftCardsSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Gift Cards</h1>
            <p className={styles.subtitle}>
              Celebrate life’s moments with the gift of exploration
            </p>
          </div>

          <div className={styles.cardsGrid}>
            {cards.map((card, idx) => (
              <button
                key={card.id || idx}
                className={styles.cardItem}
                type="button"
              onClick={() =>
                onSelect ? onSelect(card) : router.push(`/gift-cards/${card.id}`)
              }
                aria-label={card.title}
              >
                <div
                  className={styles.cardVisual}
                  style={
                    card.imageUrl
                      ? { backgroundImage: `url(${card.imageUrl})` }
                      : {}
                  }
                >
                  {!card.imageUrl && <div className={styles.cardPattern} />}
                </div>
                <div className={styles.cardCaption}>{card.title}</div>
              </button>
            ))}
          </div>

          <div className={styles.infoPanels}>
            <div className={styles.panel}>
              <div className={styles.panelHeader}>Terms & Conditions</div>
              <ul className={styles.bulletList}>
                <li>Only one gift voucher can be applied per booking.</li>
                <li>
                  Partial redemption is allowed; leftover value is forfeited.
                </li>
                <li>
                  GC value can be used against all taxes and add‑ons of the
                  package.
                </li>
                <li>
                  GCs are non‑refundable and non‑transferable once purchased.
                </li>
                <li>
                  GCs are valid on standard as well as customized trip packages.
                </li>
                <li>
                  The recipient’s email and phone can be changed only once post
                  purchase, subject to verification.
                </li>
                <li>
                  Gift cards cannot be exchanged for cash or combined with other
                  vouchers on existing bookings.
                </li>
                <li>GCs are applicable on advertised or discounted prices.</li>
              </ul>
            </div>
            <div className={styles.panel}>
              <div className={styles.panelHeader}>Redemption Process</div>
              <ul className={styles.bulletList}>
                <li>
                  Visit our website or reach an advisor and select your
                  preferred destination.
                </li>
                <li>
                  Submit your contact details so we can verify and share
                  communication channels available on the website.
                </li>
                <li>
                  After sharing order details, our destination expert will match
                  rates to finalize your package.
                </li>
                <li>
                  At the time of booking confirmation, simply inform the
                  destination expert to apply your voucher, and your booking
                  will be swiftly completed.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftCards;
