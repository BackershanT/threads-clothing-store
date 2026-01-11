import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package, Tag, ShoppingCart, Users, BarChart3, DollarSign, Image, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-slate-900 text-slate-200 flex flex-col h-screen">
      {/* Logo */}
      <div className="p-5 border-b border-slate-800">
        <h1 className="text-xl font-bold text-white">THREADS ADMIN</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="mb-6">
          <Link to="/dashboard" className="flex items-center px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors duration-200">
            <Home size={18} className="mr-3" />
            <span>Dashboard</span>
          </Link>
        </div>

        <div className="mb-6">
          <Link to="/products" className="flex items-center px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors duration-200">
            <Package size={18} className="mr-3" />
            <span>Products</span>
          </Link>
          <Link to="/categories" className="flex items-center px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors duration-200">
            <Tag size={18} className="mr-3" />
            <span>Categories</span>
          </Link>
          <Link to="/orders" className="flex items-center px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors duration-200">
            <ShoppingCart size={18} className="mr-3" />
            <span>Orders</span>
          </Link>
          <Link to="/customers" className="flex items-center px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors duration-200">
            <Users size={18} className="mr-3" />
            <span>Customers</span>
          </Link>
        </div>

        <div className="mb-6">
          <Link to="/analytics" className="flex items-center px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors duration-200">
            <BarChart3 size={18} className="mr-3" />
            <span>Analytics</span>
          </Link>
          <Link to="/payments" className="flex items-center px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors duration-200">
            <DollarSign size={18} className="mr-3" />
            <span>Revenue</span>
          </Link>
        </div>

        <div className="mb-6">
          <Link to="/banners" className="flex items-center px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors duration-200">
            <Image size={18} className="mr-3" />
            <span>Banners</span>
          </Link>
          <Link to="/settings" className="flex items-center px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors duration-200">
            <Settings size={18} className="mr-3" />
            <span>Settings</span>
          </Link>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
        <p>Clothing Admin v1.0</p>
      </div>
    </aside>
  );
};

export default Sidebar;