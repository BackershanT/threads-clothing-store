import ProductClient from "./product-client";

async function getProduct(slug: string) {
  const res = await fetch(
    `http://localhost:4000/api/products/${slug}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function ProductPage({ params }: any) {
  const data = await getProduct(params.slug);

  return <ProductClient product={data.product} variants={data.variants} />;
}