import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Box, Container, Grid, Typography } from '@mui/material';
import { cases } from '../data';
import { TagList } from '@/components/Meta';
import PageBanner from '@/components/PageBanner';
import ThemeSection from '@/components/ThemeSection';
import { Reveal, StaggerItem } from '@/components/motion/Reveal';
import { createPageMetadata } from '@/app/seo';

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = cases.find((item) => item.slug === slug);
  if (!c) return {};
  return createPageMetadata({
    title: `${c.product} — Case Study | Wisemen Soft`,
    description: c.seoDescription ?? c.title,
    path: `/case-studies/${c.slug}`,
    keywords: [c.product, c.client, ...c.tags],
  });
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const c = cases.find((item) => item.slug === slug);
  if (!c) notFound();

  return (
    <ThemeSection mode="light" as="div" sx={{ minHeight: '100vh' }}>
      <PageBanner
        kicker={(
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/case-studies" style={{ textDecoration: 'none' }}>
              <Typography variant="caption" color="text.disabled" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }}>
                ← Case Studies
              </Typography>
            </Link>
            <Typography variant="caption" color="text.disabled">/</Typography>
            <Typography variant="caption" color="primary.main" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
              {c.product}
            </Typography>
          </Box>
        )}
        eyebrow={c.client}
        title={c.title}
        maxWidth={760}
      >
        <StaggerItem>
          <Box sx={{ mt: 3 }}>
            <TagList items={c.tags} />
          </Box>
        </StaggerItem>

        {c.link && (
          <StaggerItem>
            <Box sx={{ mt: 3 }}>
              <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Typography variant="caption" color="info.main" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, borderBottom: 1, borderColor: 'info.main', pb: 0.25 }}>
                  Visit {c.link.replace('https://', '')} →
                </Typography>
              </a>
            </Box>
          </StaggerItem>
        )}
      </PageBanner>

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <Grid container spacing={{ xs: 8, md: 10 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            {[
              { label: 'The Problem', body: c.problem },
              { label: 'Our Approach', body: c.approach },
              { label: 'The Result', body: c.result },
            ].map((section, index, arr) => (
              <Reveal
                key={section.label}
                delay={index * 0.1}
                amount={0.25}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '24px 1fr' },
                  gap: { xs: 2, md: 5 },
                  py: { xs: 5, md: 6 },
                  borderTop: index === 0 ? 1 : 0,
                  borderBottom: index < arr.length - 1 ? 1 : 0,
                  borderColor: 'divider',
                }}
              >
                <Box sx={{ width: 8, height: 8, borderRadius: '2px', bgcolor: 'primary.main', mt: 1, display: { xs: 'none', md: 'block' } }} />
                <Box>
                  <Typography variant="caption" color="primary.main" sx={{ letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, mb: 2.5, display: 'block' }}>
                    {section.label}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.08rem', maxWidth: 640 }}>
                    {section.body}
                  </Typography>
                </Box>
              </Reveal>
            ))}
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: { md: 'sticky' }, top: { md: 120 }, p: { xs: 4, md: 5 }, border: 1, borderColor: 'divider', borderRadius: 1, bgcolor: 'background.paper' }}>
              <Typography variant="caption" color="text.disabled" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                At a Glance
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 5 }}>
                {c.outcomes.map((outcome, index) => (
                  <Reveal key={outcome} delay={index * 0.05} amount={0.3} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: 'primary.main', mt: 0.9, flexShrink: 0 }} />
                    <Typography variant="body2" color="text.secondary">{outcome}</Typography>
                  </Reveal>
                ))}
              </Box>

              <Typography variant="caption" color="text.disabled" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2, display: 'block' }}>
                Stack
              </Typography>
              <Reveal delay={0.15}>
                <TagList items={c.stack} color="primary.main" />
              </Reveal>
            </Box>
          </Grid>
        </Grid>

        {/* Back link */}
        <Box sx={{ mt: { xs: 10, md: 14 }, pt: 6, borderTop: 1, borderColor: 'divider' }}>
          <Link href="/case-studies" style={{ textDecoration: 'none' }}>
            <Typography variant="caption" color="text.disabled" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }}>
              ← All Case Studies
            </Typography>
          </Link>
        </Box>
      </Container>
    </ThemeSection>
  );
}
