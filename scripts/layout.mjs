// Localize layout drift: compare every section's offsetTop/height.
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
  const v = await p.evaluate(() =>
    [...document.querySelectorAll("body > *")].flatMap((top) =>
      [top, ...top.querySelectorAll("section, footer, header")].map((el) => ({
        tag: el.tagName,
        cls: (el.className || "").toString().split(/\s+/).slice(0, 2).join(" "),
        top: Math.round(el.getBoundingClientRect().top + window.scrollY),
        h: Math.round(el.getBoundingClientRect().height),
      }))
    )
  );
  await p.close();
  return v;
}
const a = await probe(process.argv[2]);
const b = await probe(process.argv[3]);
console.log(`orig blocks=${a.length} next blocks=${b.length}`);
const n = Math.min(a.length, b.length);
let shown = 0;
for (let i = 0; i < n; i++) {
  const dh = b[i].h - a[i].h;
  const dt = b[i].top - a[i].top;
  if ((dh || dt) && shown < 20) {
    console.log(
      `${a[i].tag} .${a[i].cls}`.padEnd(46),
      `top ${a[i].top}->${b[i].top} (${dt >= 0 ? "+" : ""}${dt})`.padEnd(30),
      `h ${a[i].h}->${b[i].h} (${dh >= 0 ? "+" : ""}${dh})`
    );
    shown++;
  }
}
if (!shown) console.log("ALL BLOCKS IDENTICAL in top+height");
await browser.close();
