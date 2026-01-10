"use client";

import Link from "next/link";
import { useCart } from "@/src/store/cart";

export default function CartPage() {
  const { items, remove } = useCart();

  const total = items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Cart</h2>

      {items.map((i) => (
        <div key={i.variantId} className="flex justify-between mt-2">
          <span>{i.name}</span>
          <span>₹{i.price}</span>
          <button onClick={() => remove(i.variantId)}>❌</button>
        </div>
      ))}

      <p className="mt-4 font-semibold">Total: ₹{total}</p>

      <Link href="/checkout">
        <button className="mt-4 bg-black text-white px-6 py-2">
          Checkout
        </button>
      </Link>
    </div>
  );
}