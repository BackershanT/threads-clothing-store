import React from 'react';
import ProductCard from '@/components/ProductCard';

// Dummy data for new arrival products
const newArrivalProducts = [
  {
    id: '9',
    name: 'Trendy Oversized Hoodie',
    price: 3499,
    originalPrice: 4499,
    image: '/images/product-9.jpg',
    slug: 'trendy-oversized-hoodie'
  },
  {
    id: '10',
    name: 'Minimalist Watch',
    price: 5999,
    originalPrice: 7999,
    image: '/images/product-10.jpg',
    slug: 'minimalist-watch'
  },
  {
    id: '11',
    name: 'Sustainable Cotton Tote',
    price: 1299,
    originalPrice: 1799,
    image: '/images/product-11.jpg',
    slug: 'sustainable-cotton-tote'
  },
  {
    id: '12',
    name: 'Modern Sneakers',
    price: 4999,
    originalPrice: 6999,
    image: '/images/product-12.jpg',
    slug: 'modern-sneakers'
  },
  {
    id: '13',
    name: 'Luxury Silk Scarf',
    price: 2999,
    originalPrice: 3999,
    image: '/images/product-13.jpg',
    slug: 'luxury-silk-scarf'
  },
  {
    id: '14',
    name: 'Smart Fitness Tracker',
    price: 7999,
    originalPrice: 9999,
    image: '/images/product-14.jpg',
    slug: 'smart-fitness-tracker'
  },
  {
    id: '15',
    name: 'Eco-friendly Sunglasses',
    price: 2499,
    originalPrice: 3499,
    image: '/images/product-15.jpg',
    slug: 'eco-friendly-sunglasses'
  },
  {
    id: '16',
    name: 'Leather Crossbody Bag',
    price: 6999,
    originalPrice: 8999,
    image: '/images/product-16.jpg',
    slug: 'leather-crossbody-bag'
  },
];

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  slug: string;
}

export default function NewArrivalsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">New Arrivals</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {newArrivalProducts.map((product) => (
          <ProductCard key={product.id} product={product as Product} />
        ))}
      </div>
    </div>
  );
}