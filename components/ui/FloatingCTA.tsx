'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, Calendar } from 'lucide-react';

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.a
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              href="https://zalo.me/0906232528"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-full shadow-lg px-5 py-3 hover:shadow-xl transition-shadow group"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-dark-800 group-hover:text-gold transition-colors">Chat Zalo</span>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              href="tel:0906232528"
              className="flex items-center gap-3 bg-white rounded-full shadow-lg px-5 py-3 hover:shadow-xl transition-shadow group"
            >
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-dark-800 group-hover:text-gold transition-colors">0906 23 25 28</span>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              href="#consultation"
              className="flex items-center gap-3 bg-white rounded-full shadow-lg px-5 py-3 hover:shadow-xl transition-shadow group"
            >
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-dark-800 group-hover:text-gold transition-colors">Đặt Lịch Tư Vấn</span>
            </motion.a>
          </>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ animation: isOpen ? 'none' : 'pulse-gold 2s infinite' }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
