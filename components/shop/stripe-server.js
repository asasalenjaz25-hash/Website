import Stripe from "stripe";

// Server only (route handlers and server components). Created lazily so the
// build doesn't need STRIPE_SECRET_KEY; returns null when it isn't set.
let client = null;

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  client ??= new Stripe(key);
  return client;
}

export const isStripeSession = (id) => typeof id === "string" && /^cs_(test|live)_[A-Za-z0-9]+$/.test(id);
