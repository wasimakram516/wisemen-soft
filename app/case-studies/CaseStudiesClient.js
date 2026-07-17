'use client';

import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import { cases } from './data';
import { TagList } from '@/components/Meta';
import PageBanner from '@/components/PageBanner';
import ThemeSection from '@/components/ThemeSection';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';

export default function CaseStudiesPage() {
  return (
    <ThemeSection mode="light" as="div" sx={{ minHeight: '100vh' }}>
      <PageBanner
        eyebrow="Case Studies"
        titleTop="Workflows understood."
        titleBottom="Systems shipped."
        description="Each project started with operational discovery — the outcome was software shaped around the people using it every day."
        maxWidth={640}
      />

      <Container maxWidth="lg">
        {cases.map((caseItem, index) => (
          <Box
            key={caseItem.product}
            sx={{
              py: { xs: 7, md: 9 },
              borderBottom: index < cases.length - 1 ? 1 : 0,
              borderColor: 'divider',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.28s ease',
              '&:hover': { borderColor: 'primary.main' },
            }}
          >
            <Typography
              aria-hidden
              color="primary.main"
              sx={{
                position: 'absolute', top: { xs: 0, md: 4 }, right: { xs: -2, md: 0 },
                fontSize: { xs: '4rem', md: '8rem' }, fontWeight: 800,
                opacity: 0.07, lineHeight: 1, userSelect: 'none',
                fontFamily: 'var(--font-display)', pointerEvents: 'none',
              }}
            >
              {caseItem.index}
            </Typography>

            <Stagger delay={index * 0.06} stagger={0.08} sx={{ position: 'relative', maxWidth: 760 }}>
              <StaggerItem sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2.5, flexWrap: 'wrap' }}>
                <Typography variant="caption" color="primary.main">{caseItem.product}</Typography>
                <Typography variant="caption" color="text.disabled">·</Typography>
                <Typography variant="caption" color="text.disabled">{caseItem.client}</Typography>
                <TagList items={caseItem.tags} />
              </StaggerItem>

              <StaggerItem>
                <Typography variant="h3" color="text.primary" sx={{ fontWeight: 500, mb: 2.5 }}>
                  {caseItem.title}
                </Typography>
              </StaggerItem>

              <StaggerItem>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 620 }}>
                  {caseItem.intro}
                </Typography>
              </StaggerItem>

              <StaggerItem sx={{ display: 'flex', gap: 3, alignItems: 'center', flexWrap: 'wrap' }}>
                <Link href={`/case-studies/${caseItem.slug}`} style={{ textDecoration: 'none' }}>
                  <Typography variant="caption" color="primary.main" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, borderBottom: 1, borderColor: 'primary.main', pb: 0.25 }}>
                    Full case study →
                  </Typography>
                </Link>
                {caseItem.link && (
                  <a href={caseItem.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Typography variant="caption" color="info.main" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, borderBottom: 1, borderColor: 'info.main', pb: 0.25 }}>
                      Visit {caseItem.link.replace('https://', '')} →
                    </Typography>
                  </a>
                )}
              </StaggerItem>
            </Stagger>
          </Box>
        ))}
      </Container>
    </ThemeSection>
  );
}
