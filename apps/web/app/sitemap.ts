export default async function sitemap() {
  const res = await fetch("http://localhost:4000/api/products");
  const products = await res.json();

  return products.map((p: any) => ({
    url: `https://yourdomain.com/product/${p.slug}`,
    lastModified: new Date()
  }));
}