// Lists every SVG used by the ASAS pages (icon/shape files and inline <svg>)
// with nearby text, so each can be matched to its section's content.
// Usage: node scripts/svg-inventory.mjs > <out.json>
import fs from "node:fs";
import path from "node:path";

const FILES = [
  "components/pages/HomePage.jsx", "components/pages/AboutPage.jsx", "components/pages/ServicesPage.jsx",
  "components/pages/ProjectsPage.jsx", "components/pages/ProjectsFilter.jsx", "components/pages/FaqPage.jsx",
  "components/pages/ContactPage.jsx", "components/pages/QuotePage.jsx", "components/pages/QuoteForm.jsx",
  ...fs.readdirSync("components/pages/services").filter((f) => f.endsWith("Page.jsx")).map((f) => "components/pages/services/" + f),
  "components/PageShell.jsx", "components/SiteHeader.jsx", "components/SiteFooter.jsx", "components/SiteMobileMenu.jsx",
];

const text = (s) => s.replace(/\{\/\*[\s\S]*?\*\/\}/g, " ").replace(/<[^>]+>/g, " ").replace(/\{[^{}]*\}/g, " ").replace(/\s+/g, " ").trim();
function color(file) {
  try {
    const svg = fs.readFileSync("public" + file, "utf8");
    const c = {}; for (const m of svg.matchAll(/(?:fill|stroke)="(#[0-9a-f]{3,6})"/gi)) c[m[1].toUpperCase()] = (c[m[1].toUpperCase()] || 0) + 1;
    const size = (svg.match(/width="([\d.]+)"[^>]*height="([\d.]+)"/) || []).slice(1).join("x");
    return { colors: Object.entries(c).sort((a, b) => b[1] - a[1]).slice(0, 2).map((x) => x[0]).join(","), size };
  } catch { return { colors: "?", size: "?" }; }
}

const out = [];
for (const file of FILES) {
  const src = fs.readFileSync(file, "utf8");
  // <img ... .svg ...>
  for (const m of src.matchAll(/<img\b[^>]*?src=\{?["'`]([^"'`]*\.svg)["'`]\}?[^>]*>/g)) {
    const at = m.index;
    const before = text(src.slice(Math.max(0, at - 500), at)).slice(-160);
    const after = text(src.slice(at + m[0].length, at + m[0].length + 900)).slice(0, 220);
    const alt = (m[0].match(/alt=\{?["'`]([^"'`]*)/) || [])[1] ?? "";
    const cls = (m[0].match(/className=\{?["'`]([^"'`]*)/) || [])[1] ?? "";
    const line = src.slice(0, at).split("\n").length;
    out.push({ file, line, kind: "img", src: m[1], cls, alt, ...color(m[1].replace(/\$\{[^}]*\}/, "1")), before, after });
  }
  // inline <svg>
  for (const m of src.matchAll(/<svg\b[\s\S]*?<\/svg>/g)) {
    const at = m.index, line = src.slice(0, at).split("\n").length;
    const parent = src.slice(Math.max(0, at - 300), at).split("\n").slice(-3).join(" ").replace(/\s+/g, " ").slice(-200);
    out.push({ file, line, kind: "inline", bytes: m[0].length, parent, after: text(src.slice(at + m[0].length, at + m[0].length + 400)).slice(0, 120) });
  }
}
console.log(JSON.stringify(out, null, 1));
