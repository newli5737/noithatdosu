import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionTitle from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'Bộ Sưu Tập Nội Thất | Nội Thất Đức Dương',
  description: 'Khám phá các bộ sưu tập nội thất gỗ óc chó cao cấp: D\'Elegant, D\'Luxury, D\'Noble - thiết kế độc đáo, chất liệu thượng hạng.',
};

const collections = [
  { id: 1, name: "D'Elegant 2.5", desc: 'Thanh lịch, tinh tế với đường nét mềm mại và tỉ lệ hoàn hảo.', image: '/images/product-1.jpg', count: 12 },
  { id: 2, name: "D'Luxury 2.5", desc: 'Sang trọng, đẳng cấp với chất liệu đá tự nhiên và gỗ óc chó.', image: '/images/product-4.jpg', count: 8 },
  { id: 3, name: "D'Noble 2.5", desc: 'Quý phái, mạnh mẽ với thiết kế hiện đại và tính nghệ thuật cao.', image: '/images/product-5.jpg', count: 10 },
  { id: 4, name: "Classic Collection", desc: 'Phong cách cổ điển châu Âu kết hợp chất liệu gỗ óc chó truyền thống.', image: '/images/product-2.jpg', count: 15 },
];

export default function Page() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/product-3.jpg')` }} />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <span className="text-gold-light text-sm tracking-[0.3em] uppercase">Collections</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-4">Bộ Sưu Tập</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Khám Phá" title="Các Bộ Sưu Tập Nổi Bật" description="Mỗi bộ sưu tập là sự kết hợp hoàn hảo giữa nghệ thuật thiết kế và chất liệu gỗ óc chó thượng hạng." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((col, i) => (
              <ScrollReveal key={col.id} delay={i * 0.1}>
                <Link href={`/bo-suu-tap/${col.id}`} className="group block relative h-[400px] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${col.image}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent group-hover:from-dark/90 transition-all" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-gold text-xs tracking-widest uppercase">{col.count} Sản phẩm</span>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white mt-2 mb-2">{col.name}</h3>
                    <p className="text-warm-300 text-sm">{col.desc}</p>
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
