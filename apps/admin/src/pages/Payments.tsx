import React, { useState } from "react";
import {
  Search,
  Calendar,
  Eye,
  CreditCard,
  Wallet,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

interface Refund {
  id: string;
  date: string;
  amount: number;
  reason: string;
  status: "Processed" | "Pending" | "Failed";
}

interface Payment {
  id: string;
  orderId: string;
  customerId: string;
  customerName: string;
  date: string;
  amount: number;
  method: "UPI" | "Card";
  status: "Success" | "Pending" | "Failed" | "Refunded";
  razorpayId: string;
  refunds: Refund[];
}

const Payments: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([
    {
      id: "pay_1234567890",
      orderId: "#ORD-001",
      customerId: "CUST-001",
      customerName: "John Smith",
      date: "2026-01-11 10:30 AM",
      amount: 245,
      method: "Card",
      status: "Success",
      razorpayId: "rzp_1234567890",
      refunds: [],
    },
  ]);

  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  const [refundReason, setRefundReason] = useState("");

  const [filters, setFilters] = useState({
    searchTerm: "",
    status: "",
    method: "",
  });

  const filteredPayments = payments.filter((p) => {
    return (
      (!filters.searchTerm ||
        p.orderId.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        p.customerName.toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
      (!filters.status || p.status === filters.status) &&
      (!filters.method || p.method === filters.method)
    );
  });

  const handleRefund = () => {
    if (!selectedPayment) return;

    const refund: Refund = {
      id: `ref_${Date.now()}`,
      date: new Date().toLocaleString(),
      amount: selectedPayment.amount,
      reason: refundReason,
      status: "Processed",
    };

    setPayments((prev) =>
      prev.map((p) =>
        p.id === selectedPayment.id
          ? {
              ...p,
              status: "Refunded",
              refunds: [...p.refunds, refund],
            }
          : p
      )
    );

    setIsRefundModalOpen(false);
    setRefundReason("");
    setSelectedPayment(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Payments</h1>
        <p className="text-gray-600">Track payments and manage refunds</p>
      </div>

      {/* FILTERS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            className="pl-10 w-full border rounded-lg px-3 py-2"
            placeholder="Search"
            value={filters.searchTerm}
            onChange={(e) =>
              setFilters({ ...filters, searchTerm: e.target.value })
            }
          />
        </div>

        <select
          className="border rounded-lg px-3 py-2"
          value={filters.status}
          onChange={(e) =>
            setFilters({ ...filters, status: e.target.value })
          }
        >
          <option value="">All Status</option>
          <option value="Success">Success</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
          <option value="Refunded">Refunded</option>
        </select>

        <select
          className="border rounded-lg px-3 py-2"
          value={filters.method}
          onChange={(e) =>
            setFilters({ ...filters, method: e.target.value })
          }
        >
          <option value="">All Methods</option>
          <option value="UPI">UPI</option>
          <option value="Card">Card</option>
        </select>

        <div className="relative">
          <Calendar className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input type="date" className="pl-10 w-full border rounded-lg px-3 py-2" />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="border-b">
            <tr className="text-left text-xs text-gray-500 uppercase">
              <th className="p-4">Payment ID</th>
              <th>Order</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredPayments.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{p.id}</td>
                <td>{p.orderId}</td>
                <td>{p.customerName}</td>
                <td>${p.amount.toFixed(2)}</td>
                <td className="flex items-center gap-1">
                  {p.method === "UPI" ? <Wallet size={14} /> : <CreditCard size={14} />}
                  {p.method}
                </td>
                <td>{p.status}</td>
                <td>
                  <button
                    onClick={() => {
                      setSelectedPayment(p);
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

      {/* PAYMENT MODAL */}
      {isModalOpen && selectedPayment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full">
            <h2 className="text-lg font-semibold mb-4">Payment Details</h2>

            <p><b>ID:</b> {selectedPayment.id}</p>
            <p><b>Order:</b> {selectedPayment.orderId}</p>
            <p><b>Amount:</b> ${selectedPayment.amount}</p>

            <div className="mt-6 flex justify-end gap-3">
              {selectedPayment.status === "Success" && (
                <button
                  onClick={() => setIsRefundModalOpen(true)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Refund
                </button>
              )}

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

      {/* REFUND MODAL */}
      {isRefundModalOpen && selectedPayment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="text-red-500" /> Process Refund
            </h2>

            <textarea
              className="w-full border rounded-lg p-2"
              placeholder="Refund reason"
              value={refundReason}
              onChange={(e) => setRefundReason(e.target.value)}
            />

            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setIsRefundModalOpen(false)}
                className="border px-4 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button
                disabled={!refundReason}
                onClick={handleRefund}
                className="bg-red-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              >
                Confirm Refund
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payments;
