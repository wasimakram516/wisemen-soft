'use client';

import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const cases = [
  {
    index: '01',
    product: 'Nexus',
    client: 'Private School — Pakistan',
    title: "Replacing a school's paper-based operations with a system that actually fits how they work.",
    tags: ['ERP', 'Education', 'Desktop → Web'],
    problem: 'The school was running on spreadsheets, physical registers, and manual everything — attendance, fees, exams, payroll. Nothing talked to anything else. Every report took hours.',
    approach: 'We spent time with admin staff, teachers, and management before designing anything. The result was a system built around their actual workflows, not a generic school template.',
    outcomes: [
      'All attendance moved digital — teachers mark from class',
      'Fee generation automated — monthly billing in minutes not days',
      'Exam results tracked end-to-end from marks to report cards',
      'Salary processing centralized with full payslip generation',
      'Single dashboard for school management overview',
    ],
    stack: ['C#', 'WinForms', 'SQL Server', 'Crystal Reports'],
  },
  {
    index: '02',
    product: 'PressMaster',
    client: 'Media War — Pakistan',
    title: 'Bringing order to a printing press that was losing track of orders and inventory.',
    tags: ['POS', 'Print', 'Desktop'],
    problem: 'Orders were tracked on paper. Inventory was guesswork. Invoices were created manually in Word. As volume grew, the cracks became expensive mistakes.',
    approach: 'We shadowed the team for a week to understand how orders actually moved — from client call to production to delivery. Then we built PressMaster around that flow, not around a textbook idea of what a POS should look like.',
    outcomes: [
      'Order lifecycle tracked from intake to delivery',
      'Inventory updated in real time as materials are consumed',
      'Automated invoice generation eliminates billing errors',
      'Client account history always at hand',
      'End-of-day and end-of-month reports in one click',
    ],
    stack: ['C#', 'WinForms', 'SQL Server', 'Crystal Reports'],
  },
  {
    index: '03',
    product: 'StaffSync',
    client: 'Confidential — Europe',
    title: 'Building internal HR infrastructure for a company that had outgrown spreadsheet tracking.',
    tags: ['HR', 'Enterprise', 'Desktop'],
    problem: 'The company had grown to a size where tracking attendance, leaves, and tasks informally no longer worked. But enterprise HRMS was overkill — expensive, complex, and mostly unused.',
    approach: 'The brief was clear: build what we actually use, not what a vendor thinks we need. We built to their exact policies — configurable working hours, their leave calculation rules, their messaging preferences.',
    outcomes: [
      'Attendance captured digitally with configurable arrival/departure policy',
      'Leave requests go through a proper approval workflow',
      'Tasks assigned and tracked without a third-party tool',
      'Internal announcements and notifications without Slack',
      'Surveys run inside the system — results visible to management',
      'Multi-language support built in from day one',
    ],
    stack: ['C#', 'WinForms', 'MySQL', '.NET'],
  },
];

export default function CaseStudiesPage() {
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
              Case Studies
            </Typography>
          </MotionBox>
          <MotionBox initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '3.4rem' }, color: '#F0EDE6', mb: 4, lineHeight: 1.0, maxWidth: 700 }}>
              Problems we understood.
              <br />
              Products we shipped.
            </Typography>
            <Typography variant="body1" sx={{ color: '#A8A39D', fontSize: '1.05rem', lineHeight: 1.9, maxWidth: 500 }}>
              Every case here started with us learning the domain before writing a spec. The result is software that actually fits.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Cases */}
      <Container maxWidth="lg">
        {cases.map((c, i) => (
          <MotionBox
            key={c.product}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{ py: { xs: 10, md: 14 }, borderBottom: i < cases.length - 1 ? '1px solid rgba(212,168,67,0.08)' : 'none', position: 'relative', overflow: 'hidden' }}
          >
            <Typography
              aria-hidden
              sx={{
                position: 'absolute',
                top: { xs: -10, md: 0 },
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
              {c.index}
            </Typography>
            <Box sx={{ mb: 8 }}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3, flexWrap: 'wrap' }}>
                <Typography sx={{ color: '#6B6560', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em' }}>{c.index}</Typography>
                <Typography variant="caption" sx={{ color: '#D4A843' }}>{c.product}</Typography>
                <Typography variant="caption" sx={{ color: '#6B6560' }}>·</Typography>
                <Typography variant="caption" sx={{ color: '#6B6560' }}>{c.client}</Typography>
                {c.tags.map((t) => (
                  <Chip key={t} label={t} size="small" sx={{ background: 'rgba(212,168,67,0.32)', color: '#A8A39D', border: '1px solid rgba(212,168,67,0.32)' }} />
                ))}
              </Box>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, color: '#F0EDE6', lineHeight: 1.25, maxWidth: 720 }}>
                {c.title}
              </Typography>
            </Box>

            <Grid container spacing={{ xs: 6, md: 8 }}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                  The Problem
                </Typography>
                <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.9 }}>{c.problem}</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                  Our Approach
                </Typography>
                <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.9 }}>{c.approach}</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                  What Changed
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                  {c.outcomes.map((o) => (
                    <Box key={o} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#D4A843', mt: 0.8, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.7 }}>{o}</Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {c.stack.map((s) => (
                    <Chip key={s} label={s} size="small" sx={{ background: 'rgba(212,168,67,0.32)', color: '#D4A843', border: '1px solid rgba(212,168,67,0.15)' }} />
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
