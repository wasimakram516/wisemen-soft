import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import { cases } from '../data';

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = cases.find((item) => item.slug === slug);
  if (!c) return {};
  return {
    title: `${c.product} — Case Study | Wisemen Soft`,
    description: c.title,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const c = cases.find((item) => item.slug === slug);
  if (!c) notFound();

  return (
    <Box sx={{ background: '#0A0A0A', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ pt: { xs: 18, md: 22 }, pb: { xs: 10, md: 14 }, borderBottom: '1px solid rgba(212,168,67,0.08)' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 4, flexWrap: 'wrap' }}>
            <Link href="/case-studies" style={{ textDecoration: 'none' }}>
              <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, '&:hover': { color: '#D4A843' }, transition: 'color 0.2s' }}>
                ← Case Studies
              </Typography>
            </Link>
            <Typography variant="caption" sx={{ color: '#6B6560' }}>/</Typography>
            <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
              {c.product}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 700 }}>
              {c.index}
            </Typography>
            <Typography variant="caption" sx={{ color: '#6B6560' }}>—</Typography>
            <Typography variant="caption" sx={{ color: '#6B6560' }}>{c.client}</Typography>
            {c.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  background: 'rgba(212,168,67,0.06)',
                  color: '#C8C3BC',
                  border: '1px solid rgba(212,168,67,0.14)',
                }}
              />
            ))}
          </Box>

          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3.2rem' }, color: '#F0EDE6', lineHeight: 1.12, maxWidth: 860, fontWeight: 100, mb: 3 }}>
            {c.title}
          </Typography>

          {c.link && (
            <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Typography variant="caption" sx={{ color: '#6DB87E', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, borderBottom: '1px solid rgba(109,184,126,0.4)', pb: 0.25 }}>
                Visit {c.link.replace('https://', '')} →
              </Typography>
            </a>
          )}
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <Grid container spacing={{ xs: 8, md: 12 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
              The Problem
            </Typography>
            <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9, fontSize: '1.05rem' }}>
              {c.problem}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
              Our Approach
            </Typography>
            <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9, fontSize: '1.05rem' }}>
              {c.approach}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
              What Changed
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 5 }}>
              {c.outcomes.map((outcome) => (
                <Box key={outcome} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#D4A843', mt: 0.9, flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.8 }}>{outcome}</Typography>
                </Box>
              ))}
            </Box>

            <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2, display: 'block' }}>
              Stack
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {c.stack.map((s) => (
                <Chip
                  key={s}
                  label={s}
                  size="small"
                  sx={{
                    background: 'rgba(92,177,170,0.06)',
                    color: '#D4A843',
                    border: '1px solid rgba(92,177,170,0.16)',
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Back link */}
        <Box sx={{ mt: { xs: 10, md: 14 }, pt: 6, borderTop: '1px solid rgba(212,168,67,0.08)' }}>
          <Link href="/case-studies" style={{ textDecoration: 'none' }}>
            <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, '&:hover': { color: '#D4A843' }, transition: 'color 0.2s' }}>
              ← All Case Studies
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
