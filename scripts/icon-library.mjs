// Builds the ASAS icon library in public/assets/images/icons/asas/:
//   <name>.svg (Action Blue), <name>-white.svg, <name>-gold.svg, <name>-navy.svg
// Icons are Phosphor duotone (the site already uses Phosphor's icon font), fetched
// from Iconify once and cached in scripts/icon-source.json so rebuilds work offline.
// Usage: node scripts/icon-library.mjs [--refresh]
import fs from "node:fs";
import path from "node:path";

// name -> [phosphor icon, what it stands for]
export const ICONS = {
  // Services
  "fit-out": ["paint-roller", "Interior fit-out"],
  mep: ["gear-six", "MEP works (mechanical, electrical, plumbing) as a group"],
  civil: ["wall", "Civil works, blockwork, partitions"],
  joinery: ["hammer", "Joinery"],
  "joinery-furniture": ["armchair", "Built-in joinery / furniture"],
  electrical: ["lightning", "Electrical works"],
  "power-plug": ["plug", "Power supply, final connections"],
  lighting: ["lightbulb", "Lighting"],
  plumbing: ["drop", "Plumbing, water supply"],
  drainage: ["pipe", "Drainage, pipework, HDPE"],
  sanitary: ["toilet", "Sanitary ware, washrooms"],
  pipework: ["pipe-wrench", "Pipework installation (e.g. HDPE)"],
  hvac: ["fan", "HVAC, air-conditioning"],
  ventilation: ["wind", "Ventilation"],
  cooling: ["snowflake", "Cooling"],
  temperature: ["thermometer", "Temperature control"],
  "fire-fighting": ["fire-extinguisher", "Fire fighting systems"],
  fire: ["fire", "Fire safety"],
  "low-current": ["network", "Low current systems, cabling"],
  planning: ["compass-tool", "Planning & architecture"],
  "design-drawing": ["pencil-ruler", "Design, drawings"],
  measure: ["ruler", "Site measurement"],
  villa: ["house-line", "Villa works"],
  "service-block": ["building", "Service blocks, extensions"],
  "ev-charger": ["charging-station", "EV charger installation"],
  car: ["car", "Vehicles, car parks"],
  // Company, quality, safety
  approved: ["seal-check", "Authority approval"],
  certificate: ["certificate", "Certification, licence"],
  safety: ["shield-check", "Safety, EHS"],
  environment: ["leaf", "Environment"],
  "hard-hat": ["hard-hat", "Site work, construction"],
  team: ["users-three", "Team"],
  engineer: ["user-gear", "Engineer"],
  specification: ["clipboard-text", "Specifications & standards"],
  checklist: ["list-checks", "Scope, checklist"],
  schedule: ["calendar-check", "Time schedule, site visit booking"],
  progress: ["chart-line-up", "Progress reporting"],
  target: ["target", "Target achievement"],
  "cost-saving": ["coins", "Cost saving"],
  technology: ["cpu", "Latest technology"],
  "one-contract": ["handshake", "One contract, partnership"],
  coordination: ["puzzle-piece", "Trade coordination"],
  quality: ["medal", "Quality"],
  tools: ["wrench", "Installation, maintenance"],
  toolbox: ["toolbox", "Trades, tools"],
  inspection: ["magnifying-glass", "Site survey, inspection"],
  document: ["file-text", "Drawings, quotation, documents"],
  handover: ["key", "Handover"],
  testing: ["check-circle", "Testing, commissioning"],
  "check-circle": ["check-circle", "Included item"],
  check: ["check", "Tick"],
  vision: ["eye", "Vision"],
  mission: ["flag", "Mission"],
  growth: ["trend-up", "Continual improvement"],
  // Sectors
  offices: ["buildings", "Offices & commercial buildings"],
  "residential-tower": ["building-apartment", "Residential towers"],
  retail: ["storefront", "Retail & shops"],
  restaurant: ["fork-knife", "Restaurants"],
  cafe: ["coffee", "Cafés"],
  warehouse: ["warehouse", "Warehouses & logistics"],
  salon: ["scissors", "Salons & spas"],
  laundry: ["washing-machine", "Laundries"],
  education: ["graduation-cap", "Education"],
  healthcare: ["first-aid", "Healthcare, clinics"],
  port: ["boat", "Port / marine"],
  truck: ["truck", "Vehicle fleet, logistics"],
  // Contact & UI
  location: ["map-pin", "Address, location"],
  "areas-served": ["map-trifold", "Emirates served"],
  phone: ["phone", "Phone"],
  "phone-call": ["phone-call", "Call us"],
  email: ["envelope-simple", "Email"],
  whatsapp: ["whatsapp-logo", "WhatsApp"],
  "chat": ["chat-circle-dots", "Enquiry, message"],
  question: ["question", "FAQ"],
  quote: ["quotes", "Quotation mark (statements)"],
  "arrow-up-right": ["arrow-up-right", "Link arrow"],
  "arrow-right": ["arrow-right", "Next"],
  play: ["play", "Play video"],
  clock: ["clock", "Time"],
  star: ["star", "Highlight (not ratings)"],
};

const COLORS = { "": "#184FB4", "-white": "#FFFFFF", "-gold": "#F2B300", "-navy": "#06245E" };
const OUT = "public/assets/images/icons/asas";
const CACHE = "scripts/icon-source.json";

if (process.argv[1].endsWith("icon-library.mjs")) {
  let cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, "utf8")) : {};
  const need = [...new Set(Object.values(ICONS).map(([ph]) => `${ph}-duotone`))].filter((n) => process.argv.includes("--refresh") || !cache[n]);
  for (let i = 0; i < need.length; i += 40) {
    const batch = need.slice(i, i + 40);
    const res = await fetch(`https://api.iconify.design/ph.json?icons=${batch.join(",")}`);
    const data = await res.json();
    for (const n of batch) if (data.icons?.[n]) cache[n] = data.icons[n].body;
    if (data.not_found?.length) console.log("not found:", data.not_found.join(", "));
  }
  fs.writeFileSync(CACHE, JSON.stringify(cache, null, 1));

  fs.mkdirSync(OUT, { recursive: true });
  const index = [];
  for (const [name, [ph, meaning]] of Object.entries(ICONS)) {
    const body = cache[`${ph}-duotone`];
    if (!body) { console.log(`MISSING ${name} (${ph})`); continue; }
    for (const [suffix, color] of Object.entries(COLORS)) {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">${body.replaceAll("currentColor", color)}</svg>\n`;
      fs.writeFileSync(path.join(OUT, `${name}${suffix}.svg`), svg);
    }
    index.push({ name, meaning, phosphor: `ph:${ph}-duotone` });
  }
  fs.writeFileSync(path.join(OUT, "index.json"), JSON.stringify(index, null, 1));
  console.log(`${index.length} icons × ${Object.keys(COLORS).length} colours -> ${OUT}`);
}
