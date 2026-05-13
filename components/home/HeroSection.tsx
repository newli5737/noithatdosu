'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
          }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 border border-gold/20 rounded-full hidden lg:block" />
      <div className="absolute bottom-40 left-10 w-24 h-24 border border-gold/10 rounded-full hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left w-full">
        <div className="max-w-3xl lg:max-w-2xl">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
          >
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold-light text-sm tracking-[0.3em] uppercase font-medium">
              Nội Thất Cao Cấp
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] text-white leading-[1.1] mb-6"
          >
            Kiến Tạo
            <br />
            <span className="text-gradient-gold">Không Gian Sống</span>
            <br />
            Đẳng Cấp
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-warm-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
          >
            Hơn 25 năm kinh nghiệm thiết kế và thi công nội thất gỗ óc chó cao cấp, 
            mang đến không gian sang trọng và bền vững.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Link href="/du-an" className="btn-primary group">
              Xem Dự Án
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#consultation" className="btn-outline group">
              Đặt Lịch Tư Vấn
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center gap-8 mt-14 justify-center lg:justify-start"
          >
            {[
              { value: '25+', label: 'Năm' },
              { value: '3000+', label: 'Dự Án' },
              { value: '300+', label: 'Nhân Sự' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold font-[family-name:var(--font-heading)]">{stat.value}</div>
                <div className="text-xs text-warm-300 tracking-wider uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs tracking-widest uppercase">Cuộn xuống</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
