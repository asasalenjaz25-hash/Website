// Compare original static theme vs the Next.js port, section by section.
import puppeteer from "puppeteer-core";

const ORIG = "http://localhost:4321/tf/repio";
const PORT_ = "http://localhost:3210";

const PAIRS = process.argv.slice(2).map((p) => {
  const [o, n] = p.split("=");
  return { orig: `${ORIG}/${o}`, next: `${PORT_}${n}`, label: o };
});

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox"],
});

async function probe(url, tag) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e.message).slice(0, 120)));
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 5000));
  const data = await page.evaluate(() => {
    const sel = (s) => document.querySelectorAll(s).length;
    return {
      height: document.body.scrollHeight,
      sections: sel("section"),
      swiperInit: sel(".swiper-initialized"),
      swiperSlides: sel(".swiper-slide"),
      slickInit: sel(".slick-initialized"),
      slickSlides: sel(".slick-slide"),
      niceSelect: sel(".nice-select"),
      odometer: sel(".odometer"),
      magnetic: sel(".tw-magnetic-wrap"),
      imgs: sel("img"),
      broken: [...document.querySelectorAll("img")].filter(
        (i) => i.complete && i.naturalWidth === 0
      ).length,
      navLinks: sel("header a"),
    };
  });
  await page.screenshot({ path: `/tmp/cmp-${tag}.png`, fullPage: false });
  await page.close();
  return { ...data, errors: [...new Set(errors)].slice(0, 3) };
}

for (const p of PAIRS) {
  const a = await probe(p.orig, `${p.label}-orig`);
  const b = await probe(p.next, `${p.label}-next`);
  const keys = Object.keys(a).filter((k) => k !== "errors");
  const diffs = keys.filter((k) => JSON.stringify(a[k]) !== JSON.stringify(b[k]));
  console.log(`\n=== ${p.label} ===`);
  console.log("orig:", JSON.stringify(a));
  console.log("next:", JSON.stringify(b));
  console.log(
    diffs.length ? "DIFFERS: " + diffs.map((k) => `${k} ${a[k]}->${b[k]}`).join(", ") : "MATCH"
  );
}

await browser.close();
