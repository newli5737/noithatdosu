'use client';

import { useRef } from 'react';
import { products } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ProductsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="products" className="section-padding bg-warm-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <SectionTitle
            subtitle="Sản Phẩm"
            title="Bộ Sưu Tập Nổi Bật"
            align="left"
          />
          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-dark-600 flex items-center justify-center hover:bg-dark hover:text-white transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-dark-600 flex items-center justify-center hover:bg-dark hover:text-white transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Carousel */}
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1} className="shrink-0 w-[280px] md:w-[320px] snap-start">
              <Link href={product.href} className="group block">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-warm-200 mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors" />
                </div>
                <h3 className="text-base font-semibold font-[family-name:var(--font-heading)] text-dark group-hover:text-gold transition-colors">
                  {product.name}
                </h3>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-10">
            <Link href="/san-pham" className="btn-outline-dark group">
              Xem Thêm Sản Phẩm
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
