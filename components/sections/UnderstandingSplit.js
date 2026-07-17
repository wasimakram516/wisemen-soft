'use client';

import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { ArrowRight } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { Stagger, StaggerItem, useScrollReveal } from '@/components/motion/Reveal';
import ThemeSection from '@/components/ThemeSection';
import { TagList } from '@/components/Meta';

// The exact same five points on both sides, at the exact same coordinates as
// the Wisemen Soft mark (Logo.js's LogoMark, viewBox 0 0 44 44). The pieces
// don't change between "before" and "after" — only whether the connections
// between them are visible.
const points = [
  { x: 6, y: 24 },
  { x: 14, y: 32 },
  { x: 22, y: 20 },
  { x: 30, y: 32 },
  { x: 38, y: 12 },
];
const pathD = `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y} L ${points[2].x} ${points[2].y} L ${points[3].x} ${points[3].y} L ${points[4].x} ${points[4].y}`;
const dotDelays = [0.1, 0.3, 0.55, 0.75, 0.95];
const dotRadii = [2.5, 3, 4, 3, 3.5];

function NodeDiagram({ connected, accent }) {
  const { ref, controls } = useScrollReveal({ amount: 0.5 });

  return (
    <Box ref={ref} sx={{ mb: 4, position: 'relative' }}>
      <svg width={140} height={140} viewBox="0 0 44 44" fill="none" style={{ display: 'block', position: 'relative' }}>
        {connected && (
          <motion.path
            d={pathD}
            stroke={accent}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { pathLength: 0 },
              show: { pathLength: 1, transition: { duration: 0.9, ease: 'easeInOut', delay: 0.1 } },
            }}
          />
        )}
        {points.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x} cy={n.y}
            r={dotRadii[i]}
            fill={connected ? accent : 'none'}
            stroke={accent}
            strokeWidth="1.5"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              show: connected
                ? { scale: 1, opacity: 1, transition: { duration: 0.3, delay: dotDelays[i], type: 'spring', stiffness: 300 } }
                : { scale: 1, opacity: 0.55, transition: { duration: 0.35, delay: i * 0.07, type: 'spring', stiffness: 260, damping: 18 } },
            }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
        ))}
      </svg>
    </Box>
  );
}

function Column({ column, index }) {
  const theme = useTheme();
  const accent = column.connected ? theme.palette.primary.main : theme.palette.text.disabled;

  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Stagger
        delay={index * 0.08}
        stagger={0.1}
        sx={{
          height: '100%',
          py: { xs: 8, md: 10 },
          pr: { md: index === 0 ? 8 : 0 },
          pl: { md: index === 1 ? 8 : 0 },
          borderRight: { md: index === 0 ? 1 : 0 },
          borderBottom: { xs: index === 0 ? 1 : 0, md: 0 },
          borderColor: 'divider',
          position: 'relative',
        }}
      >
        {index === 1 && (
          <Box
            aria-hidden
            sx={{
              display: { xs: 'none', md: 'flex' },
              position: 'absolute', top: '50%', left: 0, transform: 'translate(-50%, -50%)',
              width: 36, height: 36, borderRadius: '50%',
              bgcolor: 'background.default', border: 1, borderColor: 'divider',
              alignItems: 'center', justifyContent: 'center', zIndex: 2,
            }}
          >
            <ArrowRight size={16} weight="bold" color={theme.palette.primary.main} />
          </Box>
        )}

        <StaggerItem>
          <NodeDiagram connected={column.connected} accent={accent} />
        </StaggerItem>

        <StaggerItem>
          <Typography
            variant="caption"
            sx={{ letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, display: 'block', mb: 2 }}
            color={column.connected ? 'primary.main' : 'text.disabled'}
          >
            {column.eyebrow}
          </Typography>
        </StaggerItem>
        <StaggerItem>
          <Typography variant="h3" color="text.primary" sx={{ mb: 2 }}>
            {column.title}
          </Typography>
        </StaggerItem>
        <StaggerItem>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 360, mb: 4 }}>
            {column.body}
          </Typography>
        </StaggerItem>
        <StaggerItem>
          <TagList items={column.points} />
        </StaggerItem>
      </Stagger>
    </Grid>
  );
}

const columns = [
  {
    eyebrow: 'Before code',
    title: 'Requests look simple.',
    body: 'A one-line ask hides everything that actually has to be built.',
    points: ['Build a portal', 'Automate a report', 'Replace spreadsheets'],
    connected: false,
  },
  {
    eyebrow: 'After understanding',
    title: 'The real system appears.',
    body: 'Discovery turns scattered asks into one shape everyone can see.',
    points: ['Users and handoffs', 'Rules and exceptions', 'Data that must be trusted'],
    connected: true,
  },
];

export default function UnderstandingSplit() {
  return (
    <ThemeSection mode="light">
      <Container maxWidth="lg">
        <Grid container>
          {columns.map((column, index) => (
            <Column key={column.eyebrow} column={column} index={index} />
          ))}
        </Grid>
      </Container>
    </ThemeSection>
  );
}
