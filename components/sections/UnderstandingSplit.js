'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';

const columns = [
  {
    eyebrow: 'Before code',
    title: 'Requests look simple.',
    points: ['Build a portal', 'Automate a report', 'Replace spreadsheets'],
    accent: '#C16E5A',
  },
  {
    eyebrow: 'After understanding',
    title: 'The real system appears.',
    points: ['Users and handoffs', 'Rules and exceptions', 'Data that must be trusted'],
    accent: '#5CB1AA',
  },
];

export default function UnderstandingSplit() {
  return (
    <Box
      component="section"
      sx={{
        background: '#0D0C0B',
        borderTop: '1px solid rgba(212,168,67,0.08)',
        borderBottom: '1px solid rgba(92,177,170,0.14)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          {columns.map((column, index) => (
            <Grid key={column.eyebrow} size={{ xs: 12, md: 6 }}>
              <Reveal
                delay={index * 0.08}
                direction={index === 0 ? 'right' : 'left'}
                sx={{
                  height: '100%',
                  py: { xs: 6, md: 8 },
                  pr: { md: index === 0 ? 8 : 0 },
                  pl: { md: index === 1 ? 8 : 0 },
                  borderRight: { md: index === 0 ? '1px solid rgba(212,168,67,0.08)' : 'none' },
                  borderBottom: { xs: index === 0 ? '1px solid rgba(212,168,67,0.08)' : 'none', md: 'none' },
                }}
              >
              <Typography
                variant="caption"
                sx={{
                  color: column.accent,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  display: 'block',
                  mb: 2,
                }}
              >
                {column.eyebrow}
              </Typography>
              <Typography variant="h3" sx={{ color: '#F0EDE6', fontSize: { xs: '1.6rem', md: '2.15rem' }, mb: 4 }}>
                {column.title}
              </Typography>
              <Stagger sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
                {column.points.map((point) => (
                  <StaggerItem
                    key={point}
                    sx={{
                      color: '#C8C3BC',
                      border: '1px solid rgba(212,168,67,0.12)',
                      background: 'rgba(240,237,230,0.025)',
                      px: 1.5,
                      py: 1,
                      fontSize: '0.82rem',
                      lineHeight: 1.3,
                      transition: 'transform 0.22s ease, border-color 0.22s ease, background 0.22s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        borderColor: `${column.accent}55`,
                        background: `${column.accent}10`,
                      },
                    }}
                  >
                    {point}
                  </StaggerItem>
                ))}
              </Stagger>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
