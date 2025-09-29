"use client";
import React from "react";
import SEO from "@/components/common/SEO";
import styles from "./style.module.scss";
import useGiftCardDetail from "./useGiftCardDetail";

const GiftCardDetail = () => {
  const {
    id,
    card,
    amount,
    setAmount,
    recipient,
    setRecipient,
    sender,
    setSender,
    isPaying,
    errors,
    setErrors,
    clearError,
    handlePay,
  } = useGiftCardDetail();

  return (
    <>
      <SEO title={`${card.title} – Gift Card`} description="Purchase a themed gift card" url={`/gift-cards/${id}`} />
      <section className={styles.wrapper}>
        <div className={styles.topBar}>
          <button className={styles.backBtn} onClick={() => history.back()} aria-label="Back">← Back</button>
          <h1 className={styles.pageTitle}>{card.title}</h1>
        </div>

        <div className={styles.layout}>
          <div className={styles.formCol}>
            <div className={styles.cardBlock}>
              <div className={styles.blockTitle}>How much would you like to gift?</div>
              <div className={styles.inputRow} data-error={!!errors.amount}>
                <input
                  className={`${styles.input} ${errors.amount ? styles.error : ""}`}
                  type="number"
                  placeholder="Enter amount between ₹1000 to ₹50000"
                  value={amount || ""}
                  onChange={(e) => { setAmount(Number(e.target.value)); clearError("amount"); }}
                />
                {errors.amount && <div className={styles.errorText}>{errors.amount}</div>}
              </div>
              <div className={styles.chipsRow}>
                {[1000, 1500, 2000, 2500].map((v) => (
                  <button key={v} className={styles.chip} onClick={() => { setAmount(v); clearError("amount"); }}>₹{v.toLocaleString("en-IN")}</button>
                ))}
              </div>
            </div>

            <div className={styles.cardBlock}>
              <div className={styles.blockTitle}>Who is it for?</div>
              <div className={styles.inputRow} data-error={!!errors.recipientName}>
                <input className={`${styles.input} ${errors.recipientName ? styles.error : ""}`} placeholder="Enter Recipient’s Name" value={recipient.name} onChange={(e)=>{ setRecipient({...recipient,name:e.target.value}); clearError("recipientName"); }} />
                {errors.recipientName && <div className={styles.errorText}>{errors.recipientName}</div>}
              </div>
              <div className={styles.inputRow} data-error={!!errors.recipientPhone}>
                <input className={`${styles.input} ${errors.recipientPhone ? styles.error : ""}`} placeholder="Enter Recipient’s 10 Digit Number" value={recipient.phone} onChange={(e)=>{ setRecipient({...recipient,phone:e.target.value}); clearError("recipientPhone"); }} />
                {errors.recipientPhone && <div className={styles.errorText}>{errors.recipientPhone}</div>}
              </div>
              <div className={styles.inputRow} data-error={!!errors.recipientEmail}>
                <input className={`${styles.input} ${errors.recipientEmail ? styles.error : ""}`} placeholder="Enter Recipient’s Email Id" value={recipient.email} onChange={(e)=>{ setRecipient({...recipient,email:e.target.value}); clearError("recipientEmail"); }} />
                {errors.recipientEmail && <div className={styles.errorText}>{errors.recipientEmail}</div>}
              </div>
              <div className={styles.inputRow}><textarea className={styles.textarea} placeholder="Message" rows={3} value={recipient.message} onChange={(e)=>setRecipient({...recipient,message:e.target.value})} /></div>
            </div>

            <div className={styles.cardBlock}>
              <div className={styles.blockTitle}>Sender’s Details</div>
              <div className={styles.inputRow} data-error={!!errors.senderName}>
                <input className={`${styles.input} ${errors.senderName ? styles.error : ""}`} placeholder="Enter Sender’s Name" value={sender.name} onChange={(e)=>{ setSender({...sender,name:e.target.value}); clearError("senderName"); }} />
                {errors.senderName && <div className={styles.errorText}>{errors.senderName}</div>}
              </div>
              <div className={styles.inputRow} data-error={!!errors.senderPhone}>
                <input className={`${styles.input} ${errors.senderPhone ? styles.error : ""}`} placeholder="Enter Sender’s 10 Digit Number" value={sender.phone} onChange={(e)=>{ setSender({...sender,phone:e.target.value}); clearError("senderPhone"); }} />
                {errors.senderPhone && <div className={styles.errorText}>{errors.senderPhone}</div>}
              </div>
              <div className={styles.inputRow} data-error={!!errors.senderEmail}>
                <input className={`${styles.input} ${errors.senderEmail ? styles.error : ""}`} placeholder="Enter Sender’s Email Id" value={sender.email} onChange={(e)=>{ setSender({...sender,email:e.target.value}); clearError("senderEmail"); }} />
                {errors.senderEmail && <div className={styles.errorText}>{errors.senderEmail}</div>}
              </div>
            </div>
          </div>

          <div className={styles.previewCol}>
            <div className={styles.previewCard}>
              <div className={styles.previewImage} style={{ backgroundImage: `url(${card.imageUrl})` }} />
              <div className={styles.previewMeta}>
                <div className={styles.previewTitle}>{card.title}</div>
                <div className={styles.previewDesc}>For the one who makes life extra special.</div>
                <div className={styles.payRow}>
                  <div className={styles.amountDue}>₹ {Number(amount || 0).toLocaleString("en-IN")}</div>
                  <button className={styles.payBtn} onClick={handlePay} disabled={isPaying || !amount}>
                    {isPaying ? "Processing..." : "Proceed to Pay"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {errors.submit && (
        <div style={{maxWidth:1100,margin:"8px auto 0",padding:"0 12px"}}>
          <div style={{color:'#ef4444',fontSize:'var(--fs-12)'}}>{errors.submit}</div>
        </div>
      )}
    </>
  );
};

export default GiftCardDetail;


