import { COMPANY } from "@/components/site";
import { formatAED, resolveLine, totals } from "./catalog";

// Checkout customer fields, validated the same way in the browser
// (CheckoutForm) and on the server (app/api/checkout).

export const EMIRATES = COMPANY.areas;

export const EMPTY_CUSTOMER = {
  name: "",
  phone: "",
  email: "",
  emirate: "",
  area: "",
  address: "",
  installDate: "",
  notes: "",
};

export const FIELD_LABELS = {
  name: "Name",
  phone: "Phone",
  email: "Email",
  emirate: "Emirate",
  area: "Area / community",
  address: "Building or villa, flat no.",
  installDate: "Preferred date",
  notes: "Notes",
};

// Stripe metadata values are capped at 500 characters.
const MAX_LENGTH = { name: 100, phone: 30, email: 120, emirate: 40, area: 120, address: 200, installDate: 10, notes: 450 };

export function cleanCustomer(input) {
  const out = {};
  for (const key of Object.keys(EMPTY_CUSTOMER)) {
    const value = typeof input?.[key] === "string" ? input[key].trim() : "";
    out[key] = value.slice(0, MAX_LENGTH[key]);
  }
  return out;
}

export function validateCustomer(v) {
  const e = {};
  if (!v.name) e.name = "Please enter your name.";
  if (!v.phone) e.phone = "Please enter a phone number.";
  else if (v.phone.replace(/\D/g, "").length < 7) e.phone = "Please enter a valid phone number.";
  if (!v.email) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Please enter a valid email address.";
  if (!EMIRATES.includes(v.emirate)) e.emirate = "Please choose an emirate.";
  if (!v.area) e.area = "Please enter the area or community.";
  if (!v.address) e.address = "Please enter the building or villa and flat number.";
  if (v.installDate && !/^\d{4}-\d{2}-\d{2}$/.test(v.installDate)) e.installDate = "Please choose a valid date.";
  return e;
}

export function formatDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return d && m && y ? `${d}/${m}/${y}` : iso;
}

// "2 × Carrier Decorative Split AC, 2 Ton (Product + installation) = AED 8,000"
export function itemLines(lines) {
  return lines
    .map((line) => {
      const item = resolveLine(line);
      return item ? `${item.qty} × ${item.name} (${item.detail}) = ${formatAED(item.total)}` : null;
    })
    .filter(Boolean);
}

// Plain-text order for the WhatsApp fallback.
export function orderText(lines, customer) {
  const t = totals(lines);
  return [
    "Hello ASAS Alenjaz, I would like to place this order from your website shop.",
    "",
    ...itemLines(lines),
    "",
    `Subtotal: ${formatAED(t.subtotal)}`,
    `VAT (5%): ${formatAED(t.vat)}`,
    `Total: ${formatAED(t.total)}`,
    "",
    `Name: ${customer.name}`,
    `Phone: ${customer.phone}`,
    `Email: ${customer.email}`,
    `Address: ${customer.address}, ${customer.area}, ${customer.emirate}`,
    `Preferred date: ${formatDate(customer.installDate) || "-"}`,
    ...(customer.notes ? ["", `Notes: ${customer.notes}`] : []),
  ].join("\n");
}
