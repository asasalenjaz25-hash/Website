// Does window.scrollTo land at the same place on both sides?
// ScrollSmoother hijacks scrolling, so compare actual resting offsets.
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
  const out = await p.evaluate(async () => {
    const res = {};
    res.smoother = typeof window.ScrollSmoother !== "undefined" && !!window.ScrollSmoother.get?.();
    res.wrapperTransform = (() => {
      const w = document.querySelector("#smooth-content, .smooth-content");
      return w ? getComputedStyle(w).transform : null;
    })();
    window.scrollTo(0, 3600);
    await new Promise((r) => setTimeout(r, 3000));
    res.scrollY = Math.round(window.scrollY);
    res.docHeight = document.body.scrollHeight;
    // what heading sits at the top of the viewport?
    const at = document.elementFromPoint(720, 450);
    res.midElement = at ? (at.tagName + "." + (at.className || "").toString().slice(0, 60)) : null;
    const h = [...document.querySelectorAll("h1,h2,h3")].find((x) => {
      const r = x.getBoundingClientRect();
      return r.top > -50 && r.top < 900;
    });
    res.visibleHeading = h ? h.textContent.trim().slice(0, 50) : null;
    return res;
  });
  await p.close();
  return out;
}
console.log("ORIG:", JSON.stringify(await probe(process.argv[2]), null, 1));
console.log("NEXT:", JSON.stringify(await probe(process.argv[3]), null, 1));
await browser.close();
