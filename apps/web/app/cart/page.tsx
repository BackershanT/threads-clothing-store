"use client";

import Link from "next/link";
import { useCart } from "@/src/store/cart";
import EmptyCart from "@/components/EmptyCart";

export default function CartPage() {
  const { items, remove, updateQuantity } = useCart();

  const total = items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Shopping Cart</h2>
        <p className="text-gray-600 mt-2">Review and manage items in your cart</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="divide-y divide-gray-100">
          {items.map((i) => (
            <div key={i.variantId} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:bg-gray-50 transition-colors">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-lg truncate">{i.name}</h3>
                <p className="text-gray-600 mt-1">₹{i.price.toFixed(2)}</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button 
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => {
                      if (i.quantity > 1) {
                        updateQuantity(i.variantId, i.quantity - 1);
                      }
                    }}
                    disabled={i.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-medium min-w-[2rem] text-center">{i.quantity}</span>
                  <button 
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => {
                      if (i.quantity < 3) {
                        updateQuantity(i.variantId, i.quantity + 1);
                      }
                    }}
                    disabled={i.quantity >= 3}
                  >
                    +
                  </button>
                </div>
                
                <button 
                  className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-full transition-colors"
                  onClick={() => remove(i.variantId)}
                  aria-label="Remove item"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border-t bg-gray-50">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="text-lg">
              <span className="text-gray-600">Total:</span>
              <span className="ml-2 font-bold text-xl">₹{total.toFixed(2)}</span>
            </div>
            
            <Link href="/checkout" className="w-full sm:w-auto">
              <button className="w-full bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors font-medium shadow-md">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}