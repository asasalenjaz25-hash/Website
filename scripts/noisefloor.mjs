// Noise floor: diff a URL against ITSELF across two independent loads.
import puppeteer from "puppeteer-core";
import fs from "node:fs";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new", args: ["--no-sandbox"],
});
async function shots(url, tag) {
  const p = await browser.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  await p.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await p.addStyleTag({ content: `*,*::before,*::after{animation:none!important;transition:none!important}
    [data-aos]{opacity:1!important;transform:none!important}` });
  await new Promise((r) => setTimeout(r, 5000));
  const out = [];
  for (const y of [0, 1800, 3600]) {
    await p.evaluate((yy) => window.scrollTo(0, yy), y);
    await new Promise((r) => setTimeout(r, 1200));
    const f = `/tmp/nf-${tag}-${y}.png`;
    await p.screenshot({ path: f });
    out.push(f);
  }
  await p.close();
  return out;
}
for (const url of process.argv.slice(2)) {
  const A = await shots(url, "a");
  const B = await shots(url, "b");
  let worst = 0;
  for (let i = 0; i < A.length; i++) {
    const a = PNG.sync.read(fs.readFileSync(A[i]));
    const b = PNG.sync.read(fs.readFileSync(B[i]));
    const diff = new PNG({ width: a.width, height: a.height });
    const d = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.15 });
    worst = Math.max(worst, (d / (a.width * a.height)) * 100);
  }
  console.log(`${url.replace(/^http:\/\/localhost/, "").padEnd(34)} self-vs-self worst: ${worst.toFixed(2)}%`);
}
await browser.close();
