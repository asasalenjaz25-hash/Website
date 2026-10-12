import { notFound } from "next/navigation";
import ProductPage from "@/components/pages/ProductPage";
import { PRODUCTS, formatAED, productBySlug } from "@/components/shop/catalog";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};
  const from = formatAED(Math.min(...product.sizes.map((s) => s.price)));
  return {
    title: `${product.name} · Buy in Dubai with Installation · ASAS Alenjaz`,
    description: `${product.summary} ${product.sizes.map((s) => s.label).join(", ")}, from ${from} (excl. VAT). Add installation by our team in the cart. Pay securely online.`,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
