import type { Metadata } from "next";
import ProductClient from "./product-client";

async function getProduct(slug: string) {
  const res = await fetch(
    `http://localhost:4000/api/products/${slug}`,
    { cache: "no-store" }
  );
  return res.json();
}

export async function generateMetadata(
  { params }: any
): Promise<Metadata> {
  const res = await fetch(
    `http://localhost:4000/api/products/${params.slug}`
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
}

export default async function ProductPage({ params }: any) {
  const data = await getProduct(params.slug);

  return <ProductClient product={data.product} variants={data.variants} />;
}