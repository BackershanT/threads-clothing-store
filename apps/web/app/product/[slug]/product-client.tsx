"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useCart } from "../../../src/store/cart";
import Image from "next/image";

const ProductViewer = dynamic(
  () => import("@/components/3d/ProductViewer"),
  { ssr: false }
);

export default function ProductClient({ product, variants }: any) {
  const [selected, setSelected] = useState(variants[0]);
  const [show3D, setShow3D] = useState(false);
  const add = useCart((s) => s.add);

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      {/* LEFT SIDE */}
      <div>
        {!show3D ? (
          <div className="w-full h-96">
            <Image
              src={product.images?.[0] || "/placeholder.png"}
              alt={product.name}
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <ProductViewer modelUrl={product.model3dUrl || "/placeholder.gltf"} />
        )}

        {product.model3dUrl && (
          <button
            className="mt-2 underline"
            onClick={() => setShow3D(!show3D)}
          >
            {show3D ? "View Image" : "View in 3D"}
          </button>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="mt-2">{product.description}</p>

        <div className="mt-4">
          {variants.map((v: any) => (
            <button
              key={v._id}
              onClick={() => setSelected(v)}
              className={`border px-3 py-1 mr-2 ${
                selected._id === v._id ? "bg-black text-white" : ""
              }`}
            >
              {v.size} / {v.color}
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