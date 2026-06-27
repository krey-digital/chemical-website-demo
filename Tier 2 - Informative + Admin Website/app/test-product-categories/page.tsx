import { ProductCategories } from "@/components/home/ProductCategories";
import { productCategories } from "@/content/products";

/**
 * Test page for ProductCategories component
 * This page verifies the component renders correctly with real data
 */
export default function TestProductCategoriesPage() {
  return (
    <div>
      <h1 className="p-8 text-2xl font-bold">ProductCategories Component Test</h1>
      
      <div className="mb-8">
        <h2 className="px-8 text-xl font-semibold">All Categories (No Limit)</h2>
        <ProductCategories categories={productCategories} />
      </div>
      
      <div className="mb-8">
        <h2 className="px-8 text-xl font-semibold">Limited to 4 Categories</h2>
        <ProductCategories categories={productCategories} limit={4} />
      </div>
      
      <div className="mb-8">
        <h2 className="px-8 text-xl font-semibold">Empty Categories</h2>
        <ProductCategories categories={[]} />
      </div>
    </div>
  );
}
