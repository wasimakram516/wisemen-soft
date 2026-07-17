import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Box, Container, Grid, Typography } from '@mui/material';
import { products } from '../data';
import { StatusDot, TagList } from '@/components/Meta';
import PageBanner from '@/components/PageBanner';
import ThemeSection from '@/components/ThemeSection';
import { Reveal, StaggerItem } from '@/components/motion/Reveal';
import { createPageMetadata } from '@/app/seo';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = products.find((item) => item.slug === slug);
  if (!p) return {};
  return createPageMetadata({
    title: `${p.name} — ${p.type} | Wisemen Soft`,
    description: p.seoDescription,
    path: `/products/${p.slug}`,
    keywords: [p.name, p.type, ...p.stack],
  });
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = products.find((item) => item.slug === slug);
  if (!p) notFound();

  return (
    <ThemeSection mode="light" as="div" sx={{ minHeight: '100vh' }}>
      <PageBanner
        kicker={(
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/products" style={{ textDecoration: 'none' }}>
              <Typography variant="caption" color="text.disabled" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }}>
                ← Products
              </Typography>
            </Link>
            <Typography variant="caption" color="text.disabled">/</Typography>
            <Typography variant="caption" color="primary.main" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
              {p.name}
            </Typography>
          </Box>
        )}
        title={p.name}
        description={p.summary}
        maxWidth={640}
      >
        <StaggerItem>
          <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography variant="caption" color="text.secondary">{p.type}</Typography>
            <StatusDot label={p.status} />
          </Box>
        </StaggerItem>

        {p.noteHref && (
          <StaggerItem>
            <Box sx={{ mt: 3 }}>
              <a href={p.noteHref} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Typography variant="caption" color="info.main" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, borderBottom: 1, borderColor: 'info.main', pb: 0.25 }}>
                  Visit {p.note} →
                </Typography>
              </a>
            </Box>
          </StaggerItem>
        )}
      </PageBanner>

      {/* Features + Stack */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <Grid container spacing={{ xs: 8, md: 12 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="caption" color="text.disabled" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', mb: 4, display: 'block' }}>
              What It Does
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {p.features.map((feature, index) => (
                <Reveal key={feature} delay={index * 0.06} amount={0.3} sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
                  <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: 'primary.main', mt: 0.9, flexShrink: 0 }} />
                  <Typography variant="body1" color="text.secondary">{feature}</Typography>
                </Reveal>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="caption" color="text.disabled" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', mb: 4, display: 'block' }}>
              Built With
            </Typography>
            <Reveal delay={0.1} sx={{ mb: 6 }}>
              <TagList items={p.stack} color="primary.main" />
            </Reveal>

            {p.noteHref && (
              <Reveal delay={0.18} sx={{ p: 3, border: 1, borderColor: 'info.main', borderRadius: 1, bgcolor: 'action.hover' }}>
                <Typography variant="caption" color="text.disabled" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', mb: 1.5, display: 'block' }}>Live at</Typography>
                <a href={p.noteHref} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Typography variant="body2" color="info.main" sx={{ fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>{p.note} →</Typography>
                </a>
              </Reveal>
            )}
          </Grid>
        </Grid>

        {/* Back */}
        <Box sx={{ mt: { xs: 10, md: 14 }, pt: 6, borderTop: 1, borderColor: 'divider' }}>
          <Link href="/products" style={{ textDecoration: 'none' }}>
            <Typography variant="caption" color="text.disabled" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }}>
              ← All Products
            </Typography>
          </Link>
        </Box>
      </Container>
    </ThemeSection>
  );
}
