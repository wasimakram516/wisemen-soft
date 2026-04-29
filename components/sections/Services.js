'use client';

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const services = [
  {
    title: 'Custom web applications',
    body: 'We design and build production-ready web apps for operations, dashboards, portals, internal tools, and workflow automation.',
    href: '/case-studies',
    cta: 'View case studies',
  },
  {
    title: 'ERP and business systems',
    body: 'From school ERP to print management and HR supervision, we build software around the way your team actually works.',
    href: '/products',
    cta: 'Explore products',
  },
  {
    title: 'Discovery-led development',
    body: 'Every project starts with domain discovery, process mapping, and clear technical direction before implementation begins.',
    href: '/about',
    cta: 'How we think',
  },
];

export default function Services() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        background: '#0A0A0A',
        borderTop: '1px solid rgba(212,168,67,0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: 'flex-start' }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: { md: 'sticky' }, top: { md: 120 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ width: 28, height: 1, background: '#D4A843' }} />
                <Typography
                  variant="caption"
                  sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem' }}
                >
                  Software Development Services
                </Typography>
              </Box>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, color: '#F0EDE6', mb: 3, lineHeight: 1.08 }}
              >
                Practical software for real business workflows.
              </Typography>
              <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.9, maxWidth: 330 }}>
                Wisemen Soft is a software house in Pakistan serving founders, schools, agencies, and operations teams
                that need dependable custom software rather than generic templates.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            {services.map((service, index) => (
              <Box
                key={service.title}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '72px 1fr auto' },
                  gap: { xs: 2, md: 4 },
                  alignItems: 'center',
                  py: { xs: 5, md: 6 },
                  borderBottom: index < services.length - 1 ? '1px solid rgba(212,168,67,0.08)' : 'none',
                }}
              >
                <Typography sx={{ color: '#D4A843', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                  {String(index + 1).padStart(2, '0')}
                </Typography>
                <Box>
                  <Typography variant="h3" sx={{ color: '#F0EDE6', fontSize: { xs: '1.35rem', md: '1.6rem' }, mb: 1.5 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.8, maxWidth: 540 }}>
                    {service.body}
                  </Typography>
                </Box>
                <Link href={service.href}>
                  <Button variant="text" endIcon={<ArrowForwardIcon />} sx={{ color: '#D4A843', px: 0 }}>
                    {service.cta}
                  </Button>
                </Link>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
