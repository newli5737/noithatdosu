'use client';

import { stats, companyInfo } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image/Video */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('/images/about-showroom.jpg')` }}
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all group">
                    <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 border-2 border-gold/20 rounded-lg hidden lg:block" style={{ zIndex: -1 }} />
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div>
            <SectionTitle
              subtitle="Về Chúng Tôi"
              title="Nội Thất Đức Dương"
              align="left"
            />
            <ScrollReveal delay={0.2}>
              <p className="text-dark-500 text-base md:text-lg leading-relaxed mb-8">
                {companyInfo.description} Chúng tôi không chỉ tạo ra sản phẩm, mà là những tác phẩm nghệ thuật, 
                chắt lọc từ tinh hoa thiết kế và vật liệu gỗ óc chó nhập khẩu.
              </p>
            </ScrollReveal>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={0.3 + index * 0.1}>
                  <div className="text-center p-5 bg-white rounded-lg shadow-sm border border-warm-200 hover:shadow-md hover:border-gold/30 transition-all">
                    <div className="text-3xl md:text-4xl font-bold text-gold font-[family-name:var(--font-heading)]">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-dark-500 mt-2">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.6}>
              <a href="/gioi-thieu" className="btn-outline-dark">
                Tìm Hiểu Thêm
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
