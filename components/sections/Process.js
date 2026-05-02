'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MotionBox = motion.create(Box);

const steps = [
  { number: '01', title: 'Discover', body: 'We sit with your team, study your domain, and map out what actually needs to be built, not what sounds good in a meeting.' },
  { number: '02', title: 'Develop', body: 'Clean architecture. Tight feedback loops. No black boxes. You see progress every week, not just at the end.' },
  { number: '03', title: 'Deliver', body: 'Production-ready. Documented. Handed over in a way that your team can own and maintain without us.' },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Box ref={ref} sx={{ py: { xs: 12, md: 18 }, background: '#0A0A0A' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ alignItems: 'flex-start' }}>
          {/* Left label */}
          <Grid size={{ xs: 12, md: 4 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              sx={{ position: { md: 'sticky' }, top: { md: 120 } }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                
                <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem' }}>
                  How we work
                </Typography>
              </Box>
              <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, color: '#F0EDE6', mb: 3 }}>
                <Box component="span" sx={{ fontWeight: 100 }}>Three phases.</Box>
                <br />
                <Box component="span" sx={{ fontWeight: 800 }}>No surprises.</Box>
              </Typography>
              <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.9, maxWidth: 280 }}>
                We have learned that good software is not about the tools. It is about how well you understand the problem before you touch the keyboard.
              </Typography>

              {/* Mini process diagram */}
              <Box sx={{ mt: 5, display: { xs: 'none', md: 'block' } }}>
                <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
                  {/* Vertical connecting line */}
                  <line x1="20" y1="16" x2="20" y2="144" stroke="rgba(212,168,67,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                  {/* Nodes */}
                  {[16, 80, 144].map((y, i) => (
                    <g key={i}>
                      <circle cx="20" cy={y} r="7" fill="rgba(212,168,67,0.08)" stroke="rgba(212,168,67,0.4)" strokeWidth="1.5" />
                      <circle cx="20" cy={y} r="3" fill="#D4A843" />
                      <line x1="34" y1={y} x2="110" y2={y} stroke="rgba(212,168,67,0.12)" strokeWidth="1" />
                      <rect x="34" y={y - 5} width={[50, 65, 45][i]} height="10" rx="2" fill="rgba(212,168,67,0.06)" />
                    </g>
                  ))}
                </svg>
              </Box>
            </MotionBox>
          </Grid>

          {/* Right steps */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {steps.map((step, i) => (
                <MotionBox
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  sx={{
                    display: 'flex',
                    gap: { xs: 3, md: 6 },
                    py: 6,
                    borderBottom: i < 2 ? '1px solid rgba(212,168,67,0.08)' : 'none',
                    alignItems: 'flex-start',
                    transition: 'transform 0.24s ease, border-color 0.24s ease',
                    '&:hover': { transform: 'translateX(6px)', borderBottomColor: 'rgba(212,168,67,0.2)' },
                  }}
                >
                  <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#D4A843', letterSpacing: '0.1em', mt: 0.5, minWidth: 24 }}>
                    {step.number}
                  </Typography>
                  <Box>
                    <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, mb: 2, color: '#F0EDE6', fontWeight: 800 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9, maxWidth: 480 }}>
                      {step.body}
                    </Typography>
                  </Box>
                </MotionBox>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
