import { notFound } from "next/navigation";
import { SERVICE_PAGES } from "@/components/pages/services/registry";
import { SERVICES } from "@/components/site";
import { SERVICE_CONTENT } from "@/components/service-content";

// Only the 11 ASAS service slugs are valid; the old template folders under
// app/services/* are static routes and take precedence over this one.
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((sv) => sv.slug === slug);
  const content = SERVICE_CONTENT[slug];
  if (!service || !content) return {};
  return {
    title: content.seoTitle,
    description: content.seoDescription,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const ServicePage = SERVICE_PAGES[slug];
  if (!ServicePage) notFound();
  return <ServicePage />;
}
