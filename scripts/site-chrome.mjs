// Swaps each generated page's own mobile menu and footer for the shared
// <SiteMobileMenu /> and <SiteFooter />, and sets the preloader text to "ASAS".
// Idempotent. Run directly to patch components/generated/*.jsx in place.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

// Replace the element opening on the first line matching `startRe` (to its
// matching close tag) with `replacement`, keeping indentation.
function replaceBlock(lines, startRe, tag, replacement) {
  const start = lines.findIndex((l) => startRe.test(l));
  if (start === -1) return false;
  const open = new RegExp(`<${tag}[\\s>]`, "g");
  const close = new RegExp(`</${tag}>`, "g");
  let depth = 0;
  for (let j = start; j < lines.length; j++) {
    depth += (lines[j].match(open) || []).length - (lines[j].match(close) || []).length;
    if (depth === 0) {
      const ind = lines[start].match(/^\s*/)[0];
      lines.splice(start, j - start + 1, `${ind}${replacement}`);
      return true;
    }
  }
  return false;
}

function addImport(jsx, name) {
  const line = `import ${name} from "@/components/${name}";\n`;
  if (jsx.includes(line)) return jsx;
  return jsx.replace(/^(import BodyClass from .*\n)/m, `$1${line}`);
}

const LOADER = ["A", "S", "A", "S"]
  .map((c) => `<span data-text-preloader={"${c}"} className={"letters-loading"}>${c}</span>`)
  .join("");

export function replaceChrome(jsx) {
  const lines = jsx.split("\n");
  if (replaceBlock(lines, /^\s*<div className=\{"mobile-menu /, "div", "<SiteMobileMenu />")) {
    jsx = addImport(lines.join("\n"), "SiteMobileMenu");
  } else jsx = lines.join("\n");

  const lines2 = jsx.split("\n");
  if (replaceBlock(lines2, /^\s*<footer[\s>]/, "footer", "<SiteFooter />")) {
    jsx = addImport(lines2.join("\n"), "SiteFooter");
  } else jsx = lines2.join("\n");

  return jsx.replace(
    /(<div className=\{"txt-loading"\}>)[\s\S]*?(\n\s*<\/div>)/,
    (m, a, b) => `${a}${LOADER}${b}`
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const dir = path.join(ROOT, "components/generated");
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".jsx"))) {
    const file = path.join(dir, f);
    const before = fs.readFileSync(file, "utf8");
    const after = replaceChrome(before);
    if (after !== before) fs.writeFileSync(file, after);
    console.log(`${after !== before ? "patched" : "unchanged"}  ${f}`);
  }
}
