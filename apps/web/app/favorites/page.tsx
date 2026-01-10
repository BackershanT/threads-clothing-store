"use client";

import Link from "next/link";
import { useFavorites } from "@/src/store/favorites";
import EmptyFavorites from "@/components/EmptyFavorites";
import { useCart } from "@/src/store/cart";

export default function FavoritesPage() {
  const { items, remove } = useFavorites();
  const { add: addToCart } = useCart();

  const handleAddToCart = (item: any) => {
    // Add to cart with quantity 1
    addToCart({
      variantId: item.productId,
      name: item.name,
      price: item.price,
      quantity: 1
    });
    
    // Optionally remove from favorites after adding to cart
    // remove(item.productId);
  };

  if (items.length === 0) {
    return <EmptyFavorites />;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Favorites</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.productId} className="border rounded-lg overflow-hidden bg-white">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              )}
            </div>
            
            <div className="p-4">
              <h3 className="font-medium truncate">{item.name}</h3>
              <p className="text-gray-600 font-semibold">₹{item.price.toFixed(2)}</p>
              
              <div className="mt-4 flex space-x-2">
                <button 
                  className="flex-1 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors text-sm"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
                
                <button 
                  className="p-2 border rounded-md hover:bg-gray-100"
                  onClick={() => remove(item.productId)}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-red-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}