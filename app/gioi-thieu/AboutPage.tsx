'use client';

import { stats, companyInfo, factories, showrooms } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Award, Users, Building2, Globe, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const coreValues = [
  { icon: Award, title: 'Chất Lượng', desc: 'Cam kết sử dụng nguyên liệu gỗ óc chó nhập khẩu chính hãng, quy trình sản xuất nghiêm ngặt.' },
  { icon: Users, title: 'Chuyên Nghiệp', desc: 'Đội ngũ 300+ nhân sự gồm kiến trúc sư, kỹ sư, thợ lành nghề với nhiều năm kinh nghiệm.' },
  { icon: Building2, title: 'Quy Mô', desc: '3 nhà máy sản xuất hiện đại tại Hà Nội và Hòa Bình, trang bị máy CNC tiên tiến.' },
  { icon: Globe, title: 'Tầm Nhìn', desc: 'Vươn tầm quốc tế với văn phòng tại Australia, phục vụ khách hàng toàn cầu.' },
];

const milestones = [
  { year: '2001', event: 'Thành lập Nội Thất Đức Dương tại Hà Nội' },
  { year: '2008', event: 'Mở rộng nhà máy sản xuất thứ 2 tại Quốc Oai' },
  { year: '2012', event: 'Đạt mốc 1000 dự án hoàn thành' },
  { year: '2016', event: 'Khai trương Showroom Hải Phòng' },
  { year: '2019', event: 'Mở nhà máy thứ 3 tại Lương Sơn, Hòa Bình' },
  { year: '2022', event: 'Mở rộng thị trường quốc tế - VP Australia' },
  { year: '2025', event: 'Đạt mốc 3000+ dự án, 25 năm phát triển' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/about-showroom.jpg')` }} />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <span className="text-gold-light text-sm tracking-[0.3em] uppercase">Về Chúng Tôi</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-4">
              Nội Thất Đức Dương
            </h1>
            <p className="text-warm-300 text-lg mt-4 max-w-2xl mx-auto">
              Hơn 25 năm kiến tạo không gian sống đẳng cấp
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/factory-bg.jpg')` }} />
              </div>
            </ScrollReveal>

            <div>
              <SectionTitle subtitle="Câu Chuyện Của Chúng Tôi" title="25+ Năm Đam Mê & Sáng Tạo" align="left" />
              <ScrollReveal delay={0.2}>
                <p className="text-dark-500 leading-relaxed mb-4">
                  {companyInfo.description} Chúng tôi không chỉ tạo ra sản phẩm, mà là những tác phẩm nghệ thuật, chắt lọc từ tinh hoa thiết kế và vật liệu gỗ óc chó nhập khẩu.
                </p>
                <p className="text-dark-500 leading-relaxed mb-8">
                  Với 3 nhà máy sản xuất quy mô lớn, đội ngũ hơn 300 nhân sự chuyên nghiệp và hơn 3000 dự án hoàn thành, Đức Dương đã khẳng định vị thế hàng đầu trong ngành nội thất cao cấp Việt Nam.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <ScrollReveal key={stat.label} delay={0.3 + i * 0.1}>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-warm-200">
                      <div className="text-2xl md:text-3xl font-bold text-gold font-[family-name:var(--font-heading)]">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs text-dark-500 mt-1">{stat.label}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-warm-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Giá Trị Cốt Lõi" title="Điều Tạo Nên Sự Khác Biệt" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="bg-white rounded-lg p-8 text-center shadow-sm border border-warm-200 hover:shadow-md hover:border-gold/20 transition-all h-full">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gold/10 flex items-center justify-center">
                    <v.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-dark mb-3">{v.title}</h3>
                  <p className="text-sm text-dark-500 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Hành Trình" title="Cột Mốc Phát Triển" />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-warm-200 md:-translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <ScrollReveal key={m.year} delay={i * 0.1}>
                  <div className={`flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="text-2xl font-bold text-gold font-[family-name:var(--font-heading)]">{m.year}</div>
                      <p className="text-dark-500 mt-1">{m.event}</p>
                    </div>
                    <div className="relative z-10 shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center shadow-md">
                        <div className="w-3 h-3 rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:hidden">
                      <div className="text-xl font-bold text-gold font-[family-name:var(--font-heading)]">{m.year}</div>
                      <p className="text-dark-500 text-sm mt-1">{m.event}</p>
                    </div>
                    <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Showrooms & Factories */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionTitle subtitle="Hệ Thống" title="Showroom & Nhà Máy" light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-white mb-6">Showroom</h3>
                <div className="space-y-4">
                  {showrooms.map(s => (
                    <div key={s.city} className="glass rounded-lg p-5 flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                      <div>
                        <span className="text-white font-medium">{s.city}</span>
                        <p className="text-warm-300 text-sm mt-1">{s.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-white mb-6">Nhà Máy Sản Xuất</h3>
                <div className="space-y-4">
                  {factories.map(f => (
                    <div key={f.name} className="glass rounded-lg p-5 flex items-start gap-4">
                      <Building2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                      <div>
                        <span className="text-white font-medium">{f.name}</span>
                        <p className="text-warm-300 text-sm mt-1">{f.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-warm-100 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-dark mb-4">
            Sẵn Sàng Kiến Tạo Không Gian Mơ Ước?
          </h2>
          <p className="text-dark-500 mb-8 max-w-xl mx-auto">Liên hệ ngay để nhận tư vấn miễn phí từ đội ngũ kiến trúc sư của chúng tôi.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/lien-he" className="btn-primary">Liên Hệ Tư Vấn</Link>
            <a href={`tel:${companyInfo.hotline.replace(/\s/g, '')}`} className="btn-outline-dark">
              <Phone className="w-4 h-4" /> {companyInfo.hotline}
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
