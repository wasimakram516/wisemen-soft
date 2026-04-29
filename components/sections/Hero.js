'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const headlineSx = {
  fontSize: {
    xs: '2.55rem',
    sm: '3.75rem',
    md: '5.35rem',
    lg: '6rem',
    xl: '6.35rem',
  },
  lineHeight: 0.98,
  mb: 0,
};

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        pb: { xs: 7, md: 8 },
        pt: { xs: 13, md: 12 },
        background: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          px: { xs: 3, sm: 5, md: 7 },
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 5, flexWrap: 'wrap' }}
        >
          <Box sx={{ width: 28, height: 1, background: '#5CB1AA' }} />
          <Typography
            variant="caption"
            sx={{
              color: '#5CB1AA',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fontSize: '0.72rem',
              fontWeight: 700,
            }}
          >
            Discover. Develop. Deliver.
          </Typography>
        </MotionBox>

        <Box sx={{ mb: { xs: 5, md: 7 }, maxWidth: { xs: '100%', md: 1600 } }}>
          <MotionTypography
            variant="h1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            sx={{
              ...headlineSx,
              color: '#F0EDE6',
              fontWeight: 300,
            }}
          >
            Most agencies
          </MotionTypography>
          <MotionTypography
            variant="h1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            sx={{
              ...headlineSx,
              color: '#D4A843',
              fontWeight: 800,
            }}
          >
            execute.
          </MotionTypography>
          <MotionTypography
            variant="h1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            sx={{
              ...headlineSx,
              color: '#F0EDE6',
              fontWeight: 800,
              whiteSpace: { xs: 'normal', lg: 'nowrap' },
            }}
          >
            <Box component="span" sx={{ fontWeight: 300 }}>
              Wisemen
            </Box>{' '}
            understands first.
          </MotionTypography>
        </Box>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 4,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#A8A39D',
              maxWidth: 440,
              lineHeight: 1.8,
              fontSize: '1.05rem',
            }}
          >
            We study your users, workflows, and constraints before writing code.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Link href="/case-studies">
              <Button variant="contained" endIcon={<ArrowForwardIcon />} size="large">
                See Our Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="text" size="large" sx={{ color: '#A8A39D', '&:hover': { color: '#F0EDE6' } }}>
                Start a Project
              </Button>
            </Link>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
