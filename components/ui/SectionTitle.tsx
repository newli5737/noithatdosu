'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionTitle({ subtitle, title, description, align = 'center', light = false }: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {subtitle && (
        <span className={`inline-block text-sm font-medium tracking-[0.2em] uppercase mb-4 ${light ? 'text-gold-light' : 'text-gold'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      <div className={`${align === 'center' ? 'line-gold-center' : 'line-gold'} mb-6`} />
      {description && (
        <p className={`text-base md:text-lg max-w-3xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-warm-300' : 'text-dark-500'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
