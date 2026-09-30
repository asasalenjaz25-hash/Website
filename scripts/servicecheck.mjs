// 1) /service gallery must link to /services/* (never a home route)
// 2) each service page must render identically to its home counterpart
// 3) original service-page content must still be present
import puppeteer from "puppeteer-core";

const B = "http://localhost:3210";
const PAIRS = [
  ["/", "/services/plumbing-service"],
  ["/index-5", "/services/air-conditioning-service"],
  ["/index-10", "/services/roofing-services"],
  ["/index-9", "/services/computer-mobile-repair"],
  ["/index-11", "/services/electrical-service"],
];

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new", args: ["--no-sandbox"],
});

// ---- 1 + 3: the service page itself ----
const p = await browser.newPage();
await p.setViewport({ width: 1440, height: 900 });
const errs = [];
p.on("pageerror", (e) => errs.push(String(e.message).slice(0, 140)));
await p.goto(B + "/service", { waitUntil: "networkidle2", timeout: 60000 });
await new Promise((r) => setTimeout(r, 4000));
const svc = await p.evaluate(() => {
  const sec = document.querySelector(".home-templates-section");
  const cards = [...(sec?.querySelectorAll(".mega-menu-item") || [])];
  return {
    galleryHeading: sec?.querySelector("h2")?.textContent.trim(),
    cardCount: cards.length,
    links: cards.map((c) => c.querySelector("a")?.getAttribute("href")),
    titles: cards.map((c) => c.querySelector(".tw-mt-4 a")?.textContent.trim()),
    allThumbsOk: cards.every((c) => { const i = c.querySelector("img"); return i?.complete && i.naturalWidth > 0; }),
    // pre-existing service-page content must survive
    originalSections: [...document.querySelectorAll("section")]
      .map((s) => (s.className || "").toString().split(/\s+/)[0]).filter(Boolean),
    breadcrumbTitle: document.querySelector(".breadcrumb-area h1,.breadcrumb-area h2")?.textContent.trim(),
    footer: !!document.querySelector("footer"),
    header: !!document.querySelector("header"),
  };
});
console.log("gallery heading :", svc.galleryHeading);
console.log("cards           :", svc.cardCount, "| thumbs ok:", svc.allThumbsOk);
console.log("all -> /services:", svc.links.every((h) => h && h.startsWith("/services/")));
const homeish = svc.links.filter((h) => h === "/" || /^\/index(-\d+)?$/.test(h));
console.log("home-route links:", homeish.length === 0 ? "none (correct)" : homeish);
console.log("original sections still on /service:", JSON.stringify(svc.originalSections));
console.log("breadcrumb kept :", svc.breadcrumbTitle, "| header:", svc.header, "| footer:", svc.footer);
console.log("page errors     :", errs.length ? errs : "none");

// ---- 2: service page === home page markup ----
async function fingerprint(route) {
  const q = await browser.newPage();
  await q.setViewport({ width: 1440, height: 900 });
  await q.goto(B + route, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1200));
  await q.goto(B + route, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 4500));
  const v = await q.evaluate(() => ({
    h: document.body.scrollHeight,
    sections: document.querySelectorAll("section").length,
    imgs: document.querySelectorAll("img").length,
    text: document.body.innerText.replace(/\s+/g, " ").trim().length,
    title: document.title,
  }));
  await q.close();
  return v;
}
console.log("\n--- service page vs its home counterpart ---");
for (const [home, service] of PAIRS) {
  const a = await fingerprint(home);
  const b = await fingerprint(service);
  const same = a.h === b.h && a.sections === b.sections && a.imgs === b.imgs && a.text === b.text;
  console.log(
    `${service.padEnd(40)} ${same ? "IDENTICAL to " + home : "DIFFERS " + JSON.stringify({ a, b })}`
  );
  console.log(`   title: ${b.title}`);
}
await browser.close();
