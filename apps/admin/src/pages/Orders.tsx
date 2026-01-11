import React, { useState } from "react";
import {
  Search,
  Calendar,
  Eye,
  Filter,
} from "lucide-react";

interface OrderItem {
  id: string;
  productName: string;
  variant: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  customerId: string;
  customerName: string;
  date: string;
  amount: number;
  paymentStatus: "Paid" | "Pending" | "Failed";
  orderStatus: "Pending" | "Packed" | "Shipped" | "Delivered" | "Cancelled";
  shippingAddress: string;
  razorpayId: string;
  paymentMethod: string;
  items: OrderItem[];
}

const Orders: React.FC = () => {
  const orders = [
    {
      id: "#ORD-001",
      customerId: "CUST-001",
      customerName: "John Smith",
      date: "2026-01-11 10:30 AM",
      amount: 245,
      paymentStatus: "Paid" as const,
      orderStatus: "Shipped" as const,
      shippingAddress: "123 Main St, New York",
      razorpayId: "rzp_123456",
      paymentMethod: "Card",
      items: [
        {
          id: "1",
          productName: "T-Shirt",
          variant: "M / Black",
          quantity: 1,
          price: 29.99,
        },
      ],
    },
  ];
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    searchTerm: "",
    orderStatus: "",
    paymentStatus: "",
  });

  const filteredOrders = orders.filter((order) => {
    return (
      (!filters.searchTerm ||
        order.id.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        order.customerName.toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
      (!filters.orderStatus || order.orderStatus === filters.orderStatus) &&
      (!filters.paymentStatus || order.paymentStatus === filters.paymentStatus)
    );
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* HEADER */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
          <p className="text-gray-600">Manage customer orders</p>
        </div>
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg">
          <Filter size={16} />
          Filters
        </button>
      </div>

      {/* FILTERS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            className="pl-10 w-full border rounded-lg px-3 py-2"
            placeholder="Search orders"
            value={filters.searchTerm}
            onChange={(e) =>
              setFilters({ ...filters, searchTerm: e.target.value })
            }
          />
        </div>

        <select
          className="border rounded-lg px-3 py-2"
          value={filters.orderStatus}
          onChange={(e) =>
            setFilters({ ...filters, orderStatus: e.target.value })
          }
        >
          <option value="">All Order Status</option>
          <option value="Pending">Pending</option>
          <option value="Packed">Packed</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <select
          className="border rounded-lg px-3 py-2"
          value={filters.paymentStatus}
          onChange={(e) =>
            setFilters({ ...filters, paymentStatus: e.target.value })
          }
        >
          <option value="">All Payments</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>

        <div className="relative">
          <Calendar className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input type="date" className="pl-10 w-full border rounded-lg px-3 py-2" />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="border-b text-xs uppercase text-gray-500">
            <tr>
              <th className="p-4 text-left">Order</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.date}</td>
                <td>${order.amount.toFixed(2)}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.orderStatus}</td>
                <td>
                  <button
                    onClick={() => {
                      setSelectedOrder(order);
                      setIsModalOpen(true);
                    }}
                    className="text-indigo-600"
                  >
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
            <h2 className="text-lg font-semibold mb-4">Order Details</h2>

            <p><b>Order:</b> {selectedOrder.id}</p>
            <p><b>Customer:</b> {selectedOrder.customerName}</p>
            <p><b>Address:</b> {selectedOrder.shippingAddress}</p>

            <div className="mt-6 text-right">
              <button
                onClick={() => setIsModalOpen(false)}
                className="border px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
