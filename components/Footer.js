'use client';

import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';
import Logo from '@/components/Logo';

const navLinks = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: '#0A0A0A',
        borderTop: '1px solid rgba(212,168,67,0.08)',
        pt: { xs: 10, md: 14 },
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ mb: { xs: 8, md: 12 } }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ mb: 3 }}>
              <Logo size={26} />
            </Box>
            <Typography variant="body2" sx={{ color: '#C8C3BC', maxWidth: 360, lineHeight: 1.9, mb: 4 }}>
              Premium business systems for teams that need software shaped around real operations. Based in Pakistan,
              working globally.
            </Typography>
            <Button
              href="https://www.wasimakram.org"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              variant="outlined"
              endIcon={<OpenInNewIcon fontSize="small" />}
            >
              Founder Portfolio
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="caption"
              sx={{ color: '#D4A843', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}
            >
              Pages
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#C8C3BC',
                      transition: 'color 0.2s, transform 0.2s',
                      '&:hover': { color: '#F0EDE6', transform: 'translateX(4px)' },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="caption"
              sx={{ color: '#D4A843', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}
            >
              Get in Touch
            </Typography>
            <Typography
              component="a"
              href="mailto:wasimakram4245@gmail.com"
              variant="body2"
              sx={{
                color: '#C8C3BC',
                display: 'block',
                mb: 1,
                wordBreak: 'break-word',
                '&:hover': { color: '#F0EDE6' },
                transition: 'color 0.2s',
                textDecoration: 'none',
              }}
            >
              wasimakram4245@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ color: '#9A938C' }}>
              Pakistan - GCC - Europe - Global
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 4 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="caption" sx={{ color: '#9A938C' }}>
            (c) {new Date().getFullYear()} Wisemen Soft. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: '#9A938C', fontStyle: 'italic' }}>
            Discover. Develop. Deliver.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
