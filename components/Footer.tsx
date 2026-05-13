'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, Clock, ArrowUp } from 'lucide-react';
import { companyInfo, showrooms, factories, socialLinks } from '@/lib/data';
import ScrollReveal from './ui/ScrollReveal';

const socialIcons: Record<string, string> = {
  Facebook: 'Fb',
  TikTok: 'TT',
  YouTube: 'YT',
  Instagram: 'IG',
  Zalo: 'Z',
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-warm-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 - Brand */}
          <ScrollReveal delay={0}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-[family-name:var(--font-heading)]">Đ</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-white tracking-wide">ĐỨC DƯƠNG</h3>
                  <p className="text-[10px] tracking-[0.25em] text-gold uppercase">Nội Thất Cao Cấp</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-warm-300 mb-6">
                Với hơn 25 năm kinh nghiệm, Nội Thất Đức Dương tự hào mang đến những không gian sống đẳng cấp, 
                sang trọng từ chất liệu gỗ óc chó cao cấp.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-dark-600 flex items-center justify-center text-warm-300 hover:bg-gold hover:border-gold hover:text-white transition-all"
                    title={social.platform}
                  >
                    <span className="text-xs font-bold">{socialIcons[social.platform] || '?'}</span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Column 2 - Services */}
          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="text-white font-semibold font-[family-name:var(--font-heading)] text-lg mb-6">Dịch Vụ</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Thiết Kế Nội Thất', href: '/thiet-ke-noi-that' },
                  { label: 'Thi Công Nội Thất', href: '/thi-cong-noi-that' },
                  { label: 'Dự Án', href: '/du-an' },
                  { label: 'Sản Phẩm', href: '/san-pham' },
                  { label: 'Bộ Sưu Tập', href: '/bo-suu-tap' },
                  { label: 'Tin Tức', href: '/tin-tuc' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-warm-300 hover:text-gold transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-gold rounded-full opacity-60" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Column 3 - Showrooms */}
          <ScrollReveal delay={0.2}>
            <div>
              <h4 className="text-white font-semibold font-[family-name:var(--font-heading)] text-lg mb-6">Showroom</h4>
              <div className="space-y-4">
                {showrooms.map((showroom) => (
                  <div key={showroom.city} className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-white">{showroom.city}</span>
                      <p className="text-xs text-warm-300 mt-0.5">{showroom.address}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <p className="text-sm text-warm-300">08h00 - 19h00 hằng ngày</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Column 4 - Contact */}
          <ScrollReveal delay={0.3}>
            <div>
              <h4 className="text-white font-semibold font-[family-name:var(--font-heading)] text-lg mb-6">Liên Hệ</h4>
              <div className="space-y-4 mb-6">
                <a href={`tel:${companyInfo.hotline.replace(/\s/g, '')}`} className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-dark-700 flex items-center justify-center group-hover:bg-gold transition-colors">
                    <Phone className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm text-warm-300 group-hover:text-white transition-colors">{companyInfo.hotline}</span>
                </a>
                <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-dark-700 flex items-center justify-center group-hover:bg-gold transition-colors">
                    <Mail className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm text-warm-300 group-hover:text-white transition-colors">{companyInfo.email}</span>
                </a>
              </div>

              {/* Nhà máy */}
              <h5 className="text-white text-sm font-medium mb-3">Nhà Máy Sản Xuất</h5>
              <div className="space-y-2">
                {factories.map((f) => (
                  <p key={f.name} className="text-xs text-warm-300">
                    <span className="text-gold">{f.name}:</span> {f.location}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-dark-500">
            © {new Date().getFullYear()} CÔNG TY TNHH NỘI THẤT ĐỨC DƯƠNG. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-4">
            {['Chính sách bảo mật', 'Chính sách bảo hành', 'Chính sách thanh toán'].map((text) => (
              <Link key={text} href="#" className="text-xs text-dark-500 hover:text-gold transition-colors">
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-dark-700 hover:bg-gold rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:shadow-xl"
        aria-label="Lên đầu trang"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
