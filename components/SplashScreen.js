'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const stars = [
  { cx: 6,  cy: 18, r: 2.5, delay: 0.1 },
  { cx: 14, cy: 26, r: 3,   delay: 0.3 },
  { cx: 22, cy: 14, r: 4,   delay: 0.55 },
  { cx: 30, cy: 26, r: 3,   delay: 0.75 },
  { cx: 38, cy: 6,  r: 3.5, delay: 0.95 },
];

export default function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const t = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0A0A0A',
            zIndex: 100000,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 3, md: 4 } }}>
            {/* Logo mark drawing */}
            <svg width={280} height={204} viewBox="0 0 44 32" fill="none" style={{ maxWidth: '60vw' }}>
              <motion.path
                d="M 6 18 L 14 26 L 22 14 L 30 26 L 38 6"
                stroke="#D4A843"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.1 }}
              />
              {stars.map((s, i) => (
                <motion.circle
                  key={i}
                  cx={s.cx} cy={s.cy} r={s.r}
                  fill="#F0EDE6"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: s.delay, type: 'spring', stiffness: 300 }}
                />
              ))}
            </svg>

            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '2.8rem' },
                  letterSpacing: 0,
                  color: '#F0EDE6',
                  userSelect: 'none',
                }}
              >
                Wisemen<Box component="span" sx={{ color: '#D4A843' }}>Soft</Box>
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
