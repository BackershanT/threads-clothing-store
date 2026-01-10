'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { api } from '@/lib/api'; // This will be used when the API is ready

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  slug: string;
  discountPercentage?: number;
}

const NearOffersPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Placeholder products until API integration is complete
  const placeholderProducts = [
    {
      id: '1',
      name: 'Summer Sale - Up to 50% Off',
      price: 1999,
      originalPrice: 3999,
      image: '/images/product-1.jpg',
      slug: 'summer-sale-up-to-50-off',
      discountPercentage: 50
    },
    {
      id: '2',
      name: 'Clearance - Winter Collection',
      price: 2499,
      originalPrice: 4999,
      image: '/images/product-2.jpg',
      slug: 'clearance-winter-collection',
      discountPercentage: 50
    },
    {
      id: '3',
      name: 'Limited Time Offer - Accessories',
      price: 1299,
      originalPrice: 2599,
      image: '/images/product-3.jpg',
      slug: 'limited-time-offer-accessories',
      discountPercentage: 50
    },
    {
      id: '4',
      name: 'Flash Sale - Dresses',
      price: 2999,
      originalPrice: 5999,
      image: '/images/product-4.jpg',
      slug: 'flash-sale-dresses',
      discountPercentage: 50
    },
    {
      id: '5',
      name: 'End of Season - Up to 70% Off',
      price: 1799,
      originalPrice: 5999,
      image: '/images/product-5.jpg',
      slug: 'end-of-season-up-to-70-off',
      discountPercentage: 70
    },
    {
      id: '6',
      name: 'Special Discount - Outerwear',
      price: 4999,
      originalPrice: 9999,
      image: '/images/product-6.jpg',
      slug: 'special-discount-outerwear',
      discountPercentage: 50
    }
  ];

  useEffect(() => {
    // In the future, this will fetch from the API
    // fetchOffersFromAPI();
    
    // For now, using placeholder data
    setTimeout(() => {
      setProducts(placeholderProducts);
      setLoading(false);
    }, 500); // Simulate API loading time
  }, []);

  // Function to be implemented when API is ready
  const fetchOffersFromAPI = async () => {
    try {
      setLoading(true);
      // Example API call when ready:
      // const response = await api.get('/offers/near'); // Uncomment when API is ready
      // setProducts(response.data);
      setProducts(placeholderProducts); // Using placeholder for now
      setError(null);
    } catch (err) {
      setError('Failed to load offers. Please try again later.');
      console.error('Error fetching offers:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mb-4"></div>
          <p className="text-gray-700">Loading offers near you...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={fetchOffersFromAPI}
            className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nearby Offers</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover exclusive deals and discounts available near your location. 
            Save more with offers tailored just for you.
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No offers available near you at the moment.</p>
            <p className="text-gray-500 mt-2">Check back later for new deals!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NearOffersPage;