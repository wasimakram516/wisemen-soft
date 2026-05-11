import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import { products } from '../data';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = products.find((item) => item.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.type} | Wisemen Soft`,
    description: p.seoDescription,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = products.find((item) => item.slug === slug);
  if (!p) notFound();

  return (
    <Box sx={{ background: '#0A0A0A', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ pt: { xs: 18, md: 22 }, pb: { xs: 10, md: 14 }, borderBottom: '1px solid rgba(92,177,170,0.14)' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 4, flexWrap: 'wrap' }}>
            <Link href="/products" style={{ textDecoration: 'none' }}>
              <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, '&:hover': { color: '#D4A843' }, transition: 'color 0.2s' }}>
                ← Products
              </Typography>
            </Link>
            <Typography variant="caption" sx={{ color: '#6B6560' }}>/</Typography>
            <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
              {p.name}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography sx={{ color: '#6B6560', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em' }}>{p.index}</Typography>
            <Typography variant="caption" sx={{ color: '#6B6560' }}>—</Typography>
            <Typography variant="caption" sx={{ color: '#A8A39D' }}>{p.type}</Typography>
            <Chip label={p.status} size="small" sx={{ background: `${p.statusColor}18`, color: p.statusColor, border: `1px solid ${p.statusColor}30`, fontWeight: 600 }} />
          </Box>

          <Typography variant="h1" sx={{ fontSize: { xs: '2.8rem', md: '4.5rem' }, color: '#F0EDE6', lineHeight: 1.05, fontWeight: 700, mb: 3, letterSpacing: '-1px' }}>
            {p.name}
          </Typography>

          <Typography variant="body1" sx={{ color: '#A8A39D', fontSize: '1.1rem', lineHeight: 1.9, maxWidth: 640, mb: 4 }}>
            {p.summary}
          </Typography>

          {p.noteHref && (
            <a href={p.noteHref} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Typography variant="caption" sx={{ color: '#6DB87E', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, borderBottom: '1px solid rgba(109,184,126,0.4)', pb: 0.25 }}>
                Visit {p.note} →
              </Typography>
            </a>
          )}
        </Container>
      </Box>

      {/* Features + Stack */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <Grid container spacing={{ xs: 8, md: 12 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 4, display: 'block' }}>
              What It Does
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {p.features.map((feature) => (
                <Box key={feature} sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
                  <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#D4A843', mt: 0.9, flexShrink: 0 }} />
                  <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.8 }}>{feature}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 4, display: 'block' }}>
              Built With
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 6 }}>
              {p.stack.map((s) => (
                <Chip key={s} label={s} size="small" sx={{ background: 'rgba(92,177,170,0.06)', color: '#D4A843', border: '1px solid rgba(92,177,170,0.16)' }} />
              ))}
            </Box>

            {p.noteHref && (
              <Box sx={{ p: 3, border: '1px solid rgba(109,184,126,0.2)', borderRadius: 2, background: 'rgba(109,184,126,0.04)' }}>
                <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 1.5, display: 'block' }}>Live at</Typography>
                <a href={p.noteHref} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Typography variant="body2" sx={{ color: '#6DB87E', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>{p.note} →</Typography>
                </a>
              </Box>
            )}
          </Grid>
        </Grid>

        {/* Back */}
        <Box sx={{ mt: { xs: 10, md: 14 }, pt: 6, borderTop: '1px solid rgba(92,177,170,0.08)' }}>
          <Link href="/products" style={{ textDecoration: 'none' }}>
            <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, '&:hover': { color: '#D4A843' }, transition: 'color 0.2s' }}>
              ← All Products
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
