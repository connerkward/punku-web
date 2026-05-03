import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "../tmp/shots");
mkdirSync(OUT_DIR, { recursive: true });

const URL = process.env.URL ?? "http://localhost:4839/";
const VIEWPORT = { width: 1440, height: 900 };

const targets = [
  { name: "hero",  scrollTo: 0 },
  { name: "works", scrollTo: 1 },
  { name: "spec",  scrollTo: 2 },
  { name: "fleet", scrollTo: 3 },
  { name: "footer", scrollTo: 4 },
];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 2 });
const page = await context.newPage();

page.on("console", (msg) => {
  if (msg.type() === "error" || msg.type() === "warning") {
    console.log(`[${msg.type()}] ${msg.text()}`);
  }
});
page.on("pageerror", (err) => console.log(`[pageerror] ${err.message}`));

await page.goto(URL, { waitUntil: "networkidle" });
await page.waitForTimeout(800); // let fonts + GLB load settle

for (const t of targets) {
  await page.evaluate((i) => {
    window.scrollTo({ top: window.innerHeight * i, behavior: "instant" });
  }, t.scrollTo);
  await page.waitForTimeout(250);
  const out = resolve(OUT_DIR, `${t.name}.png`);
  await page.screenshot({ path: out, fullPage: false });
  console.log(out);
}

await browser.close();
