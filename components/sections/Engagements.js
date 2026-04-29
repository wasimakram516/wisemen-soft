'use client';

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';

const engagements = [
  {
    eyebrow: 'For founders',
    title: 'MVPs with room for version two.',
    body: 'Clarify the first real use case, ship the core, keep the architecture clean.',
    accent: '#D4A843',
  },
  {
    eyebrow: 'For operators',
    title: 'Internal tools for daily work.',
    body: 'Replace spreadsheet drift with dashboards, portals, reports, and approval flows.',
    accent: '#5CB1AA',
  },
  {
    eyebrow: 'For schools and teams',
    title: 'ERP and HR without enterprise bloat.',
    body: 'Attendance, fees, payroll, tasks, documents, inventory, and reporting in focused systems.',
    accent: '#C16E5A',
  },
];

export default function Engagements() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        background: '#0E0D0B',
        borderTop: '1px solid rgba(92,177,170,0.16)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 7, md: 10 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal sx={{ position: { md: 'sticky' }, top: { md: 120 } }}>
              <Typography
                variant="caption"
                sx={{ color: '#5CB1AA', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', mb: 3 }}
              >
                Who We Help
              </Typography>
              <Typography
                variant="h2"
                sx={{ color: '#F0EDE6', fontSize: { xs: '2.1rem', md: '3.1rem' }, maxWidth: 420, mb: 4 }}
              >
                Built close to the problem.
              </Typography>
              <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.8, maxWidth: 360, mb: 5 }}>
                Smaller teams move faster when they understand the work deeply and stay accountable after launch.
              </Typography>
              <Link href="/contact">
                <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                  Discuss your project
                </Button>
              </Link>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Stagger>
            {engagements.map((item, index) => (
              <StaggerItem
                key={item.title}
                sx={{
                  py: { xs: 4.5, md: 5.5 },
                  borderTop: index === 0 ? '1px solid rgba(212,168,67,0.08)' : 'none',
                  borderBottom: '1px solid rgba(212,168,67,0.08)',
                  transition: 'transform 0.24s ease, border-color 0.24s ease',
                  '&:hover': {
                    transform: 'translateX(6px)',
                    borderBottomColor: `${item.accent}55`,
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box sx={{ width: 8, height: 8, background: item.accent, borderRadius: 1 }} />
                  <Typography
                    variant="caption"
                    sx={{ color: item.accent, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}
                  >
                    {item.eyebrow}
                  </Typography>
                </Box>
                <Typography
                  variant="h3"
                  sx={{ color: '#F0EDE6', fontSize: { xs: '1.4rem', md: '1.85rem' }, lineHeight: 1.18, mb: 2 }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.7, maxWidth: 560 }}>
                  {item.body}
                </Typography>
              </StaggerItem>
            ))}
            </Stagger>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
