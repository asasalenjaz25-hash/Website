// Syntax-checks JSX/JS files without a full Next build (safe to run in parallel).
// Usage: node scripts/check-jsx.mjs <file> [file...]
import fs from "node:fs";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { transformSync } = require("next/dist/build/swc/index.js");

let failed = 0;
for (const file of process.argv.slice(2)) {
  try {
    await transformSync(fs.readFileSync(file, "utf8"), {
      filename: file,
      jsc: { parser: { syntax: "ecmascript", jsx: true }, transform: { react: { runtime: "automatic" } } },
    });
    console.log(`ok     ${file}`);
  } catch (e) {
    failed++;
    console.log(`FAIL   ${file}\n${String(e.message || e).slice(0, 800)}`);
  }
}
process.exit(failed ? 1 : 0);
