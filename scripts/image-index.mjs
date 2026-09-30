// Builds IMAGES.md: every photo used by the ASAS pages, grouped by file, so
// replacing template placeholders is one pass. Re-run after page changes:
//   node scripts/image-index.mjs
import fs from "node:fs";

const PAGES = [
  ["Home", "/", "components/pages/HomePage.jsx"],
  ["About", "/about", "components/pages/AboutPage.jsx"],
  ["Services hub", "/services", "components/pages/ServicesPage.jsx"],
  ["Interior Fit-Out", "/services/fit-out", "components/pages/services/FitOutPage.jsx"],
  ["Civil Works", "/services/civil", "components/pages/services/CivilPage.jsx"],
  ["Joinery", "/services/joinery", "components/pages/services/JoineryPage.jsx"],
  ["Electrical Works", "/services/electrical", "components/pages/services/ElectricalPage.jsx"],
  ["Plumbing Works", "/services/plumbing", "components/pages/services/PlumbingPage.jsx"],
  ["HVAC Works", "/services/hvac", "components/pages/services/HvacPage.jsx"],
  ["Fire Fighting", "/services/fire-fighting", "components/pages/services/FireFightingPage.jsx"],
  ["Low Current", "/services/low-current", "components/pages/services/LowCurrentPage.jsx"],
  ["Planning & Architecture", "/services/planning-architecture", "components/pages/services/PlanningPage.jsx"],
  ["Villa Works", "/services/villa-works", "components/pages/services/VillaWorksPage.jsx"],
  ["EV Chargers", "/services/ev-chargers", "components/pages/services/EvChargersPage.jsx"],
  ["Projects", "/projects", "components/pages/ProjectsPage.jsx", "components/pages/ProjectsFilter.jsx"],
  ["FAQ", "/faq", "components/pages/FaqPage.jsx"],
  ["Contact", "/contact", "components/pages/ContactPage.jsx"],
  ["Request a Quote", "/appointment", "components/pages/QuotePage.jsx"],
];

// Decorative art (shapes, icons, patterns) is listed separately: it rarely needs replacing.
const isDecor = (p) => /\/(shapes?|icons?)\//.test(p) || /\.svg$/i.test(p) || /shape|pattern|dot|line|arrow|star|quote/i.test(p.split("/").pop());

const byFile = new Map();
for (const [name, route, ...files] of PAGES) {
  for (const file of files) {
    const src = fs.readFileSync(file, "utf8");
    // <img ... src="..." ... alt="..."> in either attribute order, plus data-background-image
    const tagRe = /<img\b[^>]*>/g;
    for (const tag of src.match(tagRe) || []) {
      const s = tag.match(/src=\{?["'`]([^"'`]+)["'`]\}?/);
      if (!s) continue;
      const alt = (tag.match(/alt=\{?["'`]([^"'`]*)["'`]\}?/) || [])[1] ?? "";
      add(s[1], name, route, alt);
    }
    for (const m of src.matchAll(/data-background-image=\{?["'`]([^"'`]+)["'`]\}?/g)) add(m[1], name, route, "(section background)");
    // Paths built in code: `.../icon${i + 1}.svg` or "/.../icon" + n + ".svg" -> listed as a series ("icon*.svg")
    for (const m of src.matchAll(/`(\/assets\/images\/[^`]*\$\{[^`]*)`/g)) add(m[1].replace(/\$\{[^}]*\}/g, "*"), name, route, null);
    for (const m of src.matchAll(/["'](\/assets\/images\/[^"']+)["']\s*\+[^"']*["']([^"']*)["']/g)) add(m[1] + "*" + m[2], name, route, null);
    for (const m of src.matchAll(/["'`](\/assets\/images\/[^"'`$]+\.(?:jpe?g|png|webp))["'`]/g)) add(m[1], name, route, null);
    // Data arrays holding bare file names used as `/assets/images/<dir>/${x}`
    for (const dm of src.matchAll(/\/assets\/images\/(thumbs|icons|shapes)\/\$\{/g)) {
      for (const f of src.matchAll(/["']([a-z0-9][a-z0-9-]*\d*\.(?:jpe?g|png|webp|svg))["']/gi)) {
        if (fs.existsSync(`public/assets/images/${dm[1]}/${f[1]}`)) add(`/assets/images/${dm[1]}/${f[1]}`, name, route, null);
      }
    }
    // Data arrays holding stems used as `/assets/images/<dir>/${x}.svg`
    for (const dm of src.matchAll(/\/assets\/images\/(thumbs|icons|shapes)\/\$\{[^}]+\}\.(svg|png|jpe?g)/g)) {
      for (const f of src.matchAll(/["']([a-z0-9][a-z0-9-]*\d+)["']/gi)) {
        if (fs.existsSync(`public/assets/images/${dm[1]}/${f[1]}.${dm[2]}`)) add(`/assets/images/${dm[1]}/${f[1]}.${dm[2]}`, name, route, null);
      }
    }
  }
}

function add(path, page, route, alt) {
  if (!path.includes("/images/") || /\/logo\//.test(path)) return;
  path = (path.startsWith("/") ? path : "/" + path).replace(/\$\{[^}]*\}/g, "*");
  const base = path.slice(path.lastIndexOf("/") + 1);
  if (!/\.[a-z]{3,4}$/i.test(base)) return; // bare prefix of a concatenated path; the series form is added separately
  if (/^\*(\.[a-z]+)?$/i.test(base)) return; // file name comes from data; resolved by the data-array pass below
  if (!byFile.has(path)) byFile.set(path, { pages: new Map(), alts: new Set() });
  const e = byFile.get(path);
  e.pages.set(route, page);
  if (alt && alt !== "(section background)") e.alts.add(alt);
  else if (alt) e.alts.add(alt);
}

const photos = [...byFile].filter(([p]) => !isDecor(p)).sort((a, b) => b[1].pages.size - a[1].pages.size || a[0].localeCompare(b[0]));
const decor = [...byFile].filter(([p]) => isDecor(p));
const cell = (s) => s.replace(/\|/g, "\\|");

let md = `# Image replacement checklist

Every ASAS page still uses the template's photos as placeholders. Replace them by **overwriting the file at the same path** (a \`*\` marks a numbered series, e.g. \`team-img*.png\` = team-img1.png, team-img2.png, …) in \`public/\` (keep a similar size and aspect ratio), and every page that uses it updates.

- **${photos.length} photo files** across ${PAGES.length} pages; **${photos.filter(([, e]) => e.pages.size > 1).length}** are shared by more than one page. Replacing a shared file changes all its pages, so pick a photo that suits all of them, or give one page its own file and change its \`src\`.
- **${decor.length} decorative files** (shapes, icons, patterns) are listed at the end; most can stay.
- The "Intended ASAS photo" column is the alt text written on each page, which describes what the photo should show.
- Detailed per-section briefs: [design-system/image-manifest/](design-system/image-manifest/).
- Regenerate this file after page changes: \`node scripts/image-index.mjs\`.

## Photos

| # | File | Used on | Intended ASAS photo |
|---|---|---|---|
`;
photos.forEach(([path, e], i) => {
  const used = [...e.pages].map(([r, n]) => `[${n}](${r})`).join(", ");
  const alts = [...e.alts].filter(Boolean).slice(0, 3).map(cell).join(" · ") || "—";
  md += `| ${i + 1} | \`${path}\` | ${e.pages.size > 1 ? `**${e.pages.size} pages:** ` : ""}${used} | ${alts} |\n`;
});
md += `\n## Decorative files\n\n| File | Used on |\n|---|---|\n`;
for (const [path, e] of decor.sort((a, b) => a[0].localeCompare(b[0]))) md += `| \`${path}\` | ${[...e.pages.values()].join(", ")} |\n`;

fs.writeFileSync("IMAGES.md", md);
const exists = (p) => {
  if (!p.includes("*")) return fs.existsSync("public" + p);
  const dir = "public" + p.slice(0, p.lastIndexOf("/"));
  const re = new RegExp("^" + p.slice(p.lastIndexOf("/") + 1).replace(/[.+?^()[\]{}|\\]/g, "\\$&").replace(/\*/g, ".*") + "$");
  return fs.existsSync(dir) && fs.readdirSync(dir).some((f) => re.test(f));
};
const missing = [...byFile.keys()].filter((p) => !exists(p));
console.log(`IMAGES.md: ${photos.length} photos, ${decor.length} decorative, ${photos.filter(([, e]) => e.pages.size > 1).length} shared. Missing files: ${missing.length ? missing.join(", ") : "none"}`);
