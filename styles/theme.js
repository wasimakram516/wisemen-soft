'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D4A843',
      light: '#E8C47A',
      dark: '#A8832E',
    },
    background: {
      default: '#0A0A0A',
      paper: '#111111',
    },
    text: {
      primary: '#F0EDE6',
      secondary: '#9A938C',
    },
    divider: 'rgba(212,168,67,0.1)',
  },
  typography: {
    fontFamily: 'var(--font-inter), "Helvetica Neue", Arial, sans-serif',
    h1: { fontFamily: 'var(--font-display), "Helvetica Neue", sans-serif', fontWeight: 800, letterSpacing: 0, lineHeight: 1.0 },
    h2: { fontFamily: 'var(--font-display), "Helvetica Neue", sans-serif', fontWeight: 700, letterSpacing: 0, lineHeight: 1.1 },
    h3: { fontFamily: 'var(--font-display), "Helvetica Neue", sans-serif', fontWeight: 700, letterSpacing: 0, lineHeight: 1.15 },
    h4: { fontFamily: 'var(--font-display), "Helvetica Neue", sans-serif', fontWeight: 600, letterSpacing: 0 },
    h5: { fontFamily: 'var(--font-display), "Helvetica Neue", sans-serif', fontWeight: 600 },
    h6: { fontFamily: 'var(--font-display), "Helvetica Neue", sans-serif', fontWeight: 500 },
    body1: { lineHeight: 1.8 },
    body2: { lineHeight: 1.75 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          letterSpacing: '0.01em',
          borderRadius: 6,
          padding: '11px 28px',
          transition: 'transform 0.22s ease, background 0.22s ease, border-color 0.22s ease, color 0.22s ease',
          '&:hover': { transform: 'translateY(-2px)' },
          '&:active': { transform: 'translateY(0)' },
          '& .MuiButton-endIcon': {
            transition: 'transform 0.22s ease',
          },
          '&:hover .MuiButton-endIcon': {
            transform: 'translateX(4px)',
          },
        },
        containedPrimary: {
          background: '#D4A843',
          color: '#0A0A0A',
          '&:hover': { background: '#E8C47A', boxShadow: '0 12px 30px rgba(212,168,67,0.16)' },
        },
        outlinedPrimary: {
          borderColor: 'rgba(212,168,67,0.35)',
          color: '#D4A843',
          '&:hover': {
            borderColor: '#D4A843',
            background: 'rgba(212,168,67,0.06)',
          },
        },
        text: {
          color: '#F0EDE6',
          '&:hover': { background: 'rgba(240,237,230,0.05)' },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 4, fontWeight: 500, fontSize: '0.72rem' },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: 'rgba(212,168,67,0.08)' },
      },
    },
  },
});

export default theme;
