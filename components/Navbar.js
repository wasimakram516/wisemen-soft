'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Typography, Box, Button,
  IconButton, Drawer, List, ListItem,
  ListItemButton, ListItemText, useMediaQuery, useTheme, Collapse,
  alpha,
} from '@mui/material';
import { motion } from 'framer-motion';
import { List as MenuIcon, X as CloseIcon, CaretDown as ExpandMoreIcon, ArrowRight as ArrowForwardIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';
import { cases } from '@/app/case-studies/data';
import { products } from '@/app/products/data';

const MotionBox = motion.create(Box);

const caseStudyItems = cases.map((c) => ({ label: c.product, href: `/case-studies/${c.slug}` }));
const productItems = products.map((p) => ({ label: p.name, href: `/products/${p.slug}` }));

const navLinks = [
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [floating, setFloating] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [caseOpen, setCaseOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileCaseOpen, setMobileCaseOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const caseCloseTimer = useRef(null);
  const productCloseTimer = useRef(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => () => {
    clearTimeout(caseCloseTimer.current);
    clearTimeout(productCloseTimer.current);
  }, []);

  const openCase = () => { clearTimeout(caseCloseTimer.current); setCaseOpen(true); };
  const closeCaseDelayed = () => { caseCloseTimer.current = setTimeout(() => setCaseOpen(false), 150); };
  const openProduct = () => { clearTimeout(productCloseTimer.current); setProductOpen(true); };
  const closeProductDelayed = () => { productCloseTimer.current = setTimeout(() => setProductOpen(false), 150); };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // "Past the hero" — floats into a centered pill once you've scrolled roughly a viewport's worth.
      setFloating(y > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!mounted) return null;

  const isCaseActive = pathname.startsWith('/case-studies');
  const isProductActive = pathname.startsWith('/products');

  const navItemSx = (active) => ({
    display: 'inline-flex', alignItems: 'center', gap: 0.25,
    px: 2, py: 1, fontSize: '0.875rem', cursor: 'pointer',
    fontWeight: active ? 600 : 400,
    color: active ? 'primary.main' : 'text.secondary',
    borderRadius: 1, transition: 'color 0.2s',
    userSelect: 'none', font: 'inherit', border: 'none', background: 'none',
    '&:hover': { color: 'text.primary' },
  });

  const menuItemSx = (active) => ({
    fontSize: '0.875rem', py: 1.25,
    color: active ? 'primary.main' : 'text.secondary',
    '&:hover': { color: 'text.primary', bgcolor: 'action.hover' },
  });

  const restPad = isMobile ? 24 : 56;
  const floatPad = isMobile ? 20 : 28;
  const restHeight = isMobile ? 76 : 88;
  const floatHeight = isMobile ? 56 : 60;
  const restVPad = isMobile ? 14 : 18;
  const floatVPad = 8;

  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: theme.zIndex.appBar,
          display: 'flex', justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <MotionBox
          animate={{
            width: floating ? '92%' : '100%',
            maxWidth: floating ? 860 : 2000,
            marginTop: floating ? 14 : 0,
            borderRadius: floating ? 999 : 0,
            paddingLeft: floating ? floatPad : restPad,
            paddingRight: floating ? floatPad : restPad,
            paddingTop: floating ? floatVPad : restVPad,
            paddingBottom: floating ? floatVPad : restVPad,
            minHeight: floating ? floatHeight : restHeight,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          sx={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            bgcolor: floating
              ? alpha(theme.palette.background.paper, 0.92)
              : scrolled ? alpha(theme.palette.background.default, 0.95) : 'transparent',
            backdropFilter: (floating || scrolled) ? 'blur(20px)' : 'none',
            border: floating ? 1 : 0,
            borderBottom: !floating ? 1 : 0,
            borderColor: floating ? 'divider' : (scrolled ? 'divider' : 'transparent'),
            boxShadow: floating ? '0 16px 40px rgba(0,0,0,0.35)' : 'none',
            transition: 'background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Logo size={floating ? 22 : 26} />
          </Box>

          {isMobile ? (
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'text.primary' }}>
              <MenuIcon size={24} />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {/* Case Studies dropdown */}
              <Box
                sx={{ position: 'relative' }}
                onMouseEnter={openCase}
                onMouseLeave={closeCaseDelayed}
              >
                <Box
                  component="button"
                  id="case-studies-menu-trigger"
                  aria-haspopup="true"
                  aria-expanded={caseOpen ? 'true' : undefined}
                  onClick={() => setCaseOpen((v) => !v)}
                  sx={navItemSx(isCaseActive)}
                >
                  Case Studies
                  <ExpandMoreIcon size={14} weight="bold" style={{ transition: 'transform 0.2s', transform: caseOpen ? 'rotate(180deg)' : 'none' }} />
                </Box>
                <Box
                  role="menu"
                  aria-labelledby="case-studies-menu-trigger"
                  sx={{
                    position: 'absolute', top: '100%', left: 0, mt: 0.5,
                    minWidth: 200, bgcolor: 'background.paper', border: 1, borderColor: 'divider',
                    borderRadius: 1, boxShadow: theme.shadows[8], py: 1,
                    opacity: caseOpen ? 1 : 0,
                    visibility: caseOpen ? 'visible' : 'hidden',
                    transform: caseOpen ? 'translateY(0)' : 'translateY(-6px)',
                    transition: 'opacity 0.18s ease, transform 0.18s ease, visibility 0.18s',
                    zIndex: theme.zIndex.appBar + 1,
                  }}
                >
                  <Typography component={Link} href="/case-studies" onClick={() => setCaseOpen(false)} sx={{ display: 'block', px: 2, color: 'primary.main', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: 1, borderColor: 'divider', mb: 0.5, pb: 1.25, pt: 0.5 }}>
                    All Case Studies
                  </Typography>
                  {caseStudyItems.map((item) => (
                    <Typography key={item.href} component={Link} href={item.href} onClick={() => setCaseOpen(false)} sx={{ display: 'block', px: 2, ...menuItemSx(pathname === item.href) }}>
                      {item.label}
                    </Typography>
                  ))}
                </Box>
              </Box>

              {/* Products dropdown */}
              <Box
                sx={{ position: 'relative' }}
                onMouseEnter={openProduct}
                onMouseLeave={closeProductDelayed}
              >
                <Box
                  component="button"
                  id="products-menu-trigger"
                  aria-haspopup="true"
                  aria-expanded={productOpen ? 'true' : undefined}
                  onClick={() => setProductOpen((v) => !v)}
                  sx={navItemSx(isProductActive)}
                >
                  Products
                  <ExpandMoreIcon size={14} weight="bold" style={{ transition: 'transform 0.2s', transform: productOpen ? 'rotate(180deg)' : 'none' }} />
                </Box>
                <Box
                  role="menu"
                  aria-labelledby="products-menu-trigger"
                  sx={{
                    position: 'absolute', top: '100%', left: 0, mt: 0.5,
                    minWidth: 200, bgcolor: 'background.paper', border: 1, borderColor: 'divider',
                    borderRadius: 1, boxShadow: theme.shadows[8], py: 1,
                    opacity: productOpen ? 1 : 0,
                    visibility: productOpen ? 'visible' : 'hidden',
                    transform: productOpen ? 'translateY(0)' : 'translateY(-6px)',
                    transition: 'opacity 0.18s ease, transform 0.18s ease, visibility 0.18s',
                    zIndex: theme.zIndex.appBar + 1,
                  }}
                >
                  <Typography component={Link} href="/products" onClick={() => setProductOpen(false)} sx={{ display: 'block', px: 2, color: 'primary.main', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: 1, borderColor: 'divider', mb: 0.5, pb: 1.25, pt: 0.5 }}>
                    All Products
                  </Typography>
                  {productItems.map((item) => (
                    <Typography key={item.href} component={Link} href={item.href} onClick={() => setProductOpen(false)} sx={{ display: 'block', px: 2, ...menuItemSx(pathname === item.href) }}>
                      {item.label}
                    </Typography>
                  ))}
                </Box>
              </Box>

              {/* Other nav links */}
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Box component="span" sx={navItemSx(pathname === link.href)}>
                    {link.label}
                  </Box>
                </Link>
              ))}

              <Link href="/contact">
                <Button variant="outlined" size="small" endIcon={<ArrowForwardIcon size="1em" weight="bold" />} sx={{ ml: 2 }}>
                  Start a Project
                </Button>
              </Link>
            </Box>
          )}
        </MotionBox>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: '100vw', maxWidth: { sm: 400 },
              borderLeft: 1, borderColor: 'divider',
              display: 'flex', flexDirection: 'column', p: { xs: 4, sm: 5 },
              borderRadius: 0,
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 8 }}>
          <Logo size={26} />
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.primary' }}>
            <CloseIcon size={24} />
          </IconButton>
        </Box>

        <List disablePadding sx={{ flex: 1 }}>
          {/* Case Studies with sub-items */}
          <ListItem disablePadding sx={{ mb: 0.5, flexDirection: 'column', alignItems: 'stretch' }}>
            <ListItemButton
              onClick={() => setMobileCaseOpen((v) => !v)}
              sx={{ py: 1.5, color: isCaseActive ? 'primary.main' : 'text.primary', '&:hover': { color: 'primary.main', bgcolor: 'action.hover' } }}
            >
              <ListItemText disableTypography primary={<Typography sx={{ fontWeight: 600, fontSize: '1.3rem' }}>Case Studies</Typography>} />
              <ExpandMoreIcon
                size={20}
                weight="bold"
                color={theme.palette.text.disabled}
                style={{ transition: 'transform 0.2s', transform: mobileCaseOpen ? 'rotate(180deg)' : 'none' }}
              />
            </ListItemButton>
            <Collapse in={mobileCaseOpen}>
              <Box sx={{ pl: 2, pb: 1 }}>
                <Link href="/case-studies" onClick={() => setDrawerOpen(false)} style={{ textDecoration: 'none' }}>
                  <Typography sx={{ py: 1, px: 2, color: 'primary.main', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>All Case Studies</Typography>
                </Link>
                {caseStudyItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setDrawerOpen(false)} style={{ textDecoration: 'none' }}>
                    <Typography sx={{ py: 1, px: 2, color: 'text.secondary', fontSize: '1rem', '&:hover': { color: 'text.primary' } }}>{item.label}</Typography>
                  </Link>
                ))}
              </Box>
            </Collapse>
          </ListItem>

          {/* Products mobile */}
          <ListItem disablePadding sx={{ mb: 0.5, flexDirection: 'column', alignItems: 'stretch' }}>
            <ListItemButton onClick={() => setMobileProductOpen((v) => !v)} sx={{ py: 1.5, color: isProductActive ? 'primary.main' : 'text.primary', '&:hover': { color: 'primary.main', bgcolor: 'action.hover' } }}>
              <ListItemText disableTypography primary={<Typography sx={{ fontWeight: 600, fontSize: '1.3rem' }}>Products</Typography>} />
              <ExpandMoreIcon
                size={20}
                weight="bold"
                color={theme.palette.text.disabled}
                style={{ transition: 'transform 0.2s', transform: mobileProductOpen ? 'rotate(180deg)' : 'none' }}
              />
            </ListItemButton>
            <Collapse in={mobileProductOpen}>
              <Box sx={{ pl: 2, pb: 1 }}>
                <Link href="/products" onClick={() => setDrawerOpen(false)} style={{ textDecoration: 'none' }}>
                  <Typography sx={{ py: 1, px: 2, color: 'primary.main', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>All Products</Typography>
                </Link>
                {productItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setDrawerOpen(false)} style={{ textDecoration: 'none' }}>
                    <Typography sx={{ py: 1, px: 2, color: 'text.secondary', fontSize: '1rem', '&:hover': { color: 'text.primary' } }}>{item.label}</Typography>
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
                sx={{ color: pathname === link.href ? 'primary.main' : 'text.primary', '&:hover': { color: 'primary.main', bgcolor: 'action.hover' } }}
              >
                <ListItemText disableTypography primary={<Typography sx={{ fontWeight: 600, fontSize: '1.3rem' }}>{link.label}</Typography>} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ pt: 6, borderTop: 1, borderColor: 'divider' }}>
          <Link href="/contact" onClick={() => setDrawerOpen(false)}>
            <Button variant="contained" fullWidth size="large" endIcon={<ArrowForwardIcon size="1em" weight="bold" />}>Start a Project</Button>
          </Link>
          <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block', textAlign: 'center', mt: 3 }}>
            wasimakram4245@gmail.com
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
