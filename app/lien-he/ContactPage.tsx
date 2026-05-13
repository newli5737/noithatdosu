'use client';

import { useState } from 'react';
import { companyInfo, showrooms } from '@/lib/data';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionTitle from '@/components/ui/SectionTitle';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', projectType: '', area: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h.');
    setFormData({ name: '', phone: '', email: '', projectType: '', area: '', message: '' });
  };

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/about-showroom.jpg')` }} />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <span className="text-gold-light text-sm tracking-[0.3em] uppercase">Liên Hệ</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-4">Kết Nối Với Chúng Tôi</h1>
            <p className="text-warm-300 mt-4 max-w-2xl mx-auto">Đội ngũ tư vấn sẵn sàng hỗ trợ bạn mọi lúc</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Phone, title: 'Hotline', value: companyInfo.hotline, href: `tel:${companyInfo.hotline.replace(/\s/g, '')}` },
              { icon: Mail, title: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
              { icon: Clock, title: 'Giờ Mở Cửa', value: '08h00 - 19h00 hằng ngày', href: '' },
              { icon: MessageCircle, title: 'Zalo', value: 'Chat trực tiếp', href: 'https://zalo.me/0906232528' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <a href={item.href || '#'} target={item.href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="block bg-white rounded-lg p-6 text-center shadow-sm border border-warm-200 hover:shadow-md hover:border-gold/20 transition-all">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold text-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-dark-500">{item.value}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <SectionTitle subtitle="Gửi Yêu Cầu" title="Đăng Ký Tư Vấn" align="left" />
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Họ và tên *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3.5 bg-warm-100 border border-warm-200 rounded-lg text-dark text-sm focus:outline-none focus:border-gold transition-colors" />
                    <input type="tel" placeholder="Số điện thoại *" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3.5 bg-warm-100 border border-warm-200 rounded-lg text-dark text-sm focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3.5 bg-warm-100 border border-warm-200 rounded-lg text-dark text-sm focus:outline-none focus:border-gold transition-colors" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select value={formData.projectType} onChange={e => setFormData({...formData, projectType: e.target.value})}
                      className="w-full px-4 py-3.5 bg-warm-100 border border-warm-200 rounded-lg text-dark-500 text-sm focus:outline-none focus:border-gold transition-colors">
                      <option value="">Loại hình dự án</option>
                      <option value="chung-cu">Chung Cư</option>
                      <option value="nha-pho">Nhà Phố</option>
                      <option value="biet-thu">Biệt Thự</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="khac">Khác</option>
                    </select>
                    <input type="text" placeholder="Diện tích (m²)" value={formData.area} onChange={e => setFormData({...formData, area: e.target.value})}
                      className="w-full px-4 py-3.5 bg-warm-100 border border-warm-200 rounded-lg text-dark text-sm focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <textarea placeholder="Mô tả yêu cầu của bạn..." rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3.5 bg-warm-100 border border-warm-200 rounded-lg text-dark text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
                  <button type="submit" className="btn-primary w-full justify-center py-4 rounded-lg group">
                    Gửi Yêu Cầu <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <SectionTitle subtitle="Địa Chỉ" title="Hệ Thống Showroom" align="left" />
                <div className="space-y-4 mb-8">
                  {showrooms.map(s => (
                    <div key={s.city} className="flex items-start gap-4 p-5 bg-warm-100 rounded-lg border border-warm-200">
                      <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-semibold text-dark">{s.city}</h4>
                        <p className="text-sm text-dark-500 mt-1">{s.address}</p>
                        {s.note && <p className="text-xs text-gold mt-1">{s.note}</p>}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Map embed placeholder */}
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-warm-200 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.3!2d105.79!3d20.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAwJzAwLjAiTiAxMDXCsDQ3JzI0LjAiRQ!5e0!3m2!1svi!2s!4v1"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    title="Nội Thất Đức Dương - Showroom Hà Nội"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
