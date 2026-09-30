import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new", args: ["--no-sandbox"],
});
const p = await browser.newPage();
await p.setViewport({ width: 1440, height: 900 });
p.on("pageerror", (e) => console.log("PAGEERROR:", String(e.message).slice(0, 220)));
p.on("console", (m) => { if (m.type() === "error") console.log("CONSOLE:", m.text().slice(0, 220)); });
const loaded = [];
p.on("response", (r) => { const u = r.url(); if (u.includes("/assets/js/")) loaded.push(r.status() + " " + u.split("/assets/js/")[1]); });
await p.goto(process.argv[2], { waitUntil: "networkidle2", timeout: 60000 });
await new Promise((r) => setTimeout(r, 6000));
console.log("JS requests:", JSON.stringify(loaded));
console.log(JSON.stringify(await p.evaluate(() => ({
  jQuery: typeof window.jQuery,
  Waypoint: typeof window.Waypoint,
  fnWaypoint: typeof (window.jQuery && window.jQuery.fn && window.jQuery.fn.waypoint),
  Odometer: typeof window.Odometer,
  Swiper: typeof window.Swiper,
  slick: typeof (window.jQuery && window.jQuery.fn && window.jQuery.fn.slick),
  AOS: typeof window.AOS,
  gsap: typeof window.gsap,
  scriptTags: [...document.querySelectorAll("script[src*='/assets/js/']")].map((s) => s.src.split("/assets/js/")[1]),
})), null, 2));
await browser.close();
