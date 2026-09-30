// Verify the home-template gallery on /service: cards, thumbs, links, targets.
import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new", args: ["--no-sandbox"],
});
const p = await browser.newPage();
await p.setViewport({ width: 1440, height: 900 });
await p.goto("http://localhost:3210/service", { waitUntil: "networkidle2", timeout: 60000 });
await new Promise((r) => setTimeout(r, 4000));

const info = await p.evaluate(() => {
  const sec = document.querySelector(".home-templates-section");
  if (!sec) return { error: "gallery section missing" };
  const cards = [...sec.querySelectorAll(".mega-menu-item")];
  return {
    heading: sec.querySelector("h2")?.textContent.trim(),
    cardCount: cards.length,
    cards: cards.map((c) => {
      const img = c.querySelector("img");
      return {
        title: c.querySelector(".tw-mt-4 a")?.textContent.trim(),
        href: c.querySelector("a")?.getAttribute("href"),
        img: img?.getAttribute("src"),
        imgOk: img?.complete && img.naturalWidth > 0,
        w: Math.round(c.getBoundingClientRect().width),
      };
    }),
    // section must sit before the footer
    beforeFooter: (() => {
      const f = document.querySelector("footer");
      return f ? sec.compareDocumentPosition(f) & Node.DOCUMENT_POSITION_FOLLOWING : null;
    })(),
    footerStillPresent: !!document.querySelector("footer"),
    headerStillPresent: !!document.querySelector("header"),
  };
});
console.log(JSON.stringify(info, null, 1));

// every gallery link must resolve to a real 200 route
const hrefs = [...new Set(info.cards.map((c) => c.href))];
for (const h of hrefs) {
  const res = await p.goto("http://localhost:3210" + h, { waitUntil: "domcontentloaded", timeout: 60000 });
  console.log(`${String(res.status()).padEnd(4)} ${h}`);
}
await browser.close();
