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
  const [paymentType, setPaymentType] = useState("slot"); // "slot" or "full"

  // Web3Forms email sender function
  const sendPaymentConfirmationEmail = async (contactDetails, paymentData, status) => {
    const body = new FormData();
    
    body.append('access_key', 'c5ef9919-27cb-464e-bd82-1662fbd7989d');
    body.append('from_name', 'Bucketlister Website');
    
    if (status === 'success') {
      body.append('subject', `Payment Confirmation - ${tripData?.title || 'Booking'} - ${paymentData.razorpay_payment_id}`);
      
      const message = `
PAYMENT SUCCESSFUL - Booking Confirmation

Customer Details:
- Name: ${contactDetails.name}
- Email: ${contactDetails.email}
- Phone: ${contactDetails.phone}

Trip Details:
- Trip: ${tripData?.title || 'N/A'}
- Destination: ${tripData?.destination || 'N/A'}
- Duration: ${tripData?.duration || 'N/A'}
- Occupancy: ${occupancyDetails.type} (${occupancyDetails.quantity} person${occupancyDetails.quantity > 1 ? 's' : ''})

Payment Details:
- Payment ID: ${paymentData.razorpay_payment_id}
- Order ID: ${paymentData.razorpay_order_id || 'N/A'}
- Booking Amount: ₹${calculatedAmounts.bookingAmount?.toLocaleString() || 'N/A'}
- Total Package Amount: ₹${calculatedAmounts.totalPackageAmount?.toLocaleString() || 'N/A'}
- Payment Status: SUCCESS
- Payment Time: ${new Date().toLocaleString('en-IN')}

Next Steps:
1. Customer will receive booking confirmation
2. Remaining amount to be collected before travel
3. Travel documents to be sent closer to travel date
      `.trim();
      
      body.append('message', message);
    } else {
      body.append('subject', `Payment Failed - ${tripData?.title || 'Booking Attempt'}`);
      
      const message = `
PAYMENT FAILED - Booking Attempt

Customer Details:
- Name: ${contactDetails.name}
- Email: ${contactDetails.email}
- Phone: ${contactDetails.phone}

Trip Details:
- Trip: ${tripData?.title || 'N/A'}
- Destination: ${tripData?.destination || 'N/A'}
- Duration: ${tripData?.duration || 'N/A'}
- Occupancy: ${occupancyDetails.type} (${occupancyDetails.quantity} person${occupancyDetails.quantity > 1 ? 's' : ''})

Payment Details:
- Attempted Amount: ₹${calculatedAmounts.bookingAmount?.toLocaleString() || 'N/A'}
- Payment Status: FAILED
- Error: ${paymentData.error}
- Attempt Time: ${new Date().toLocaleString('en-IN')}

Action Required:
- Customer may retry payment
- Follow up may be needed
      `.trim();
      
      body.append('message', message);
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body
    });

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || 'Email sending failed');
    }
    
    return data;
  };

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
      const paymentAmount = Math.round(calculatedAmounts.bookingAmount || 4410);
      console.log('Payment Debug:', {
        bookingAmount: calculatedAmounts.bookingAmount,
        paymentAmount,
        calculatedAmounts,
        paymentType
      });
      
      // For now, skip order creation and proceed directly with payment
      console.log('Proceeding with direct payment (no order creation)');
      let orderId = null;
      
      // Uncomment below to enable order creation when API issues are resolved
      /*
      console.log('Creating Razorpay order with data:', {
        amount: paymentAmount * 100,
        currency: 'INR',
        customerDetails: contactDetails,
        paymentType: paymentType
      });
      
      try {
        const orderResponse = await fetch('/api/create-razorpay-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: paymentAmount * 100,
            currency: 'INR',
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
              paymentType: paymentType
            }
          })
        });

        if (orderResponse.ok) {
          const orderData = await orderResponse.json();
          console.log('Order Created:', orderData);
          orderId = orderData.id;
        } else {
          console.log('Order creation failed, proceeding without order');
        }
      } catch (apiError) {
        console.error('API call failed:', apiError);
        console.log('Proceeding with direct payment');
      }
      */
      
      await initiateRazorpayPayment({
        amount: paymentAmount, // Original amount (will be converted to paisa in utility)
        orderId: orderId,
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
        onSuccess: async (paymentResponse) => {
          console.log('Payment successful:', paymentResponse);
          
          // Send success email via Web3Forms
          try {
            await sendPaymentConfirmationEmail(contactDetails, paymentResponse, 'success');
            alert(`Payment successful for ${tripData?.title || 'Adventure Trip'}! Payment ID: ${paymentResponse.razorpay_payment_id}\n\nConfirmation email sent to ${contactDetails.email}`);
          } catch (emailError) {
            console.error('Failed to send confirmation email:', emailError);
            alert(`Payment successful for ${tripData?.title || 'Adventure Trip'}! Payment ID: ${paymentResponse.razorpay_payment_id}\n\nNote: Could not send confirmation email.`);
          }
          
          setIsProcessingPayment(false);
        },
        onFailure: async (error) => {
          console.error('Payment failed:', error);
          console.error('Failure details:', {
            errorType: error.error,
            message: error.message,
            code: error.code,
            paymentId: error.razorpay_payment_id
          });
          
          // Send failure email via Web3Forms
          try {
            await sendPaymentConfirmationEmail(contactDetails, { error: error.message || error.error }, 'failure');
          } catch (emailError) {
            console.error('Failed to send failure notification email:', emailError);
          }
          
          alert(`Payment failed: ${error.message || error.error || 'Unknown error'}`);
          setIsProcessingPayment(false);
        }
      });
    } catch (error) {
      console.error('Error initiating payment:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      alert(`Failed to initiate payment: ${error.message || 'Unknown error'}. Please try again.`);
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
                appliedCoupon={appliedCoupon}
                paymentType={paymentType}
              />
              
              <CouponsOffers 
                onCouponApply={handleCouponApply}
                appliedCoupon={appliedCoupon}
                compact={true}
              />
              
              {/* <GiftCard 
                onGiftCardApply={handleGiftCardApply}
                appliedGiftCard={appliedGiftCard}
                compact={true}
              /> */}
              
              {(selectedBatch && occupancyDetails) && (
                <div className={styles.finalCta}>
                  <div className={styles.paymentOptions}>
                    <div className={styles.paymentTypeToggle}>
                      <button 
                        className={`${styles.toggleBtn} ${paymentType === "slot" ? styles.active : ""}`}
                        onClick={() => setPaymentType("slot")}
                      >
                        Book Your Slot (10%)
                      </button>
                      <button 
                        className={`${styles.toggleBtn} ${paymentType === "full" ? styles.active : ""}`}
                        onClick={() => setPaymentType("full")}
                      >
                        Book Full Amount
                      </button>
                    </div>
                  </div>
                  
                  <button 
                    className={styles.proceedToPaymentBtn}
                    onClick={handleProceedToPayment}
                    disabled={isProcessingPayment}
                  >
                    {isProcessingPayment ? "Processing..." : `Pay ${paymentType === "full" ? "Full Amount" : "Booking Amount"} (₹${calculatedAmounts.bookingAmount?.toLocaleString() || '0'})`}
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