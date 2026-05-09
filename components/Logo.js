'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';

/**
 * Wisemen Soft logo mark - Ascending Constellation W.
 * Amber path representing a guiding constellation, with white stars.
 */
function LogoMark({ size = 44 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <path
        d="M 6 24 L 14 32 L 22 20 L 30 32 L 38 12"
        stroke="#D4A843"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="6" cy="24" r="2.5" fill="#F0EDE6" />
      <circle cx="14" cy="32" r="3" fill="#F0EDE6" />
      <circle cx="22" cy="20" r="4" fill="#F0EDE6" />
      <circle cx="30" cy="32" r="3" fill="#F0EDE6" />
      <circle cx="38" cy="12" r="3.5" fill="#F0EDE6" />
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
