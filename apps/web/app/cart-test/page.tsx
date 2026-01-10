"use client";

import { useCart } from "@/src/store/cart";
import Link from "next/link";

export default function CartTestPage() {
  const { items, add, remove, updateQuantity, clear, getTotalItems, getTotalPrice } = useCart();

  // Dummy products for testing
  const dummyProducts = [
    { variantId: "1", name: "Blue T-Shirt", price: 29.99 },
    { variantId: "2", name: "Red Dress", price: 59.99 },
    { variantId: "3", name: "Black Jeans", price: 49.99 },
  ];

  const addToCart = (product: any, quantity: number = 1) => {
    add({
      variantId: product.variantId,
      name: product.name,
      price: product.price,
      quantity: quantity
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cart Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Dummy Products</h2>
          <div className="space-y-4">
            {dummyProducts.map(product => (
              <div key={product.variantId} className="border p-4 rounded-md">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-600">₹{product.price.toFixed(2)}</p>
                <div className="flex space-x-2 mt-2">
                  <button 
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => addToCart(product, 1)}
                  >
                    Add 1
                  </button>
                  <button 
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    onClick={() => addToCart(product, 2)}
                  >
                    Add 2
                  </button>
                  <button 
                    className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600"
                    onClick={() => addToCart(product, 3)}
                  >
                    Add 3
                  </button>
                </div>
              </div>
            ))}
            
            <div className="mt-6">
              <button 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-2"
                onClick={clear}
              >
                Clear Cart
              </button>
              
              <Link href="/cart">
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                  View Cart ({getTotalItems()})
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Current Cart</h2>
          
          <div className="border rounded-md p-4">
            <p>Total Items: {getTotalItems()}</p>
            <p>Total Price: ₹{getTotalPrice().toFixed(2)}</p>
            
            {items.length === 0 ? (
              <p className="text-gray-500 italic mt-2">Cart is empty</p>
            ) : (
              <div className="mt-4 space-y-2">
                {items.map(item => (
                  <div key={item.variantId} className="border-b pb-2">
                    <p><strong>{item.name}</strong>: {item.quantity} × ₹{item.price.toFixed(2)}</p>
                    <div className="flex space-x-2 mt-1">
                      <button 
                        className="text-sm bg-gray-200 px-2 py-1 rounded"
                        onClick={() => updateQuantity(item.variantId, Math.max(1, item.quantity - 1))}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        className="text-sm bg-gray-200 px-2 py-1 rounded"
                        onClick={() => updateQuantity(item.variantId, Math.min(3, item.quantity + 1))}
                      >
                        +
                      </button>
                      <button 
                        className="text-sm bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => remove(item.variantId)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}