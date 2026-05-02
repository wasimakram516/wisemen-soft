'use client';

import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const cases = [
  {
    index: '01',
    product: 'Nexus',
    client: 'Private School, Pakistan',
    title: "Replacing a school's paper-based operations with software that fits daily admin work.",
    tags: ['ERP', 'Education', 'Desktop to Web'],
    problem:
      'The school was running on spreadsheets, physical registers, and manual processes for attendance, fees, exams, and payroll. Reports took hours because the work was scattered.',
    approach:
      'We studied the admin staff, teachers, and management workflows before designing the system. The result was built around the school process instead of a generic template.',
    outcomes: [
      'Attendance moved digital for teachers and admin staff',
      'Monthly fee generation became a minutes-long workflow',
      'Exam marks and report cards were tracked end to end',
      'Salary processing moved into one centralized system',
      'Management gained a single operational dashboard',
    ],
    stack: ['C#', 'WinForms', 'SQL Server', 'Crystal Reports'],
  },
  {
    index: '02',
    product: 'PressMaster',
    client: 'Media War, Pakistan',
    title: 'Bringing order to a printing press that needed control over orders, stock, and billing.',
    tags: ['POS', 'Print', 'Desktop'],
    problem:
      'Orders were tracked on paper, inventory was guesswork, and invoices were created manually. As volume grew, those gaps became costly mistakes.',
    approach:
      'We shadowed how orders moved from client call to production and delivery, then shaped PressMaster around that real operating flow.',
    outcomes: [
      'Order lifecycle tracked from intake to delivery',
      'Inventory updated as materials are consumed',
      'Invoice generation reduced billing errors',
      'Client account history became easy to review',
      'Daily and monthly reports became one-click tasks',
    ],
    stack: ['C#', 'WinForms', 'SQL Server', 'Crystal Reports'],
  },
  {
    index: '03',
    product: 'StaffSync',
    client: 'Confidential, Europe',
    title: 'Building practical HR infrastructure for a company that had outgrown spreadsheet tracking.',
    tags: ['HR', 'Enterprise', 'Desktop'],
    problem:
      'The company needed reliable attendance, leave, task, and internal communication flows, but enterprise HRMS tools were too heavy for the way the team worked.',
    approach:
      'The brief was to build what the team would actually use. We modeled their working hours, leave calculations, messaging flow, and supervision rules directly into the system.',
    outcomes: [
      'Attendance captured with configurable arrival and departure policy',
      'Leave requests routed through approval workflow',
      'Tasks assigned and tracked without a third-party tool',
      'Announcements and notifications kept inside the system',
      'Surveys and feedback became visible to management',
      'Multi-language support was included from day one',
    ],
    stack: ['C#', 'WinForms', 'MySQL', '.NET'],
  },
];

export default function CaseStudiesPage() {
  return (
    <Box sx={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Box sx={{ pt: { xs: 18, md: 22 }, pb: { xs: 10, md: 14 }, borderBottom: '1px solid rgba(212,168,67,0.08)' }}>
        <Container maxWidth="lg">
          <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 5 }}>
            <Box sx={{ width: 28, height: 1, background: '#C16E5A' }} />
            <Typography variant="caption" sx={{ color: '#C16E5A', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 700 }}>
              Case Studies
            </Typography>
          </MotionBox>
          <MotionBox initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.35rem', md: '3.5rem' }, color: '#F0EDE6', mb: 4, lineHeight: 1.02, maxWidth: 760 }}>
              Workflows understood. Systems shipped.
            </Typography>
            <Typography variant="body1" sx={{ color: '#A8A39D', fontSize: '1.05rem', lineHeight: 1.9, maxWidth: 560 }}>
              Each project started with operational discovery. The outcome was software shaped around the people using
              it every day.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {cases.map((caseItem, index) => (
          <MotionBox
            key={caseItem.product}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
              py: { xs: 10, md: 14 },
              borderBottom: index < cases.length - 1 ? '1px solid rgba(212,168,67,0.08)' : 'none',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.28s ease',
              '&:hover': {
                borderBottomColor: 'rgba(193,110,90,0.22)',
              },
            }}
          >
            <Typography
              aria-hidden
              sx={{
                position: 'absolute',
                top: { xs: 0, md: 8 },
                right: { xs: -2, md: 0 },
                fontSize: { xs: '5rem', md: '12rem' },
                fontWeight: 800,
                color: 'rgba(193,110,90,0.08)',
                lineHeight: 1,
                userSelect: 'none',
                fontFamily: 'var(--font-display)',
                pointerEvents: 'none',
              }}
            >
              {caseItem.index}
            </Typography>

            <Box sx={{ mb: 8, position: 'relative' }}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3, flexWrap: 'wrap' }}>
                <Typography sx={{ color: '#6B6560', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                  {caseItem.index}
                </Typography>
                <Typography variant="caption" sx={{ color: '#D4A843' }}>{caseItem.product}</Typography>
                <Typography variant="caption" sx={{ color: '#6B6560' }}>-</Typography>
                <Typography variant="caption" sx={{ color: '#6B6560' }}>{caseItem.client}</Typography>
                {caseItem.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      background: 'rgba(212,168,67,0.06)',
                      color: '#C8C3BC',
                      border: '1px solid rgba(212,168,67,0.14)',
                      transition: 'transform 0.2s ease, border-color 0.2s ease',
                      '&:hover': { transform: 'translateY(-2px)', borderColor: 'rgba(212,168,67,0.34)' },
                    }}
                  />
                ))}
              </Box>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.6rem', md: '2.25rem' }, color: '#F0EDE6', lineHeight: 1.25, maxWidth: 760 }}>
                {caseItem.title}
              </Typography>
            </Box>

            <Grid container spacing={{ xs: 6, md: 8 }} sx={{ position: 'relative' }}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                  The Problem
                </Typography>
                <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.9 }}>{caseItem.problem}</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                  Our Approach
                </Typography>
                <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.9 }}>{caseItem.approach}</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                  What Changed
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                  {caseItem.outcomes.map((outcome) => (
                    <Box
                      key={outcome}
                      sx={{
                        display: 'flex',
                        gap: 2,
                        alignItems: 'flex-start',
                        transition: 'transform 0.2s ease',
                        '&:hover': { transform: 'translateX(4px)' },
                      }}
                    >
                      <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#D4A843', mt: 0.8, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.7 }}>{outcome}</Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {caseItem.stack.map((stackItem) => (
                    <Chip
                      key={stackItem}
                      label={stackItem}
                      size="small"
                      sx={{
                        background: 'rgba(92,177,170,0.06)',
                        color: '#5CB1AA',
                        border: '1px solid rgba(92,177,170,0.16)',
                        transition: 'transform 0.2s ease, border-color 0.2s ease',
                        '&:hover': { transform: 'translateY(-2px)', borderColor: 'rgba(92,177,170,0.34)' },
                      }}
                    />
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
