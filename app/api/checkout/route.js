import { randomBytes } from "node:crypto";
import { MAX_QTY, VAT_RATE, resolveLine } from "@/components/shop/catalog";
import { cleanCustomer, formatDate, itemLines, validateCustomer } from "@/components/shop/checkout-fields";
import { getStripe } from "@/components/shop/stripe-server";

// Creates a Stripe Checkout Session for the cart. The browser sends only SKU
// ids, quantities and an install flag; every price is looked up in catalog.js
// here. Installation added to a product becomes its own Stripe line.

const MAX_LINES = 30;

const fail = (status, error, details) => Response.json({ error, ...details }, { status });

function orderRef() {
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  return `ASAS-${ymd}-${randomBytes(3).toString("hex").toUpperCase()}`;
}

export async function POST(request) {
  const stripe = getStripe();
  if (!stripe) return fail(503, "payments_unavailable");

  let body;
  try {
    body = await request.json();
  } catch {
    return fail(400, "invalid_json");
  }

  const items = Array.isArray(body?.items) ? body.items : [];
  if (!items.length || items.length > MAX_LINES) return fail(400, "invalid_cart");

  const lines = [];
  const seen = new Set();
  for (const item of items) {
    const qty = item?.qty;
    const install = item?.install ?? false;
    const line = Number.isInteger(qty) && typeof install === "boolean" ? resolveLine({ sku: item.sku, qty, install }) : null;
    if (!line || seen.has(line.id) || qty < 1 || qty > MAX_QTY || (install && !line.installPrice)) {
      return fail(400, "invalid_cart");
    }
    seen.add(line.id);
    lines.push(line);
  }

  const customer = cleanCustomer(body?.customer);
  const errors = validateCustomer(customer);
  if (Object.keys(errors).length) return fail(400, "invalid_customer", { fields: Object.keys(errors) });

  // Fils (1/100 AED), as Stripe expects.
  const fils = (aed) => Math.round(aed * 100);
  const subtotal = lines.reduce((sum, l) => sum + fils(l.unit) * l.qty, 0);
  const vat = Math.round(subtotal * VAT_RATE);

  const lineItems = lines.flatMap((l) => {
    const product = {
      quantity: l.qty,
      price_data: {
        currency: "aed",
        unit_amount: fils(l.price),
        product_data: { name: l.name, description: l.kind === "product" ? "Product only" : l.detail },
      },
    };
    if (!l.install) return [product];
    const installation = {
      quantity: l.qty,
      price_data: {
        currency: "aed",
        unit_amount: fils(l.installPrice),
        product_data: { name: `Installation: ${l.name}`, description: "Installation by the ASAS team" },
      },
    };
    return [product, installation];
  });
  lineItems.push({
    quantity: 1,
    price_data: { currency: "aed", unit_amount: vat, product_data: { name: "VAT (5%)" } },
  });

  const ref = orderRef();
  // Shown on the payment in the Stripe Dashboard (values max 500 chars).
  const metadata = {
    order_ref: ref,
    customer_name: customer.name,
    customer_phone: customer.phone,
    emirate: customer.emirate,
    area: customer.area,
    address: customer.address,
    preferred_date: formatDate(customer.installDate) || "-",
    notes: customer.notes || "-",
    items: itemLines(lines.map((l) => ({ sku: l.id, qty: l.qty, install: l.install }))).join("; ").slice(0, 500),
  };

  const origin = process.env.SITE_URL || new URL(request.url).origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      customer_email: customer.email,
      client_reference_id: ref,
      metadata,
      payment_intent_data: { description: `ASAS Alenjaz order ${ref}`, metadata },
      submit_type: "pay",
      locale: "en",
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout?cancelled=1`,
    });
    return Response.json({ url: session.url, ref });
  } catch (error) {
    console.error("[checkout] Stripe session failed:", error?.message);
    return fail(502, "payment_provider_error");
  }
}
