import type { Metadata } from "next";
import { ProductCategoryCard } from "@/components/products/ProductCategoryCard";
import { productCategories } from "@/content/products";

/**
 * Products Page
 * 
 * Displays a static grid of all product categories with detailed information.
 * Each category card shows name, description, example products, applications,
 * and a CTA button linking to the contact page.
 * 
 * This is a static overview page with no filtering, search, or individual
 * product detail pages. All content is pre-rendered at build time.
 * 
 * Validates Requirements: 2.2, 4.1, 4.2, 4.3, 4.4, 11.1, 18.1, 18.2
 */

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
            <p className="text-sm font-semibold tracking-widest uppercase text-amber-400">Our Collection</p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Our Products
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              We supply a comprehensive range of high-quality industrial chemicals
              and laboratory reagents. All products are available in various grades
              and quantities to meet your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-600">Browse By Category</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, index) => (
            <ProductCategoryCard 
              key={category.id} 
              category={category}
              containerClassName={`animate-slide-up-fade delay-${Math.min(index + 1, 8)}`}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 border-t-4 border-amber-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-slide-up-fade">
            <h2 className="text-4xl font-bold text-white">
              Need help finding the right product?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Our technical team is ready to assist you with product selection,
              specifications, and custom requirements.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition-all hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
