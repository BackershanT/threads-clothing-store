'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  slug: string;
}

interface CategorySectionProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, products, viewAllLink }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById(`scroll-container-${title}`);
    if (container) {
      const scrollAmount = 300; // Adjust based on product card width
      container.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {viewAllLink && (
          <Link href={viewAllLink} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            View All
          </Link>
        )}
      </div>
      
      <div className="relative group">
        <div 
          id={`scroll-container-${title}`}
          className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar"
          style={{ 
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Arrow buttons - visible on desktop, hidden on mobile */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute top-1/2 -translate-y-1/2 left-2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors opacity-0 group-hover:opacity-100 lg:opacity-100 lg:hover:opacity-100"
          aria-label={`Scroll ${title} left`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => handleScroll('right')}
          className="absolute top-1/2 -translate-y-1/2 right-2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors opacity-0 group-hover:opacity-100 lg:opacity-100 lg:hover:opacity-100"
          aria-label={`Scroll ${title} right`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CategorySection;