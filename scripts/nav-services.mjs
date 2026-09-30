// Header nav rewrite for the generated pages:
//  - "Home" becomes a plain link to "/" (drops the thumbnail mega-menu)
//  - every trade page is listed under the "Services" dropdown
// Idempotent. Run directly to patch components/generated/*.jsx in place.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SERVICES = JSON.parse(fs.readFileSync(path.join(ROOT, "components/service-pages.json"), "utf8"));

const isTopLink = (line) => line.includes("nav-menu__link");

// Index of the line closing the element opened on `start`, by tag depth.
function closingLine(lines, start, tag) {
  const open = new RegExp(`<${tag}[\\s>]`, "g");
  const close = new RegExp(`</${tag}>`, "g");
  let depth = 0;
  for (let i = start; i < lines.length; i++) {
    depth += (lines[i].match(open) || []).length - (lines[i].match(close) || []).length;
    if (depth === 0) return i;
  }
  return -1;
}

const escapeJsx = (s) => s.replace(/&/g, "&amp;");

export function rewriteNav(jsx) {
  let lines = jsx.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const label = lines[i].trim();
    if (!isTopLink(lines[i - 1] || "")) continue;
    const liAt = i - 2;
    if (!/^\s*<li className=\{"nav-menu__item has-submenu/.test(lines[liAt] || "")) continue;
    const liEnd = closingLine(lines, liAt, "li");
    if (liEnd === -1) continue;

    if (label === "Home") {
      const ind = lines[liAt].match(/^\s*/)[0];
      const liClass = lines[liAt].replace(/.*className=\{"([^"]*)"\}.*/, "$1").replace(/\s*has-submenu/, "");
      const aClass = lines[i - 1].replace(/.*className=\{"([^"]*)"\}.*/, "$1").replace(/\s*tw-pe-4/, "");
      const block = [
        `${ind}<li className={"${liClass}"}>`,
        `${ind}  <a href={"/"} className={"${aClass}"}>`,
        `${ind}    Home`,
        `${ind}  </a>`,
        `${ind}</li>`,
      ];
      lines.splice(liAt, liEnd - liAt + 1, ...block);
      i = liAt + block.length - 1;
    } else if (label === "Services") {
      const ulAt = lines.findIndex((l, j) => j > i && j < liEnd && l.includes("nav-submenu"));
      if (ulAt === -1) continue;
      const ulEnd = closingLine(lines, ulAt, "ul");
      const inner = lines.slice(ulAt + 1, ulEnd);
      if (inner.some((l) => l.includes(SERVICES[0].href))) continue;
      const tplEnd = closingLine(inner, 0, "li");
      const tpl = inner.slice(0, tplEnd + 1);
      const items = SERVICES.flatMap((s) =>
        tpl.map((l) =>
          l.includes("href=")
            ? l.replace(/href=\{"[^"]*"\}/, `href={"${s.href}"}`)
            : /^\s*[^<\s].*$/.test(l) ? l.replace(/\S.*$/, escapeJsx(s.title)) : l
        )
      );
      lines.splice(ulEnd, 0, ...items);
      i = ulEnd + items.length;
    }
  }
  return lines.join("\n");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const dir = path.join(ROOT, "components/generated");
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".jsx"))) {
    const file = path.join(dir, f);
    const before = fs.readFileSync(file, "utf8");
    const after = rewriteNav(before);
    if (after !== before) fs.writeFileSync(file, after);
    console.log(`${after !== before ? "patched" : "unchanged"}  ${f}`);
  }
}
