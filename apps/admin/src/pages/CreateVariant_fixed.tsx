import { useState, useEffect } from "react";
import api from "../services/api";

interface Product {
  _id: string;
  name: string;
}

export default function CreateVariant() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [size, setSize] = useState("");
  const [stock, setStock] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const submit = async () => {
    try {
      await api.post(`/products/${selectedProduct}/variants`, { size, stock });
      alert("Variant created successfully!");
      setSize("");
      setStock(0);
    } catch (error) {
      console.error("Failed to create variant:", error);
      alert("Failed to create variant.");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Create Variant</h2>
      <select 
        value={selectedProduct} 
        onChange={e => setSelectedProduct(e.target.value)}
        style={{ display: "block", margin: "10px 0", padding: "8px", width: "300px" }}
      >
        <option value="">Select Product</option>
        {products.map(p => (
          <option key={p._id} value={p._id}>{p.name}</option>
        ))}
      </select>
      
      <input 
        placeholder="Size (e.g. M, L, XL)" 
        value={size}
        onChange={e => setSize(e.target.value)} 
        style={{ display: "block", margin: "10px 0", padding: "8px", width: "300px" }}
      />
      
      <input 
        type="number" 
        placeholder="Stock" 
        value={stock}
        onChange={e => setStock(Number(e.target.value))} 
        style={{ display: "block", margin: "10px 0", padding: "8px", width: "300px" }}
      />
      
      <button 
        onClick={submit}
        style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer" }}
      >
        Create Variant
      </button>
    </div>
  );
}
