import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-11-20.acacia",
  typescript: true,
});

export async function createCheckoutSession({
  userId,
  email,
  items,
  successUrl,
  cancelUrl,
}: {
  userId?: string;
  email: string;
  items: Array<{
    price: string;
    quantity: number;
  }>;
  successUrl: string;
  cancelUrl: string;
}) {
  const session = await stripe.checkout.sessions.create({
    customer_email: email,
    line_items: items,
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
    payment_method_types: ["card"],
    billing_address_collection: "required",
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "GB", "AU"],
    },
    metadata: {
      userId: userId || "",
    },
  });

  return session;
}

export async function createPaymentIntent({
  amount,
  currency = "usd",
  metadata = {},
}: {
  amount: number;
  currency?: string;
  metadata?: Record<string, string>;
}) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    automatic_payment_methods: {
      enabled: true,
    },
    metadata,
  });

  return paymentIntent;
}