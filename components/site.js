// Single source of truth for ASAS company details, services and navigation.
// Content comes from "ASAS ALENJAZ PROFILE.2026.pdf" (see content.md).

export const COMPANY = {
  name: "ASAS Alenjaz Technical Works L.L.C",
  short: "ASAS Alenjaz",
  tagline: "Exceeding expectations and delivering real value",
  founded: 2016,
  address: "TADBEER Building, Deira, Dubai, UAE",
  email: "asasalenjaz25@gmail.com",
  phones: [
    { label: "058 603 9101", tel: "+971586039101" },
    { label: "052 256 4836", tel: "+971522564836" },
  ],
  engineers: ["Engr. Elsayed Youssef", "Engr. Hesham Mohamed"],
  approvals: ["DEWA", "Dubai Municipality", "Civil Defence", "Trakhees"],
  areas: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
  stats: [
    { value: 10, suffix: "", label: "Years in business" },
    { value: 90, suffix: "+", label: "Projects delivered" },
    { value: 23, suffix: "", label: "In-house team" },
    { value: 4, suffix: "", label: "Authority approvals" },
  ],
};

// Order and grouping follow content.md §3.6. Detail copy lives in components/service-content.js.
export const SERVICES = [
  { slug: "fit-out", title: "Interior Fit-Out", group: "Fit-Out", icon: "ph-paint-roller" },
  { slug: "civil", title: "Civil Works", group: "Fit-Out", icon: "ph-wall" },
  { slug: "joinery", title: "Joinery", group: "Fit-Out", icon: "ph-hammer" },
  { slug: "electrical", title: "Electrical Works", group: "MEP", icon: "ph-lightning" },
  { slug: "plumbing", title: "Plumbing Works", group: "MEP", icon: "ph-drop" },
  { slug: "hvac", title: "HVAC Works", group: "MEP", icon: "ph-fan" },
  { slug: "fire-fighting", title: "Fire Fighting Systems", group: "MEP", icon: "ph-fire-extinguisher" },
  { slug: "low-current", title: "Low Current Systems", group: "MEP", icon: "ph-network" },
  { slug: "planning-architecture", title: "Planning & Architecture", group: "Specialist", icon: "ph-compass-tool" },
  { slug: "villa-works", title: "Villa Modifications & Service Blocks", group: "Specialist", icon: "ph-house-line" },
  { slug: "ev-chargers", title: "EV Charger Installation", group: "Specialist", icon: "ph-charging-station" },
];

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", children: "services" },
  { label: "Shop", href: "/shop" },
  { label: "Projects", href: "/projects" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const QUOTE_HREF = "/appointment";
