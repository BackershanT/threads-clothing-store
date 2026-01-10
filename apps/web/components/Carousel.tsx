'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { bannerData, Banner } from '@/src/data/bannerData';
import Link from 'next/link';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (isHovered) return; // Don't auto-scroll when hovered
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % bannerData.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-screen max-h-[1000px] overflow-hidden mx-4 sm:mx-6 md:mx-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {bannerData.map((banner: Banner, index: number) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <div className="bg-gray-200 border-2 border-dashed w-full h-full flex items-center justify-center">
              <span className="text-gray-500">Banner {index + 1}</span>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-80"></div>
            
            <div className="absolute bottom-8 left-8 sm:left-12 md:left-16 max-w-md text-white z-20">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 tracking-wide">{banner.title}</h3>
              <p className="text-base sm:text-lg mb-6 opacity-90">{banner.subtitle}</p>
              <Link 
                href={banner.ctaLink}
                className="inline-block bg-white text-black px-8 py-3 text-base font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {banner.ctaText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2.5">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/60 hover:bg-white/90'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

     
    </div>
  );
};

export default Carousel;