import type { Metadata } from "next";
import ProductClient from "./product-client";

async function getProduct(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api"}/products/${slug}`,
    { cache: "no-store" }
  );
  return res.json();
}

export async function generateMetadata(
  { params }: any
): Promise<Metadata> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api"}/products/${params.slug}`
    );
    const { product } = await res.json();

    return {
      title: product.name,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
        images: [product.images?.[0]]
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Product Not Found',
      description: 'Product not found',
    };
  }
}

export default async function ProductPage({ params }: any) {
  const data = await getProduct(params.slug);

  return <ProductClient product={data.product} variants={data.variants} />;
}