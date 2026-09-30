// Compare the GSAP char-reveal headline's SETTLED state (fully revealed).
import puppeteer from "puppeteer-core";
import fs from "node:fs";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new", args: ["--no-sandbox"],
});
async function shot(url, tag) {
  const p = await browser.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  // warm load: original's first paint is 195px taller than its settled height
  await p.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1500));
  await p.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 4000));
  // scroll past the section so every scroll-triggered reveal completes,
  // then come back and let it settle
  await p.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60));
    }
  });
  await new Promise((r) => setTimeout(r, 2500));
  await p.evaluate(() => window.scrollTo(0, 3600));
  await new Promise((r) => setTimeout(r, 3500));
  const chars = await p.evaluate(() => {
    const el = document.querySelector(".tw-char-animation");
    if (!el) return null;
    const kids = [...el.querySelectorAll("div,span")].slice(0, 400);
    const op = kids.map((k) => getComputedStyle(k).opacity);
    return { total: kids.length, fullyVisible: op.filter((o) => o === "1").length, text: el.textContent.trim().slice(0, 70) };
  });
  const f = `/tmp/st-${tag}.png`;
  await p.screenshot({ path: f });
  await p.close();
  return { f, chars };
}
const [o, n] = process.argv.slice(2);
const A = await shot(o, "o");
const B = await shot(n, "n");
console.log("orig charAnim:", JSON.stringify(A.chars));
console.log("next charAnim:", JSON.stringify(B.chars));
const a = PNG.sync.read(fs.readFileSync(A.f));
const b = PNG.sync.read(fs.readFileSync(B.f));
const diff = new PNG({ width: a.width, height: a.height });
const d = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.15 });
fs.writeFileSync("/tmp/st-diff.png", PNG.sync.write(diff));
console.log("settled pixel diff:", ((d / (a.width * a.height)) * 100).toFixed(2) + "%");
await browser.close();
