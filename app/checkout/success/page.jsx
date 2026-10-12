import OrderSuccessPage from "@/components/pages/OrderSuccessPage";

export const metadata = {
  title: "Order Confirmation · ASAS Alenjaz Shop",
  robots: { index: false },
};

export default async function Page({ searchParams }) {
  const { session_id } = await searchParams;
  return <OrderSuccessPage sessionId={session_id} />;
}
