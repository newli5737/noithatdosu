'use client';

import { factories } from '@/lib/data';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { Factory, Hammer, TreePine } from 'lucide-react';

export default function FactorySection() {
  const factoryStats = [
    { icon: Factory, value: 3, label: 'Nhà Máy', suffix: '' },
    { icon: TreePine, value: 10000, label: 'm² Diện Tích', suffix: '+' },
    { icon: Hammer, value: 200, label: 'Thợ Lành Nghề', suffix: '+' },
  ];

  return (
    <section id="factory" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('/images/factory-bg.jpg')` }} />
        <div className="absolute inset-0 bg-dark/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-gold" />
                <span className="text-gold-light text-sm tracking-[0.2em] uppercase">Năng Lực Sản Xuất</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
                Nhà Máy &<br /><span className="text-gradient-gold">Xưởng Sản Xuất</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-warm-300 text-base md:text-lg leading-relaxed mb-8">
                Với 3 nhà máy sản xuất quy mô lớn, trang bị hệ thống máy CNC hiện đại, 
                Đức Dương đảm bảo mọi sản phẩm đều đạt chất lượng vượt trội.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="space-y-3 mb-8">
                {factories.map((f) => (
                  <div key={f.name} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span className="text-white font-medium text-sm">{f.name}</span>
                    <span className="text-warm-300 text-sm">— {f.location}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-3">
                {['Máy CNC hiện đại', 'Gỗ óc chó nhập khẩu', 'Sơn PU cao cấp', 'Thợ thủ công lành nghề'].map((cap) => (
                  <span key={cap} className="inline-block px-4 py-2 text-xs tracking-wider text-gold border border-gold/30 rounded-full">{cap}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {factoryStats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={0.2 + index * 0.15} direction="right">
                <div className="glass rounded-lg p-6 md:p-8 flex items-center gap-6 hover:bg-white/12 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <stat.icon className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-warm-300 mt-1">{stat.label}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
