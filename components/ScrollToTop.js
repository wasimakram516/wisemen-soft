'use client';

import { useEffect, useState } from 'react';
import { Box, IconButton, useTheme, alpha } from '@mui/material';
import { CaretUp as KeyboardArrowUpIcon } from '@phosphor-icons/react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

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
          bgcolor: alpha(theme.palette.primary.main, 0.1),
          border: 1,
          borderColor: alpha(theme.palette.primary.main, 0.25),
          color: 'primary.main',
          backdropFilter: 'blur(8px)',
          '&:hover': {
            bgcolor: alpha(theme.palette.primary.main, 0.2),
            borderColor: 'primary.main',
          },
          transition: 'all 0.2s',
        }}
      >
        <KeyboardArrowUpIcon size={22} weight="bold" />
      </IconButton>
    </Box>
  );
}
