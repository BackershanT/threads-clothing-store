"use client";

import { useState } from "react";
import { useCart } from "../../../src/store/cart";

export default function ProductClient({ product, variants }: any) {
  const [selected, setSelected] = useState(variants[0]);
  const add = useCart((s) => s.add);

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      <img
        src={product.images?.[0] || "/placeholder.png"}
        className="w-full h-96 object-cover"
      />

      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="mt-2">{product.description}</p>

        {/* VARIANTS */}
        <div className="mt-4 space-y-2">
          {variants.map((v: any) => (
            <button
              key={v._id}
              onClick={() => setSelected(v)}
              className={`border px-3 py-1 mr-2 ${
                selected._id === v._id ? "bg-black text-white" : ""
              }`}
            >
              {v.size} / {v.color} / {v.fabric}
            </button>
          ))}
        </div>

        <p className="mt-4 text-xl font-semibold">₹{selected.price}</p>

        <button
          className="mt-4 bg-black text-white px-6 py-2"
          onClick={() =>
            add({
              variantId: selected._id,
              name: product.name,
              price: selected.price,
              quantity: 1
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}