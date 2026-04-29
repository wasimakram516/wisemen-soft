'use client';

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';

const services = [
  {
    title: 'Web apps',
    body: 'Portals, dashboards, internal tools, and workflow automation built for the way the team already works.',
    href: '/case-studies',
    cta: 'See examples',
  },
  {
    title: 'Business systems',
    body: 'ERP, HR, print management, reporting, approvals, and operations software without template bloat.',
    href: '/products',
    cta: 'View products',
  },
  {
    title: 'Discovery first',
    body: 'Domain study, process mapping, and technical direction before estimates turn into commitments.',
    href: '/about',
    cta: 'Our approach',
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
            <Reveal sx={{ position: { md: 'sticky' }, top: { md: 120 } }}>
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
                Clear software for messy operations.
              </Typography>
              <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.8, maxWidth: 330 }}>
                We turn the moving parts of a business into systems people can actually use.
              </Typography>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Stagger>
            {services.map((service, index) => (
              <StaggerItem
                key={service.title}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '72px 1fr auto' },
                  gap: { xs: 2, md: 4 },
                  alignItems: 'center',
                  py: { xs: 5, md: 6 },
                  borderBottom: index < services.length - 1 ? '1px solid rgba(212,168,67,0.08)' : 'none',
                  transition: 'transform 0.24s ease, border-color 0.24s ease, background 0.24s ease',
                  '&:hover': {
                    transform: 'translateX(6px)',
                    background: 'rgba(240,237,230,0.018)',
                    borderBottomColor: 'rgba(212,168,67,0.2)',
                  },
                }}
              >
                <Typography sx={{ color: '#D4A843', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                  {String(index + 1).padStart(2, '0')}
                </Typography>
                <Box>
                  <Typography variant="h3" sx={{ color: '#F0EDE6', fontSize: { xs: '1.35rem', md: '1.6rem' }, mb: 1.5 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.7, maxWidth: 500 }}>
                    {service.body}
                  </Typography>
                </Box>
                <Link href={service.href}>
                  <Button variant="text" endIcon={<ArrowForwardIcon />} sx={{ color: '#D4A843', px: 0 }}>
                    {service.cta}
                  </Button>
                </Link>
              </StaggerItem>
            ))}
            </Stagger>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
