// Template pages that don't fit ASAS (content.md §2.2) redirect to their ASAS
// equivalent. Their route folders under app/ still exist; redirects run first.
const OLD_SERVICE_SLUGS = [
  "plumbing-service", "laundry-service", "repair-service", "cleaning-service",
  "air-conditioning-service", "cleaning-service-two", "air-conditioning",
  "handyman", "computer-mobile-repair", "roofing-services", "electrical-service",
];

const RETIRED = {
  "/service": "/services",
  "/service-details": "/services",
  "/project": "/projects",
  "/project-details": "/projects",
  "/team": "/about",
  "/team-details": "/about",
  "/pricing": "/appointment",
  "/shop": "/",
  "/product": "/",
  "/product-details": "/",
  "/cart": "/",
  "/checkout": "/",
  "/blog": "/",
  "/blog-details": "/",
  ...Object.fromEntries(
    ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11"].map((n) => [`/index-${n}`, "/"])
  ),
  ...Object.fromEntries(OLD_SERVICE_SLUGS.map((s) => [`/services/${s}`, "/services"])),
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // theme scripts are not idempotent under double-invoke
  async redirects() {
    return Object.entries(RETIRED).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};
export default nextConfig;
