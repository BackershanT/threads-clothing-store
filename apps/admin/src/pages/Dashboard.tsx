import React from 'react';
import { DollarSign, AlertTriangle, ShoppingBag, Package, TrendingUp, Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Good morning, Admin</h1>
            <p className="text-gray-600 mt-1 flex items-center gap-1">
              <Calendar size={16} />
              Today, Jan 11 2026
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-gray-500">Today's Revenue</h3>
            <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
              <DollarSign size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">$1,248</p>
          <p className="text-sm text-gray-400 mt-1">vs $982 yesterday</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-gray-500">Pending Orders</h3>
            <div className="p-2 rounded-lg bg-yellow-100 text-yellow-600">
              <AlertTriangle size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">18</p>
          <p className="text-sm text-gray-400 mt-1">Need attention</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-gray-500">Total Orders (7 days)</h3>
            <div className="p-2 rounded-lg bg-green-100 text-green-600">
              <ShoppingBag size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">124</p>
          <p className="text-sm text-gray-400 mt-1">+5 from last week</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-gray-500">Low Stock Products</h3>
            <div className="p-2 rounded-lg bg-red-100 text-red-600">
              <Package size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">7</p>
          <p className="text-sm text-gray-400 mt-1">Require restocking</p>
        </div>
      </div>
      
      <div>
        <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Sales Overview</h2>
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
              <TrendingUp size={20} />
            </div>
          </div>
          <div className="h-72 flex items-center justify-center bg-gray-50 rounded-xl">
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <p className="text-gray-500 font-medium">Sales chart visualization</p>
              <p className="text-gray-400 text-sm mt-1">Connect with charting library</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
          <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Order</th>
                <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Customer</th>
                <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Date</th>
                <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Amount</th>
                <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-001</td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-600">John Smith</td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-600">Jan 11, 10:30 AM</td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-600">$245.00</td>
                <td className="py-4 whitespace-nowrap">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Paid</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-002</td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-600">Emma Johnson</td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-600">Jan 11, 9:15 AM</td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-600">$199.00</td>
                <td className="py-4 whitespace-nowrap">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-003</td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-600">Michael Brown</td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-600">Jan 10, 4:20 PM</td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-600">$89.00</td>
                <td className="py-4 whitespace-nowrap">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Paid</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-004</td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-600">Sarah Davis</td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-600">Jan 10, 2:45 PM</td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-600">$149.00</td>
                <td className="py-4 whitespace-nowrap">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Cancelled</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-005</td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-600">Robert Wilson</td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-600">Jan 10, 11:30 AM</td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-600">$320.00</td>
                <td className="py-4 whitespace-nowrap">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">Paid</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;