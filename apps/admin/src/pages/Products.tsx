import React, { useState } from "react";
import { Plus, Edit3, Trash2 } from "lucide-react";

interface ProductVariant {
  id: string;
  size: string;
  color: string;
  stock: number;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  totalStock: number;
  status: "Active" | "Draft";
  image: string;
  variants: ProductVariant[];
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Premium Cotton T-Shirt",
      category: "Tops",
      price: 29.99,
      totalStock: 42,
      status: "Active",
      image: "https://placehold.co/60x60",
      variants: [],
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const openAdd = () => {
    setCurrentProduct(null);
    setIsModalOpen(true);
  };

  const openEdit = (product: Product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
  };

  const deleteProduct = (id: string) => {
    if (confirm("Delete product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-gray-600">Manage your store products</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={16} />
          Add Product
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="border-b text-xs uppercase text-gray-500">
            <tr>
              <th className="p-4 text-left">Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={p.image}
                    className="w-10 h-10 rounded"
                    alt={p.name}
                  />
                  {p.name}
                </td>
                <td>{p.category}</td>
                <td>${p.price}</td>
                <td>{p.totalStock}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      p.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="flex gap-2">
                  <button onClick={() => openEdit(p)}>
                    <Edit3 size={16} />
                  </button>
                  <button onClick={() => deleteProduct(p.id)}>
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL — MUST BE INSIDE SAME ROOT */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-xl">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold">
                {currentProduct ? "Edit Product" : "Add Product"}
              </h2>
              <button onClick={closeModal}>✕</button>
            </div>

            <input
              className="w-full border rounded px-3 py-2 mb-3"
              placeholder="Product Name"
              defaultValue={currentProduct?.name}
            />

            <input
              type="number"
              className="w-full border rounded px-3 py-2 mb-3"
              placeholder="Price"
              defaultValue={currentProduct?.price}
            />

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={closeModal}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
