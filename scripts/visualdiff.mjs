// Pixel-level visual diff: original vs port, at several scroll offsets.
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
  // Warm load: the original theme's first paint has nondeterministic height
  // (web-font swap), so measure the settled state both sides.
  await p.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1500));
  await p.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  // kill animation nondeterminism
  await p.addStyleTag({ content: `*,*::before,*::after{animation:none!important;transition:none!important}
    [data-aos]{opacity:1!important;transform:none!important}` });
  await new Promise((r) => setTimeout(r, 5000));
  const out = [];
  for (const y of [0, 1800, 3600]) {
    await p.evaluate((yy) => window.scrollTo(0, yy), y);
    await new Promise((r) => setTimeout(r, 1200));
    const f = `/tmp/vd-${tag}-${y}.png`;
    await p.screenshot({ path: f });
    out.push(f);
  }
  await p.close();
  return out;
}

for (const pair of process.argv.slice(2)) {
  const [o, n] = pair.split("=");
  const A = await shots(`http://localhost:4321/tf/repio/${o}`, "o");
  const B = await shots(`http://localhost:3210${n}`, "n");
  let worst = 0;
  for (let i = 0; i < A.length; i++) {
    const a = PNG.sync.read(fs.readFileSync(A[i]));
    const b = PNG.sync.read(fs.readFileSync(B[i]));
    if (a.width !== b.width || a.height !== b.height) { console.log(o, "size mismatch"); continue; }
    const diff = new PNG({ width: a.width, height: a.height });
    const d = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.15 });
    const pct = (d / (a.width * a.height)) * 100;
    worst = Math.max(worst, pct);
    if (pct > 1) fs.writeFileSync(`/tmp/vdiff-${o}-${i}.png`, PNG.sync.write(diff));
  }
  console.log(`${o.padEnd(22)} worst viewport diff: ${worst.toFixed(2)}%`);
}
await browser.close();
