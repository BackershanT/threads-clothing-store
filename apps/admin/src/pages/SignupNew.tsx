import React, { useState } from 'react';

const SignupNew = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', password: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Must be at least 8 characters';
      isValid = false;
    } else if (!/(?=.*[!@#$%^&*])/.test(formData.password)) {
      newErrors.password = 'Must contain one special character';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] flex items-center justify-center p-4">
      {/* Mobile Layout - Hero First, Form Second */}
      <div className="md:hidden w-full max-w-[1100px] bg-white rounded-[16px] overflow-hidden mx-4 my-4">
        {/* Mobile Hero Section */}
        <div className="h-[220px] relative bg-gray-200 rounded-t-[16px] overflow-hidden">
          {/* Placeholder for background image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-5 text-white w-full">
            <div className="flex items-center mb-1">
              <span className="mr-2">✨</span>
              <h2 className="font-poppins text-[18px] font-[600]">Bring your concepts to life</h2>
            </div>
            <p className="font-poppins text-[13px] text-[#E5E7EB]">
              Join our community of creators and innovators
            </p>
          </div>
        </div>
        
        {/* Mobile Form Section */}
        <div className="bg-white p-5 rounded-b-[16px]">
          {/* Logo Placeholder */}
          <div className="w-12 h-12 bg-gray-200 rounded-lg mb-6"></div>
          
          {/* Title */}
          <h1 className="text-[#151515] text-[22px] font-[600] font-poppins mb-6">
            Create an account
          </h1>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full h-[44px] rounded-[10px] border ${errors.name ? 'border-red-500' : 'border-[#E0E0E0]'} px-[16px] font-poppins text-[14px] font-[400] focus:outline-none focus:ring-2 focus:ring-[#6087D0]/30`}
              />
              {errors.name && <p className="text-red-500 text-[12px] mt-1">{errors.name}</p>}
            </div>
            
            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full h-[44px] rounded-[10px] border ${errors.email ? 'border-red-500' : 'border-[#E0E0E0]'} px-[16px] font-poppins text-[14px] font-[400] focus:outline-none focus:ring-2 focus:ring-[#6087D0]/30`}
              />
              {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>}
            </div>
            
            {/* Password Input */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full h-[44px] rounded-[10px] border ${errors.password ? 'border-red-500' : 'border-[#E0E0E0]'} px-[16px] font-poppins text-[14px] font-[400] focus:outline-none focus:ring-2 focus:ring-[#6087D0]/30`}
              />
              {errors.password && <p className="text-red-500 text-[12px] mt-1">{errors.password}</p>}
            </div>
            
            {/* Password Rules */}
            <div className="flex flex-col space-y-1 mt-2">
              <div className="flex items-center text-[#475467] text-[12px]">
                <span className="mr-2 text-green-500">✓</span>
                Must be at least 8 characters
              </div>
              <div className="flex items-center text-[#475467] text-[12px]">
                <span className="mr-2 text-green-500">✓</span>
                Must contain one special character
              </div>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[46px] bg-[#6087D0] text-white rounded-[10px] font-poppins font-[500] mt-4 hover:bg-opacity-90 transition"
            >
              Get started
            </button>
            
            {/* Social Login - Stacked on mobile */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              <button
                type="button"
                className="h-12 rounded-full border border-[#E0E0E0] flex items-center justify-center hover:bg-gray-50"
              >
                <span className="text-gray-700 font-bold">G</span>
              </button>
              <button
                type="button"
                className="h-12 rounded-full border border-[#E0E0E0] flex items-center justify-center hover:bg-gray-50"
              >
                <span className="text-blue-600 font-bold">f</span>
              </button>
              <button
                type="button"
                className="h-12 rounded-full border border-[#E0E0E0] flex items-center justify-center hover:bg-gray-50"
              >
                <span className="text-black font-bold">A</span>
              </button>
            </div>
            
            {/* Footer Text */}
            <div className="text-center text-[#475467] text-[13px] mt-6">
              Already have an account? {' '}
              <a href="/login" className="text-[#6087D0] hover:underline">
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
      
      {/* Desktop Layout - Two Columns */}
      <div className="hidden md:block w-full max-w-[1100px] h-[650px] bg-white rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden">
        <div className="grid grid-cols-2 h-full">
          {/* Left Column - Signup Form */}
          <div className="bg-white p-10 flex flex-col justify-between relative">
            {/* Geometric pattern overlay */}
            <div className="absolute inset-0 opacity-4 pointer-events-none">
              <div className="absolute top-10 left-10 w-20 h-20 border border-gray-300 rounded-full"></div>
              <div className="absolute top-32 right-16 w-16 h-16 border border-gray-300 rotate-45"></div>
              <div className="absolute bottom-20 left-24 w-12 h-12 border border-gray-300"></div>
            </div>
            
            <div className="relative z-10">
              {/* Logo Placeholder */}
              <div className="w-12 h-12 bg-gray-200 rounded-lg mb-8"></div>
              
              {/* Title */}
              <h1 className="text-[#151515] text-[28px] font-[600] font-poppins mb-8">
                Create an account
              </h1>
              
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full h-[48px] rounded-[10px] border ${errors.name ? 'border-red-500' : 'border-[#E0E0E0]'} px-[16px] font-poppins text-[14px] font-[400] focus:outline-none focus:ring-2 focus:ring-[#6087D0]/30`}
                  />
                  {errors.name && <p className="text-red-500 text-[12px] mt-1">{errors.name}</p>}
                </div>
                
                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full h-[48px] rounded-[10px] border ${errors.email ? 'border-red-500' : 'border-[#E0E0E0]'} px-[16px] font-poppins text-[14px] font-[400] focus:outline-none focus:ring-2 focus:ring-[#6087D0]/30`}
                  />
                  {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>}
                </div>
                
                {/* Password Input */}
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full h-[48px] rounded-[10px] border ${errors.password ? 'border-red-500' : 'border-[#E0E0E0]'} px-[16px] font-poppins text-[14px] font-[400] focus:outline-none focus:ring-2 focus:ring-[#6087D0]/30`}
                  />
                  {errors.password && <p className="text-red-500 text-[12px] mt-1">{errors.password}</p>}
                </div>
                
                {/* Password Rules */}
                <div className="flex flex-col space-y-1 mt-2">
                  <div className="flex items-center text-[#475467] text-[12px]">
                    <span className="mr-2 text-green-500">✓</span>
                    Must be at least 8 characters
                  </div>
                  <div className="flex items-center text-[#475467] text-[12px]">
                    <span className="mr-2 text-green-500">✓</span>
                    Must contain one special character
                  </div>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-[48px] bg-[#6087D0] text-white rounded-[10px] font-poppins font-[500] mt-4 hover:bg-opacity-90 transition"
                >
                  Get started
                </button>
                
                {/* Social Login */}
                <div className="flex justify-center space-x-4 mt-6">
                  <button
                    type="button"
                    className="w-12 h-12 rounded-full border border-[#E0E0E0] flex items-center justify-center hover:bg-gray-50"
                  >
                    <span className="text-gray-700 font-bold">G</span>
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 rounded-full border border-[#E0E0E0] flex items-center justify-center hover:bg-gray-50"
                  >
                    <span className="text-blue-600 font-bold">f</span>
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 rounded-full border border-[#E0E0E0] flex items-center justify-center hover:bg-gray-50"
                  >
                    <span className="text-black font-bold">A</span>
                  </button>
                </div>
                
                {/* Footer Text */}
                <div className="text-center text-[#475467] text-[13px] mt-6">
                  Already have an account? {' '}
                  <a href="/login" className="text-[#6087D0] hover:underline">
                    Login
                  </a>
                </div>
              </form>
            </div>
          </div>
          
          {/* Right Column - Hero Section */}
          <div className="relative bg-gray-200 rounded-r-[24px] overflow-hidden">
            {/* Placeholder for background image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <div className="flex items-center mb-2">
                <span className="mr-2">✨</span>
                <h2 className="font-poppins text-[22px] font-[600]">Bring your concepts to life</h2>
              </div>
              <p className="font-poppins text-[14px] text-[#E5E7EB]">
                Join our community of creators and innovators
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupNew;