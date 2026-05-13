'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredProjects, projectCategories } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('Tất Cả');

  const filteredProjects = activeCategory === 'Tất Cả'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Dự Án"
          title="Công Trình Nổi Bật"
          description="Khám phá những dự án thiết kế và thi công nội thất cao cấp đã được Đức Dương hoàn thành."
        />

        {/* Category Filter */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-medium transition-all rounded-full ${
                  activeCategory === cat
                    ? 'bg-dark text-white'
                    : 'bg-warm-200 text-dark-500 hover:bg-warm-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={project.href} className="group block relative rounded-lg overflow-hidden h-[320px] md:h-[350px]">
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-white leading-tight group-hover:text-gold-light transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link href="/du-an" className="btn-outline-dark group">
              Khám Phá Dự Án Khác
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
