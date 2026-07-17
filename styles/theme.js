'use client';

import { createTheme } from '@mui/material/styles';
import { dark, light, radii } from './tokens';

const typography = {
  fontFamily: 'var(--font-inter), "Helvetica Neue", Arial, sans-serif',
  h1: { fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.05, fontSize: 'clamp(2.75rem, 2rem + 4vw, 6.5rem)' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.12, fontSize: 'clamp(2rem, 1.4rem + 2.5vw, 3.25rem)' },
  h3: { fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '-0.005em', lineHeight: 1.2, fontSize: 'clamp(1.35rem, 1.1rem + 1vw, 1.9rem)' },
  h4: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.15rem, 1rem + 0.6vw, 1.5rem)' },
  h5: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem' },
  h6: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem' },
  body1: { lineHeight: 1.75, fontSize: '1.05rem' },
  body2: { lineHeight: 1.7, fontSize: '0.92rem' },
  caption: { fontSize: '0.78rem' },
};

function buildTheme(mode, t) {
  return createTheme({
    palette: {
      mode,
      primary: { main: t.accent },
      background: { default: t.bg, paper: t.bgAlt },
      text: { primary: t.text, secondary: t.textMuted, disabled: t.textFaint },
      divider: t.border,
      info: { main: t.status },
    },
    typography,
    shape: { borderRadius: radii.card },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            letterSpacing: '0.01em',
            borderRadius: radii.pill,
            padding: '11px 28px',
            boxShadow: 'none',
            transition: 'transform 0.24s ease, background 0.24s ease, border-color 0.24s ease, color 0.24s ease',
            '&:hover': { transform: 'translateY(-2px)', boxShadow: 'none' },
            '&:active': { transform: 'translateY(0)' },
            '& .MuiButton-endIcon': { transition: 'transform 0.24s ease' },
            '&:hover .MuiButton-endIcon': { transform: 'translateX(4px)' },
          },
          containedPrimary: {
            background: t.accent,
            color: t.bg,
            '&:hover': { background: t.accent, filter: 'brightness(1.12)' },
          },
          outlinedPrimary: {
            borderColor: `${t.accent}59`,
            color: t.accent,
            '&:hover': { borderColor: t.accent, background: `${t.accent}10` },
          },
          text: {
            color: t.text,
            '&:hover': { background: 'none' },
          },
        },
      },
      MuiDivider: {
        styleOverrides: { root: { borderColor: t.border } },
      },
      MuiPaper: {
        styleOverrides: {
          root: { borderRadius: radii.card, backgroundImage: 'none' },
        },
      },
      MuiAppBar: {
        styleOverrides: { root: { boxShadow: 'none', borderRadius: 0 } },
      },
      MuiContainer: {
        styleOverrides: {
          maxWidthLg: { maxWidth: '1400px !important' },
          maxWidthMd: { maxWidth: '1000px !important' },
        },
      },
    },
  });
}

export const darkTheme = buildTheme('dark', dark);
export const lightTheme = buildTheme('light', light);

// Default export kept for anything importing the theme directly (e.g. ThemeRegistry).
export default darkTheme;
