'use client';

import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import { ArrowSquareOut as OpenInNewIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { products } from '@/app/products/data';

function FooterSection({ title, links }) {
  return (
    <Box>
      <Typography variant="caption" color="primary.main" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2.5, display: 'block', fontWeight: 700 }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
        {links.map((link) => (
          link.external ? (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" color="text.secondary" sx={{ transition: 'color 0.2s', '&:hover': { color: 'text.primary' } }}>
                {link.label}
              </Typography>
            </a>
          ) : (
            <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
              <Typography variant="body2" color="text.secondary" sx={{ transition: 'color 0.2s', '&:hover': { color: 'text.primary' } }}>
                {link.label}
              </Typography>
            </Link>
          )
        ))}
      </Box>
    </Box>
  );
}

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.default', borderTop: 1, borderColor: 'divider', pt: { xs: 10, md: 14 }, pb: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ mb: { xs: 8, md: 12 } }}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ mb: 3 }}>
              <Logo size={26} />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 340, lineHeight: 1.9, mb: 3 }}>
              Premium business systems for teams that need software shaped around real operations. Based in Pakistan, working globally.
            </Typography>
            <Typography
              component="a"
              href="mailto:wasimakram4245@gmail.com"
              variant="body2"
              color="text.primary"
              sx={{ display: 'block', mb: 4, '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }}
            >
              wasimakram4245@gmail.com
            </Typography>
            <Button href="https://www.wasimakram.org" target="_blank" rel="noopener noreferrer" size="small" variant="outlined" endIcon={<OpenInNewIcon size={16} weight="bold" />}>
              Founder Portfolio
            </Button>
          </Grid>

          {/* Work */}
          <Grid size={{ xs: 6, md: 3 }}>
            <FooterSection
              title="Work"
              links={[
                { label: 'All Products', href: '/products' },
                { label: 'All Case Studies', href: '/case-studies' },
                ...products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
              ]}
            />
          </Grid>

          {/* Company */}
          <Grid size={{ xs: 6, md: 2 }}>
            <FooterSection
              title="Company"
              links={[
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ]}
            />
          </Grid>

          {/* Legal */}
          <Grid size={{ xs: 6, md: 2 }}>
            <FooterSection
              title="Legal"
              links={[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' },
              ]}
            />
          </Grid>
        </Grid>

        <Divider sx={{ mb: 4 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} Wisemen Soft. All rights reserved.
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            Discover. Develop. Deliver.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
