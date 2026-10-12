import { connection } from "next/server";
import CheckoutPage from "@/components/pages/CheckoutPage";

export const metadata = {
  title: "Checkout · ASAS Alenjaz Shop",
  robots: { index: false },
};

export default async function Page() {
  await connection(); // read the payment setting per request, not at build time
  return <CheckoutPage paymentsReady={Boolean(process.env.STRIPE_SECRET_KEY)} />;
}
