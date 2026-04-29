'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

const MotionBox = motion.create(Box);

const stats = [
  { numeric: 60, suffix: '+', label: 'Projects shipped', sub: 'across 4 countries' },
  { numeric: 4, suffix: '+', label: 'Years in practice', sub: 'no VC money, no fluff' },
  { numeric: 3, suffix: '', label: 'Products launched', sub: 'ERP, HR & Print' },
  { numeric: 100, suffix: '%', label: 'Fit-focused work', sub: 'clear scope before build' },
];

function AnimatedNumber({ target, suffix, inView }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef(null);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, { duration: 1.6, ease: 'easeOut' });
    return controls.stop;
  }, [inView, target, count]);

  return (
    <Typography
      component={motion.span}
      sx={{
        fontSize: { xs: '2.8rem', md: '3.8rem' },
        fontWeight: 800,
        color: '#D4A843',
        lineHeight: 1,
        letterSpacing: 0,
        display: 'block',
        mb: 1,
        fontFamily: 'var(--font-display)',
      }}
    >
      <motion.span>{rounded}</motion.span>{suffix}
    </Typography>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        borderTop: '1px solid rgba(212,168,67,0.08)',
        borderBottom: '1px solid rgba(212,168,67,0.08)',
        background: '#0A0A0A',
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          {stats.map((stat, i) => (
            <Grid
              size={{ xs: 6, md: 3 }}
              key={stat.label}
              sx={{
                borderRight: { md: i < 3 ? '1px solid rgba(212,168,67,0.08)' : 'none' },
                borderBottom: { xs: i < 2 ? '1px solid rgba(212,168,67,0.08)' : 'none', md: 'none' },
              }}
            >
              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                sx={{ px: { xs: 2, md: 5 }, py: { xs: 5, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}
              >
                <AnimatedNumber target={stat.numeric} suffix={stat.suffix} inView={inView} />
                <Typography variant="body2" sx={{ color: '#F0EDE6', fontWeight: 500, mb: 0.5 }}>
                  {stat.label}
                </Typography>
                <Typography variant="caption" sx={{ color: '#6B6560' }}>
                  {stat.sub}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
