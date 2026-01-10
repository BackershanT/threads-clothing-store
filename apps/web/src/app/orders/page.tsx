"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api"}/orders/my`, {
        headers: {
          Authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem("token") : ''}`
        }
      })
      .then((res: any) => setOrders(res.data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>
      
      {orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">You have no orders yet</p>
          <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">
            Start Shopping
          </a>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((o: any) => (
            <div key={o._id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Order #{o._id.substring(0, 8)}</h3>
                  <p className="text-gray-600">Placed on {new Date(o.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹{o.totalAmount}</p>
                  <span 
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      o.status === "PENDING" ? "bg-yellow-100 text-yellow-800" :
                      o.status === "PAID" ? "bg-green-100 text-green-800" :
                      o.status === "SHIPPED" ? "bg-blue-100 text-blue-800" :
                      o.status === "DELIVERED" ? "bg-purple-100 text-purple-800" :
                      "bg-red-100 text-red-800"
                    }`}
                  >
                    {o.status}
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Items:</h4>
                <div className="space-y-2">
                  {o.items.map((item: any) => (
                    <div key={item._id} className="flex justify-between text-gray-600">
                      <span>
                        {item.variantId?.size} {item.variantId?.color} {item.variantId?.fabric} 
                        <span className="text-gray-400"> x {item.quantity}</span>
                      </span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-gray-600">
                  <span className="font-medium">Payment ID:</span> {o.paymentId || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}