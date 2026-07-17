'use client';

import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { ArrowRight as ArrowForwardIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import ThemeSection from '@/components/ThemeSection';

const services = [
  {
    title: 'Web apps',
    body: 'Portals, dashboards, internal tools, and workflow automation built for the way the team already works.',
    href: '/case-studies',
    cta: 'See examples',
    span: 'large',
  },
  {
    title: 'Business systems',
    body: 'ERP, HR, print management, reporting, approvals, and operations software without template bloat.',
    href: '/products',
    cta: 'View products',
    span: 'small',
  },
  {
    title: 'Discovery first',
    body: 'Domain study, process mapping, and technical direction before estimates turn into commitments.',
    href: '/about',
    cta: 'Our approach',
    span: 'small',
  },
];

/** Honest miniature UI (real MUI boxes on theme tokens, not a fake screenshot) filling the large tile's empty middle. */
function MiniAppFrame() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'relative',
        flex: 1,
        minHeight: 140,
        my: { xs: 3, md: 4 },
        borderRadius: 1,
        border: 1,
        borderColor: 'divider',
        bgcolor: 'background.default',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, px: 2, py: 1.25, borderBottom: 1, borderColor: 'divider', flexShrink: 0 }}>
        <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'text.disabled' }} />
        <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'text.disabled' }} />
        <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.main' }} />
        <Box sx={{ flex: 1, ml: 1, height: 12, borderRadius: 1, bgcolor: 'action.hover' }} />
      </Box>
      <Box sx={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <Box sx={{ width: 56, borderRight: 1, borderColor: 'divider', p: 1.5, display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1.25 }}>
          {[0, 1, 2, 3].map((i) => (
            <Box key={i} sx={{ height: 5, borderRadius: 1, bgcolor: i === 1 ? 'primary.main' : 'divider' }} />
          ))}
        </Box>
        <Box sx={{ flex: 1, p: 1.75, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.25 }}>
          {[0, 1, 2, 3].map((i) => (
            <Box key={i} sx={{ borderRadius: '8px', border: 1, borderColor: 'divider', p: 1.25, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0.75 }}>
              <Box sx={{ width: '60%', height: 5, borderRadius: 1, bgcolor: 'divider' }} />
              <Box sx={{ width: '40%', height: 9, borderRadius: 1, bgcolor: i === 0 ? 'primary.main' : 'action.hover' }} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function ServiceTile({ service, index }) {
  const theme = useTheme();
  const accent = theme.palette.primary.main;
  const isLarge = service.span === 'large';

  return (
    <Stagger
      delay={index * 0.08}
      stagger={0.09}
      sx={{
        position: 'relative',
        gridColumn: { xs: 'span 1', md: isLarge ? 'span 7' : 'span 5' },
        gridRow: isLarge ? 'span 2' : 'span 1',
        p: { xs: 4, md: isLarge ? 6 : 4.5 },
        borderRadius: `${theme.shape.borderRadius}px`,
        border: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isLarge ? 'flex-start' : 'space-between',
        minHeight: isLarge ? { xs: 260, md: 420 } : { xs: 220, md: 194 },
        overflow: 'hidden',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        '&:hover': { transform: 'translateY(-4px)', borderColor: 'primary.main' },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%',
          background: `radial-gradient(circle, ${accent}1f 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <Box sx={{ position: 'relative' }}>
        <StaggerItem sx={{ width: 8, height: 8, borderRadius: '2px', bgcolor: 'primary.main', mb: { xs: 3, md: isLarge ? 5 : 3 } }} />
        <StaggerItem>
          <Typography
            variant="h3"
            color="text.primary"
            sx={{ fontSize: isLarge ? { xs: '1.7rem', md: '2.3rem' } : undefined, mb: 2 }}
          >
            {service.title}
          </Typography>
        </StaggerItem>
        <StaggerItem>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: isLarge ? 420 : 320 }}>
            {service.body}
          </Typography>
        </StaggerItem>
      </Box>
      {isLarge && <StaggerItem sx={{ display: 'flex', flex: 1 }}><MiniAppFrame /></StaggerItem>}
      <StaggerItem sx={{ marginTop: isLarge ? 0 : 'auto' }}>
        <Link href={service.href} style={{ position: 'relative' }}>
          <Button variant="text" endIcon={<ArrowForwardIcon size="1em" weight="bold" />} sx={{ px: 0, mt: isLarge ? 0 : 3 }}>
            {service.cta}
          </Button>
        </Link>
      </StaggerItem>
    </Stagger>
  );
}

export default function Services() {
  return (
    <ThemeSection mode="dark" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Stagger stagger={0.1} sx={{ maxWidth: 560, mb: { xs: 6, md: 9 } }}>
          <StaggerItem>
            <Typography variant="h2" color="text.primary" sx={{ mb: 3 }}>
              Clear software for messy operations.
            </Typography>
          </StaggerItem>
          <StaggerItem>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 460 }}>
              We turn the moving parts of a business into systems people can actually use.
            </Typography>
          </StaggerItem>
        </Stagger>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(12, 1fr)' }, gap: { xs: 3, md: 3 } }}>
          {services.map((service, index) => (
            <ServiceTile key={service.title} service={service} index={index} />
          ))}
        </Box>
      </Container>
    </ThemeSection>
  );
}
