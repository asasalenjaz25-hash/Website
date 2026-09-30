// Compare computed styles of specific elements, original vs port.
import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new", args: ["--no-sandbox"],
});
async function probe(url) {
  const p = await browser.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  await p.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 5000));
  const v = await p.evaluate(() => {
    const pick = (sel, props) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      return Object.fromEntries(props.map((k) => [k, cs[k]]));
    };
    return {
      progressWrap: pick(".progress-wrap", ["backgroundColor", "color", "width", "height", "position"]),
      progressPath: (() => {
        const el = document.querySelector(".progress-wrap path, .progress-wrap svg path");
        return el ? getComputedStyle(el).stroke : null;
      })(),
      header: pick("header", ["backgroundColor", "position", "height"]),
      quoteBtn: pick(".tw-primary-btn", ["backgroundColor", "color", "borderRadius"]),
      body: pick("body", ["backgroundColor", "fontFamily", "fontSize", "color"]),
      odometers: [...document.querySelectorAll(".odometer")].map((o) => o.textContent.trim()),
    };
  });
  await p.close();
  return v;
}
const a = await probe(process.argv[2]);
const b = await probe(process.argv[3]);
for (const k of Object.keys(a)) {
  const same = JSON.stringify(a[k]) === JSON.stringify(b[k]);
  console.log(`${same ? "MATCH  " : "DIFFER "} ${k}`);
  if (!same) { console.log("   orig:", JSON.stringify(a[k])); console.log("   next:", JSON.stringify(b[k])); }
}
await browser.close();
