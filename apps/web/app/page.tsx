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
];

// Categories data
const categories = [
  { id: 'dresses', name: 'Dresses', products: dummyProducts },
  { id: 'tops', name: 'Tops', products: dummyProducts.slice(0, 4) },
  { id: 'bottoms', name: 'Bottoms', products: dummyProducts.slice(2, 6) },
  { id: 'outerwear', name: 'Outerwear', products: dummyProducts.slice(1, 5) },
  { id: 'accessories', name: 'Accessories', products: dummyProducts.slice(0, 3) },
];

import HeroSection from '@/components/HeroSection';
import Carousel from '@/components/Carousel';
import CategorySection from '@/components/CategorySection';
import PromoSection from '@/components/PromoSection';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Carousel />
      
      {/* Category Sections */}
      {categories.map((category, index) => (
        <React.Fragment key={category.id}>
          <CategorySection 
            title={category.name}
            products={category.products}
            viewAllLink={`/categories/${category.id}`}
          />
          
          {/* Insert Promo Section after every 2 category sections */}
          {(index + 1) % 2 === 0 && (
            <PromoSection 
              newArrivalsLink="/new-arrivals" 
              offersLink="/near-offers" 
              showBestSellers={index === 1}  // Show Best Sellers as second promo section
              bestSellersLink="/best-sellers"
            />
          )}
        </React.Fragment>
      ))}
      
      {/* All Categories Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Categories</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {categories.map(category => (
            <Link 
              key={`all-${category.id}`}
              href={`/categories/${category.id}`}
              className="flex-shrink-0 w-48 group block"
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
      </section>
    </>
  );
}
