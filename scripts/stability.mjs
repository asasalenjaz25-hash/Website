// Is scrollHeight stable across repeated loads of the SAME url?
import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new", args: ["--no-sandbox"],
});
async function h(url) {
  const p = await browser.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  await p.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 5000));
  const v = await p.evaluate(() => document.body.scrollHeight);
  await p.close();
  return v;
}
for (const u of process.argv.slice(2)) {
  const runs = [];
  for (let i = 0; i < 3; i++) runs.push(await h(u));
  console.log(u.replace(/^http:\/\/localhost/, ""), "->", runs.join(", "),
    new Set(runs).size === 1 ? "(stable)" : "(NONDETERMINISTIC)");
}
await browser.close();
