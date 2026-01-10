import { useEffect, useState } from "react";
import api from "../services/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/admin/orders").then((res: any) => setOrders(res.data));
  }, []);

  const updateStatus = (id: string, status: string) => {
    api.patch(`/admin/orders/${id}/status`, { status }).then(() => {
      alert("Updated");
      // Refresh orders
      api.get("/admin/orders").then((res: any) => setOrders(res.data));
    });
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Orders</h2>
      <div style={{ marginTop: 20 }}>
        {orders.map((o: any) => (
          <div key={o._id} style={{ 
            border: "1px solid #ddd", 
            padding: 15, 
            margin: "10px 0", 
            borderRadius: 5 
          }}>
            <p><strong>Order ID:</strong> {o._id}</p>
            <p><strong>User:</strong> {o.userId?.name} ({o.userId?.email})</p>
            <p><strong>Total:</strong> ₹{o.totalAmount}</p>
            <p><strong>Status:</strong> 
              <span style={{ 
                marginLeft: 10, 
                padding: "2px 8px", 
                borderRadius: 4,
                backgroundColor: o.status === "PENDING" ? "#ffeb3b" :
                               o.status === "PAID" ? "#4caf50" :
                               o.status === "SHIPPED" ? "#2196f3" :
                               o.status === "DELIVERED" ? "#8bc34a" : "#f44336",
                color: "white"
              }}>
                {o.status}
              </span>
            </p>
            <p><strong>Payment ID:</strong> {o.paymentId || "N/A"}</p>
            <div style={{ marginTop: 10 }}>
              <label htmlFor={`status-${o._id}`} style={{ marginRight: 10 }}>
                Update Status:
              </label>
              <select 
                id={`status-${o._id}`}
                onChange={(e) => updateStatus(o._id, e.target.value)}
                value={o.status}
                style={{ padding: "5px", borderRadius: 4, border: "1px solid #ccc" }}
              >
                <option value="PENDING">PENDING</option>
                <option value="PAID">PAID</option>
                <option value="SHIPPED">SHIPPED</option>
                <option value="DELIVERED">DELIVERED</option>
                <option value="CANCELLED">CANCELLED</option>
              </select>
            </div>
            
            <div style={{ marginTop: 15 }}>
              <h4>Items:</h4>
              {o.items.map((item: any) => (
                <div key={item._id} style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  padding: "5px 0",
                  borderBottom: "1px solid #eee"
                }}>
                  <div>
                    <strong>Variant:</strong> {item.variantId?.size} {item.variantId?.color} {item.variantId?.fabric}
                  </div>
                  <div>
                    <strong>Qty:</strong> {item.quantity} | <strong>Price:</strong> ₹{item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}