'use client';

import { blogPosts } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function BlogSection() {
  return (
    <section id="blog" className="section-padding bg-warm-100">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Tin Tức"
          title="Bài Viết Mới Nhất"
          description="Cập nhật xu hướng thiết kế, kiến thức nội thất và tin tức mới nhất từ Đức Dương."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 0.15}>
              <Link href={post.href} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-warm-200 hover:border-gold/20">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-gold text-white text-xs rounded-full tracking-wider uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-dark-500 mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-dark group-hover:text-gold transition-colors leading-tight mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-dark-500 leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-gold tracking-wider uppercase">
                    Đọc thêm <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Link href="/tin-tuc" className="btn-outline-dark group">
              Xem Tất Cả Bài Viết <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
