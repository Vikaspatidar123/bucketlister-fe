import { NextResponse } from 'next/server';

export async function POST(request) {
  // Dynamic import of Razorpay to avoid build issues
  const Razorpay = (await import('razorpay')).default;
  
  // Initialize Razorpay with your credentials
  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  try {
    console.log('API Route: POST /api/create-razorpay-order called');
    
    const body = await request.json();
    console.log('Request body received:', { 
      amount: body.amount, 
      currency: body.currency,
      hasCustomerDetails: !!body.customerDetails,
      hasBookingDetails: !!body.bookingDetails
    });
    
    const { amount, currency = 'INR', customerDetails, bookingDetails } = body;

    // Validate amount
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount provided' }, 
        { status: 400 }
      );
    }

    // Ensure amount is in paisa and is an integer
    const amountInPaisa = Math.round(amount);
    
    if (amountInPaisa < 100) {
      return NextResponse.json(
        { error: 'Amount must be at least ₹1 (100 paisa)' }, 
        { status: 400 }
      );
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

    return NextResponse.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      status: order.status,
      receipt: order.receipt
    });

  } catch (error) {
    console.error('Create order error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to create order', 
        message: error.message,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }, 
      { status: 500 }
    );
  }
}