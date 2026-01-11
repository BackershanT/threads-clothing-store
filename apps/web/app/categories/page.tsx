'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

// Categories data
const categories = [
  { id: 'dresses', name: 'Dresses' },
  { id: 'tops', name: 'Tops' },
  { id: 'bottoms', name: 'Bottoms' },
  { id: 'outerwear', name: 'Outerwear' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'new-arrivals', name: 'New Arrivals' },
  { id: 'near-offers', name: 'Special Offers' },
  { id: 'best-sellers', name: 'Best Sellers' },
];

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return categories;
    }
    
    const query = searchQuery.toLowerCase();
    return categories.filter(category => 
      category.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">All Categories</h1>
        
        {/* Search Bar */}
        <div className="relative max-w-xs w-full">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 pr-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCategories.map(category => (
          <Link 
            key={category.id}
            href={`/categories/${category.id}`}
            className="block group"
          >
            <div className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300 aspect-square flex flex-col items-center justify-center p-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center mb-3">
                <span className="text-gray-500 text-lg font-medium">{category.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredCategories.length === 0 && searchQuery && (
        <div className="text-center py-12">
          <p className="text-gray-600">No categories found for "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}