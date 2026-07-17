import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const runtime = 'nodejs';

export const alt = 'Wisemen Soft';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), 'public', 'logos', 'logo-mark.png'));
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: '#141D18',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 28,
        }}
      >
        <img src={logoBase64} width={220} height={220} style={{ objectFit: 'contain' }} />
        <div style={{ display: 'flex', fontSize: 56, fontWeight: 700, color: '#F0F2EA' }}>
          Wisemen<span style={{ color: '#54A87A' }}>Soft</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
