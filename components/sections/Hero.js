'use client';

import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { ArrowRight as ArrowForwardIcon } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ThemeSection from '@/components/ThemeSection';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const markStars = [
  { cx: 6, cy: 24, r: 2.2 },
  { cx: 14, cy: 32, r: 2.6 },
  { cx: 22, cy: 20, r: 3.4 },
  { cx: 30, cy: 32, r: 2.6 },
  { cx: 38, cy: 12, r: 3 },
];

export default function Hero() {
  const theme = useTheme();

  return (
    <ThemeSection
      mode="dark"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        pb: { xs: 7, md: 8 },
        pt: { xs: 13, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Fine dot-grid texture — ambient depth that never competes with the text above it. */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${theme.palette.text.primary}14 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      {/* Two off-center glows for asymmetric depth instead of one glow sitting behind the headline. */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '-8%',
          width: { xs: 280, md: 480 },
          height: { xs: 280, md: 480 },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}1f 0%, transparent 70%)`,
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: '-15%',
          right: '-10%',
          width: { xs: 260, md: 440 },
          height: { xs: 260, md: 440 },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.info.main}14 0%, transparent 70%)`,
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        {/* Signature moment: the brand mark, drawn once as its own small element above the copy — never behind it. */}
        <MotionBox
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}
        >
          <svg width={40} height={40} viewBox="0 0 44 44" fill="none">
            <motion.path
              d="M 6 24 L 14 32 L 22 20 L 30 32 L 38 12"
              stroke={theme.palette.primary.main}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            />
            {markStars.map((s, i) => (
              <motion.circle
                key={i}
                cx={s.cx}
                cy={s.cy}
                r={s.r}
                fill={theme.palette.text.primary}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.08, type: 'spring', stiffness: 300 }}
              />
            ))}
          </svg>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 5, flexWrap: 'wrap' }}
        >
          {['Discover', 'Develop', 'Deliver'].map((word, i) => (
            <Box key={word} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="caption" color={i === 1 ? 'primary.main' : 'text.disabled'} sx={{ letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: i === 1 ? 700 : 500 }}>
                {word}
              </Typography>
              {i < 2 && <Box sx={{ width: 3, height: 3, borderRadius: '50%', bgcolor: 'text.disabled' }} />}
            </Box>
          ))}
        </MotionBox>

        <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
          <MotionTypography
            variant="h1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            sx={{ lineHeight: 0.98 }}
          >
            <Box component="span" sx={{ fontWeight: 500, color: 'text.primary' }}>We understand </Box>
            <Box component="span" sx={{ fontWeight: 800, color: 'primary.main', whiteSpace: 'nowrap' }}>your business</Box>
          </MotionTypography>
          <MotionTypography
            variant="h1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            color="text.primary"
            sx={{ fontWeight: 500, lineHeight: 0.98 }}
          >
            before we build.
          </MotionTypography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 4 }}>
          <MotionTypography
            variant="body1"
            color="text.secondary"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            sx={{ maxWidth: 480 }}
          >
            We learn how your business actually runs: its workflows, edge cases, and people, before writing a line of code.
          </MotionTypography>
          <MotionBox
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.72 }}
            sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <Link href="/case-studies">
              <Button variant="contained" endIcon={<ArrowForwardIcon size="1em" weight="bold" />} size="large">See Our Work</Button>
            </Link>
            <Link href="/contact">
              <Button variant="text" size="large" color="inherit" sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                Start a Project
              </Button>
            </Link>
          </MotionBox>
        </Box>
      </Container>
    </ThemeSection>
  );
}
