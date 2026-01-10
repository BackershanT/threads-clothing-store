"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/src/store/cart";
import axios from "axios";

export default function Checkout() {
  const cart = useCart();
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  
  const placeOrder = async () => {
    if (cart.items.length === 0) {
      alert("Your cart is empty");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api"}/orders`,
        { items: cart.items },
        {
          headers: {
            Authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem("token") : ''}`
          }
        }
      );

      // Set the order ID so we can proceed to payment
      setOrderId(response.data._id);
    } catch (error: any) {
      console.error("Error placing order:", error);
      if (error.response?.data?.message) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert("Failed to place order. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  
  const initiatePayment = async () => {
    if (!orderId) return;
    
    try {
      setLoading(true);
      
      // Create Razorpay order
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api"}/payments/create`,
        { orderId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: response.data.amount,
        currency: "INR",
        name: "Clothing Store",
        description: "Order Payment",
        order_id: response.data.id,
        handler: function (response: any) {
          // Note: This is only a client-side callback
          // The actual payment status is confirmed via webhook
          alert("Payment captured! Order will be marked as paid shortly.");
          cart.clear();
          window.location.href = "/";
        },
        prefill: {
          name: "", // Get from user profile
          email: "", // Get from user profile
          contact: "" // Get from user profile
        },
        theme: {
          color: "#3b82f6"
        }
      };
      
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error: any) {
      console.error("Error initiating payment:", error);
      if (error.response?.data?.message) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert("Failed to initiate payment. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      
      {cart.items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Your cart is empty</p>
          <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="bg-white rounded-lg shadow p-6">
              {cart.items.map((item: any) => (
                <div key={item.variantId} className="flex justify-between items-center py-4 border-b">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              
              <div className="mt-6 pt-4 flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span>${cart.getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Order Details</h2>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Shipping Address</h3>
                <p className="text-gray-600">Enter your shipping address</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Payment Method</h3>
                <p className="text-gray-600">Select your payment method</p>
              </div>
              
              {!orderId ? (
                <button
                  onClick={placeOrder}
                  disabled={loading}
                  className={`w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium ${
                    loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Processing..." : `Place Order ($${cart.getTotalPrice().toFixed(2)})`}
                </button>
              ) : (
                <button
                  onClick={initiatePayment}
                  disabled={loading}
                  className={`w-full bg-green-600 text-white py-3 px-4 rounded-md font-medium ${
                    loading ? "opacity-70 cursor-not-allowed" : "hover:bg-green-700"
                  }`}
                >
                  {loading ? "Processing..." : `Pay Now ($${cart.getTotalPrice().toFixed(2)})`}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}