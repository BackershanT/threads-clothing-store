'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useAuth } from '@/src/contexts/AuthContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/categories' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'New Arrivals', href: '/new-arrivals' },
    { label: 'Offers', href: '/offers' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-4">
              <div className="flex justify-end mb-6">
                <button 
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                  aria-label="Close menu"
                >
                  &times;
                </button>
              </div>
              
              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <Link 
                    key={item.label}
                    href={item.href}
                    className="block py-3 text-gray-800 hover:text-gray-500 border-b border-gray-100"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {!user && (
                  <Link 
                    href="/login"
                    className="block py-3 text-gray-800 hover:text-gray-500 border-b border-gray-100"
                    onClick={onClose}
                  >
                    Login
                  </Link>
                )}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;