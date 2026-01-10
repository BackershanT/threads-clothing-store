'use client';

import React from 'react';
import Link from 'next/link';

interface PromoCardProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  isLeft?: boolean;
}

const PromoCard: React.FC<PromoCardProps> = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  backgroundImage,
  isLeft = true
}) => {
  return (
    <div className="relative rounded-xl overflow-hidden h-64 lg:h-80 bg-white shadow-lg">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      </div>
      
      <div className={`relative h-full flex flex-col justify-center p-6 ${isLeft ? 'lg:items-start' : 'lg:items-end'}`}>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{title}</h3>
        {subtitle && <p className="text-gray-700 mb-4">{subtitle}</p>}
        <Link 
          href={ctaLink} 
          className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors w-fit"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

interface PromoSectionProps {
  newArrivalsLink: string;
  offersLink: string;
  bestSellersLink?: string;
  showBestSellers?: boolean;
}

const PromoSection: React.FC<PromoSectionProps> = ({ 
  newArrivalsLink, 
  offersLink, 
  bestSellersLink = "/best-sellers", 
  showBestSellers = false 
}) => {
  if (showBestSellers) {
    return (
      <section className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          <PromoCard
            title="Best Sellers"
            subtitle="Our most popular items"
            ctaText="Shop Now"
            ctaLink={bestSellersLink}
            backgroundImage="/images/promo-best-sellers.jpg"
            isLeft={true}
          />
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <PromoCard
          title="New Arrivals"
          subtitle="Discover our latest collection"
          ctaText="Shop Now"
          ctaLink={newArrivalsLink}
          backgroundImage="/images/promo-new-arrivals.jpg"
          isLeft={true}
        />
        <PromoCard
          title="Special Offers"
          subtitle="Exclusive deals just for you"
          ctaText="Shop Now"
          ctaLink={offersLink}
          backgroundImage="/images/promo-offers.jpg"
          isLeft={false}
        />
      </div>
    </section>
  );
};

export default PromoSection;