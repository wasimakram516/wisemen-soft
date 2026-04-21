'use client';

import { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 24, md: 32 },
        right: { xs: 24, md: 32 },
        zIndex: 9000,
      }}
    >
      <IconButton
        onClick={scrollUp}
        aria-label="Scroll to top"
        sx={{
          width: 44,
          height: 44,
          background: 'rgba(212,168,67,0.1)',
          border: '1px solid rgba(212,168,67,0.25)',
          color: '#D4A843',
          backdropFilter: 'blur(8px)',
          '&:hover': {
            background: 'rgba(212,168,67,0.2)',
            borderColor: '#D4A843',
          },
          transition: 'all 0.2s',
        }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  );
}
