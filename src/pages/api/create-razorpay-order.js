export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Dynamic import of Razorpay to avoid build issues
    const Razorpay = (await import('razorpay')).default;
    
    // Initialize Razorpay with your credentials
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    console.log('API Route: POST /api/create-razorpay-order called');
    
    const { amount, currency = 'INR', customerDetails, bookingDetails } = req.body;
    console.log('Request body received:', { 
      amount, 
      currency,
      hasCustomerDetails: !!customerDetails,
      hasBookingDetails: !!bookingDetails
    });

    // Validate amount
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount provided' });
    }

    // Ensure amount is in paisa and is an integer
    const amountInPaisa = Math.round(amount);
    
    if (amountInPaisa < 100) {
      return res.status(400).json({ error: 'Amount must be at least ₹1 (100 paisa)' });
    }

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: amountInPaisa, // Amount is already in paisa from frontend
      currency: currency,
      receipt: `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      notes: {
        customer_name: customerDetails?.name || '',
        customer_email: customerDetails?.email || '',
        customer_phone: customerDetails?.phone || '',
        trip_id: bookingDetails?.tripId || '',
        batch_id: bookingDetails?.batchId || '',
        destination: bookingDetails?.destination || '',
        occupancy_type: bookingDetails?.occupancyType || '',
        quantity: bookingDetails?.quantity || 1,
        booking_type: 'adventure_trip'
      }
    });

    console.log('Razorpay Order Created:', {
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      status: order.status
    });

    return res.status(200).json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      status: order.status,
      receipt: order.receipt
    });

  } catch (error) {
    console.error('Create order error:', error);
    
    return res.status(500).json({ 
      error: 'Failed to create order', 
      message: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
