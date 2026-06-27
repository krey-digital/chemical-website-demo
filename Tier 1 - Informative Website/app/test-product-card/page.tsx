import { ProductCategoryCard } from "@/components/products/ProductCategoryCard";
import { productCategories } from "@/content/products";

/**
 * Test page for ProductCategoryCard component
 * This page verifies the component renders correctly with real data
 */
export default function TestProductCardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <h1 className="px-8 pb-8 text-2xl font-bold">ProductCategoryCard Component Test</h1>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">All Product Category Cards</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <ProductCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Single Card - Acids</h2>
          <div className="max-w-md">
            <ProductCategoryCard category={productCategories[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
