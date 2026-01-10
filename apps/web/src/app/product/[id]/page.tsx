"use client";

import { useState } from "react";
import { useCart } from "@/src/store/cart";

// Sample product data (in a real app, this would come from an API)
const sampleProduct = {
  id: "prod-123",
  name: "Premium Cotton T-Shirt",
  description: "Comfortable and stylish cotton t-shirt for everyday wear.",
  images: ["https://via.placeholder.com/400x400.png"],
  basePrice: 29.99,
};

// Sample variants (in a real app, this would come from an API)
const sampleVariants = [
  { _id: "var-1", size: "S", color: "Red", fabric: "Cotton", stock: 5, price: 29.99 },
  { _id: "var-2", size: "M", color: "Blue", fabric: "Cotton", price: 29.99, stock: 10 },
  { _id: "var-3", size: "L", color: "Green", fabric: "Cotton", price: 29.99, stock: 2 },
  { _id: "var-4", size: "XL", color: "Black", fabric: "Cotton", price: 29.99, stock: 8 },
];

export default function ProductPage() {
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const cart = useCart();

  const addToCart = () => {
    if (!selectedVariant) {
      alert("Please select a variant");
      return;
    }

    if (selectedVariant.stock < quantity) {
      alert(`Only ${selectedVariant.stock} items available in stock`);
      return;
    }

    // Add to cart using the cart store
    cart.add({
      variantId: selectedVariant._id,
      name: `${selectedVariant.size} ${selectedVariant.color}`,
      price: selectedVariant.price,
      quantity: quantity
    });

    alert(`${quantity} ${selectedVariant.size} ${selectedVariant.color} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src={sampleProduct.images[0]} 
            alt={sampleProduct.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-2">{sampleProduct.name}</h1>
          <p className="text-gray-600 mb-4">{sampleProduct.description}</p>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Select Variant</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Size</label>
              <div className="flex space-x-2">
                {Array.from(new Set(sampleVariants.map(v => v.size))).map(size => (
                  <button
                    key={size}
                    onClick={() => {
                      const variant = sampleVariants.find(v => v.size === size && !selectedVariant?.color || v.color === selectedVariant?.color);
                      if (variant) setSelectedVariant((prev: any) => prev?.size === size ? null : {...prev, size});
                    }}
                    className={`px-4 py-2 border rounded-md ${
                      selectedVariant?.size === size 
                        ? "border-blue-500 bg-blue-50" 
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Color</label>
              <div className="flex space-x-2">
                {Array.from(new Set(sampleVariants.map(v => v.color))).map(color => (
                  <button
                    key={color}
                    onClick={() => {
                      const variant = sampleVariants.find(v => v.color === color && !selectedVariant?.size || v.size === selectedVariant?.size);
                      if (variant) setSelectedVariant((prev: any) => prev?.color === color ? null : {...prev, color});
                    }}
                    className={`px-4 py-2 border rounded-md ${
                      selectedVariant?.color === color 
                        ? "border-blue-500 bg-blue-50" 
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Quantity</label>
              <input
                type="number"
                min="1"
                max={selectedVariant ? selectedVariant.stock : 10}
                value={quantity}
                onChange={(e) => setQuantity(Math.min(parseInt(e.target.value) || 1, selectedVariant ? selectedVariant.stock : 10))}
                className="w-20 px-3 py-2 border border-gray-300 rounded-md"
              />
              {selectedVariant && (
                <p className="text-sm text-gray-500 mt-1">Available: {selectedVariant.stock}</p>
              )}
            </div>
            
            <button
              onClick={addToCart}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700"
            >
              Add to Cart - ${selectedVariant ? selectedVariant.price.toFixed(2) : sampleProduct.basePrice.toFixed(2)}
            </button>
          </div>
          
          <div className="border-t pt-4">
            <h3 className="font-medium mb-2">Product Details</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>Material: Premium Cotton</li>
              <li>Machine Washable</li>
              <li>Pre-shrunk Fabric</li>
              <li>Comfort Fit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}