'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';

/**
 * Wisemen Soft logo mark - Ascending Constellation W.
 * Amber path representing a guiding constellation, with white stars.
 */
function LogoMark({ size = 44 }) {
  // Width controls the mark while preserving the 44:32 aspect ratio.
  return (
    <svg
      width={size}
      height={size * (32 / 44)}
      viewBox="0 0 44 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <path
        d="M 6 18 L 14 26 L 22 14 L 30 26 L 38 6"
        stroke="#D4A843"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="6" cy="18" r="2.5" fill="#F0EDE6" />
      <circle cx="14" cy="26" r="3" fill="#F0EDE6" />
      <circle cx="22" cy="14" r="4" fill="#F0EDE6" />
      <circle cx="30" cy="26" r="3" fill="#F0EDE6" />
      <circle cx="38" cy="6" r="3.5" fill="#F0EDE6" />
    </svg>
  );
}

export default function Logo({ size = 28, showWordmark = true, href = '/' }) {
  const content = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}>
      <LogoMark size={size} />
      {showWordmark && (
        <Typography
          component="span"
          sx={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: size * 0.6,
            letterSpacing: 0,
            color: '#F0EDE6',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          Wisemen
          <Box component="span" sx={{ color: '#D4A843' }}>Soft</Box>
        </Typography>
      )}
    </Box>
  );

  return href ? <Link href={href} style={{ textDecoration: 'none' }}>{content}</Link> : content;
}
