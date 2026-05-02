'use client';

import { Box, Container, Typography } from '@mui/material';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';

const proofPoints = [
  { value: '60+', label: 'production projects shipped' },
  { value: '7+', label: 'years building real systems' },
  { value: '3+', label: 'business products launched' },
  { value: 'Global', label: 'Pakistan, GCC, Europe' },
];

export default function ProofStrip() {
  return (
    <Box
      component="section"
      sx={{
        background: '#10100E',
        borderTop: '1px solid rgba(212,168,67,0.1)',
        borderBottom: '1px solid rgba(92,177,170,0.18)',
      }}
    >
      <Container maxWidth="lg">
        <Stagger
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
          }}
        >
          {proofPoints.map((point, index) => (
            <StaggerItem
              key={point.label}
              sx={{
                py: { xs: 3.5, md: 4.5 },
                px: { xs: 2, md: 4 },
                borderRight: {
                  xs: index % 2 === 0 ? '1px solid rgba(212,168,67,0.08)' : 'none',
                  md: index < proofPoints.length - 1 ? '1px solid rgba(212,168,67,0.08)' : 'none',
                },
                borderBottom: {
                  xs: index < 2 ? '1px solid rgba(212,168,67,0.08)' : 'none',
                  md: 'none',
                },
                transition: 'background 0.22s ease, transform 0.22s ease',
                '&:hover': {
                  background: 'rgba(240,237,230,0.025)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Typography
                component="p"
                sx={{
                  color: '#D4A843',
                  fontFamily: 'var(--font-display)',
                  fontSize: { xs: '1.45rem', md: '1.8rem' },
                  fontWeight: 800,
                  lineHeight: 1,
                  mb: 1,
                }}
              >
                {point.value}
              </Typography>
              <Typography variant="caption" sx={{ color: '#A8A39D', lineHeight: 1.6 }}>
                {point.label}
              </Typography>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Box>
  );
}
