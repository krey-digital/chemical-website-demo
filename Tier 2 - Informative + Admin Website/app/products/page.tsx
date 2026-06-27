import type { Metadata } from "next";
import ProductGrid from "@/components/products/ProductGrid";

export const metadata: Metadata = {
  title: "Our Products - Industrial Chemicals & Reagents | ChemCorp Industries",
  description: "Browse our comprehensive range of industrial chemicals including acids, solvents, alkalis, salts, specialty chemicals, and laboratory reagents. High-purity grades with reliable supply.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b-4 border-amber-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-4 animate-slide-up-fade">
            <p className="text-sm font-semibold tracking-widest uppercase text-amber-400">
              Our Collection
            </p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Our Products
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              We supply a comprehensive range of high-quality industrial chemicals and
              laboratory reagents. All products are available in various grades and
              quantities to meet your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Product Catalog with Filtering */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ProductGrid />
      </section>
    </main>
  );
}
