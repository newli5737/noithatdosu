'use client';

import { useState } from 'react';
import { products } from '@/lib/data';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Link from 'next/link';

const productCategories = ['Tất Cả', 'Phòng Khách', 'Phòng Bếp', 'Phòng Ngủ', 'Phòng Thờ', 'Phòng Làm Việc', 'Decor'];

const allProducts = [
  ...products.map(p => ({ ...p, category: 'Phòng Khách' })),
  { id: 7, name: 'Sofa Gỗ Óc Chó D\'Royal', image: '/images/product-1.jpg', href: '/san-pham/sofa-droyal', category: 'Phòng Khách' },
  { id: 8, name: 'Bàn Ăn Gỗ Óc Chó 8 Chỗ', image: '/images/product-2.jpg', href: '/san-pham/ban-an-8-cho', category: 'Phòng Bếp' },
  { id: 9, name: 'Giường Ngủ D\'Elegant', image: '/images/product-3.jpg', href: '/san-pham/giuong-delegant', category: 'Phòng Ngủ' },
  { id: 10, name: 'Bàn Thờ Gỗ Óc Chó', image: '/images/product-4.jpg', href: '/san-pham/ban-tho', category: 'Phòng Thờ' },
  { id: 11, name: 'Bàn Làm Việc Executive', image: '/images/product-5.jpg', href: '/san-pham/ban-lam-viec', category: 'Phòng Làm Việc' },
  { id: 12, name: 'Tủ Rượu Gỗ Óc Chó', image: '/images/product-6.jpg', href: '/san-pham/tu-ruou', category: 'Phòng Bếp' },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('Tất Cả');
  const filtered = activeCategory === 'Tất Cả' ? allProducts : allProducts.filter(p => p.category === activeCategory);

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/product-1.jpg')` }} />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <span className="text-gold-light text-sm tracking-[0.3em] uppercase">Bộ Sưu Tập</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-4">Sản Phẩm Nội Thất</h1>
            <p className="text-warm-300 mt-4 max-w-2xl mx-auto">Nội thất gỗ óc chó cao cấp – Thiết kế tinh tế, chất lượng vượt trội</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {productCategories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-medium transition-all rounded-full ${activeCategory === cat ? 'bg-dark text-white' : 'bg-warm-200 text-dark-500 hover:bg-warm-300'}`}
              >{cat}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.05}>
                <Link href={product.href} className="group block">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-warm-200 mb-4">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${product.image}')` }} />
                    <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors" />
                  </div>
                  <h3 className="text-sm font-semibold font-[family-name:var(--font-heading)] text-dark group-hover:text-gold transition-colors">{product.name}</h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
