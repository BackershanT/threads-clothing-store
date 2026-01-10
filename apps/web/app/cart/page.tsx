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
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      <div className="space-y-4">
        {items.map((i) => (
          <div key={i.variantId} className="flex items-center justify-between border-b pb-4">
            <div className="flex-1">
              <h3 className="font-medium">{i.name}</h3>
              <p className="text-gray-600">₹{i.price.toFixed(2)}</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <button 
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                  onClick={() => {
                    if (i.quantity > 1) {
                      updateQuantity(i.variantId, i.quantity - 1);
                    }
                  }}
                  disabled={i.quantity <= 1}
                >
                  -
                </button>
                <span className="px-3 py-1">{i.quantity}</span>
                <button 
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
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
                className="text-red-600 hover:text-red-800"
                onClick={() => remove(i.variantId)}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t">
        <div className="flex justify-between text-lg font-semibold mb-6">
          <span>Total:</span>
          <span>₹{total.toFixed(2)}</span>
        </div>

        <Link href="/checkout">
          <button className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}