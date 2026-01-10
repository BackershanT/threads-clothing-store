'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/src/contexts/AuthContext';
import { useCart } from '@/src/store/cart';
import { useFavorites } from '@/src/store/favorites';
import MobileMenu from './MobileMenu';
import UserModal from './UserModal';

const Header: React.FC = () => {
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { getTotalItems: getFavoriteItems } = useFavorites();
  const cartItemCount = getTotalItems();
  const favoriteItemCount = getFavoriteItems();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleUserModal = () => {
    setIsUserModalOpen(!isUserModalOpen);
  };

  const closeUserModal = () => {
    setIsUserModalOpen(false);
  };

  // Mock categories data - in a real app this would come from an API
  const categories = [
    { id: 'dresses', name: 'Dresses' },
    { id: 'tops', name: 'Tops' },
    { id: 'bottoms', name: 'Bottoms' },
    { id: 'outerwear', name: 'Outerwear' },
    { id: 'accessories', name: 'Accessories' },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex sticky top-0 z-30 bg-white bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              THREAD
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 transition-colors">
                Categories
              </button>
              <div className="absolute hidden group-hover:block mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                {categories.map(category => (
                  <Link 
                    key={category.id}
                    href={`/categories/${category.id}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link href="/size-guide" className="text-gray-700 hover:text-gray-900 transition-colors">
              Size Guide
            </Link>
            <Link href="/new-arrivals" className="text-gray-700 hover:text-gray-900 transition-colors">
              New Arrivals
            </Link>
            <Link href="/offers" className="text-gray-700 hover:text-gray-900 transition-colors">
              Offers
            </Link>
          </nav>

          {/* Right-side Icons */}
          <div className="flex items-center space-x-6">
            
            <Link href="/favorites" className="relative text-gray-700 hover:text-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {favoriteItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {favoriteItemCount}
                </span>
              )}
            </Link>
            
            <Link href="/cart" className="relative text-gray-700 hover:text-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            <button 
              onClick={toggleUserModal}
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label={user ? 'Open user menu' : 'Open login menu'}
            >
              {!user ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              ) : (
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xs text-gray-700">{user.name.charAt(0)}</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-30 bg-white bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Hamburger Menu */}
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Brand Logo - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              THREAD
            </Link>
          </div>

          {/* Right-side Icons */}
          <div className="flex items-center space-x-4">
            
            <Link href="/favorites" className="relative text-gray-700 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {favoriteItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {favoriteItemCount}
                </span>
              )}
            </Link>
            
            <Link href="/cart" className="relative text-gray-700 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            <button 
              onClick={toggleUserModal}
              className="text-gray-700 hover:text-gray-900"
              aria-label={user ? 'Open user menu' : 'Open login menu'}
            >
              {!user ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              ) : (
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xs text-gray-700">{user.name.charAt(0)}</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      <UserModal isOpen={isUserModalOpen} onClose={closeUserModal} />
    </>
  );
};

export default Header;