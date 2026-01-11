import React from 'react';

const Categories: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Categories Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample category cards */}
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div key={id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-800">Category {id}</h3>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-2">Description for category {id}</p>
            <div className="mt-3 text-xs text-gray-500">
              Products: {Math.floor(Math.random() * 50)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Add New Category
        </button>
      </div>
    </div>
  );
};

export default Categories;