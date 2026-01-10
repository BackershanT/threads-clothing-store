import Link from 'next/link';

interface EmptyFavoritesProps {
  title?: string;
  subtitle?: string;
  showBrowseProducts?: boolean;
}

export default function EmptyFavorites({
  title = "No favorites yet",
  subtitle = "You haven't added any products to your favorites. Start exploring and save items you love!",
  showBrowseProducts = true
}: EmptyFavoritesProps) {
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
          />
        </svg>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-8 max-w-md">{subtitle}</p>
      
      {showBrowseProducts && (
        <Link href="/shop" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
          Browse Products
        </Link>
      )}
    </div>
  );
}