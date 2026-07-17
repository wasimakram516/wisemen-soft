'use client';

import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';

const MotionBox = motion.create(Box);

const directions = {
  up: { y: 24, x: 0 },
  down: { y: -18, x: 0 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
};

/** Tracks scroll direction in a ref (no re-renders) for reveal triggers to read. */
function useScrollDirectionRef() {
  const dirRef = useRef('down');
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y !== lastY) dirRef.current = y > lastY ? 'down' : 'up';
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return dirRef;
}

/**
 * Scroll reveal that replays every time a section is scrolled INTO view from
 * below (forward reading direction), no matter how many times that happens.
 * Scrolling back up past it just snaps it to its resting state instantly —
 * no re-animation on reverse scroll — and primes it to hide again so the
 * next forward pass re-triggers the reveal.
 */
export function useScrollReveal({ margin = '-80px', amount = 0.2 } = {}) {
  const ref = useRef(null);
  const controls = useAnimation();
  const directionRef = useScrollDirectionRef();
  const inView = useInView(ref, { margin, amount, once: false });
  const reduceMotion = useReducedMotion();
  const wasInView = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      controls.set('show');
      return;
    }
    if (inView && !wasInView.current) {
      if (directionRef.current === 'up') {
        controls.set('show');
      } else {
        controls.start('show');
      }
    } else if (!inView && wasInView.current) {
      controls.set('hidden');
    }
    wasInView.current = inView;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return { ref, controls };
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  amount = 0.2,
  sx,
  ...props
}) {
  const offset = directions[direction] || directions.up;
  const { ref, controls } = useScrollReveal({ amount });

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, ...offset },
        show: { opacity: 1, x: 0, y: 0, transition: { duration, delay, ease: [0.16, 1, 0.3, 1] } },
      }}
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
  amount = 0.18,
  sx,
  ...props
}) {
  const { ref, controls } = useScrollReveal({ amount });

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        show: { transition: { delayChildren: delay, staggerChildren: stagger } },
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
