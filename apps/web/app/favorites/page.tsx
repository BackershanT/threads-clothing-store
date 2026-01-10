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
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">My Favorites</h2>
        <p className="text-gray-600 mt-2">Your saved items for later purchase</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {items.map((item) => (
          <div key={item.productId} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="h-56 bg-gray-100 flex items-center justify-center">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24'%3E%3Cpath fill='%23ccc' d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V8.58L12,15.58L19,8.58V19M12,12.81L5,5.81H19L12,12.81Z'/%3E%3C/svg%3E";
                  }}
                />
              ) : (
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-lg truncate">{item.name}</h3>
              <p className="text-gray-600 font-semibold mt-1">₹{item.price.toFixed(2)}</p>
              
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <button 
                  className="flex-1 bg-black text-white py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
                
                <button 
                  className="p-2.5 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => remove(item.productId)}
                  aria-label="Remove from favorites"
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