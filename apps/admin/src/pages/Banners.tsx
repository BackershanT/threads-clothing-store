import React from 'react';

const Banners: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Banners Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sample banner cards */}
        {[1, 2, 3, 4].map((id) => (
          <div key={id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="h-40 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
              <span className="text-white text-lg font-medium">Banner {id} Preview</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800">Banner {id} Title</h3>
              <p className="text-gray-600 text-sm mt-1">Description for banner {id}</p>
              <div className="mt-3 flex justify-between">
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">Active</span>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Add New Banner
        </button>
      </div>
    </div>
  );
};

export default Banners;