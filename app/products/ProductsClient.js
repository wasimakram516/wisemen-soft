'use client';

import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const products = [
  {
    index: '01',
    name: 'Nexus',
    type: 'School ERP',
    status: 'Web version in development',
    statusColor: '#D4A843',
    summary: 'A school runs on coordination. Nexus replaces disconnected spreadsheets with a single system that handles everything — from student enrollment to salary processing.',
    features: [
      'Student & teacher management',
      'Daily attendance tracking',
      'Fee collection & billing',
      'Exam scheduling & results',
      'Staff salaries & payroll',
      'Reporting & analytics',
    ],
    note: 'Launching as nexus.wisemensoft.com',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    index: '02',
    name: 'PressMaster',
    type: 'Print Management System',
    status: 'Live · Desktop',
    statusColor: '#6DB87E',
    summary: 'Running a printing press means juggling orders, materials, clients, and invoices simultaneously. PressMaster gives you full visibility over every job from intake to delivery.',
    features: [
      'Order tracking & management',
      'Inventory management',
      'Customer accounts',
      'Invoice & billing generation',
      'Production workflow status',
      'Business reports',
    ],
    note: null,
    stack: ['C#', 'WinForms', 'SQL Server', 'Crystal Reports'],
  },
  {
    index: '03',
    name: 'StaffSync',
    type: 'Employee Supervision',
    status: 'Live · Desktop',
    statusColor: '#6DB87E',
    summary: "Built for companies that need structured HR without the overhead of enterprise software. StaffSync handles the day-to-day: who came in, who's off, what's being worked on.",
    features: [
      'Digital check-in & check-out',
      'Attendance analytics & policies',
      'Leave request & approval flow',
      'Task management',
      'Internal messaging & notifications',
      'Document sharing & surveys',
    ],
    note: null,
    stack: ['C#', 'WinForms', 'MySQL', '.NET'],
  },
];

export default function ProductsPage() {
  return (
    <Box sx={{ background: '#0A0A0A', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ pt: { xs: 18, md: 22 }, pb: { xs: 10, md: 14 }, borderBottom: '1px solid rgba(212,168,67,0.08)' }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 5 }}
          >
            <Box sx={{ width: 28, height: 1, background: '#D4A843' }} />
            <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem' }}>
              Products
            </Typography>
          </MotionBox>
          <MotionBox initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '3.4rem' }, color: '#F0EDE6', mb: 4, lineHeight: 1.0, maxWidth: 700 }}>
              Software built for specific problems.
            </Typography>
            <Typography variant="body1" sx={{ color: '#A8A39D', fontSize: '1.05rem', lineHeight: 1.9, maxWidth: 500 }}>
              We don&apos;t build generic tools. Every product here solves a domain-specific problem we took the time to actually understand.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Products */}
      <Container maxWidth="lg">
        {products.map((p, i) => (
          <MotionBox
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{ py: { xs: 10, md: 14 }, borderBottom: i < products.length - 1 ? '1px solid rgba(212,168,67,0.08)' : 'none', position: 'relative', overflow: 'hidden' }}
          >
            {/* Faint background index — alternates left/right */}
            <Typography
              aria-hidden
              sx={{
                position: 'absolute',
                top: { xs: -10, md: 10 },
                right: { xs: -5, md: -10 },
                fontSize: { xs: '7rem', md: '14rem' },
                fontWeight: 800,
                color: 'rgba(212,168,67,0.32)',
                lineHeight: 1,
                userSelect: 'none',
                fontFamily: 'var(--font-display)',
                pointerEvents: 'none',
              }}
            >
              {p.index}
            </Typography>
            <Grid container spacing={{ xs: 6, md: 12 }}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Typography sx={{ color: '#6B6560', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                    {p.index}
                  </Typography>
                  <Chip
                    label={p.status}
                    size="small"
                    sx={{
                      background: `${p.statusColor}12`,
                      color: p.statusColor,
                      border: `1px solid ${p.statusColor}28`,
                      fontWeight: 600,
                    }}
                  />
                </Box>
                <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, color: '#F0EDE6', mb: 1, lineHeight: 1.05 }}>
                  {p.name}
                </Typography>
                <Typography variant="caption" sx={{ color: '#D4A843', display: 'block', mb: 4, letterSpacing: '0.05em' }}>
                  {p.type}
                </Typography>
                <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9, mb: 4 }}>
                  {p.summary}
                </Typography>
                {p.note && (
                  <Typography variant="caption" sx={{ color: '#D4A843', borderLeft: '2px solid rgba(212,168,67,0.4)', pl: 2, display: 'block', mb: 4 }}>
                    {p.note}
                  </Typography>
                )}
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {p.stack.map((s) => (
                    <Chip
                      key={s}
                      label={s}
                      size="small"
                      sx={{ background: 'rgba(212,168,67,0.32)', color: '#A8A39D', border: '1px solid rgba(212,168,67,0.32)' }}
                    />
                  ))}
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 7 }}>
                <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 4, display: 'block' }}>
                  What it covers
                </Typography>
                <Box>
                  {p.features.map((f, fi) => (
                    <Box
                      key={f}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        py: 2.5,
                        borderBottom: fi < p.features.length - 1 ? '1px solid rgba(212,168,67,0.32)' : 'none',
                      }}
                    >
                      <Typography sx={{ color: '#D4A843', fontSize: '0.65rem', fontWeight: 700, minWidth: 18 }}>
                        {String(fi + 1).padStart(2, '0')}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#A8A39D' }}>
                        {f}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </MotionBox>
        ))}
      </Container>
    </Box>
  );
}
