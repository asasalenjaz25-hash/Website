// Match sections by class signature (not index) and compare geometry.
import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new", args: ["--no-sandbox"],
});
async function probe(url) {
  const p = await browser.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  await p.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1200));
  await p.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 5000));
  const v = await p.evaluate(() => {
    const out = {};
    document.querySelectorAll("section, footer, header").forEach((el) => {
      const key = el.tagName + "." + (el.className || "").toString().trim().replace(/\s+/g, "_");
      const r = el.getBoundingClientRect();
      if (!out[key]) out[key] = { top: Math.round(r.top + window.scrollY), h: Math.round(r.height) };
    });
    return { blocks: out, total: document.body.scrollHeight };
  });
  await p.close();
  return v;
}
const a = await probe(process.argv[2]);
const b = await probe(process.argv[3]);
console.log(`total height orig=${a.total} next=${b.total}`);
const keys = Object.keys(a.blocks);
const onlyOrig = keys.filter((k) => !(k in b.blocks));
const onlyNext = Object.keys(b.blocks).filter((k) => !(k in a.blocks));
if (onlyOrig.length) console.log("ONLY IN ORIG:", onlyOrig);
if (onlyNext.length) console.log("ONLY IN NEXT:", onlyNext);
let bad = 0;
for (const k of keys) {
  if (!(k in b.blocks)) continue;
  const dt = b.blocks[k].top - a.blocks[k].top;
  const dh = b.blocks[k].h - a.blocks[k].h;
  if (Math.abs(dt) > 2 || Math.abs(dh) > 2) {
    console.log(k.slice(0, 60).padEnd(62), `dTop ${dt}`.padEnd(12), `dH ${dh}`);
    bad++;
  }
}
console.log(bad ? `${bad} block(s) drift` : "ALL MATCHED BLOCKS IDENTICAL (±2px)");
await browser.close();
