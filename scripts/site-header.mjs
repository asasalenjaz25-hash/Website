// Replaces each generated page's own desktop header(s) with the shared
// <SiteHeader />, so every template shows the same navbar. Also drops the
// hardcoded "activePage" on Home; main.js marks the current page instead.
// Idempotent. Run directly to patch components/generated/*.jsx in place.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const IMPORT = 'import SiteHeader from "@/components/SiteHeader";\n';

export function replaceHeaders(jsx) {
  const lines = jsx.split("\n");
  const end = lines.findIndex((l) => l.includes("scrollSmoother-container"));
  const top = end === -1 ? lines.length : end;

  const out = [];
  let placed = lines.slice(0, top).some((l) => l.trim() === "<SiteHeader />");
  for (let i = 0; i < top; i++) {
    const open = lines[i].match(/^(\s*)<header[\s>]/);
    if (!open) {
      out.push(lines[i].replace(/(nav-menu__item) activePage"/, '$1"'));
      continue;
    }
    let depth = 0;
    let j = i;
    for (; j < top; j++) {
      depth += (lines[j].match(/<header[\s>]/g) || []).length - (lines[j].match(/<\/header>/g) || []).length;
      if (depth === 0) break;
    }
    if (!placed) out.push(`${open[1]}<SiteHeader />`);
    placed = true;
    i = j;
  }

  let result = [...out, ...lines.slice(top)].join("\n");
  if (placed && !result.includes(IMPORT)) {
    result = result.replace(/^(import BodyClass from .*\n)/m, `$1${IMPORT}`);
  }
  return result;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const dir = path.join(ROOT, "components/generated");
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".jsx"))) {
    const file = path.join(dir, f);
    const before = fs.readFileSync(file, "utf8");
    const after = replaceHeaders(before);
    if (after !== before) fs.writeFileSync(file, after);
    console.log(`${after !== before ? "patched" : "unchanged"}  ${f}`);
  }
}
