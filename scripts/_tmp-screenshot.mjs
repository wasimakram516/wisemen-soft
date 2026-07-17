import puppeteer from 'puppeteer';

// Usage: node scripts/_tmp-screenshot.mjs <outDir> <baseUrl>
// Captures scrolled viewport shots of key pages for a design audit.
const outDir = process.argv[2];
const base = process.argv[3];

const pages = [
  { path: '/', name: 'home', stops: 6 },
  { path: '/about', name: 'about', stops: 3 },
  { path: '/products', name: 'products', stops: 3 },
  { path: '/case-studies', name: 'case-studies', stops: 3 },
  { path: '/contact', name: 'contact', stops: 2 },
  { path: '/products/nexus', name: 'product-detail', stops: 2 },
];

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 1000, deviceScaleFactor: 1 });

for (const p of pages) {
  await page.goto(base + p.path, { waitUntil: 'networkidle2', timeout: 45000 });
  await new Promise((r) => setTimeout(r, 2600)); // let splash screen finish
  const height = await page.evaluate(() => document.body.scrollHeight);
  const step = Math.max(1, Math.floor((height - 1000) / Math.max(1, p.stops - 1)));
  for (let i = 0; i < p.stops; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * step);
    await new Promise((r) => setTimeout(r, 900));
    await page.screenshot({ path: `${outDir}/${p.name}-${i}.png` });
  }
}

// Mobile pass on homepage
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await page.goto(base + '/', { waitUntil: 'networkidle2', timeout: 45000 });
await new Promise((r) => setTimeout(r, 2600));
const mh = await page.evaluate(() => document.body.scrollHeight);
for (let i = 0; i < 4; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), Math.floor((mh - 844) * (i / 3)));
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: `${outDir}/mobile-${i}.png` });
}

await browser.close();
console.log('done');
