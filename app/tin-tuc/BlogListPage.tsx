'use client';

import { blogPosts } from '@/lib/data';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

const allPosts = [
  ...blogPosts,
  { id: 4, title: 'Top 10 Mẫu Thiết Kế Biệt Thự Đẹp Nhất 2025', excerpt: 'Tổng hợp những mẫu thiết kế biệt thự nội thất gỗ óc chó được yêu thích nhất...', image: '/images/project-3.jpg', category: 'Thiết Kế', date: '2025-03-10', href: '/tin-tuc/top-10-biet-thu-2025' },
  { id: 5, title: 'Bí Quyết Bảo Quản Đồ Nội Thất Gỗ Óc Chó', excerpt: 'Hướng dẫn chi tiết cách chăm sóc và bảo quản nội thất gỗ óc chó luôn như mới...', image: '/images/project-5.jpg', category: 'Kiến Thức', date: '2025-02-28', href: '/tin-tuc/bao-quan-go-oc-cho' },
  { id: 6, title: 'Phong Cách Nội Thất Tối Giản Luxury', excerpt: 'Khám phá phong cách minimal luxury - ít nhưng chất, đơn giản nhưng đẳng cấp...', image: '/images/project-1.jpg', category: 'Xu Hướng', date: '2025-02-15', href: '/tin-tuc/phong-cach-toi-gian-luxury' },
];

export default function BlogListPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/blog-2.jpg')` }} />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <span className="text-gold-light text-sm tracking-[0.3em] uppercase">Blog</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-4">Tin Tức & Xu Hướng</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.1}>
                <Link href={post.href} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-warm-200 hover:border-gold/20">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${post.image}')` }} />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-3 py-1 bg-gold text-white text-xs rounded-full tracking-wider uppercase">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-dark-500 mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-dark group-hover:text-gold transition-colors leading-tight mb-3">{post.title}</h3>
                    <p className="text-sm text-dark-500 leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-gold tracking-wider uppercase">
                      Đọc thêm <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
