// `npm run stripe:check`: checks that the Stripe account behind
// STRIPE_SECRET_KEY (in .env.local) can take card payments in AED, which the
// shop's checkout (app/api/checkout/route.js) needs. The key is never printed.
import { readFileSync, existsSync } from "node:fs";
import Stripe from "stripe";

const ok = (m) => console.log(`  ✓ ${m}`);
const bad = (m) => console.log(`  ✗ ${m}`);
const info = (m) => console.log(`    ${m}`);

function keyFromEnv() {
  if (process.env.STRIPE_SECRET_KEY) return process.env.STRIPE_SECRET_KEY;
  if (!existsSync(".env.local")) return "";
  const line = readFileSync(".env.local", "utf8").split(/\r?\n/).find((l) => l.startsWith("STRIPE_SECRET_KEY="));
  return line ? line.slice("STRIPE_SECRET_KEY=".length).trim().replace(/^["']|["']$/g, "") : "";
}

const key = keyFromEnv();
console.log("\nStripe check for the ASAS shop\n");
if (!/^(sk|rk)_(test|live)_/.test(key)) {
  bad("No Stripe secret key found.");
  info("Put it in .env.local as STRIPE_SECRET_KEY=sk_test_… (Dashboard → Developers → API keys).");
  process.exit(1);
}
const test = key.includes("_test_");
ok(`Key found (${test ? "test" : "LIVE"} mode).`);

const stripe = new Stripe(key);
let problems = 0;

try {
  const acct = await stripe.accounts.retrieveCurrent();
  ok(`Account country: ${acct.country}, default currency: ${(acct.default_currency || "?").toUpperCase()}`);
  const card = acct.capabilities?.card_payments;
  if (card === "active") ok("Card payments capability: active");
  else {
    problems++;
    bad(`Card payments capability: ${card || "missing"}`);
    info("Finish account activation in the Dashboard (business details, bank account) so cards are enabled.");
  }
  if (!test && !acct.charges_enabled) {
    problems++;
    bad("Live charges are not enabled yet: complete activation in the Dashboard.");
  }
} catch (e) {
  problems++;
  bad(`Could not read the account: ${e.message}`);
}

try {
  const configs = await stripe.paymentMethodConfigurations.list({ limit: 20 });
  const active = configs.data.filter((c) => c.active);
  if (!active.length) info("No payment method configuration found (the shop asks for cards directly, so this is fine).");
  for (const c of active) {
    const show = (pm) => (c[pm] ? `${pm.replace("_", " ")} ${c[pm].display_preference?.value === "on" ? "on" : "off"}${c[pm].available ? "" : " (unavailable)"}` : null);
    const line = ["card", "apple_pay", "google_pay", "link"].map(show).filter(Boolean).join(", ");
    (c.card?.available ? ok : bad)(`Payment methods "${c.name}"${c.is_default ? " (default)" : ""}: ${line}`);
    if (!c.card?.available) {
      problems++;
      info("Turn Cards on: Dashboard → Settings → Payment methods" + (test ? " (with Test mode switched on)." : "."));
    }
  }
} catch (e) {
  info(`Could not list payment method settings (${e.message}); continuing.`);
}

if (test) {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [{ quantity: 1, price_data: { currency: "aed", unit_amount: 1000, product_data: { name: "ASAS setup check" } } }],
      success_url: "https://example.com/ok",
      cancel_url: "https://example.com/cancel",
    });
    await stripe.checkout.sessions.expire(session.id);
    ok("A test AED card checkout can be created (created and cancelled straight away).");
  } catch (e) {
    problems++;
    bad(`A test AED checkout failed: ${e.message}`);
    info("Cards in AED are not available on this account. Check the account country, or contact Stripe support.");
  }
} else {
  info("Live key: skipping the test checkout. Run this with a test key first.");
}

console.log(problems ? `\n${problems} problem(s) to fix in the Stripe Dashboard (see above).\n` : "\nAll good: the shop can take card payments in AED.\n");
process.exit(problems ? 1 : 0);
