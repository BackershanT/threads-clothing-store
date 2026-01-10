import Link from 'next/link';

interface EmptyCartProps {
  title?: string;
  subtitle?: string;
  showContinueShopping?: boolean;
}

export default function EmptyCart({
  title = "Your cart is empty",
  subtitle = "Looks like you haven't added anything to your cart yet",
  showContinueShopping = true
}: EmptyCartProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-white">
      <div className="mb-6">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-24 w-24 text-gray-300 mx-auto"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1} 
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
          />
        </svg>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-8 max-w-md">{subtitle}</p>
      
      {showContinueShopping && (
        <Link href="/shop" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
          Continue Shopping
        </Link>
      )}
    </div>
  );
}