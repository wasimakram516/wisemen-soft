'use client';

import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '@/styles/theme';

/**
 * Every section commits to one register and pulls everything (color,
 * type scale, button/chip variants) from that theme — never passes raw
 * hex through props. `as` lets the section pick its root element/component.
 */
export default function ThemeSection({ mode = 'dark', as = 'section', sx, children }) {
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Box
        component={as}
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
          ...sx,
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
