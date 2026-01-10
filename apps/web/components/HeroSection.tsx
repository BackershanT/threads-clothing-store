'use client';

import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100">

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block">
        <div className="absolute top-20 right-10 w-32 h-32 border-t-2 border-r-2 border-gray-300"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-b-2 border-l-2 border-gray-300"></div>
      </div>
    </section>
  );
};

export default HeroSection;