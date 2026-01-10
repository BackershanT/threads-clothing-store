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
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT SIDE */}
        <div>
          {!show3D ? (
            <div className="w-full h-96 sm:h-[500px] bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={product.images?.[0] || "/placeholder.png"}
                alt={product.name}
                width={400}
                height={500}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24'%3E%3Cpath fill='%23ccc' d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V8.58L12,15.58L19,8.58V19M12,12.81L5,5.81H19L12,12.81Z'/%3E%3C/svg%3E";
                }}
              />
            </div>
          ) : (
            <div className="w-full h-96 sm:h-[500px]">
              <ProductViewer modelUrl={product.model3dUrl || "/placeholder.gltf"} />
            </div>
          )}

          {product.model3dUrl && (
            <button
              className="mt-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              onClick={() => setShow3D(!show3D)}
            >
              {show3D ? "View Image" : "View in 3D"}
            </button>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>

          <div className="mt-6">
            <h3 className="font-medium mb-3">Select Variant:</h3>
            <div className="flex flex-wrap gap-2">
              {variants.map((v: any) => (
                <button
                  key={v._id}
                  onClick={() => setSelected(v)}
                  className={`border border-gray-300 px-4 py-2 rounded-lg transition-colors ${
                    selected._id === v._id 
                      ? "bg-black text-white border-black" 
                      : "hover:border-gray-400"
                  }`}
                >
                  {v.size} / {v.color}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <p className="text-2xl font-bold text-gray-900">₹{selected.price}</p>
          </div>

          <button
            className="mt-6 w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium"
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
    </div>
  );
}