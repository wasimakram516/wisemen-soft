'use client';

import { Box, Typography } from '@mui/material';

/**
 * Plain typographic replacements for chip/pill badges — a dot + label for
 * status, and middle-dot separated text for tags/stack. No backgrounds,
 * no borders, no pill shapes.
 */
export function StatusDot({ label, color = 'info.main' }) {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}>
      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: color }} />
      <Typography variant="caption" color={color} sx={{ fontWeight: 600 }}>
        {label}
      </Typography>
    </Box>
  );
}

export function TagList({ items, color = 'text.secondary' }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
      {items.map((item, i) => (
        <Box key={item} sx={{ display: 'flex', alignItems: 'center' }}>
          {i > 0 && (
            <Typography component="span" color="text.disabled" sx={{ mx: 1.25, fontSize: '0.7rem' }}>
              ·
            </Typography>
          )}
          <Typography component="span" variant="caption" color={color} sx={{ letterSpacing: '0.04em' }}>
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
