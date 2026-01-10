'use client';

import React from 'react';
import Link from 'next/link';
import { useFavorites } from '@/src/store/favorites';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  slug: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isFavorite, toggle } = useFavorites();
  const isProductFavorite = isFavorite(product.id);
  
  const favoriteItem = {
    productId: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
  };

  return (
    <div className="relative group w-64 flex-shrink-0">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="relative aspect-square w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          <div className="p-4">
            <h3 className="font-medium text-gray-900 line-clamp-2 h-12">{product.name}</h3>
            
            <div className="mt-2 flex items-center">
              {product.originalPrice && product.originalPrice !== product.price && (
                <span className="text-sm text-gray-500 line-through mr-2">
                  ₹{product.originalPrice}
                </span>
              )}
              <span className="text-lg font-semibold text-gray-900">
                ₹{product.price}
              </span>
            </div>
          </div>
        </div>
      </Link>
      
      <button
        onClick={(e) => {
          e.preventDefault();
          toggle(favoriteItem);
        }}
        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
        aria-label={isProductFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${isProductFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`}
          viewBox="0 0 24 24"
          fill={isProductFavorite ? 'currentColor' : 'none'}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductCard;