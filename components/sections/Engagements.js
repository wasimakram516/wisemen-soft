'use client';

import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { ArrowRight as ArrowForwardIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import ThemeSection from '@/components/ThemeSection';

const engagements = [
  {
    eyebrow: 'For founders',
    title: 'MVPs with room for version two.',
    body: 'Clarify the first real use case, ship the core, keep the architecture clean.',
  },
  {
    eyebrow: 'For operators',
    title: 'Internal tools for daily work.',
    body: 'Replace spreadsheet drift with dashboards, portals, reports, and approval flows.',
  },
  {
    eyebrow: 'For schools and teams',
    title: 'ERP and HR without enterprise bloat.',
    body: 'Attendance, fees, payroll, tasks, documents, inventory, and reporting in focused systems.',
  },
];

function EngagementCard({ item, index }) {
  const theme = useTheme();

  return (
    <Stagger
      delay={index * 0.08}
      stagger={0.08}
      sx={{
        scrollSnapAlign: 'start',
        flex: '0 0 auto',
        width: { xs: '82vw', sm: 360, md: 400 },
        p: { xs: 4, md: 5 },
        borderRadius: `${theme.shape.borderRadius}px`,
        border: 1,
        borderColor: 'divider',
        borderTop: 3,
        borderTopColor: 'primary.main',
        bgcolor: 'background.paper',
        transition: 'transform 0.24s ease, border-color 0.24s ease',
        '&:hover': { transform: 'translateY(-4px)', borderColor: 'text.primary' },
      }}
    >
      <StaggerItem>
        <Typography variant="caption" color="primary.main" sx={{ letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, display: 'block', mb: 3 }}>
          {item.eyebrow}
        </Typography>
      </StaggerItem>
      <StaggerItem>
        <Typography variant="h3" color="text.primary" sx={{ mb: 2 }}>
          {item.title}
        </Typography>
      </StaggerItem>
      <StaggerItem>
        <Typography variant="body2" color="text.secondary">
          {item.body}
        </Typography>
      </StaggerItem>
    </Stagger>
  );
}

export default function Engagements() {
  return (
    <ThemeSection mode="light" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 4, mb: { xs: 6, md: 9 } }}>
          <Stagger stagger={0.1} sx={{ maxWidth: 460 }}>
            <StaggerItem>
              <Typography variant="h2" color="text.primary" sx={{ mb: 3 }}>
                Built close to the problem.
              </Typography>
            </StaggerItem>
            <StaggerItem>
              <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 380 }}>
                Smaller teams move faster when they understand the work deeply and stay accountable after launch.
              </Typography>
            </StaggerItem>
          </Stagger>
          <Link href="/contact" style={{ flexShrink: 0 }}>
            <Button variant="outlined" color="inherit" endIcon={<ArrowForwardIcon size="1em" weight="bold" />} sx={{ borderColor: 'divider', color: 'text.primary', '&:hover': { borderColor: 'text.primary' } }}>
              Start a Project
            </Button>
          </Link>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: { xs: 2.5, md: 3 },
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            pb: 2,
            '&::-webkit-scrollbar': { height: 4 },
            '&::-webkit-scrollbar-thumb': { bgcolor: 'divider', borderRadius: 4 },
          }}
        >
          {engagements.map((item, index) => (
            <EngagementCard key={item.title} item={item} index={index} />
          ))}
        </Box>
      </Container>
    </ThemeSection>
  );
}
