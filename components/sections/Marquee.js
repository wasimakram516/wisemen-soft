'use client';

import { Box, Typography } from '@mui/material';

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

const dot = (
  <Box component="span" sx={{ display: 'inline-block', width: 4, height: 4, borderRadius: '50%', background: '#D4A843', mx: 4, verticalAlign: 'middle', flexShrink: 0 }} />
);

export default function Marquee() {
  const repeated = [...items, ...items];

  return (
    <Box
      sx={{
        borderTop: '1px solid rgba(212,168,67,0.08)',
        borderBottom: '1px solid rgba(212,168,67,0.08)',
        py: 2.5,
        overflow: 'hidden',
        background: '#080808',
      }}
    >
      <Box className="marquee-track">
        {repeated.map((item, i) => (
          <Box key={i} sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Typography
              variant="caption"
              sx={{
                color: i % 2 === 0 ? '#6B6560' : '#4A4540',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontSize: '0.68rem',
                whiteSpace: 'nowrap',
                fontWeight: 600,
              }}
            >
              {item}
            </Typography>
            {dot}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
