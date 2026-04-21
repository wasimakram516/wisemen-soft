'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        pb: { xs: 10, md: 14 },
        pt: 18,
        background: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow — subtle, top right */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,168,67,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        {/* Main headline */}
        <Box sx={{ mb: 8 }}>
          <MotionTypography
            variant="h1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            sx={{
              fontSize: { xs: '2.6rem', sm: '3.8rem', md: '5rem', lg: '6rem' },
              color: '#F0EDE6',
              lineHeight: 0.95,
              mb: 0,
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
              fontSize: { xs: '2.6rem', sm: '3.8rem', md: '5rem', lg: '6rem' },
              color: '#D4A843',
              lineHeight: 0.95,
              mb: 0,
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
              fontSize: { xs: '2.6rem', sm: '3.8rem', md: '5rem', lg: '6rem' },
              color: '#F0EDE6',
              lineHeight: 0.95,
            }}
          >
            We understand.
          </MotionTypography>
        </Box>

        {/* Tagline */}
        <MotionBox
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 6 }}
        >
          {['Discover', 'Develop', 'Deliver'].map((word, i) => (
            <Box key={word} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography
                variant="caption"
                sx={{ color: i === 1 ? '#D4A843' : '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 600 }}
              >
                {word}
              </Typography>
              {i < 2 && <Box sx={{ width: 4, height: 4, borderRadius: '50%', background: '#3A3530' }} />}
            </Box>
          ))}
        </MotionBox>

        {/* Bottom row: description + CTA */}
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
              maxWidth: 420,
              lineHeight: 1.8,
              fontSize: '1.05rem',
            }}
          >
            Before we write a line of code, we learn your domain.
            Your users, your workflows, your constraints.
            Then we build software that actually fits.
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
