'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { ArrowRight as ArrowForwardIcon } from '@phosphor-icons/react';
import ThemeSection from '@/components/ThemeSection';
import { useScrollReveal, Stagger, StaggerItem } from '@/components/motion/Reveal';

export default function CTA() {
  const { ref } = useScrollReveal({ margin: '-60px' });

  return (
    <ThemeSection
      mode="light"
      sx={{ py: { xs: 16, md: 24 }, textAlign: 'center', position: 'relative', overflow: 'hidden' }}
    >
      <Box ref={ref}>
      <Container maxWidth="md">
        <Stagger stagger={0.12}>
          <StaggerItem>
            <Typography variant="h1" color="text.primary" sx={{ lineHeight: 1.05, mb: 4 }}>
              <Box component="span" sx={{ fontWeight: 500 }}>Tell us what you&apos;re </Box>
              <Box component="span" sx={{ fontWeight: 800 }}>trying to </Box>
              <Box component="span" sx={{ fontWeight: 800, color: 'primary.main' }}>solve.</Box>
            </Typography>
          </StaggerItem>
          <StaggerItem>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 6, maxWidth: 440, mx: 'auto' }}>
              We&apos;ll ask the right questions, tell you honestly if we&apos;re the right fit, and give you a clear picture of what building with us looks like.
            </Typography>
          </StaggerItem>
          <StaggerItem sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact">
              <Button variant="contained" size="large" endIcon={<ArrowForwardIcon size="1em" weight="bold" />} sx={{ px: 5 }}>
                Start a Project
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                variant="outlined"
                size="large"
                color="inherit"
                sx={{ px: 5, borderColor: 'divider', color: 'text.primary', '&:hover': { borderColor: 'text.primary' } }}
              >
                See Our Work First
              </Button>
            </Link>
          </StaggerItem>
        </Stagger>
      </Container>
      </Box>
    </ThemeSection>
  );
}
