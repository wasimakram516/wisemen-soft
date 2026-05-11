'use client';

import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { cases } from '@/app/case-studies/data';
import { products } from '@/app/products/data';

function FooterSection({ title, links }) {
  return (
    <Box>
      <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2.5, display: 'block', fontWeight: 700 }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
        {links.map((link) => (
          link.external ? (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" sx={{ color: '#C8C3BC', transition: 'color 0.2s', '&:hover': { color: '#F0EDE6' } }}>
                {link.label}
              </Typography>
            </a>
          ) : (
            <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
              <Typography variant="body2" sx={{ color: '#C8C3BC', transition: 'color 0.2s', '&:hover': { color: '#F0EDE6' } }}>
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
    <Box component="footer" sx={{ background: '#0A0A0A', borderTop: '1px solid rgba(212,168,67,0.08)', pt: { xs: 10, md: 14 }, pb: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ mb: { xs: 8, md: 12 } }}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 3 }}>
              <Logo size={26} />
            </Box>
            <Typography variant="body2" sx={{ color: '#C8C3BC', maxWidth: 340, lineHeight: 1.9, mb: 4 }}>
              Premium business systems for teams that need software shaped around real operations. Based in Pakistan, working globally.
            </Typography>
            <Button href="https://www.wasimakram.org" target="_blank" rel="noopener noreferrer" size="small" variant="outlined" endIcon={<OpenInNewIcon fontSize="small" />}>
              Founder Portfolio
            </Button>
          </Grid>

          {/* Case Studies */}
          <Grid size={{ xs: 6, md: 2 }}>
            <FooterSection
              title="Case Studies"
              links={[
                { label: 'All Case Studies', href: '/case-studies' },
                ...cases.map((c) => ({ label: c.product, href: `/case-studies/${c.slug}` })),
              ]}
            />
          </Grid>

          {/* Products */}
          <Grid size={{ xs: 6, md: 2 }}>
            <FooterSection
              title="Products"
              links={[
                { label: 'All Products', href: '/products' },
                ...products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
              ]}
            />
          </Grid>

          {/* Company + Legal */}
          <Grid size={{ xs: 6, md: 2 }}>
            <FooterSection
              title="Company"
              links={[
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ]}
            />
          </Grid>

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

        <Divider sx={{ mb: 4, borderColor: 'rgba(212,168,67,0.08)' }} />

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
