'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredProjects, projectCategories } from '@/lib/data';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// Extended projects for the listing page
const allProjects = [
  ...featuredProjects,
  { id: 7, title: 'Nội Thất Chung Cư Elite Tower', category: 'Chung Cư', image: '/images/project-1.jpg', href: '/du-an/chung-cu-elite-tower' },
  { id: 8, title: 'Chung Cư Cao Cấp 120m² Tối Giản', category: 'Chung Cư', image: '/images/project-2.jpg', href: '/du-an/chung-cu-120m2-toi-gian' },
  { id: 9, title: 'Penthouse Duplex 250m²', category: 'Penthouse', image: '/images/project-3.jpg', href: '/du-an/penthouse-duplex-250m2' },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('Tất Cả');
  const filtered = activeCategory === 'Tất Cả' ? allProjects : allProjects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/project-4.jpg')` }} />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <span className="text-gold-light text-sm tracking-[0.3em] uppercase">Công Trình</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-4">Dự Án Nổi Bật</h1>
            <p className="text-warm-300 mt-4 max-w-2xl mx-auto">Hơn 3000+ dự án thiết kế và thi công nội thất cao cấp đã hoàn thành</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {projectCategories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-medium transition-all rounded-full ${activeCategory === cat ? 'bg-dark text-white' : 'bg-warm-200 text-dark-500 hover:bg-warm-300'}`}
              >{cat}</button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                  <Link href={project.href} className="group block relative rounded-lg overflow-hidden h-[320px] md:h-[380px]">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${project.image}')` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full tracking-wider uppercase">{project.category}</span>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-white leading-tight group-hover:text-gold-light transition-colors">{project.title}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
