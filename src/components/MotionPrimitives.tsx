import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export function FadeIn({ children, delay = 0, className = '', yOffset = 14 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ImageRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ImageReveal({ children, delay = 0, className = '' }: ImageRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.02 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.85, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
