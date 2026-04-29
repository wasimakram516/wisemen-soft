'use client';

import { motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';

export default function Loading() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A0A0A',
        zIndex: 9999,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 4, md: 6 } }}>
        <svg width={352} height={256} viewBox="0 0 44 32" fill="none" style={{ maxWidth: '80vw' }}>
          {/* Main W path (Bolder, Amber) */}
          <motion.path 
            d="M 6 18 L 14 26 L 22 14 L 30 26 L 38 6" 
            stroke="#D4A843" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          />

          {/* Stars */}
          {[
            { cx: 6, cy: 18, r: 2.5, delay: 0.2 },
            { cx: 14, cy: 26, r: 3, delay: 0.5 },
            { cx: 22, cy: 14, r: 4, delay: 0.8 },
            { cx: 30, cy: 26, r: 3, delay: 1.1 },
            { cx: 38, cy: 6, r: 3.5, delay: 1.4 },
          ].map((star, i) => (
            <motion.circle 
              key={i}
              cx={star.cx} 
              cy={star.cy} 
              r={star.r} 
              fill="#F0EDE6" 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: star.delay, type: 'spring' }}
            />
          ))}
        </svg>

        {/* Textual Name Animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
        >
          <Typography 
            sx={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 700, 
              fontSize: { xs: '2.5rem', md: '3.5rem' }, 
              letterSpacing: 0, 
              color: '#F0EDE6',
              userSelect: 'none'
            }}
          >
            Wisemen<Box component="span" sx={{ color: '#D4A843' }}>Soft</Box>
          </Typography>
        </motion.div>
      </Box>
    </div>
  );
}
