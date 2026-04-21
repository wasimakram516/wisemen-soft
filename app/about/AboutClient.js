'use client';

import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const MotionBox = motion.create(Box);

const values = [
  {
    title: 'Understanding before execution.',
    description: 'Every project starts with learning your domain — not just your requirements. We ask questions most developers skip, because those are usually the ones that matter.',
  },
  {
    title: 'Honest over impressive.',
    description: "If we're not the right fit, we say so. We'd rather lose the project than ship something we can't stand behind.",
  },
  {
    title: 'Code that outlives the contract.',
    description: 'We write for the next developer. Clean, documented, maintainable. Your team should be able to own this without us.',
  },
  {
    title: 'You work with the builder.',
    description: 'No account managers, no outsourced execution. The person you talk to is the person writing the code.',
  },
];

export default function AboutClient() {
  return (
    <Box sx={{ background: '#0A0A0A', minHeight: '100vh' }}>

      {/* Header */}
      <Box sx={{ pt: { xs: 18, md: 22 }, pb: { xs: 12, md: 16 }, borderBottom: '1px solid rgba(212,168,67,0.08)' }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 6 }}
          >
            <Box sx={{ width: 28, height: 1, background: '#D4A843' }} />
            <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem' }}>
              About Wisemen Soft
            </Typography>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            sx={{ maxWidth: 800, mb: 6 }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: '2.2rem', md: '3.2rem', lg: '3.8rem' }, color: '#F0EDE6', lineHeight: 1.0, mb: 5 }}
            >
              A software studio built on one principle — understand first, build second.
            </Typography>
            <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9, fontSize: '1.05rem', maxWidth: 600 }}>
              Wisemen Soft was founded with a clear position: most software fails not because of bad code, but because the people building it didn't fully understand the problem. We exist to close that gap.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Founder Section */}
      <Box sx={{ py: { xs: 12, md: 18 }, borderBottom: '1px solid rgba(212,168,67,0.08)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 8, md: 12 }} sx={{ alignItems: 'flex-start' }}>

            {/* Photo */}
            <Grid size={{ xs: 12, md: 4 }}>
              <MotionBox
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '3/4',
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '1px solid rgba(212,168,67,0.12)',
                  }}
                >
                  <Image
                    src="/wasim-akram.jpg"
                    alt="Wasim Akram — Founder & CEO, Wisemen Soft"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </Box>

                <Box sx={{ mt: 3, pl: 0.5 }}>
                  <Typography variant="h6" sx={{ color: '#F0EDE6', fontWeight: 700, mb: 0.25 }}>
                    Wasim Akram
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#D4A843', display: 'block', mb: 2 }}>
                    Founder & CEO — Wisemen Soft
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
                    Personal Portfolio
                  </Button>
                </Box>
              </MotionBox>
            </Grid>

            {/* Bio */}
            <Grid size={{ xs: 12, md: 8 }}>
              <MotionBox
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 5 }}>
                  <Box sx={{ width: 28, height: 1, background: '#D4A843' }} />
                  <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem' }}>
                    The Founder
                  </Typography>
                </Box>

                <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, color: '#F0EDE6', mb: 5, lineHeight: 1.15 }}>
                  Wasim Akram founded Wisemen Soft after 4+ years of building production software across three continents.
                </Typography>

                <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9, mb: 4 }}>
                  With 60+ production projects shipped across Pakistan, the GCC region, and Europe — ranging from school ERPs and HR systems to real-time event platforms and AI/ML pipelines — Wasim brings a rare combination of breadth and depth to every engagement.
                </Typography>

                <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9, mb: 4 }}>
                  He holds an MS in Computer Science with a research focus on Explainable AI (XAI), and has spent years at the intersection of engineering precision and domain understanding.
                </Typography>

                <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9, mb: 6 }}>
                  The founding vision was simple: build a software studio where understanding the problem is non-negotiable — not a nice-to-have, not something that gets skipped when timelines get tight. Every engagement at Wisemen Soft begins with discovery, and every delivery is something the team stands behind.
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

      {/* Why the name */}
      <Box sx={{ py: { xs: 12, md: 18 }, borderBottom: '1px solid rgba(212,168,67,0.08)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 14 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                  <Box sx={{ width: 28, height: 1, background: '#D4A843' }} />
                  <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem' }}>
                    The Name
                  </Typography>
                </Box>
                <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, color: '#F0EDE6', lineHeight: 1.2 }}>
                  Why Wisemen?
                </Typography>
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9, mb: 4, fontSize: '1.05rem' }}>
                  A wiseman doesn&apos;t rush to answer. He listens, observes, and asks better questions than everyone else in the room. That&apos;s the standard Wisemen Soft holds every project to.
                </Typography>
                <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9, fontSize: '1.05rem' }}>
                  Before we architect anything, before we choose a stack, before we write a single line — we understand the problem deeply enough that the right solution becomes obvious. That&apos;s not a process step. It&apos;s the whole point.
                </Typography>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values */}
      <Box sx={{ py: { xs: 12, md: 18 } }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{ mb: 10 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <Box sx={{ width: 28, height: 1, background: '#D4A843' }} />
              <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem' }}>
                How We Operate
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#F0EDE6', maxWidth: 520 }}>
              Things we actually believe.
            </Typography>
          </MotionBox>

          <Box>
            {values.map((v, i) => (
              <MotionBox
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                sx={{
                  display: 'flex',
                  gap: { xs: 3, md: 8 },
                  py: 6,
                  borderBottom: i < values.length - 1 ? '1px solid rgba(212,168,67,0.06)' : 'none',
                  flexDirection: { xs: 'column', md: 'row' },
                }}
              >
                <Typography sx={{ color: '#D4A843', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', minWidth: 24, mt: { md: 0.5 } }}>
                  0{i + 1}
                </Typography>
                <Box>
                  <Typography variant="h5" sx={{ color: '#F0EDE6', mb: 2, fontWeight: 700, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                    {v.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.9, maxWidth: 560 }}>
                    {v.description}
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
