// Applies the ASAS brand to page markup: swaps the theme's placeholder logos
// (dark-background variants get the white version) and maps inline style
// colours onto the palette (scripts/brand-colors.mjs).
// Idempotent. Run directly to patch components/*.jsx in place.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mapColors } from "./brand-colors.mjs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const BRAND = "ASAS Alenjaz Technical Works L.L.C";

const LOGOS = {
  "logo.png": "asas-logo.png",
  "logo-white.png": "asas-logo-white.png",
  "h6-logo.png": "asas-logo-white.png",
  "footer-four-logo.png": "asas-logo-white.png",
};

function rewriteInlineColors(jsx) {
  return jsx.replace(/style=\{\{[^}]*\}\}/g, (style) => mapColors(style) ?? style);
}

export function rewriteBrand(jsx) {
  return rewriteInlineColors(rewriteLogos(jsx));
}

function rewriteLogos(jsx) {
  return jsx.replace(
    /<img src=\{"\/assets\/images\/logo\/([^"]+)"\} alt=\{"[^"]*"\}/g,
    (m, file) => (LOGOS[file] ? `<img src={"/assets/images/logo/${LOGOS[file]}"} alt={"${BRAND}"}` : m)
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const files = [
    ...fs.readdirSync(path.join(ROOT, "components/generated")).map((f) => `components/generated/${f}`),
    "components/SiteHeader.jsx",
  ].filter((f) => f.endsWith(".jsx"));
  for (const f of files) {
    const file = path.join(ROOT, f);
    const before = fs.readFileSync(file, "utf8");
    const after = rewriteBrand(before);
    if (after !== before) fs.writeFileSync(file, after);
    console.log(`${after !== before ? "patched" : "unchanged"}  ${f}`);
  }
}
