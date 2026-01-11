import React, { useState } from "react";
import {
  Save,
  Key,
  LogOut,
} from "lucide-react";

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("store");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [formData, setFormData] = useState({
    storeName: "FashionHub",
    supportEmail: "support@fashionhub.com",
    supportPhone: "+91 9876543210",
    storeAddress: "123 Fashion Street, Mumbai, India",

    razorpayKeyId: "",
    razorpayKeySecret: "",
    enableUPI: true,
    enableCard: true,

    shippingFee: "50",
    freeShippingThreshold: "1000",
    estimatedDeliveryDays: "5",
    enableShipping: true,

    gstPercentage: "18",
    taxLabel: "GST",
    enableTax: true,

    bannerTitle: "Summer Sale",
    bannerSubtitle: "Up to 50% off",
    bannerActive: true,

    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const handlePasswordChange = () => {
    setShowPasswordModal(true);
  };

  const handleLogoutAll = () => {
    setShowLogoutModal(true);
  };

  const confirmPasswordChange = () => {
    setShowPasswordModal(false);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const tabs = [
    { id: "store", label: "Store" },
    { id: "payments", label: "Payments" },
    { id: "shipping", label: "Shipping" },
    { id: "tax", label: "Tax" },
    { id: "banners", label: "Banners" },
    { id: "security", label: "Security" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600 mt-1">Manage store configuration</p>
      </div>

      <div className="flex gap-8">
        {/* Tabs */}
        <div className="w-64">
          <div className="bg-white rounded-xl shadow p-4">
            <ul className="space-y-1">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm ${
                      activeTab === tab.id
                        ? "bg-indigo-100 text-indigo-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* STORE */}
          {activeTab === "store" && (
            <div className="bg-white rounded-xl shadow p-6 space-y-6">
              <h2 className="text-lg font-semibold">Store Settings</h2>

              <input
                name="storeName"
                value={formData.storeName}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Store Name"
              />

              <textarea
                name="storeAddress"
                value={formData.storeAddress}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2"
                rows={3}
              />

              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                <Save size={16} /> Save Changes
              </button>
            </div>
          )}

          {/* PAYMENTS */}
          {activeTab === "payments" && (
            <div className="bg-white rounded-xl shadow p-6 space-y-6">
              <h2 className="text-lg font-semibold">Payment Settings</h2>

              <input
                name="razorpayKeyId"
                value={formData.razorpayKeyId}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Razorpay Key ID"
              />

              <input
                type="password"
                name="razorpayKeySecret"
                value={formData.razorpayKeySecret}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Razorpay Secret"
              />

              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                <Save size={16} /> Save Payment Settings
              </button>
            </div>
          )}

          {/* SHIPPING */}
          {activeTab === "shipping" && (
            <div className="bg-white rounded-xl shadow p-6 space-y-6">
              <h2 className="text-lg font-semibold">Shipping Settings</h2>

              <input
                name="shippingFee"
                value={formData.shippingFee}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Shipping Fee"
              />

              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                <Save size={16} /> Save Shipping Settings
              </button>
            </div>
          )}

          {/* TAX */}
          {activeTab === "tax" && (
            <div className="bg-white rounded-xl shadow p-6 space-y-6">
              <h2 className="text-lg font-semibold">Tax Settings</h2>

              <input
                name="gstPercentage"
                value={formData.gstPercentage}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="GST %"
              />

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="enableTax"
                  checked={formData.enableTax}
                  onChange={handleInputChange}
                />
                Enable Tax
              </label>

              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                <Save size={16} /> Save Tax Settings
              </button>
            </div>
          )}

          {/* BANNERS */}
          {activeTab === "banners" && (
            <div className="bg-white rounded-xl shadow p-6 space-y-6">
              <h2 className="text-lg font-semibold">Banners</h2>

              <input
                name="bannerTitle"
                value={formData.bannerTitle}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2"
              />

              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                <Save size={16} /> Save Banner
              </button>
            </div>
          )}

          {/* SECURITY */}
          {activeTab === "security" && (
            <div className="bg-white rounded-xl shadow p-6 space-y-6">
              <h2 className="text-lg font-semibold">Security</h2>

              <button
                onClick={handlePasswordChange}
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                <Key size={16} /> Change Password
              </button>

              <button
                onClick={handleLogoutAll}
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                <LogOut size={16} /> Logout All
              </button>
            </div>
          )}
        </div>
      </div>

      {/* SUCCESS TOAST */}
      {showConfirmation && (
        <div className="fixed bottom-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg">
          Settings saved successfully
        </div>
      )}

      {/* PASSWORD CHANGE MODAL */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4">Change Password</h2>
            <p className="mb-4">Are you sure you want to change your password?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPasswordModal(false)}
                className="border px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmPasswordChange}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LOGOUT CONFIRMATION MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4">Logout All Sessions</h2>
            <p className="mb-4">Are you sure you want to logout from all sessions?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="border px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
