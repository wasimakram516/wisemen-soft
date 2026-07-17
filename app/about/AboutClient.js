'use client';

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { ArrowRight as ArrowForwardIcon } from '@phosphor-icons/react';
import { ArrowSquareOut as OpenInNewIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import ThemeSection from '@/components/ThemeSection';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';

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
    <ThemeSection mode="light" as="div" sx={{ minHeight: '100vh' }}>
      <PageBanner
        eyebrow="About Wisemen Soft"
        titleTop="Built around"
        titleBottom="operational understanding."
        description="Custom software matched to how work actually happens: ERPs, HR tools, dashboards, internal systems, print management, and web apps built for real teams, not generic templates."
        maxWidth={640}
      />

      <Box sx={{ py: { xs: 10, md: 14 }, borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 8, md: 12 }} sx={{ alignItems: 'flex-start' }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stagger stagger={0.1}>
                <StaggerItem>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '3/4',
                      borderRadius: 1,
                      overflow: 'hidden',
                      border: 1,
                      borderColor: 'divider',
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
                </StaggerItem>

                <StaggerItem sx={{ mt: 3 }}>
                  <Typography variant="h6" color="text.primary" sx={{ fontWeight: 700, mb: 0.25 }}>
                    Wasim Akram
                  </Typography>
                  <Typography variant="caption" color="primary.main" sx={{ display: 'block', mb: 2 }}>
                    Founder and CEO, Wisemen Soft
                  </Typography>
                </StaggerItem>
                <StaggerItem>
                  <Button
                    variant="outlined"
                    size="small"
                    endIcon={<OpenInNewIcon size={16} weight="bold" />}
                    href="https://www.wasimakram.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ fontSize: '0.75rem' }}
                  >
                    Founder Portfolio
                  </Button>
                </StaggerItem>
              </Stagger>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Reveal direction="right" delay={0.1}>
                <Typography variant="h3" color="text.primary" sx={{ mb: 5 }}>
                  <Box component="span" sx={{ fontWeight: 500 }}>Led by a builder with </Box>
                  <Box component="span" sx={{ fontWeight: 800 }}>60+ production projects</Box>
                  <Box component="span" sx={{ fontWeight: 500 }}> across Pakistan, the GCC region, and Europe.</Box>
                </Typography>
              </Reveal>

              <Reveal direction="right" delay={0.16}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Wasim founded Wisemen Soft after years of building production systems across education, HR, print
                  operations, real-time event platforms, and data-heavy applications. The studio keeps that builder-led
                  mindset close to every project.
                </Typography>
              </Reveal>

              <Reveal direction="right" delay={0.22}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  He holds an MS in Computer Science with a research focus on Explainable AI, and brings the same
                  discipline to business software: understand the domain, model the system clearly, then build with
                  maintainability in mind.
                </Typography>
              </Reveal>

              <Reveal direction="right" delay={0.28}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
                  The working principle is simple: useful software starts before code. Discovery, process mapping, and
                  plain technical judgment are treated as core engineering work, not optional ceremony.
                </Typography>
              </Reveal>

              <Reveal direction="right" delay={0.34}>
                <Link href="/contact">
                  <Button variant="contained" endIcon={<ArrowForwardIcon size="1em" weight="bold" />}>
                    Work With Us
                  </Button>
                </Link>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Reveal sx={{ mb: 10 }}>
            <Typography variant="h2" color="text.primary" sx={{ maxWidth: 560 }}>
              Practical principles for serious software work.
            </Typography>
          </Reveal>

          <Box>
            {values.map((value, index) => (
              <Stagger
                key={value.title}
                delay={index * 0.08}
                stagger={0.08}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '24px 1fr' },
                  gap: { xs: 2, md: 6 },
                  py: 5.5,
                  borderBottom: index < values.length - 1 ? 1 : 0,
                  borderColor: 'divider',
                  transition: 'transform 0.24s ease, border-color 0.24s ease',
                  '&:hover': { transform: 'translateX(6px)', borderBottomColor: 'primary.main' },
                }}
              >
                <Box sx={{ width: 8, height: 8, borderRadius: '2px', bgcolor: 'primary.main', mt: 1, display: { xs: 'none', md: 'block' } }} />
                <Box>
                  <StaggerItem>
                    <Typography variant="h5" color="text.primary" sx={{ mb: 2, fontWeight: 700 }}>
                      {value.title}
                    </Typography>
                  </StaggerItem>
                  <StaggerItem>
                    <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 640 }}>
                      {value.description}
                    </Typography>
                  </StaggerItem>
                </Box>
              </Stagger>
            ))}
          </Box>
        </Container>
      </Box>
    </ThemeSection>
  );
}
