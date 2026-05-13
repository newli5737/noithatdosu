'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const itemsPerPage = typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;

  const next = useCallback(() => setCurrent(c => c >= maxIndex ? 0 : c + 1), [maxIndex]);
  const prev = () => setCurrent(c => c <= 0 ? maxIndex : c - 1);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const visibleTestimonials = testimonials.slice(current * itemsPerPage, current * itemsPerPage + itemsPerPage);

  return (
    <section id="testimonials" className="section-padding bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Đánh Giá"
          title="Khách Hàng Nói Gì Về Chúng Tôi"
          description="Sự hài lòng của khách hàng chính là minh chứng rõ nhất cho chất lượng và uy tín của Đức Dương."
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visibleTestimonials.map((t) => (
                <div key={t.id} className="bg-white rounded-lg p-8 shadow-sm border border-warm-200 hover:shadow-md hover:border-gold/20 transition-all relative">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/15" />
                  
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="text-dark-500 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-warm-200 flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${t.avatar}')` }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-dark">{t.name}</h4>
                      <p className="text-xs text-dark-500">{t.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-warm-300 flex items-center justify-center hover:bg-dark hover:text-white hover:border-dark transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-gold w-8' : 'bg-warm-300'}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-warm-300 flex items-center justify-center hover:bg-dark hover:text-white hover:border-dark transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
