'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MotionBox = motion.create(Box);

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 16, md: 24 },
        background: '#0A0A0A',
        borderTop: '1px solid rgba(212,168,67,0.08)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: -200,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 800,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,168,67,0.04) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="md">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Typography
            variant="caption"
            sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem', display: 'block', mb: 4 }}
          >
            Ready to Build?
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.4rem', md: '4rem', lg: '5.2rem' },
              color: '#F0EDE6',
              lineHeight: 1.05,
              mb: 4,
              letterSpacing: '-0.025em',
            }}
          >
            Tell us what you&apos;re{' '}
            <Box component="span" sx={{ color: '#D4A843' }}>
              trying to solve.
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#A8A39D', mb: 6, maxWidth: 440, mx: 'auto', lineHeight: 1.9 }}
          >
            We&apos;ll ask the right questions, tell you honestly if we&apos;re the right fit, and give you a clear picture of what building with us looks like.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact">
              <Button variant="contained" size="large" endIcon={<ArrowForwardIcon />} sx={{ px: 5 }}>
                Start a Conversation
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outlined" size="large" sx={{ px: 5 }}>
                See Our Work First
              </Button>
            </Link>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
