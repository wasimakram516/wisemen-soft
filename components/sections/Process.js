'use client';

import { Box, Container, Typography, Grid, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import ThemeSection from '@/components/ThemeSection';
import { useScrollReveal } from '@/components/motion/Reveal';

const MotionBox = motion.create(Box);

const steps = [
  { number: '01', title: 'Discover', body: 'We sit with your team, study your domain, and map out what actually needs to be built, not what sounds good in a meeting.' },
  { number: '02', title: 'Develop', body: 'Clean architecture. Tight feedback loops. No black boxes. You see progress every week, not just at the end.' },
  { number: '03', title: 'Deliver', body: 'Production-ready. Documented. Handed over in a way that your team can own and maintain without us.' },
];

export default function Process() {
  const { ref, controls } = useScrollReveal({ margin: '-80px' });
  const theme = useTheme();
  const line = alpha(theme.palette.primary.main, 0.15);
  const lineFaint = alpha(theme.palette.primary.main, 0.12);
  const nodeFill = alpha(theme.palette.primary.main, 0.08);
  const nodeStroke = alpha(theme.palette.primary.main, 0.4);
  const rectFill = alpha(theme.palette.primary.main, 0.06);

  return (
    <ThemeSection mode="dark" sx={{ py: { xs: 10, md: 14 } }}>
      <Box ref={ref}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ alignItems: 'flex-start' }}>
          {/* Left label */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: { md: 'sticky' }, top: { md: 120 } }}>
              <MotionBox
                initial="hidden"
                animate={controls}
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              >
                <Typography variant="h2" color="text.primary" sx={{ mb: 3 }}>
                  <Box component="span" sx={{ fontWeight: 500 }}>Three phases.</Box>
                  <br />
                  <Box component="span" sx={{ fontWeight: 800 }}>No surprises.</Box>
                </Typography>
              </MotionBox>
              <MotionBox
                initial="hidden"
                animate={controls}
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.1 } } }}
              >
                <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 280 }}>
                  We have learned that good software is not about the tools. It is about how well you understand the problem before you touch the keyboard.
                </Typography>
              </MotionBox>

              {/* Mini process diagram */}
              <MotionBox
                initial="hidden"
                animate={controls}
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.2 } } }}
                sx={{ mt: 5, display: { xs: 'none', md: 'block' } }}
              >
                <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
                  {/* Vertical connecting line */}
                  <line x1="20" y1="16" x2="20" y2="144" stroke={line} strokeWidth="1.5" strokeDasharray="4 4" />
                  {/* Nodes */}
                  {[16, 80, 144].map((y, i) => (
                    <g key={i}>
                      <circle cx="20" cy={y} r="7" fill={nodeFill} stroke={nodeStroke} strokeWidth="1.5" />
                      <circle cx="20" cy={y} r="3" fill={theme.palette.primary.main} />
                      <line x1="34" y1={y} x2="110" y2={y} stroke={lineFaint} strokeWidth="1" />
                      <rect x="34" y={y - 5} width={[50, 65, 45][i]} height="10" rx="2" fill={rectFill} />
                    </g>
                  ))}
                </svg>
              </MotionBox>
            </Box>
          </Grid>

          {/* Right steps */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {steps.map((step, i) => {
                const base = i * 0.18;
                return (
                  <Box
                    key={step.number}
                    sx={{
                      display: 'flex',
                      gap: { xs: 3, md: 6 },
                      py: 6,
                      borderBottom: i < 2 ? 1 : 0,
                      borderColor: 'divider',
                      alignItems: 'flex-start',
                      transition: 'transform 0.24s ease, border-color 0.24s ease',
                      '&:hover': { transform: 'translateX(6px)', borderBottomColor: 'primary.main' },
                    }}
                  >
                    <MotionBox
                      initial="hidden"
                      animate={controls}
                      variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: base } } }}
                      sx={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', mt: 0.5, minWidth: 24, color: 'primary.main' }}
                    >
                      {step.number}
                    </MotionBox>
                    <Box>
                      <MotionBox
                        initial="hidden"
                        animate={controls}
                        variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: base + 0.08 } } }}
                      >
                        <Typography variant="h4" color="text.primary" sx={{ mb: 2, fontWeight: 800 }}>
                          {step.title}
                        </Typography>
                      </MotionBox>
                      <MotionBox
                        initial="hidden"
                        animate={controls}
                        variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: base + 0.16 } } }}
                      >
                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480 }}>
                          {step.body}
                        </Typography>
                      </MotionBox>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
      </Box>
    </ThemeSection>
  );
}
