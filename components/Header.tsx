'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Search } from 'lucide-react';
import Link from 'next/link';
import { navigationLinks, companyInfo } from '@/lib/data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center transition-transform group-hover:scale-110`}>
              <span className="text-white font-bold text-lg font-[family-name:var(--font-heading)]">Đ</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-lg font-bold font-[family-name:var(--font-heading)] tracking-wide transition-colors ${isScrolled ? 'text-dark' : 'text-white'}`}>
                ĐỨC DƯƠNG
              </h1>
              <p className={`text-[10px] tracking-[0.25em] uppercase transition-colors ${isScrolled ? 'text-gold' : 'text-gold-light'}`}>
                Nội Thất Cao Cấp
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                    isScrolled
                      ? 'text-dark-700 hover:text-gold'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-0 pt-2"
                      >
                        <div className="bg-white rounded-lg shadow-2xl border border-warm-200 py-2 min-w-[220px]">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-5 py-2.5 text-sm text-dark-700 hover:text-gold hover:bg-warm-100 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${companyInfo.hotline.replace(/\s/g, '')}`}
              className={`hidden md:flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? 'text-gold' : 'text-gold-light'
              }`}
            >
              <Phone className="w-4 h-4" />
              {companyInfo.hotline}
            </a>

            <Link
              href="#consultation"
              className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5"
            >
              Tư Vấn Miễn Phí
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-dark' : 'text-white'}`}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl overflow-y-auto"
            >
              <div className="p-6 pt-20">
                {/* Logo in mobile */}
                <div className="mb-8 pb-6 border-b border-warm-200">
                  <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-dark">ĐỨC DƯƠNG</h2>
                  <p className="text-xs tracking-[0.2em] text-gold uppercase">Nội Thất Cao Cấp</p>
                </div>

                {navigationLinks.map((link) => (
                  <div key={link.label} className="border-b border-warm-100">
                    {link.children ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                          className="flex items-center justify-between w-full py-4 text-dark-800 font-medium"
                        >
                          {link.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-3 pl-4 space-y-1">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="block py-2 text-sm text-dark-500 hover:text-gold transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="block py-4 text-dark-800 font-medium hover:text-gold transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="mt-8 space-y-3">
                  <a
                    href={`tel:${companyInfo.hotline.replace(/\s/g, '')}`}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 text-white rounded-lg font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    {companyInfo.hotline}
                  </a>
                  <Link
                    href="#consultation"
                    onClick={() => setIsMobileOpen(false)}
                    className="block text-center w-full py-3 btn-primary rounded-lg"
                  >
                    Đặt Lịch Tư Vấn
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
