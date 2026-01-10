export default async function sitemap() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api"}/products`);
    const products = await res.json();

    return products.map((p: any) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}/product/${p.slug}`,
      lastModified: new Date()
    }));
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return empty sitemap if API is not available during build
    return [];
  }
}