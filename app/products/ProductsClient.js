'use client';

import Link from 'next/link';
import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { products } from './data';

const MotionBox = motion.create(Box);

export default function ProductsPage() {
  return (
    <Box sx={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Box sx={{ pt: { xs: 18, md: 22 }, pb: { xs: 10, md: 14 }, borderBottom: '1px solid rgba(92,177,170,0.14)' }}>
        <Container maxWidth="lg">
          <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} sx={{ mb: 5 }}>
            <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 700 }}>
              Products
            </Typography>
          </MotionBox>
          <MotionBox initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.35rem', md: '3.5rem' }, color: '#F0EDE6', mb: 4, lineHeight: 1.02, maxWidth: 760 }}>
              <Box component="span" sx={{ fontWeight: 100 }}>Business systems </Box>
              <Box component="span" sx={{ fontWeight: 800 }}>built around specific workflows.</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#A8A39D', fontSize: '1.05rem', lineHeight: 1.9, maxWidth: 560 }}>
              These products come from real operational problems we have studied and shipped against: school administration, print production, and employee supervision.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {products.map((product, index) => (
          <MotionBox
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
              py: { xs: 10, md: 14 },
              borderBottom: index < products.length - 1 ? '1px solid rgba(212,168,67,0.08)' : 'none',
              position: 'relative', overflow: 'hidden',
              transition: 'border-color 0.28s ease',
              '&:hover': { borderBottomColor: 'rgba(212,168,67,0.2)' },
            }}
          >
            <Typography aria-hidden sx={{ position: 'absolute', top: { xs: -8, md: 8 }, right: { xs: -2, md: 0 }, fontSize: { xs: '6.5rem', md: '12rem' }, fontWeight: 800, color: 'rgba(212,168,67,0.07)', lineHeight: 1, userSelect: 'none', fontFamily: 'var(--font-display)', pointerEvents: 'none' }}>
              {product.index}
            </Typography>

            <Grid container spacing={{ xs: 6, md: 12 }}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                  <Typography sx={{ color: '#6B6560', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em' }}>{product.index}</Typography>
                  <Chip label={product.status} size="small" sx={{ background: `${product.statusColor}12`, color: product.statusColor, border: `1px solid ${product.statusColor}28`, fontWeight: 600 }} />
                </Box>
                <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, color: '#F0EDE6', mb: 1, lineHeight: 1.05, fontWeight: 800 }}>
                  {product.name}
                </Typography>
                <Typography variant="caption" sx={{ color: '#D4A843', display: 'block', mb: 4, letterSpacing: '0.05em' }}>
                  {product.type}
                </Typography>
                <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9, mb: 4 }}>
                  {product.summary}
                </Typography>
                {product.note && (
                  <Typography variant="caption" sx={{ color: '#D4A843', borderLeft: '2px solid rgba(92,177,170,0.5)', pl: 2, display: 'block', mb: 4 }}>
                    {product.noteHref ? (
                      <a href={product.noteHref} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                        {product.note}
                      </a>
                    ) : product.note}
                  </Typography>
                )}
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                  {product.stack.map((stackItem) => (
                    <Chip key={stackItem} label={stackItem} size="small" sx={{ background: 'rgba(212,168,67,0.06)', color: '#C8C3BC', border: '1px solid rgba(212,168,67,0.14)', transition: 'transform 0.2s ease', '&:hover': { transform: 'translateY(-2px)' } }} />
                  ))}
                </Box>
                <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
                  <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, borderBottom: '1px solid rgba(212,168,67,0.4)', pb: 0.25 }}>
                    Full details →
                  </Typography>
                </Link>
              </Grid>

              <Grid size={{ xs: 12, md: 7 }}>
                <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 4, display: 'block' }}>
                  What it covers
                </Typography>
                <Box>
                  {product.features.map((feature, featureIndex) => (
                    <Box
                      key={feature}
                      sx={{
                        display: 'flex', alignItems: 'center', gap: 3, py: 2.5,
                        borderBottom: featureIndex < product.features.length - 1 ? '1px solid rgba(212,168,67,0.08)' : 'none',
                        transition: 'transform 0.2s ease, border-color 0.2s ease',
                        '&:hover': { transform: 'translateX(4px)', borderBottomColor: 'rgba(212,168,67,0.2)' },
                      }}
                    >
                      <Typography sx={{ color: '#D4A843', fontSize: '0.65rem', fontWeight: 700, minWidth: 18 }}>
                        {String(featureIndex + 1).padStart(2, '0')}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#A8A39D' }}>{feature}</Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </MotionBox>
        ))}
      </Container>
    </Box>
  );
}
