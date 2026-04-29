'use client';

import { Box } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';

const MotionBox = motion.create(Box);

const directions = {
  up: { y: 24, x: 0 },
  down: { y: -18, x: 0 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  once = true,
  amount = 0.2,
  sx,
  ...props
}) {
  const reducedMotion = useReducedMotion();
  const offset = directions[direction] || directions.up;

  return (
    <MotionBox
      initial={reducedMotion ? false : { opacity: 0, ...offset }}
      whileInView={reducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      sx={sx}
      {...props}
    >
      {children}
    </MotionBox>
  );
}

export function Stagger({
  children,
  delay = 0,
  stagger = 0.08,
  once = true,
  amount = 0.18,
  sx,
  ...props
}) {
  const reducedMotion = useReducedMotion();

  return (
    <MotionBox
      initial={reducedMotion ? false : 'hidden'}
      whileInView={reducedMotion ? undefined : 'show'}
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: {
          transition: { delayChildren: delay, staggerChildren: stagger },
        },
      }}
      sx={sx}
      {...props}
    >
      {children}
    </MotionBox>
  );
}

export function StaggerItem({ children, sx, ...props }) {
  const reducedMotion = useReducedMotion();

  return (
    <MotionBox
      variants={
        reducedMotion
          ? undefined
          : {
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] } },
            }
      }
      sx={sx}
      {...props}
    >
      {children}
    </MotionBox>
  );
}
