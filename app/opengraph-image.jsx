import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const runtime = 'nodejs';

export const alt = 'Wisemen Soft';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), 'public', 'logo-mark.png'));
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
        }}
      >
        {/* Logo mark from public folder */}
        <img src={logoBase64} width={180} height={180} style={{ objectFit: 'contain' }} />

        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 72, fontWeight: 700, fontFamily: 'sans-serif', letterSpacing: '-0.03em' }}>
          <span style={{ color: '#F0EDE6' }}>Wisemen</span>
          <span style={{ color: '#D4A843' }}>Soft</span>
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 28, color: '#6B6560', fontFamily: 'sans-serif', letterSpacing: '0.12em' }}>
          DISCOVER · DEVELOP · DELIVER
        </div>
      </div>
    ),
    { ...size }
  );
}
