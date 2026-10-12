"use client";

import { useEffect } from "react";
import { clearCart } from "./cart-store";

// Rendered on the order confirmation page once Stripe reports the payment.
export default function ClearCart() {
  useEffect(() => {
    clearCart();
  }, []);
  return null;
}
