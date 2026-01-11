import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, BarChart3, CreditCard, Users } from 'lucide-react';

const Analytics: React.FC = () => {
  const [dateRange, setDateRange] = useState('7d');
  const [chartView, setChartView] = useState('daily');

  // Mock data for KPI summary
  const kpiData = [
    { title: 'Total Revenue', value: '$12,480', change: '+12%', icon: DollarSign, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { title: 'Total Orders', value: '248', change: '+8%', icon: ShoppingCart, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Avg. Order Value', value: '$50.32', change: '+3.2%', icon: Package, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Conversion Rate', value: '3.24%', change: '+0.8%', icon: BarChart3, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Refund Amount', value: '$245', change: '-2%', icon: CreditCard, color: 'text-red-600', bg: 'bg-red-100' },
    { title: 'Payment Success', value: '97.8%', change: '+1.2%', icon: Users, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  ];

  // Mock data for top selling products
  const topProducts = [
    { id: 1, name: 'Premium Cotton T-Shirt', units: 124, revenue: '$3,716' },
    { id: 2, name: 'Denim Jacket', units: 89, revenue: '$8,001' },
    { id: 3, name: 'Summer Dress', units: 67, revenue: '$3,343' },
    { id: 4, name: 'Casual Shorts', units: 56, revenue: '$1,958' },
    { id: 5, name: 'Winter Coat', units: 34, revenue: '$4,284' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
            <p className="text-gray-600 mt-1">Detailed business insights</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="today">Today</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="custom">Custom</option>
            </select>
          </div>
        </div>
      </div>

        {/* KPI Summary Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 mb-8">
          {kpiData.map((kpi, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-5 transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">{kpi.title}</h3>
                <div className={`p-2 rounded-lg ${kpi.bg} ${kpi.color}`}>
                  <kpi.icon size={20} />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
              <p className={`text-xs mt-1 flex items-center gap-1 ${
                kpi.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {kpi.change.startsWith('+') ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {kpi.change} from last period
              </p>
            </div>
          ))}
        </div>

        {/* Sales Analytics Section */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Sales Overview</h2>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setChartView('daily')}
                  className={`px-3 py-1.5 text-sm rounded-lg ${
                    chartView === 'daily' 
                      ? 'bg-indigo-100 text-indigo-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Daily
                </button>
                <button 
                  onClick={() => setChartView('weekly')}
                  className={`px-3 py-1.5 text-sm rounded-lg ${
                    chartView === 'weekly' 
                      ? 'bg-indigo-100 text-indigo-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Weekly
                </button>
                <button 
                  onClick={() => setChartView('monthly')}
                  className={`px-3 py-1.5 text-sm rounded-lg ${
                    chartView === 'monthly' 
                      ? 'bg-indigo-100 text-indigo-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>
            <div className="h-80 flex items-center justify-center bg-gray-50 rounded-xl">
              <div className="text-center">
                <div className="text-4xl mb-3">📈</div>
                <p className="text-gray-500 font-medium">Sales chart visualization</p>
                <p className="text-gray-400 text-sm mt-1">Connect with charting library</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order & Customer Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Orders by Status</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl">
              <div className="text-center">
                <div className="text-4xl mb-3">📊</div>
                <p className="text-gray-500 font-medium">Orders by status visualization</p>
                <p className="text-gray-400 text-sm mt-1">Connect with charting library</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Orders by Payment Method</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl">
              <div className="text-center">
                <div className="text-4xl mb-3">💳</div>
                <p className="text-gray-500 font-medium">Payment method visualization</p>
                <p className="text-gray-400 text-sm mt-1">Connect with charting library</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Performance */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Top Selling Products</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Product</th>
                    <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Units Sold</th>
                    <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {topProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                      <td className="py-4 whitespace-nowrap text-sm text-gray-600">{product.units}</td>
                      <td className="py-4 whitespace-nowrap text-sm text-gray-600">{product.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Customer Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">New vs Returning Customers</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl">
              <div className="text-center">
                <div className="text-4xl mb-3">👥</div>
                <p className="text-gray-500 font-medium">Customer type visualization</p>
                <p className="text-gray-400 text-sm mt-1">Connect with charting library</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Total Customers</h3>
              <p className="text-2xl font-bold text-gray-900">1,248</p>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <TrendingUp size={12} />
                +5.2% from last period
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
              <h3 className="text-sm font-medium text-gray-500 mb-2">New Customers</h3>
              <p className="text-2xl font-bold text-gray-900">84</p>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <TrendingUp size={12} />
                +12% from last period
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Analytics;