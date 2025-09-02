/**
 * Razorpay Payment Integration Utility
 * 
 * IMPORTANT NOTES:
 * 1. For production, you MUST create orders on your backend using Razorpay's Orders API
 * 2. The current implementation skips order creation for testing purposes
 * 3. In production, implement a backend API endpoint to create orders securely
 * 4. Never expose your Razorpay secret key on the frontend
 */

// Load Razorpay script dynamically
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    // Check if Razorpay is already loaded
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

// Initialize Razorpay payment
export const initiateRazorpayPayment = async ({
  amount,
  currency = 'INR',
  customerDetails,
  bookingDetails,
  onSuccess,
  onFailure
}) => {
  try {
    // Load Razorpay script
    const isLoaded = await loadRazorpayScript();
    
    if (!isLoaded) {
      throw new Error('Failed to load Razorpay');
    }

    // For testing purposes, we'll create payment without order ID
    // In production, you MUST create an order on your backend first
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_RCpLy9EXINX00z', // Use environment variable
      amount: amount * 100, // Razorpay expects amount in paisa
      currency: currency,
      name: 'Bucketlister',
      description: `Booking Payment - ${bookingDetails.batchName || 'Adventure Trip'}`,
      image: '/favicon.ico', // Your logo URL
      prefill: {
        name: customerDetails.name || '',
        email: customerDetails.email,
        contact: customerDetails.phone,
      },
      notes: {
        booking_type: 'adventure_trip',
        batch_id: bookingDetails.batchId,
        occupancy_type: bookingDetails.occupancyType,
        quantity: bookingDetails.quantity,
      },
      theme: {
        color: '#ef3447',
      },
      handler: function (response) {
        // Payment successful
        onSuccess({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        });
      },
      modal: {
        ondismiss: function () {
          onFailure({ 
            error: 'payment_cancelled',
            message: 'Payment was cancelled by user'
          });
        },
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();

  } catch (error) {
    console.error('Razorpay payment error:', error);
    onFailure({
      error: 'payment_initialization_failed',
      message: error.message || 'Failed to initialize payment'
    });
  }
};

// Mock function to create Razorpay order
// In production, this should be an API call to your backend
const createRazorpayOrder = async ({ amount, currency, customerDetails, bookingDetails }) => {
  // This is a mock implementation
  // In production, make an API call to your backend to create the order
  
  return new Promise((resolve) => {
    setTimeout(() => {
      // Generate a more realistic order ID that follows Razorpay's pattern
      const timestamp = Date.now();
      const randomSuffix = Math.random().toString(36).substr(2, 8);
      const orderId = `order_${timestamp.toString().substr(-10)}${randomSuffix}`;
      
      resolve({
        id: orderId,
        amount: amount,
        currency: currency,
        status: 'created'
      });
    }, 500);
  });
  
  /* Production implementation would look like:
  const response = await fetch('/api/create-razorpay-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount,
      currency,
      customerDetails,
      bookingDetails
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create order');
  }
  
  return await response.json();
  */
};

// Alternative implementation for production with backend order creation
export const initiateRazorpayPaymentWithOrder = async ({
  amount,
  currency = 'INR',
  customerDetails,
  bookingDetails,
  onSuccess,
  onFailure
}) => {
  try {
    // Load Razorpay script
    const isLoaded = await loadRazorpayScript();
    
    if (!isLoaded) {
      throw new Error('Failed to load Razorpay');
    }

    // Create order on your backend
    const orderResponse = await fetch('/api/create-razorpay-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount * 100, // Convert to paisa
        currency,
        customerDetails,
        bookingDetails
      }),
    });

    if (!orderResponse.ok) {
      throw new Error('Failed to create payment order');
    }

    const orderData = await orderResponse.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use environment variable
      amount: orderData.amount,
      currency: orderData.currency,
      order_id: orderData.id,
      name: 'Bucketlister',
      description: `Booking Payment - ${bookingDetails.batchName || 'Adventure Trip'}`,
      image: '/favicon.ico',
      prefill: {
        name: customerDetails.name || '',
        email: customerDetails.email,
        contact: customerDetails.phone,
      },
      notes: {
        booking_type: 'adventure_trip',
        batch_id: bookingDetails.batchId,
        occupancy_type: bookingDetails.occupancyType,
        quantity: bookingDetails.quantity,
      },
      theme: {
        color: '#ef3447',
      },
      handler: function (response) {
        // Verify payment on backend before considering it successful
        verifyPaymentOnBackend(response).then((verificationResult) => {
          if (verificationResult.verified) {
            onSuccess(response);
          } else {
            onFailure({
              error: 'payment_verification_failed',
              message: 'Payment verification failed'
            });
          }
        });
      },
      modal: {
        ondismiss: function () {
          onFailure({ 
            error: 'payment_cancelled',
            message: 'Payment was cancelled by user'
          });
        },
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();

  } catch (error) {
    console.error('Razorpay payment error:', error);
    onFailure({
      error: 'payment_initialization_failed',
      message: error.message || 'Failed to initialize payment'
    });
  }
};

// Verify payment on backend
const verifyPaymentOnBackend = async (paymentResponse) => {
  try {
    const response = await fetch('/api/verify-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentResponse),
    });

    return await response.json();
  } catch (error) {
    console.error('Payment verification error:', error);
    return { verified: false };
  }
};