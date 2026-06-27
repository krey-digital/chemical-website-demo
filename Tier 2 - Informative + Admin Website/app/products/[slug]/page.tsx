import { Metadata } from "next";
import ProductDetailClient from "./ProductDetailClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    // This will be hydrated on the client; for now use generic metadata
    return {
      title: "Product Details | ChemCorp Industries",
      description: "View detailed product specifications and inquiry form",
    };
  } catch (error) {
    return {
      title: "Product",
    };
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetailClient slug={slug} />;
}
