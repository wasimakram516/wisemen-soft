'use client';

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const MotionBox = motion.create(Box);

const values = [
  {
    title: 'Understand before execution.',
    description:
      'Every engagement starts with the workflow, the people, the data, and the constraints. Requirements matter, but context is what keeps software useful.',
  },
  {
    title: 'Stay honest about fit.',
    description:
      'We would rather say no early than ship a system we cannot stand behind. Clear scope and direct communication protect both sides.',
  },
  {
    title: 'Build for ownership.',
    description:
      'Code should outlive the contract. We keep architecture understandable, flows documented, and handover practical.',
  },
  {
    title: 'Keep builders close.',
    description:
      'You work with people who can reason about the product and the implementation, not a chain of account handoffs.',
  },
];

export default function AboutClient() {
  return (
    <Box sx={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Box sx={{ pt: { xs: 18, md: 22 }, pb: { xs: 12, md: 16 }, borderBottom: '1px solid rgba(212,168,67,0.08)' }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            sx={{ mb: 6 }}
          >
            
            <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 700 }}>
              About Wisemen Soft
            </Typography>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            sx={{ maxWidth: 820 }}
          >
            <Typography variant="h1" sx={{ fontSize: { xs: '2.35rem', md: '3.5rem', lg: '4.2rem' }, color: '#F0EDE6', lineHeight: 1.02, mb: 5 }}>
              <Box component="span" sx={{ fontWeight: 100 }}>A software house built around </Box>
              <Box component="span" sx={{ fontWeight: 800 }}>operational understanding.</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9, fontSize: '1.05rem', maxWidth: 640 }}>
              Wisemen Soft exists for businesses that need custom software to match the way work actually happens:
              ERPs, HR tools, dashboards, internal systems, print management, and web applications that support real
              teams instead of forcing them into generic templates.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 12, md: 18 }, borderBottom: '1px solid rgba(212,168,67,0.08)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 8, md: 12 }} sx={{ alignItems: 'flex-start' }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <MotionBox initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '3/4',
                    borderRadius: 2,
                    overflow: 'hidden',
                    border: '1px solid rgba(92,177,170,0.18)',
                  }}
                >
                  <Image
                    src="/images/wasim-akram.jpg"
                    alt="Wasim Akram, Founder and CEO of Wisemen Soft"
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" sx={{ color: '#F0EDE6', fontWeight: 700, mb: 0.25 }}>
                    Wasim Akram
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#D4A843', display: 'block', mb: 2 }}>
                    Founder and CEO, Wisemen Soft
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    endIcon={<OpenInNewIcon fontSize="small" />}
                    href="https://www.wasimakram.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ fontSize: '0.75rem' }}
                  >
                    Founder Portfolio
                  </Button>
                </Box>
              </MotionBox>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <MotionBox initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                <Box sx={{ mb: 5 }}>
                  
                  <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem' }}>
                    Founder Led
                  </Typography>
                </Box>

                <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.45rem' }, color: '#F0EDE6', mb: 5, lineHeight: 1.15 }}>
                  <Box component="span" sx={{ fontWeight: 100 }}>Led by a builder with </Box>
                  <Box component="span" sx={{ fontWeight: 800 }}>60+ production projects</Box>
                  <Box component="span" sx={{ fontWeight: 100 }}> across Pakistan, the GCC region, and Europe.</Box>
                </Typography>

                <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9, mb: 4 }}>
                  Wasim founded Wisemen Soft after years of building production systems across education, HR, print
                  operations, real-time event platforms, and data-heavy applications. The studio keeps that builder-led
                  mindset close to every project.
                </Typography>

                <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9, mb: 4 }}>
                  He holds an MS in Computer Science with a research focus on Explainable AI, and brings the same
                  discipline to business software: understand the domain, model the system clearly, then build with
                  maintainability in mind.
                </Typography>

                <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9, mb: 6 }}>
                  The working principle is simple: useful software starts before code. Discovery, process mapping, and
                  plain technical judgment are treated as core engineering work, not optional ceremony.
                </Typography>

                <Link href="/contact">
                  <Button variant="contained" endIcon={<ArrowForwardIcon />}>
                    Work With Us
                  </Button>
                </Link>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 12, md: 18 } }}>
        <Container maxWidth="lg">
          <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} sx={{ mb: 10 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              
              <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem' }}>
                How We Operate
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#F0EDE6', maxWidth: 560 }}>
              Practical principles for serious software work.
            </Typography>
          </MotionBox>

          <Box>
            {values.map((value, index) => (
              <MotionBox
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '72px 1fr' },
                  gap: { xs: 2, md: 6 },
                  py: 5.5,
                  borderBottom: index < values.length - 1 ? '1px solid rgba(212,168,67,0.06)' : 'none',
                  transition: 'transform 0.24s ease, border-color 0.24s ease',
                  '&:hover': {
                    transform: 'translateX(6px)',
                    borderBottomColor: 'rgba(212,168,67,0.18)',
                  },
                }}
              >
                <Typography sx={{ color: '#D4A843', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                  {String(index + 1).padStart(2, '0')}
                </Typography>
                <Box>
                  <Typography variant="h5" sx={{ color: '#F0EDE6', mb: 2, fontWeight: 700, fontSize: { xs: '1.15rem', md: '1.35rem' } }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.9, maxWidth: 640 }}>
                    {value.description}
                  </Typography>
                </Box>
              </MotionBox>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
