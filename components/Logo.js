'use client';

import { Box, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Wisemen Soft logo mark - Ascending Constellation W.
 * Always rendered against the dark register (nav, footer, splash screen),
 * but reads colors from the active theme rather than hardcoding them.
 */
function LogoMark({ size = 44 }) {
  const theme = useTheme();

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
        stroke={theme.palette.primary.main}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="6" cy="24" r="2.5" fill={theme.palette.text.primary} />
      <circle cx="14" cy="32" r="3" fill={theme.palette.text.primary} />
      <circle cx="22" cy="20" r="4" fill={theme.palette.text.primary} />
      <circle cx="30" cy="32" r="3" fill={theme.palette.text.primary} />
      <circle cx="38" cy="12" r="3.5" fill={theme.palette.text.primary} />
    </svg>
  );
}

export default function Logo({ size = 28, showWordmark = true, href = '/' }) {
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const content = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}>
      <LogoMark size={size} />
      {showWordmark && (
        <Typography
          component="span"
          color="text.primary"
          sx={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: size * 0.6,
            letterSpacing: 0,
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          Wisemen
          <Box component="span" sx={{ color: 'primary.main' }}>Soft</Box>
        </Typography>
      )}
    </Box>
  );

  return href ? <Link href={href} onClick={handleClick} style={{ textDecoration: 'none' }}>{content}</Link> : content;
}
