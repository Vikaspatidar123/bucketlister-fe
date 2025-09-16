export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Dynamic import of Razorpay to avoid build issues
    const Razorpay = (await import("razorpay")).default;

    // Initialize Razorpay with your credentials
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    console.log("API Route: POST /api/create-razorpay-order called");

    const {
      amount,
      currency = "INR",
      customerDetails,
      bookingDetails,
    } = req.body;
    console.log("Request body received:", {
      amount,
      currency,
      hasCustomerDetails: !!customerDetails,
      hasBookingDetails: !!bookingDetails,
    });

    // Validate amount
    if (!amount || amount <= 0) {
      return res.status(400).json({
        error: {
          code: "BAD_REQUEST_ERROR",
          description: "Invalid amount provided",
          source: "business",
          step: "payment_initiation",
          reason: "input_validation_failed",
          metadata: {},
          field: "amount",
        },
      });
    }

    // Ensure amount is in paisa and is an integer
    const amountInPaisa = Math.round(amount);

    if (amountInPaisa < 100) {
      return res.status(400).json({
        error: {
          code: "BAD_REQUEST_ERROR",
          description: `The amount must be atleast ${currency} 1.00`,
          source: "business",
          step: "payment_initiation",
          reason: "input_validation_failed",
          metadata: {},
          field: "amount",
        },
      });
    }

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: amountInPaisa,
      currency: currency,
      receipt: `receipt#${Date.now()}`,
      notes: {
        key1: customerDetails?.name || "guest",
        key2: bookingDetails?.destination || "adventure_trip",
      },
    });

    console.log("Razorpay Order Created:", {
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      status: order.status,
    });

    return res.status(200).json({
      amount: order.amount,
      amount_due: order.amount,
      amount_paid: 0,
      attempts: 0,
      created_at: order.created_at,
      currency: order.currency,
      entity: order.entity,
      id: order.id,
      notes: order.notes,
      offer_id: order.offer_id,
      receipt: order.receipt,
      status: order.status,
    });
  } catch (error) {
    console.error("Create order error:", error);

    // Check if it's a Razorpay API error
    if (error.statusCode && error.error) {
      return res.status(error.statusCode).json({
        error: error.error,
      });
    }

    return res.status(500).json({
      error: {
        code: "SERVER_ERROR",
        description: "Failed to create order",
        source: "business",
        step: "payment_initiation",
        reason: "server_error",
        metadata: {},
        field: null,
      },
    });
  }
}
