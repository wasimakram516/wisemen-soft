'use client';

import { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Box, Button,
  IconButton, Drawer, List, ListItem,
  ListItemButton, ListItemText, useMediaQuery, useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';

const navLinks = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!mounted) return null;

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
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-block',
                      px: 2,
                      py: 1,
                      fontSize: '0.875rem',
                      fontWeight: pathname === link.href ? 600 : 400,
                      color: pathname === link.href ? '#D4A843' : '#A8A39D',
                      cursor: 'pointer',
                      borderRadius: 1,
                      transition: 'color 0.2s',
                      '&:hover': { color: '#F0EDE6' },
                    }}
                  >
                    {link.label}
                  </Box>
                </Link>
              ))}
              <Link href="/contact">
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ ml: 2 }}
                >
                  Let&apos;s Talk
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: '100vw',
              maxWidth: { sm: 400 },
              background: '#111111',
              borderLeft: '1px solid rgba(212,168,67,0.08)',
              display: 'flex',
              flexDirection: 'column',
              p: { xs: 4, sm: 5 },
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
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding sx={{ mb: 2 }}>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  borderRadius: 2,
                  py: 1.5,
                  color: pathname === link.href ? '#D4A843' : '#F0EDE6',
                  '&:hover': { color: '#D4A843', background: 'rgba(212,168,67,0.06)' },
                }}
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography sx={{ fontWeight: 600, fontSize: '1.3rem', letterSpacing: 0 }}>
                      {link.label}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ pt: 6, borderTop: '1px solid rgba(212,168,67,0.08)' }}>
          <Link href="/contact" onClick={() => setDrawerOpen(false)}>
            <Button variant="contained" fullWidth size="large">
              Let&apos;s Talk
            </Button>
          </Link>
          <Typography variant="caption" sx={{ color: '#3A3530', display: 'block', textAlign: 'center', mt: 3 }}>
            wasimakram4245@gmail.com
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
