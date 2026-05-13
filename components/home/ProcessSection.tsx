'use client';

import { processSteps } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MessageSquare, PenTool, Factory, Hammer, CheckCircle } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare, PenTool, Factory, Hammer, CheckCircle,
};

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Quy Trình"
          title="5 Bước Kiến Tạo Không Gian"
          description="Quy trình làm việc chuyên nghiệp, minh bạch, đảm bảo chất lượng và tiến độ cam kết."
        />

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connection Line */}
          <div className="absolute top-16 left-0 right-0 h-[2px] bg-warm-200">
            <div className="absolute inset-y-0 left-0 bg-gradient-gold" style={{ width: '100%' }} />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <ScrollReveal key={step.step} delay={index * 0.15}>
                  <div className="text-center relative pt-8">
                    {/* Step Circle */}
                    <div className="relative z-10 w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center shadow-lg">
                      {Icon && <Icon className="w-6 h-6 text-white" />}
                    </div>

                    {/* Step Number */}
                    <div className="text-xs text-gold tracking-widest uppercase mb-2">Bước {step.step}</div>
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-dark mb-3">{step.title}</h3>
                    <p className="text-sm text-dark-500 leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <ScrollReveal key={step.step} delay={index * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-lg">
                    {Icon && <Icon className="w-5 h-5 text-white" />}
                  </div>
                  <div className="pt-1">
                    <div className="text-xs text-gold tracking-widest uppercase mb-1">Bước {step.step}</div>
                    <h3 className="text-base font-semibold text-dark mb-1">{step.title}</h3>
                    <p className="text-sm text-dark-500">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
