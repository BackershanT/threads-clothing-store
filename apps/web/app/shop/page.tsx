import Link from "next/link";
import Image from "next/image";

async function getProducts() {
  const res = await fetch("http://localhost:4000/api/products", {
    cache: "no-store"
  });
  return res.json();
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p: any) => (
        <Link key={p._id} href={`/product/${p.slug}`}>
          <div className="border p-4 hover:shadow-lg transition">
            <div className="h-48 w-full">
              <Image
                src={p.images?.[0] || "/placeholder.png"}
                alt={p.name}
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-2 font-semibold">{p.name}</h3>
            <p className="text-gray-600">₹{p.basePrice}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}