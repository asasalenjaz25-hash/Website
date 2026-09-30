import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new", args: ["--no-sandbox"],
});
const p = await browser.newPage();
await p.setViewport({ width: 1440, height: 900 });
p.on("pageerror", (e) => console.log("PAGEERROR:", String(e.message).slice(0, 200)));
await p.goto(process.argv[2], { waitUntil: "networkidle2", timeout: 60000 });
await new Promise((r) => setTimeout(r, 4500));
console.log(JSON.stringify(await p.evaluate(() => ({
  Odometer: typeof window.Odometer,
  odometerOpts: window.odometerOptions || null,
  waypoint: typeof (window.jQuery && window.jQuery.fn.waypoint),
  firstOdo: (() => {
    const o = document.querySelector(".odometer");
    if (!o) return null;
    return { cls: o.className, html: o.innerHTML.slice(0, 120), count: o.getAttribute("data-count") };
  })(),
})), null, 2));
await browser.close();
