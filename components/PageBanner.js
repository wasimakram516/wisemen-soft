'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ThemeSection from '@/components/ThemeSection';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';

const MotionBox = motion.create(Box);

const markStars = [
  { cx: 6, cy: 24, r: 2.5 },
  { cx: 14, cy: 32, r: 3 },
  { cx: 22, cy: 20, r: 4 },
  { cx: 30, cy: 32, r: 3 },
  { cx: 38, cy: 12, r: 3.5 },
];

/** Faint Wisemen Soft mark, watermark-style, on the right of the banner — brand placement, not a random shape. */
function BannerWatermark() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        top: '50%',
        right: { md: -20, lg: 10 },
        transform: 'translateY(-50%)',
        display: { xs: 'none', md: 'block' },
        color: 'primary.main',
        opacity: 0.14,
        pointerEvents: 'none',
      }}
    >
      <svg width={220} height={220} viewBox="0 0 44 44" fill="none">
        <motion.path
          d="M 6 24 L 14 32 L 22 20 L 30 32 L 38 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
        {markStars.map((s, i) => (
          <motion.circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r={s.r}
            fill="currentColor"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.4 + i * 0.08, type: 'spring', stiffness: 280 }}
          />
        ))}
      </svg>
    </Box>
  );
}

/**
 * Full-width banner band shared by every inner page. Always forces the
 * dark register (like the homepage Hero) regardless of the page body's
 * theme, so it reads as a distinct strip against a light page.
 *
 * Title has three modes:
 *  - `titleTop` + `titleBottom` — forced two lines (light weight top, bold
 *    bottom), for the longer compound headlines (About, Contact, Products,
 *    Case Studies).
 *  - `titleLight` + `titleBold` — the same light/bold sequence but inline
 *    on one line, for short titles that don't need a forced break (legal
 *    pages: "Privacy Policy", "Terms of Service").
 *  - `title` — a plain node, natural wrapping, for freeform single titles
 *    (a product name, a full-sentence case study title).
 */
export default function PageBanner({ kicker, eyebrow, title, titleTop, titleBottom, titleLight, titleBold, description, maxWidth = 720, children }) {
  return (
    <ThemeSection
      mode="dark"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 14, md: 16 },
        pb: { xs: 7, md: 8 },
      }}
    >
      {/* Top accent line, drawn in on mount instead of a static divider. */}
      <Box aria-hidden sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, overflow: 'hidden' }}>
        <MotionBox
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          sx={{
            height: '100%',
            width: '100%',
            transformOrigin: 'left',
            background: (theme) => `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
          }}
        />
      </Box>

      {/* Fine dot-grid texture, same language as the Hero, faded toward the edges. */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: (theme) => `radial-gradient(${theme.palette.text.primary}12 1px, transparent 1px)`,
          backgroundSize: '26px 26px',
          maskImage: 'linear-gradient(to right, black 0%, transparent 65%)',
          WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: '-30%',
          left: '-6%',
          width: 340,
          height: 340,
          borderRadius: '50%',
          background: (theme) => `radial-gradient(circle, ${theme.palette.primary.main}16 0%, transparent 70%)`,
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />

      <BannerWatermark />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Stagger stagger={0.12} amount={0.3}>
          {kicker && <StaggerItem sx={{ mb: 4 }}>{kicker}</StaggerItem>}

          {eyebrow && (
            <StaggerItem sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 3 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.main' }} />
              <Typography variant="caption" color="primary.main" sx={{ letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 700 }}>
                {eyebrow}
              </Typography>
            </StaggerItem>
          )}

          <StaggerItem>
            {titleTop || titleBottom ? (
              <Typography variant="h2" component="h1" color="text.primary" sx={{ lineHeight: 1.12, mb: description ? 2.5 : children ? 2 : 0, whiteSpace: { md: 'nowrap' } }}>
                <Box component="span" sx={{ display: 'block', fontWeight: 500 }}>{titleTop}</Box>
                <Box component="span" sx={{ display: 'block', fontWeight: 800 }}>{titleBottom}</Box>
              </Typography>
            ) : titleLight || titleBold ? (
              <Typography variant="h2" component="h1" color="text.primary" sx={{ lineHeight: 1.12, mb: description ? 2.5 : children ? 2 : 0, whiteSpace: { md: 'nowrap' } }}>
                <Box component="span" sx={{ fontWeight: 500 }}>{titleLight} </Box>
                <Box component="span" sx={{ fontWeight: 800 }}>{titleBold}</Box>
              </Typography>
            ) : (
              <Typography variant="h2" component="h1" color="text.primary" sx={{ lineHeight: 1.12, mb: description ? 2.5 : children ? 2 : 0, maxWidth }}>
                {title}
              </Typography>
            )}
          </StaggerItem>

          {description && (
            <StaggerItem>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: Math.min(maxWidth, 580) }}>
                {description}
              </Typography>
            </StaggerItem>
          )}

          {children}
        </Stagger>
      </Container>
    </ThemeSection>
  );
}
