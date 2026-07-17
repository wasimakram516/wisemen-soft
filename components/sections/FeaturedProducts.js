'use client';

import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight as ArrowForwardIcon,
  ClipboardText, Package, Receipt, ChartBar,
  Fingerprint, CalendarBlank, CheckSquare, ChatCircleText,
} from '@phosphor-icons/react';
import { products as productData } from '@/app/products/data';
import ThemeSection from '@/components/ThemeSection';
import { StatusDot, TagList } from '@/components/Meta';
import { useScrollReveal, Stagger, StaggerItem } from '@/components/motion/Reveal';

const MotionBox = motion.create(Box);

const work = [
  {
    name: 'Nexus',
    type: 'Education ERP',
    outcome: 'The all-in-one ERP for schools, colleges, and universities — academics, attendance, finance, examinations, and multi-campus in one platform.',
    tags: ['ERP', 'Education', 'Web'],
    status: 'Live',
    image: '/images/products/nexus-screenshot.png',
  },
  {
    name: 'PressMaster',
    type: 'Print Management',
    outcome: 'Gave a printing press full visibility into orders, inventory, and billing, from intake to invoice in one workflow.',
    tags: ['Desktop', 'POS', 'Management'],
    status: 'Live',
    image: null,
    modules: [
      { label: 'Orders', Icon: ClipboardText },
      { label: 'Inventory', Icon: Package },
      { label: 'Invoices', Icon: Receipt },
      { label: 'Reports', Icon: ChartBar },
    ],
  },
  {
    name: 'StaffSync',
    type: 'HR & Supervision',
    outcome: 'Built structured workforce management for a European firm: check-in, leave, tasks, and messaging without third-party tools.',
    tags: ['HR', 'Enterprise', 'Desktop'],
    status: 'Live',
    image: null,
    modules: [
      { label: 'Attendance', Icon: Fingerprint },
      { label: 'Leave', Icon: CalendarBlank },
      { label: 'Tasks', Icon: CheckSquare },
      { label: 'Messages', Icon: ChatCircleText },
    ],
  },
];

/**
 * Honest "module map" in place of a screenshot we don't have — the product name
 * plus its real feature areas, laid out as labeled tiles from theme tokens.
 * Per the design audit: an honest diagram beats a fake dashboard mockup.
 */
function ProductModuleGraphic({ name, modules }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        p: { xs: 3, md: 4 },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            width: 34, height: 34, borderRadius: 1,
            bgcolor: 'primary.main', color: 'background.default',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem',
            flexShrink: 0,
          }}
        >
          {name[0]}
        </Box>
        <Typography variant="h5" color="text.primary" sx={{ fontWeight: 700 }}>
          {name}
        </Typography>
      </Box>

      <Box sx={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: { xs: 1.5, md: 2 } }}>
        {modules.map(({ label, Icon }) => (
          <Box
            key={label}
            sx={{
              border: 1, borderColor: 'divider', borderRadius: 1.5,
              bgcolor: 'background.default',
              p: { xs: 1.75, md: 2.25 },
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              transition: 'border-color 0.2s ease',
            }}
          >
            <Icon size={20} weight="regular" color={theme.palette.primary.main} />
            <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600 }}>
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function ProductRow({ item, index }) {
  const { ref, controls } = useScrollReveal({ margin: '-100px' });
  const theme = useTheme();
  const reversed = index % 2 === 1;
  const slug = productData.find((p) => p.name === item.name)?.slug ?? '';

  return (
    <Box
      ref={ref}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: { xs: 4, md: 8 },
        alignItems: 'center',
        py: { xs: 8, md: 10 },
        borderBottom: index < work.length - 1 ? 1 : 0,
        borderColor: 'divider',
      }}
    >
      <MotionBox
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, clipPath: 'inset(8% 8% 8% 8% round 12px)', scale: 0.96 },
          show: { opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 12px)', scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
        }}
        sx={{ order: { xs: 0, md: reversed ? 2 : 1 } }}
      >
        <Box
          sx={{
            position: 'relative',
            aspectRatio: '16/11',
            borderRadius: `${theme.shape.borderRadius}px`,
            border: 1,
            borderColor: 'divider',
            bgcolor: 'background.paper',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={`${item.name} product screenshot`}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          ) : (
            <ProductModuleGraphic name={item.name} modules={item.modules} />
          )}
        </Box>
      </MotionBox>

      <Stagger stagger={0.08} sx={{ order: { xs: 1, md: reversed ? 1 : 2 } }}>
        <StaggerItem sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography variant="caption" color="primary.main">{item.type}</Typography>
          <StatusDot label={item.status} />
        </StaggerItem>
        <StaggerItem>
          <Typography variant="h3" color="text.primary" sx={{ fontWeight: 700, mb: 2 }}>
            {item.name}
          </Typography>
        </StaggerItem>
        <StaggerItem>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 460, mb: 3 }}>
            {item.outcome}
          </Typography>
        </StaggerItem>
        <StaggerItem sx={{ mb: 3.5 }}>
          <TagList items={item.tags} />
        </StaggerItem>
        <StaggerItem>
          <Link href={`/products/${slug}`}>
            <Button variant="text" endIcon={<ArrowForwardIcon size="1em" weight="bold" />} sx={{ px: 0 }}>
              View product
            </Button>
          </Link>
        </StaggerItem>
      </Stagger>
    </Box>
  );
}

export default function FeaturedProducts() {
  const { ref } = useScrollReveal({ margin: '-80px' });

  return (
    <ThemeSection mode="light" sx={{ py: { xs: 10, md: 14 } }}>
      <Box ref={ref}>
      <Container maxWidth="lg">
        <Stagger stagger={0.1} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: { xs: 8, md: 10 }, flexWrap: 'wrap', gap: 4 }}>
          <Box>
            <StaggerItem>
              <Typography variant="caption" color="primary.main" sx={{ letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem', display: 'block', mb: 3 }}>
                Selected Work
              </Typography>
            </StaggerItem>
            <StaggerItem>
              <Typography variant="h2" color="text.primary">
                <Box component="span" sx={{ fontWeight: 500 }}>Products we&apos;ve built</Box>
                <br />
                <Box component="span" sx={{ fontWeight: 800 }}>and shipped.</Box>
              </Typography>
            </StaggerItem>
          </Box>
          <StaggerItem>
            <Link href="/products">
              <Button variant="text" color="inherit" endIcon={<ArrowForwardIcon size="1em" weight="bold" />} sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                All Products
              </Button>
            </Link>
          </StaggerItem>
        </Stagger>

        <Box>
          {work.map((item, i) => (
            <ProductRow key={item.name} item={item} index={i} />
          ))}
        </Box>
      </Container>
      </Box>
    </ThemeSection>
  );
}
