import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection';
import FactorySection from '@/components/home/FactorySection';
import ProcessSection from '@/components/home/ProcessSection';
import ProductsSection from '@/components/home/ProductsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogSection from '@/components/home/BlogSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <FactorySection />
      <ProcessSection />
      <ProductsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
