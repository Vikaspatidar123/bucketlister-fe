"use client";
import React from "react";
import { useRouter } from "next/router";
import { GIFT_CARD_ITEMS } from "@/components/giftCard/constants";
import { initiateRazorpayPayment } from "@/utils/razorpay";

export const useGiftCardDetail = () => {
  const router = useRouter();
  const { id } = router.query || {};

  const card = React.useMemo(() => {
    const numericId = Number(id);
    const found = GIFT_CARD_ITEMS.find((c) => Number(c.id) === numericId);
    return found || { id, title: "Gift Card", imageUrl: undefined };
  }, [id]);

  const [amount, setAmount] = React.useState(0);
  const [recipient, setRecipient] = React.useState({ name: "", phone: "", email: "", message: "" });
  const [sender, setSender] = React.useState({ name: "", phone: "", email: "" });
  const [isPaying, setIsPaying] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const clearError = React.useCallback((key) => {
    setErrors((prev) => {
      if (!prev || !prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  const validate = React.useCallback(() => {
    const e = {};
    if (!amount || amount < 1000) e.amount = "Please enter a valid amount (min ₹1000)";
    if (!recipient.name?.trim()) e.recipientName = "Recipient name is required";
    if (!recipient.phone?.trim() || recipient.phone.replace(/\D/g, "").length !== 10)
      e.recipientPhone = "Enter a valid 10-digit phone";
    if (!recipient.email?.trim()) {
      e.recipientEmail = "Recipient email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient.email)) {
      e.recipientEmail = "Enter a valid email";
    }
    if (!sender.name?.trim()) e.senderName = "Sender name is required";
    if (!sender.phone?.trim() || sender.phone.replace(/\D/g, "").length !== 10)
      e.senderPhone = "Enter a valid 10-digit phone";
    if (!sender.email?.trim()) {
      e.senderEmail = "Sender email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sender.email)) {
      e.senderEmail = "Enter a valid email";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [amount, recipient, sender]);

  const submitToWeb3Forms = React.useCallback(async () => {
    const body = new FormData();
    body.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY);
    body.append("from_name", "Bucketlister Website");
    body.append("subject", `Gift Card Intent - ${card.title}`);
    body.append("name", sender.name);
    body.append("email", sender.email);
    body.append("phone", sender.phone);
    const message = `Gift Card Purchase Intent\n\nCard: ${card.title}\nAmount: ₹${amount}\n\nRecipient\n- Name: ${recipient.name}\n- Phone: ${recipient.phone}\n- Email: ${recipient.email}\n\nSender\n- Name: ${sender.name}\n- Phone: ${sender.phone}\n- Email: ${sender.email}`;
    body.append("message", message);
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body });
    const data = await res.json();
    return !!data?.success;
  }, [amount, card.title, recipient, sender]);

  const handlePay = React.useCallback(async () => {
    if (!validate()) {
      const el = document.querySelector(`[data-error="true"]`);
      if (el && typeof el.scrollIntoView === "function") el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    try {
      setIsPaying(true);
      const submitted = await submitToWeb3Forms();
      if (!submitted) {
        setErrors((prev) => ({ ...prev, submit: "Failed to submit details. Please try again." }));
        setIsPaying(false);
        return;
      }
      await initiateRazorpayPayment({
        amount: Math.round(amount),
        orderId: null,
        customerDetails: {
          name: sender.name,
          phone: sender.phone,
          email: sender.email || "",
        },
        bookingDetails: {
          tripId: `GIFT-${id}`,
          batchId: null,
          batchName: card.title,
          destination: "Gift Card",
          occupancyType: "NA",
          quantity: 1,
          totalAmount: amount,
          bookingAmount: amount,
          duration: "",
          capacity: 1,
        },
        onSuccess: () => router.push("/thank-you?type=giftcard"),
        onFailure: (err) => alert(err?.message || "Payment failed"),
      });
    } finally {
      setIsPaying(false);
    }
  }, [amount, card.title, id, recipient, router, sender, submitToWeb3Forms, validate]);

  return {
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
  };
};

export default useGiftCardDetail;


