'use client';

import Link from 'next/link';
import { Box, Container, Grid, Typography } from '@mui/material';
import { products } from './data';
import { StatusDot, TagList } from '@/components/Meta';
import PageBanner from '@/components/PageBanner';
import ThemeSection from '@/components/ThemeSection';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';

export default function ProductsPage() {
  return (
    <ThemeSection mode="light" as="div" sx={{ minHeight: '100vh' }}>
      <PageBanner
        eyebrow="Products"
        titleTop="Business systems,"
        titleBottom="built around real workflows."
        description="Shipped against real operational problems: school administration, print production, and employee supervision."
        maxWidth={640}
      />

      <Container maxWidth="lg">
        {products.map((product, index) => (
          <Box
            key={product.name}
            sx={{
              py: { xs: 10, md: 14 },
              borderBottom: index < products.length - 1 ? 1 : 0,
              borderColor: 'divider',
              position: 'relative', overflow: 'hidden',
              transition: 'border-color 0.28s ease',
              '&:hover': { borderColor: 'primary.main' },
            }}
          >
            <Typography aria-hidden color="primary.main" sx={{ position: 'absolute', top: { xs: -8, md: 8 }, right: { xs: -2, md: 0 }, fontSize: { xs: '6.5rem', md: '12rem' }, fontWeight: 800, opacity: 0.07, lineHeight: 1, userSelect: 'none', fontFamily: 'var(--font-display)', pointerEvents: 'none' }}>
              {product.index}
            </Typography>

            <Grid container spacing={{ xs: 6, md: 12 }}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Stagger delay={index * 0.06} stagger={0.06}>
                  <StaggerItem sx={{ mb: 2 }}>
                    <StatusDot label={product.status} />
                  </StaggerItem>
                  <StaggerItem>
                    <Typography variant="h2" color="text.primary" sx={{ mb: 1, fontWeight: 800 }}>
                      {product.name}
                    </Typography>
                  </StaggerItem>
                  <StaggerItem>
                    <Typography variant="caption" color="primary.main" sx={{ display: 'block', mb: 4, letterSpacing: '0.05em' }}>
                      {product.type}
                    </Typography>
                  </StaggerItem>
                  <StaggerItem>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                      {product.summary}
                    </Typography>
                  </StaggerItem>
                  {product.note && (
                    <StaggerItem>
                      <Typography variant="caption" color="primary.main" sx={{ borderLeft: 2, borderColor: 'primary.main', pl: 2, display: 'block', mb: 4 }}>
                        {product.noteHref ? (
                          <a href={product.noteHref} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                            {product.note}
                          </a>
                        ) : product.note}
                      </Typography>
                    </StaggerItem>
                  )}
                  <StaggerItem sx={{ mb: 3 }}>
                    <TagList items={product.stack} />
                  </StaggerItem>
                  <StaggerItem>
                    <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
                      <Typography variant="caption" color="primary.main" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, borderBottom: 1, borderColor: 'primary.main', pb: 0.25 }}>
                        Full details →
                      </Typography>
                    </Link>
                  </StaggerItem>
                </Stagger>
              </Grid>

              <Grid size={{ xs: 12, md: 7 }}>
                <Typography variant="caption" color="text.disabled" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', mb: 4, display: 'block' }}>
                  What it covers
                </Typography>
                <Box>
                  {product.features.map((feature, featureIndex) => (
                    <Reveal
                      key={feature}
                      delay={featureIndex * 0.05}
                      amount={0.4}
                      sx={{
                        display: 'flex', alignItems: 'center', gap: 3, py: 2.5,
                        borderBottom: featureIndex < product.features.length - 1 ? 1 : 0,
                        borderColor: 'divider',
                        transition: 'transform 0.2s ease, border-color 0.2s ease',
                        '&:hover': { transform: 'translateX(4px)', borderColor: 'primary.main' },
                      }}
                    >
                      <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0 }} />
                      <Typography variant="body2" color="text.secondary">{feature}</Typography>
                    </Reveal>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Container>
    </ThemeSection>
  );
}
