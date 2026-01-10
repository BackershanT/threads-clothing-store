import React from 'react';
import ProductCard from '@/components/ProductCard';

// Dummy data for best seller products
const bestSellerProducts = [
  {
    id: '1',
    name: 'Elegant Summer Dress',
    price: 2999,
    originalPrice: 3999,
    image: '/images/product-1.jpg',
    slug: 'elegant-summer-dress'
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
    id: '5',
    name: 'Silk Evening Gown',
    price: 12999,
    originalPrice: 15999,
    image: '/images/product-5.jpg',
    slug: 'silk-evening-gown'
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
    id: '4',
    name: 'Designer Denim Jeans',
    price: 2499,
    originalPrice: 3499,
    image: '/images/product-4.jpg',
    slug: 'designer-denim-jeans'
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

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  slug: string;
}

export default function BestSellersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Best Sellers</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bestSellerProducts.map((product) => (
          <ProductCard key={product.id} product={product as Product} />
        ))}
      </div>
    </div>
  );
}