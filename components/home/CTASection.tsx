'use client';

import { useState } from 'react';
import { companyInfo } from '@/lib/data';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function CTASection() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', projectType: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.');
    setFormData({ name: '', phone: '', email: '', projectType: '', message: '' });
  };

  return (
    <section id="consultation" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-gold" />
                <span className="text-gold-light text-sm tracking-[0.2em] uppercase">Liên Hệ</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
                Biến Giấc Mơ<br /><span className="text-gradient-gold">Không Gian Sống</span><br />Thành Hiện Thực
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-warm-300 text-base md:text-lg leading-relaxed mb-10">
                Đăng ký tư vấn miễn phí ngay hôm nay. Đội ngũ kiến trúc sư của Đức Dương sẽ liên hệ và tư vấn giải pháp phù hợp nhất cho không gian của bạn.
              </p>
            </ScrollReveal>

            <div className="space-y-5">
              <ScrollReveal delay={0.3}>
                <a href={`tel:${companyInfo.hotline.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors">
                    <Phone className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-warm-300 uppercase tracking-wider">Hotline</p>
                    <p className="text-xl font-bold text-white">{companyInfo.hotline}</p>
                  </div>
                </a>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors">
                    <Mail className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-warm-300 uppercase tracking-wider">Email</p>
                    <p className="text-lg text-white">{companyInfo.email}</p>
                  </div>
                </a>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-warm-300 uppercase tracking-wider">Showroom Hà Nội</p>
                    <p className="text-sm text-white">Tầng 3, Tòa CT1 - C14 Bắc Hà, Tố Hữu, Hà Nội</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right - Form */}
          <ScrollReveal direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md rounded-xl p-8 md:p-10 border border-white/10">
              <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-white mb-6">Đăng Ký Tư Vấn Miễn Phí</h3>
              
              <div className="space-y-4">
                <input type="text" placeholder="Họ và tên *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors" />
                <input type="tel" placeholder="Số điện thoại *" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors" />
                <input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors" />
                <select value={formData.projectType} onChange={e => setFormData({...formData, projectType: e.target.value})}
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-lg text-white/70 text-sm focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option value="" className="text-dark">Loại hình dự án</option>
                  <option value="chung-cu" className="text-dark">Chung Cư</option>
                  <option value="nha-pho" className="text-dark">Nhà Phố</option>
                  <option value="biet-thu" className="text-dark">Biệt Thự</option>
                  <option value="penthouse" className="text-dark">Penthouse</option>
                  <option value="khac" className="text-dark">Khác</option>
                </select>
                <textarea placeholder="Mô tả yêu cầu của bạn..." rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
                <button type="submit" className="w-full btn-primary justify-center py-4 rounded-lg group">
                  Gửi Yêu Cầu Tư Vấn <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <p className="text-xs text-white/30 mt-4 text-center">Chúng tôi sẽ liên hệ trong vòng 24h</p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
