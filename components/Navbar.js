'use client';

import { useState, useEffect, useRef } from 'react';
import {
  AppBar, Toolbar, Typography, Box, Button,
  IconButton, Drawer, List, ListItem,
  ListItemButton, ListItemText, useMediaQuery, useTheme, Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';
import { cases } from '@/app/case-studies/data';
import { products } from '@/app/products/data';

const caseStudyItems = cases.map((c) => ({ label: c.product, href: `/case-studies/${c.slug}` }));
const productItems = products.map((p) => ({ label: p.name, href: `/products/${p.slug}` }));

const navLinks = [
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [caseDropOpen, setCaseDropOpen] = useState(false);
  const [productDropOpen, setProductDropOpen] = useState(false);
  const [mobileCaseOpen, setMobileCaseOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropRef = useRef(null);
  const productDropRef = useRef(null);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setCaseDropOpen(false);
      if (productDropRef.current && !productDropRef.current.contains(e.target)) setProductDropOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (!mounted) return null;

  const isCaseActive = pathname.startsWith('/case-studies');
  const isProductActive = pathname.startsWith('/products');

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,168,67,0.08)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <Toolbar sx={{ px: { xs: 3, md: 7 }, minHeight: { xs: 64, md: 72 } }}>
          <Box sx={{ flexGrow: 1 }}>
            <Logo size={26} />
          </Box>

          {isMobile ? (
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#F0EDE6' }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {/* Case Studies dropdown */}
              <Box ref={dropRef} sx={{ position: 'relative' }}>
                <Box
                  component="span"
                  onClick={() => setCaseDropOpen((v) => !v)}
                  sx={{
                    display: 'inline-flex', alignItems: 'center', gap: 0.25,
                    px: 2, py: 1, fontSize: '0.875rem', cursor: 'pointer',
                    fontWeight: isCaseActive ? 600 : 400,
                    color: isCaseActive ? '#D4A843' : '#A8A39D',
                    borderRadius: 1, transition: 'color 0.2s',
                    userSelect: 'none',
                    '&:hover': { color: '#F0EDE6' },
                  }}
                >
                  Case Studies
                  <ExpandMoreIcon sx={{ fontSize: 16, transition: 'transform 0.2s', transform: caseDropOpen ? 'rotate(180deg)' : 'none' }} />
                </Box>

                {/* Dropdown menu */}
                {caseDropOpen && (
                  <Box sx={{
                    position: 'absolute', top: 'calc(100% + 8px)', left: 0,
                    background: '#111111', border: '1px solid rgba(212,168,67,0.12)',
                    borderRadius: 2, py: 1, minWidth: 180,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
                    zIndex: 1400,
                  }}>
                    <Link href="/case-studies" onClick={() => setCaseDropOpen(false)} style={{ textDecoration: 'none' }}>
                      <Box sx={{ px: 2.5, py: 1.25, color: '#D4A843', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid rgba(212,168,67,0.08)', mb: 0.5, '&:hover': { color: '#F0EDE6' }, cursor: 'pointer' }}>
                        All Case Studies
                      </Box>
                    </Link>
                    {caseStudyItems.map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setCaseDropOpen(false)} style={{ textDecoration: 'none' }}>
                        <Box sx={{ px: 2.5, py: 1.25, fontSize: '0.875rem', color: pathname === item.href ? '#D4A843' : '#A8A39D', cursor: 'pointer', transition: 'color 0.15s, background 0.15s', '&:hover': { color: '#F0EDE6', background: 'rgba(212,168,67,0.05)' } }}>
                          {item.label}
                        </Box>
                      </Link>
                    ))}
                  </Box>
                )}
              </Box>

              {/* Products dropdown */}
              <Box ref={productDropRef} sx={{ position: 'relative' }}>
                <Box
                  component="span"
                  onClick={() => setProductDropOpen((v) => !v)}
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.25, px: 2, py: 1, fontSize: '0.875rem', cursor: 'pointer', fontWeight: isProductActive ? 600 : 400, color: isProductActive ? '#D4A843' : '#A8A39D', borderRadius: 1, transition: 'color 0.2s', userSelect: 'none', '&:hover': { color: '#F0EDE6' } }}
                >
                  Products
                  <ExpandMoreIcon sx={{ fontSize: 16, transition: 'transform 0.2s', transform: productDropOpen ? 'rotate(180deg)' : 'none' }} />
                </Box>
                {productDropOpen && (
                  <Box sx={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, background: '#111111', border: '1px solid rgba(212,168,67,0.12)', borderRadius: 2, py: 1, minWidth: 180, boxShadow: '0 8px 32px rgba(0,0,0,0.6)', zIndex: 1400 }}>
                    <Link href="/products" onClick={() => setProductDropOpen(false)} style={{ textDecoration: 'none' }}>
                      <Box sx={{ px: 2.5, py: 1.25, color: '#D4A843', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid rgba(212,168,67,0.08)', mb: 0.5, '&:hover': { color: '#F0EDE6' }, cursor: 'pointer' }}>
                        All Products
                      </Box>
                    </Link>
                    {productItems.map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setProductDropOpen(false)} style={{ textDecoration: 'none' }}>
                        <Box sx={{ px: 2.5, py: 1.25, fontSize: '0.875rem', color: pathname === item.href ? '#D4A843' : '#A8A39D', cursor: 'pointer', transition: 'color 0.15s, background 0.15s', '&:hover': { color: '#F0EDE6', background: 'rgba(212,168,67,0.05)' } }}>
                          {item.label}
                        </Box>
                      </Link>
                    ))}
                  </Box>
                )}
              </Box>

              {/* Other nav links */}
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-block', px: 2, py: 1,
                      fontSize: '0.875rem',
                      fontWeight: pathname === link.href ? 600 : 400,
                      color: pathname === link.href ? '#D4A843' : '#A8A39D',
                      cursor: 'pointer', borderRadius: 1, transition: 'color 0.2s',
                      '&:hover': { color: '#F0EDE6' },
                    }}
                  >
                    {link.label}
                  </Box>
                </Link>
              ))}

              <Link href="/contact">
                <Button variant="outlined" size="small" sx={{ ml: 2 }}>
                  Let&apos;s Talk
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: '100vw', maxWidth: { sm: 400 },
              background: '#111111', borderLeft: '1px solid rgba(212,168,67,0.08)',
              display: 'flex', flexDirection: 'column', p: { xs: 4, sm: 5 },
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 8 }}>
          <Logo size={26} />
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#F0EDE6' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List disablePadding sx={{ flex: 1 }}>
          {/* Case Studies with sub-items */}
          <ListItem disablePadding sx={{ mb: 0.5, flexDirection: 'column', alignItems: 'stretch' }}>
            <ListItemButton
              onClick={() => setMobileCaseOpen((v) => !v)}
              sx={{ borderRadius: 2, py: 1.5, color: isCaseActive ? '#D4A843' : '#F0EDE6', '&:hover': { color: '#D4A843', background: 'rgba(212,168,67,0.06)' } }}
            >
              <ListItemText disableTypography primary={<Typography sx={{ fontWeight: 600, fontSize: '1.3rem' }}>Case Studies</Typography>} />
              <ExpandMoreIcon sx={{ transition: 'transform 0.2s', transform: mobileCaseOpen ? 'rotate(180deg)' : 'none', color: '#6B6560' }} />
            </ListItemButton>
            <Collapse in={mobileCaseOpen}>
              <Box sx={{ pl: 2, pb: 1 }}>
                <Link href="/case-studies" onClick={() => setDrawerOpen(false)} style={{ textDecoration: 'none' }}>
                  <Typography sx={{ py: 1, px: 2, color: '#D4A843', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>All Case Studies</Typography>
                </Link>
                {caseStudyItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setDrawerOpen(false)} style={{ textDecoration: 'none' }}>
                    <Typography sx={{ py: 1, px: 2, color: '#A8A39D', fontSize: '1rem', '&:hover': { color: '#F0EDE6' } }}>{item.label}</Typography>
                  </Link>
                ))}
              </Box>
            </Collapse>
          </ListItem>

          {/* Products mobile */}
          <ListItem disablePadding sx={{ mb: 0.5, flexDirection: 'column', alignItems: 'stretch' }}>
            <ListItemButton onClick={() => setMobileProductOpen((v) => !v)} sx={{ borderRadius: 2, py: 1.5, color: isProductActive ? '#D4A843' : '#F0EDE6', '&:hover': { color: '#D4A843', background: 'rgba(212,168,67,0.06)' } }}>
              <ListItemText disableTypography primary={<Typography sx={{ fontWeight: 600, fontSize: '1.3rem' }}>Products</Typography>} />
              <ExpandMoreIcon sx={{ transition: 'transform 0.2s', transform: mobileProductOpen ? 'rotate(180deg)' : 'none', color: '#6B6560' }} />
            </ListItemButton>
            <Collapse in={mobileProductOpen}>
              <Box sx={{ pl: 2, pb: 1 }}>
                <Link href="/products" onClick={() => setDrawerOpen(false)} style={{ textDecoration: 'none' }}>
                  <Typography sx={{ py: 1, px: 2, color: '#D4A843', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>All Products</Typography>
                </Link>
                {productItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setDrawerOpen(false)} style={{ textDecoration: 'none' }}>
                    <Typography sx={{ py: 1, px: 2, color: '#A8A39D', fontSize: '1rem', '&:hover': { color: '#F0EDE6' } }}>{item.label}</Typography>
                  </Link>
                ))}
              </Box>
            </Collapse>
          </ListItem>

          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding sx={{ mb: 2 }}>
              <ListItemButton
                component={Link} href={link.href}
                onClick={() => setDrawerOpen(false)}
                sx={{ borderRadius: 2, py: 1.5, color: pathname === link.href ? '#D4A843' : '#F0EDE6', '&:hover': { color: '#D4A843', background: 'rgba(212,168,67,0.06)' } }}
              >
                <ListItemText disableTypography primary={<Typography sx={{ fontWeight: 600, fontSize: '1.3rem' }}>{link.label}</Typography>} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ pt: 6, borderTop: '1px solid rgba(212,168,67,0.08)' }}>
          <Link href="/contact" onClick={() => setDrawerOpen(false)}>
            <Button variant="contained" fullWidth size="large">Let&apos;s Talk</Button>
          </Link>
          <Typography variant="caption" sx={{ color: '#3A3530', display: 'block', textAlign: 'center', mt: 3 }}>
            wasimakram4245@gmail.com
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
