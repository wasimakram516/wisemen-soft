import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Wisemen Soft';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
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
        }}
      >
        <svg width="220" height="160" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main W path (Bolder, Amber) */}
          <path d="M 6 18 L 14 26 L 22 14 L 30 26 L 38 6" stroke="#D4A843" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Stars */}
          <circle cx="6" cy="18" r="2.5" fill="#F0EDE6" />
          <circle cx="14" cy="26" r="3" fill="#F0EDE6" />
          <circle cx="22" cy="14" r="4" fill="#F0EDE6" />
          <circle cx="30" cy="26" r="3" fill="#F0EDE6" />
          <circle cx="38" cy="6" r="3.5" fill="#F0EDE6" />
        </svg>

        <div
          style={{
            marginTop: 40,
            display: 'flex',
            alignItems: 'center',
            fontSize: 64,
            fontWeight: 700,
            fontFamily: 'sans-serif',
            letterSpacing: '-0.03em',
          }}
        >
          <span style={{ color: '#F0EDE6' }}>Wisemen</span>
          <span style={{ color: '#D4A843' }}>Soft</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
