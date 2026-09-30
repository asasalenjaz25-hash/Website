// Headless verification: load pages in real Chrome, report JS errors,
// failed requests, plugin init state and rendered geometry.
import puppeteer from "puppeteer-core";

const BASE = "http://localhost:3210";
const PAGES = process.argv.slice(2);

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const results = [];

for (const route of PAGES) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const errors = [];
  const failed = [];
  page.on("pageerror", (e) => errors.push(String(e.message).slice(0, 160)));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push("console: " + m.text().slice(0, 160));
  });
  page.on("requestfailed", (r) => failed.push(r.url().replace(BASE, "")));
  page.on("response", (r) => {
    if (r.status() >= 400) failed.push(r.status() + " " + r.url().replace(BASE, ""));
  });

  await page.goto(BASE + route, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 4000));
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
  await new Promise((r) => setTimeout(r, 1500));

  const info = await page.evaluate(() => ({
    title: document.title,
    bodyClass: document.body.className,
    height: document.body.scrollHeight,
    header: !!document.querySelector("header"),
    footer: !!document.querySelector("footer"),
    imgs: document.querySelectorAll("img").length,
    brokenImgs: [...document.querySelectorAll("img")]
      .filter((i) => i.complete && i.naturalWidth === 0)
      .map((i) => i.getAttribute("src"))
      .slice(0, 6),
    jquery: typeof window.jQuery,
    gsap: typeof window.gsap,
    swiper: document.querySelectorAll(".swiper-initialized").length,
    slick: document.querySelectorAll(".slick-initialized").length,
    aosAnimated: document.querySelectorAll("[data-aos].aos-animate").length,
    preloaderCleared:
      !document.getElementById("loading-screen") ||
      document.getElementById("loading-screen").classList.contains("loaded"),
    mainCssApplied: getComputedStyle(document.body).fontFamily,
    homeTemplateCards: document.querySelectorAll(
      ".home-templates-section .mega-menu-item"
    ).length,
  }));

  results.push({ route, ...info, errors: [...new Set(errors)].slice(0, 5), failed: [...new Set(failed)].slice(0, 6) });
  await page.screenshot({ path: `/tmp/shot${route.replace(/\//g, "_") || "_home"}.png`, fullPage: false });
  await page.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
