'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const headlineSx = {
  fontSize: { xs: '2.55rem', sm: '3.75rem', md: '5.35rem', lg: '6rem', xl: '6.35rem' },
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
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <MotionBox
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 5, flexWrap: 'wrap' }}
        >
          {['Discover', 'Develop', 'Deliver'].map((word, i) => (
            <Box key={word} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="caption" sx={{ color: i === 1 ? '#D4A843' : '#6B6560', letterSpacing: '0.16em', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: i === 1 ? 700 : 500 }}>
                {word}
              </Typography>
              {i < 2 && <Box sx={{ width: 3, height: 3, borderRadius: '50%', background: '#3A3530' }} />}
            </Box>
          ))}
        </MotionBox>

        <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
          {/* Thin */}
          <MotionTypography
            variant="h1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            sx={{ ...headlineSx, fontWeight: 100, color: '#F0EDE6' }}
          >
            We understand
          </MotionTypography>
          {/* Bold + amber */}
          <MotionTypography
            variant="h1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            sx={{ ...headlineSx, fontWeight: 800, color: '#D4A843' }}
          >
            your business
          </MotionTypography>
          {/* Thin */}
          <MotionTypography
            variant="h1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            sx={{ ...headlineSx, fontWeight: 100, color: '#F0EDE6' }}
          >
            before we build.
          </MotionTypography>
        </Box>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 4 }}
        >
          <Typography variant="body1" sx={{ color: '#A8A39D', maxWidth: 480, lineHeight: 1.8, fontSize: '1.05rem' }}>
            Before we write a line of code, we learn how your business actually runs: your workflows, your edge cases, your people. The result is software that fits instead of forces.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/case-studies">
              <Button variant="contained" endIcon={<ArrowForwardIcon />} size="large">See Our Work</Button>
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
