'use client';

import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { companyInfo } from '@/lib/data';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import Link from 'next/link';

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  features: { title: string; desc: string }[];
  processSteps: string[];
  projectTypes: string[];
}

export default function ServicePage({ title, subtitle, heroImage, description, features, processSteps, projectTypes }: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')` }} />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <span className="text-gold-light text-sm tracking-[0.3em] uppercase">{subtitle}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-4">{title}</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-lg md:text-xl text-dark-500 leading-relaxed">{description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-warm-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Ưu Điểm" title="Tại Sao Chọn Đức Dương?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="bg-white rounded-lg p-7 shadow-sm border border-warm-200 hover:shadow-md hover:border-gold/20 transition-all h-full">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                    <CheckCircle className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-dark mb-3">{f.title}</h3>
                  <p className="text-sm text-dark-500 leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Quy Trình" title={`Quy Trình ${title}`} />
          <div className="space-y-4">
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-5 p-5 bg-white rounded-lg border border-warm-200 hover:border-gold/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="pt-1.5">
                    <p className="text-dark-800 font-medium">{step}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <SectionTitle subtitle="Phạm Vi" title="Loại Hình Dự Án" light />
          <div className="flex flex-wrap justify-center gap-4">
            {projectTypes.map((type, i) => (
              <ScrollReveal key={type} delay={i * 0.1}>
                <span className="inline-block px-6 py-3 text-sm text-gold border border-gold/30 rounded-full hover:bg-gold hover:text-white transition-all cursor-default">
                  {type}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-warm-100 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-dark mb-4">
            Bắt Đầu Dự Án Của Bạn
          </h2>
          <p className="text-dark-500 mb-8 max-w-xl mx-auto">Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/lien-he" className="btn-primary group">Liên Hệ Ngay <ArrowRight className="w-4 h-4" /></Link>
            <a href={`tel:${companyInfo.hotline.replace(/\s/g, '')}`} className="btn-outline-dark"><Phone className="w-4 h-4" /> {companyInfo.hotline}</a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
