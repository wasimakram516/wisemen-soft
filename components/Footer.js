'use client';

import { Box, Container, Typography, IconButton, Divider, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import Logo from '@/components/Logo';

const navLinks = [
  { label: 'Work', href: '/case-studies' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
];

const socials = [
  { icon: <FacebookIcon fontSize="small" />, href: '#', label: 'Facebook' },
  { icon: <InstagramIcon fontSize="small" />, href: '#', label: 'Instagram' },
  { icon: <LinkedInIcon fontSize="small" />, href: '#', label: 'LinkedIn' },
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
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ mb: 12 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ mb: 3 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
              <Logo size={26} />
            </Box>
            <Typography
              variant="body2"
              sx={{ color: '#C8C3BC', maxWidth: 300, lineHeight: 1.9, mb: 4 }}
            >
              We build software that understands your business.
              Based in Pakistan. Working globally.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socials.map((s) => (
                <IconButton
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  size="small"
                  sx={{
                    color: '#A8A39D',
                    border: '1px solid rgba(212,168,67,0.12)',
                    borderRadius: 1.5,
                    '&:hover': {
                      color: '#D4A843',
                      borderColor: 'rgba(212,168,67,0.4)',
                      background: 'rgba(212,168,67,0.05)',
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
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
                    sx={{ color: '#C8C3BC', '&:hover': { color: '#F0EDE6' }, transition: 'color 0.2s' }}
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
              Pakistan · GCC Region
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 4 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="caption" sx={{ color: '#9A938C' }}>
            © {new Date().getFullYear()} Wisemen Soft. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: '#9A938C', fontStyle: 'italic' }}>
            Discover. Develop. Deliver.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
