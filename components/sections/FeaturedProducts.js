'use client';

import { Box, Container, Typography, Grid, Chip, Button } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MotionBox = motion.create(Box);

const work = [
  {
    index: '01',
    name: 'Nexus',
    type: 'School ERP',
    outcome: 'Replaced spreadsheets and manual registers across an entire school: attendance, fees, exams, and payroll in one system.',
    tags: ['ERP', 'Education', 'Web'],
    status: 'In Development',
    statusColor: '#D4A843',
  },
  {
    index: '02',
    name: 'PressMaster',
    type: 'Print Management',
    outcome: 'Gave a printing press full visibility into orders, inventory, and billing, from intake to invoice in one workflow.',
    tags: ['Desktop', 'POS', 'Management'],
    status: 'Live',
    statusColor: '#6DB87E',
  },
  {
    index: '03',
    name: 'StaffSync',
    type: 'HR & Supervision',
    outcome: 'Built structured workforce management for a European firm: check-in, leave, tasks, and messaging without third-party tools.',
    tags: ['HR', 'Enterprise', 'Desktop'],
    status: 'Live',
    statusColor: '#6DB87E',
  },
];

export default function FeaturedProducts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Box ref={ref} sx={{ py: { xs: 12, md: 18 }, background: '#080808', borderTop: '1px solid rgba(212,168,67,0.08)' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 12, flexWrap: 'wrap', gap: 4 }}
        >
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Box sx={{ width: 28, height: 1, background: '#D4A843' }} />
              <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem' }}>
                Selected Work
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3.2rem' }, color: '#F0EDE6' }}>
              Products we&apos;ve built<br />and shipped.
            </Typography>
          </Box>
          <Link href="/products">
            <Button variant="text" endIcon={<ArrowForwardIcon />} sx={{ color: '#A8A39D', '&:hover': { color: '#F0EDE6' } }}>
              All Products
            </Button>
          </Link>
        </MotionBox>

        {/* Work list */}
        <Box>
          {work.map((item, i) => (
            <MotionBox
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href="/case-studies">
                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 3, md: 6 },
                    alignItems: { xs: 'flex-start', md: 'center' },
                    py: { xs: 5, md: 6 },
                    borderBottom: '1px solid rgba(212,168,67,0.06)',
                    cursor: 'pointer',
                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                    transition: 'transform 0.28s ease, border-color 0.28s ease, background 0.28s ease',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      borderBottomColor: 'rgba(212,168,67,0.18)',
                      background: 'rgba(240,237,230,0.018)',
                    },
                    '&:hover .work-name': { color: '#D4A843' },
                    '&:hover .work-arrow': { transform: 'translateX(6px)', opacity: 1 },
                  }}
                >
                  <Typography sx={{ fontSize: '0.72rem', color: '#6B6560', fontWeight: 700, letterSpacing: '0.1em', minWidth: 24, mt: { xs: 0.5, md: 0 } }}>
                    {item.index}
                  </Typography>

                  <Box sx={{ flex: '0 0 160px' }}>
                    <Typography
                      className="work-name"
                      variant="h5"
                      sx={{ fontWeight: 700, color: '#F0EDE6', transition: 'color 0.3s', mb: 0.5 }}
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#A8A39D' }}>
                      {item.type}
                    </Typography>
                  </Box>

                  <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.8, flex: 1, maxWidth: 480 }}>
                    {item.outcome}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', ml: { md: 'auto' } }}>
                    <Chip
                      label={item.status}
                      size="small"
                      sx={{
                        background: `${item.statusColor}12`,
                        color: item.statusColor,
                        border: `1px solid ${item.statusColor}30`,
                        fontWeight: 600,
                      }}
                    />
                    <ArrowForwardIcon
                      className="work-arrow"
                      sx={{
                        color: '#D4A843',
                        fontSize: 18,
                        opacity: 0,
                        transition: 'all 0.3s',
                        display: { xs: 'none', md: 'block' },
                      }}
                    />
                  </Box>
                </Box>
              </Link>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
