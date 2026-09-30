// Odometer lifecycle: value at load, and value after scrolling into view.
import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new", args: ["--no-sandbox"],
});
async function probe(url) {
  const p = await browser.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  await p.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 4000));
  const atLoad = await p.evaluate(() =>
    [...document.querySelectorAll(".odometer")].map((o) => ({
      text: o.textContent.trim().slice(0, 12),
      target: o.getAttribute("data-odometer-final") || o.dataset.odometerFinal || null,
      inited: o.classList.contains("odometer-auto-theme") || o.classList.contains("odometer-theme-default"),
    }))
  );
  // scroll through whole page to trigger every waypoint
  await p.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
  });
  await new Promise((r) => setTimeout(r, 4000));
  const after = await p.evaluate(() =>
    [...document.querySelectorAll(".odometer")].map((o) => o.textContent.trim().slice(0, 12))
  );
  await p.close();
  return { atLoad, after };
}
const a = await probe(process.argv[2]);
const b = await probe(process.argv[3]);
console.log("ORIG at load:", JSON.stringify(a.atLoad));
console.log("NEXT at load:", JSON.stringify(b.atLoad));
console.log("ORIG settled:", JSON.stringify(a.after));
console.log("NEXT settled:", JSON.stringify(b.after));
console.log(JSON.stringify(a.after) === JSON.stringify(b.after) ? "SETTLED MATCH" : "SETTLED DIFFER");
await browser.close();
