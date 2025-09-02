"use client";
import React, { useState, useCallback, useEffect } from "react";
import styles from "./style.module.scss";
import Batches from "./Batches";
import Occupancy from "./Occupancy";
import PricingSummary from "./PricingSummary";
import CouponsOffers from "./CouponsOffers";
import GiftCard from "./GiftCard";
import ContactDetailsModal from "./ContactDetailsModal";
import { initiateRazorpayPayment } from "@/utils/razorpay";

const BookNow = ({ tripId, searchParams = {} }) => {
  const [tripData, setTripData] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [occupancyDetails, setOccupancyDetails] = useState({
    type: "Triple Occupancy",
    quantity: 1,
    basePrice: 40000
  });
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [appliedGiftCard, setAppliedGiftCard] = useState(null);
  const [calculatedAmounts, setCalculatedAmounts] = useState({});
  const [showContactModal, setShowContactModal] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Extract trip data from URL parameters
  useEffect(() => {
    if (tripId && searchParams) {
      const extractedTripData = {
        tripId,
        destination: searchParams.destination || '',
        title: searchParams.title || '',
        price: parseFloat(searchParams.price) || 40000,
        duration: searchParams.duration || '',
        capacity: parseInt(searchParams.capacity) || 30,
      };
      
      setTripData(extractedTripData);
      
      // Update base price from trip data
      setOccupancyDetails(prev => ({
        ...prev,
        basePrice: extractedTripData.price
      }));
    }
  }, [tripId, searchParams]);

  // Calculate pricing based on selections
  const calculatePricing = () => {
    const baseAmount = occupancyDetails.basePrice;
    const quantity = occupancyDetails.quantity;
    const couponDiscount = appliedCoupon ? appliedCoupon.discount : 0;
    const giftCardDiscount = appliedGiftCard ? appliedGiftCard.amount : 0;
    
    return {
      baseAmount,
      quantity,
      discountAmount: couponDiscount + giftCardDiscount,
    };
  };

  const handleCouponApply = useCallback((coupon) => {
    setAppliedCoupon(coupon);
  }, []);

  const handleGiftCardApply = useCallback((giftCard) => {
    setAppliedGiftCard(giftCard);
  }, []);

  const handleAmountsCalculated = useCallback((amounts) => {
    setCalculatedAmounts(amounts);
  }, []);

  const handleProceedToPayment = () => {
    setShowContactModal(true);
  };

  const handleContactSubmit = async (contactDetails) => {
    setIsProcessingPayment(true);
    setShowContactModal(false);

    try {
      await initiateRazorpayPayment({
        amount: calculatedAmounts.bookingAmount || 4410, // Booking amount
        customerDetails: contactDetails,
        bookingDetails: {
          tripId: tripData?.tripId,
          batchId: selectedBatch,
          batchName: tripData?.title || "Adventure Trip",
          destination: tripData?.destination,
          occupancyType: occupancyDetails.type,
          quantity: occupancyDetails.quantity,
          totalAmount: calculatedAmounts.totalPackageAmount,
          bookingAmount: calculatedAmounts.bookingAmount,
          duration: tripData?.duration,
          capacity: tripData?.capacity,
        },
        onSuccess: (paymentResponse) => {
          console.log('Payment successful:', paymentResponse);
          // Handle successful payment
          alert(`Payment successful for ${tripData?.title || 'Adventure Trip'}! Payment ID: ${paymentResponse.razorpay_payment_id}`);
          setIsProcessingPayment(false);
          
          // Here you would typically:
          // 1. Send payment details to your backend
          // 2. Create booking record
          // 3. Send confirmation email
          // 4. Redirect to success page
        },
        onFailure: (error) => {
          console.error('Payment failed:', error);
          alert(`Payment failed: ${error.message}`);
          setIsProcessingPayment(false);
        }
      });
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('Failed to initiate payment. Please try again.');
      setIsProcessingPayment(false);
    }
  };

  const pricingData = calculatePricing();

  return (
    <section className={styles.bookNowSection}>
      <div className={styles.container}>
        {/* Trip Information Header */}
        {tripData && (
          <div className={styles.tripInfoHeader}>
            <h1 className={styles.tripTitle}>{tripData.title}</h1>
            <div className={styles.tripMeta}>
              <span className={styles.destination}>{tripData.destination}</span>
              {tripData.duration && (
                <>
                  <span className={styles.separator}>•</span>
                  <span className={styles.duration}>{tripData.duration}</span>
                </>
              )}
              {tripData.capacity && (
                <>
                  <span className={styles.separator}>•</span>
                  <span className={styles.capacity}>{tripData.capacity} Travellers</span>
                </>
              )}
            </div>
          </div>
        )}
        
        <div className={styles.mainLayout}>
          {/* Left Column - Booking Details */}
          <div className={styles.leftColumn}>
            <Batches 
              selectedBatch={selectedBatch}
              onBatchSelect={setSelectedBatch}
              tripData={tripData}
            />
            
            <Occupancy 
              occupancyDetails={occupancyDetails}
              onOccupancyChange={setOccupancyDetails}
              tripData={tripData}
            />
          </div>

          {/* Right Column - Summary Panel */}
          <div className={styles.rightColumn}>
            <div className={styles.stickyPanel}>
              <PricingSummary 
                baseAmount={pricingData.baseAmount}
                quantity={pricingData.quantity}
                discountAmount={pricingData.discountAmount}
                onAmountsCalculated={handleAmountsCalculated}
                compact={true}
                tripData={tripData}
              />
              
              <CouponsOffers 
                onCouponApply={handleCouponApply}
                appliedCoupon={appliedCoupon}
                compact={true}
              />
              
              <GiftCard 
                onGiftCardApply={handleGiftCardApply}
                appliedGiftCard={appliedGiftCard}
                compact={true}
              />
              
              {(selectedBatch && occupancyDetails) && (
                <div className={styles.finalCta}>
                  <button 
                    className={styles.proceedToPaymentBtn}
                    onClick={handleProceedToPayment}
                    disabled={isProcessingPayment}
                  >
                    {isProcessingPayment ? "Processing..." : `Pay Booking Amount (₹${calculatedAmounts.bookingAmount?.toLocaleString() || '0'})`}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <ContactDetailsModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
          onSubmit={handleContactSubmit}
          bookingAmount={calculatedAmounts.bookingAmount || 0}
        />
      </div>
    </section>
  );
};

export default BookNow;