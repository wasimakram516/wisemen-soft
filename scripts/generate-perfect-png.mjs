import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');

async function generate() {
  console.log('Launching Puppeteer to capture perfectly rendered logo with web fonts...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set the viewport to a large size for a high-res capture
  await page.setViewport({ width: 2000, height: 1000, deviceScaleFactor: 2 });

  // Render HTML that imports the exact Montserrat font and uses an inline SVG
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
        <style>
          body { 
            margin: 0; 
            padding: 50px;
            background: transparent; 
            display: inline-block;
          }
          .text {
            font-family: 'Montserrat', system-ui, sans-serif;
            font-weight: 700;
            font-size: 100px;
            letter-spacing: -0.03em;
          }
          /* Hide scrollbars just in case */
          ::-webkit-scrollbar { display: none; }
        </style>
      </head>
      <body>
        <svg id="logo-full" width="1050" height="200" viewBox="0 0 1050 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Logo Mark scaled up by 4.5x, centered vertically -->
          <g transform="translate(0, 30) scale(4.5)">
            <path d="M 6 18 L 14 26 L 22 14 L 30 26 L 38 6" stroke="#D4A843" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="6" cy="18" r="2.5" fill="#F0EDE6" />
            <circle cx="14" cy="26" r="3" fill="#F0EDE6" />
            <circle cx="22" cy="14" r="4" fill="#F0EDE6" />
            <circle cx="30" cy="26" r="3" fill="#F0EDE6" />
            <circle cx="38" cy="6" r="3.5" fill="#F0EDE6" />
          </g>
          <!-- Wordmark -->
          <text x="230" y="140" class="text">
            <tspan fill="#F0EDE6">Wisemen</tspan><tspan fill="#D4A843">Soft</tspan>
          </text>
        </svg>
      </body>
    </html>
  `);
  
  // Wait explicitly for the web font to load and render
  await page.evaluateHandle('document.fonts.ready');
  
  // Wait a tiny bit extra to ensure anti-aliasing settles
  await new Promise(r => setTimeout(r, 500));

  // Select the SVG and take a transparent PNG screenshot
  const element = await page.$('#logo-full');
  await element.screenshot({ 
    path: path.join(publicDir, 'logo-full.png'), 
    omitBackground: true // ensures true transparency
  });

  console.log('Successfully generated public/logo-full.png with the exact Montserrat font!');
  await browser.close();
}

generate().catch(console.error);
