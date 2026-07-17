'use client';

import { Box, Typography } from '@mui/material';
import ThemeSection from '@/components/ThemeSection';

const items = [
  'Custom Software',
  'School ERP',
  'HR Systems',
  'Print Management',
  'Web Applications',
  'Desktop Software',
  'Business Automation',
  'Data & Reporting',
];

export default function Marquee() {
  const repeated = [...items, ...items];

  const dot = (
    <Box component="span" sx={{ display: 'inline-block', width: 4, height: 4, borderRadius: '50%', bgcolor: 'primary.main', mx: 4, verticalAlign: 'middle', flexShrink: 0 }} />
  );

  return (
    <ThemeSection
      mode="dark"
      as="div"
      sx={{
        borderTop: 1, borderBottom: 1, borderColor: 'divider',
        py: 2.5,
        overflow: 'hidden',
        bgcolor: 'background.paper',
      }}
    >
      <Box className="marquee-track">
        {repeated.map((item, i) => (
          <Box key={i} sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Typography
              variant="caption"
              color={i % 2 === 0 ? 'text.disabled' : 'text.secondary'}
              sx={{ letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.68rem', whiteSpace: 'nowrap', fontWeight: 600 }}
            >
              {item}
            </Typography>
            {dot}
          </Box>
        ))}
      </Box>
    </ThemeSection>
  );
}
