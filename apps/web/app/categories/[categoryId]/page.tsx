'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';

// Dummy data for products
const dummyProducts = [
  {
    id: '1',
    name: 'Elegant Summer Dress',
    price: 2999,
    originalPrice: 3999,
    image: '/images/product-1.jpg',
    slug: 'elegant-summer-dress'
  },
  {
    id: '2',
    name: 'Casual Cotton T-Shirt',
    price: 899,
    originalPrice: 1299,
    image: '/images/product-2.jpg',
    slug: 'casual-cotton-t-shirt'
  },
  {
    id: '3',
    name: 'Premium Leather Jacket',
    price: 8999,
    originalPrice: 12999,
    image: '/images/product-3.jpg',
    slug: 'premium-leather-jacket'
  },
  {
    id: '4',
    name: 'Designer Denim Jeans',
    price: 2499,
    originalPrice: 3499,
    image: '/images/product-4.jpg',
    slug: 'designer-denim-jeans'
  },
  {
    id: '5',
    name: 'Silk Evening Gown',
    price: 12999,
    originalPrice: 15999,
    image: '/images/product-5.jpg',
    slug: 'silk-evening-gown'
  },
  {
    id: '6',
    name: 'Comfortable Joggers',
    price: 1799,
    originalPrice: 2499,
    image: '/images/product-6.jpg',
    slug: 'comfortable-joggers'
  },
  {
    id: '7',
    name: 'Classic White Shirt',
    price: 1499,
    originalPrice: 1999,
    image: '/images/product-7.jpg',
    slug: 'classic-white-shirt'
  },
  {
    id: '8',
    name: 'Cozy Sweater',
    price: 2299,
    originalPrice: 2999,
    image: '/images/product-8.jpg',
    slug: 'cozy-sweater'
  },
];

// Categories mapping
const categoryNames: Record<string, string> = {
  'dresses': 'Dresses',
  'tops': 'Tops',
  'bottoms': 'Bottoms',
  'outerwear': 'Outerwear',
  'accessories': 'Accessories',
  'new-arrivals': 'New Arrivals',
  'offers': 'Special Offers'
};

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  slug: string;
}

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  const categoryId = params?.categoryId || '';
  const categoryName = categoryNames[categoryId] || (categoryId && categoryId.charAt(0).toUpperCase() + categoryId.slice(1)) || 'Category';
  
  // Filter products based on category (for demo purposes, showing all products)
  // In a real app, this would come from an API call
  const categoryProducts: Product[] = dummyProducts;
  
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return categoryProducts;
    }
    
    const query = searchQuery.toLowerCase();
    return categoryProducts.filter(product => 
      product.name.toLowerCase().includes(query)
    );
  }, [categoryProducts, searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900 capitalize">{categoryName}</h1>
        
        {/* Search Bar */}
        <div className="relative max-w-xs w-full">
          <input
            type="text"
            placeholder="Search products..."
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && searchQuery && (
        <div className="text-center py-12">
          <p className="text-gray-600">No products found for "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}