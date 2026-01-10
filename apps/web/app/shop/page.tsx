import Link from "next/link";
import Image from "next/image";

async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api"}/products`, {
      cache: "no-store"
    });
    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Our Collection</h1>
        <p className="text-gray-600 mt-2">Discover our premium selection of fashion items</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((p: any) => (
          <Link key={p._id} href={`/product/${p.slug}`}>
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="h-56 w-full bg-gray-100">
                <Image
                  src={p.images?.[0] || "/placeholder.png"}
                  alt={p.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24'%3E%3Cpath fill='%23ccc' d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V8.58L12,15.58L19,8.58V19M12,12.81L5,5.81H19L12,12.81Z'/%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg truncate">{p.name}</h3>
                <p className="text-gray-600 mt-1">₹{p.basePrice}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}