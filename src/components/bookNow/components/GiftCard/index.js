"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";

const GiftCard = ({
  onGiftCardApply,
  appliedGiftCard = null,
  compact = false,
}) => {
  const [giftCardCode, setGiftCardCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleApplyGiftCard = async () => {
    if (!giftCardCode.trim()) {
      setError("Please enter a gift card code");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock validation - you can replace this with actual API call
      if (giftCardCode.toUpperCase() === "GIFT500") {
        onGiftCardApply({
          code: giftCardCode.toUpperCase(),
          amount: 500,
          description: "Gift Card Applied",
        });
        setGiftCardCode("");
      } else {
        setError("Invalid gift card code");
      }
    } catch (err) {
      setError("Failed to apply gift card. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveGiftCard = () => {
    onGiftCardApply(null);
    setError("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleApplyGiftCard();
    }
  };

  return (
    <div
      className={`${styles.giftCardContainer} ${compact ? styles.compact : ""}`}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>
          {compact ? "Gift Card" : "Have Gift Card"}
        </h3>
      </div>

      {appliedGiftCard ? (
        <div className={styles.appliedCard}>
          <div className={styles.appliedInfo}>
            <div className={styles.appliedCode}>
              Gift Card: <strong>{appliedGiftCard.code}</strong>
            </div>
            <div className={styles.appliedAmount}>
              -₹{appliedGiftCard.amount.toLocaleString()}
            </div>
          </div>
          <button className={styles.removeBtn} onClick={handleRemoveGiftCard}>
            Remove
          </button>
        </div>
      ) : (
        <div className={styles.inputSection}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder="Enter Secrect Code"
              value={giftCardCode}
              onChange={(e) => setGiftCardCode(e.target.value)}
              onKeyPress={handleKeyPress}
              className={styles.giftCardInput}
              disabled={isLoading}
            />
            <button
              className={styles.applyBtn}
              onClick={handleApplyGiftCard}
              disabled={isLoading || !giftCardCode.trim()}
            >
              {isLoading ? "Applying..." : "Apply"}
            </button>
          </div>

          {error && <div className={styles.errorMessage}>{error}</div>}

          <div className={styles.helpText}>
            Enter your gift card code to apply discount
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftCard;
