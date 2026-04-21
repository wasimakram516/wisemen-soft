import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generate() {
  const publicDir = path.join(__dirname, '../public');

  // Convert logo-mark.svg
  const markSvg = fs.readFileSync(path.join(publicDir, 'logo-mark.svg'), 'utf8');
  await sharp(Buffer.from(markSvg))
    .resize(1024, null) // big size
    .png()
    .toFile(path.join(publicDir, 'logo-mark.png'));

  console.log('Generated public/logo-mark.png');

  // Convert logo-full.svg
  const fullSvg = fs.readFileSync(path.join(publicDir, 'logo-full.svg'), 'utf8');
  await sharp(Buffer.from(fullSvg))
    .resize(2048, null) // wider since it has text
    .png()
    .toFile(path.join(publicDir, 'logo-full.png'));

  console.log('Generated public/logo-full.png');
}

generate().catch(console.error);
