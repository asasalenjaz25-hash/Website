// Client-side navigation: do theme plugins still initialize after a
// soft route change (no full reload)?
import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new", args: ["--no-sandbox"],
});
const p = await browser.newPage();
await p.setViewport({ width: 1440, height: 900 });
const errs = [];
p.on("pageerror", (e) => errs.push(String(e.message).slice(0, 140)));
let reloads = 0;
p.on("framenavigated", (f) => { if (f === p.mainFrame()) reloads++; });

await p.goto("http://localhost:3210/", { waitUntil: "networkidle2", timeout: 60000 });
await new Promise((r) => setTimeout(r, 4500));

async function snap(label) {
  const v = await p.evaluate(() => ({
    path: location.pathname,
    bodyClass: document.body.className,
    h: document.body.scrollHeight,
    swiperSlides: document.querySelectorAll(".swiper-slide").length,
    odoInit: document.querySelectorAll(".odometer-auto-theme").length,
    aos: document.querySelectorAll("[data-aos]").length,
    preloaderCleared: !document.getElementById("loading-screen") ||
      document.getElementById("loading-screen").classList.contains("loaded"),
    ghostCursors: document.querySelectorAll("#ball").length,
  }));
  console.log(label.padEnd(28), JSON.stringify(v));
  return v;
}
await snap("initial /");

for (const href of ["/service", "/services/roofing-services", "/services/air-conditioning-service", "/service", "/"]) {
  const before = reloads;
  await p.evaluate((h) => {
    const a = document.createElement("a");
    a.href = h; document.body.appendChild(a); a.click();
  }, href);
  await new Promise((r) => setTimeout(r, 5000));
  const v = await snap(`soft nav -> ${href}`);
  if (v.path !== href) console.log("   !! navigation did not land");
}
console.log("main-frame navigations:", reloads, "(1 = only the initial load, i.e. all soft)");
console.log("page errors:", errs.length ? [...new Set(errs)].slice(0, 4) : "none");
await browser.close();
