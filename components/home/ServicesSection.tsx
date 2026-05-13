'use client';

import { services } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-warm-100">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Dịch Vụ"
          title="Thiết Kế – Thi Công Nội Thất"
          description="Nội thất Đức Dương tự hào là doanh nghiệp có bề dày kinh nghiệm trong việc cung cấp các giải pháp thiết kế – thi công nội thất trọn gói."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.15}>
              <Link href={service.href} className="group block relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent transition-all duration-500 group-hover:from-dark/90" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-warm-300 text-sm md:text-base mb-5 max-w-md opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold font-medium text-sm tracking-wider uppercase">
                    <span>Khám Phá</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
