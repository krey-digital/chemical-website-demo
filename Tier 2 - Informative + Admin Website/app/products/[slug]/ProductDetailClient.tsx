"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import ProductDetailSkeleton from "@/components/product/ProductDetailSkeleton";
import SpecTable from "@/components/product/SpecTable";
import GhsPictograms from "@/components/product/GhsPictograms";
import SdsDownloadButton from "@/components/product/SdsDownloadButton";
import ProductInquiryForm from "@/components/product/ProductInquiryForm";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import Link from "next/link";

export default function ProductDetailClient({ slug }: { slug: string }) {
  const product = useQuery(api.products.getBySlug, { slug });

  // Show skeleton while loading
  if (product === undefined) {
    return <ProductDetailSkeleton />;
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              Product Not Found
            </h1>
            <p className="text-slate-600 mb-6">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/products"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              ← Back to Products
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Breadcrumb */}
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-slate-600">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <span>›</span>
          <Link href="/products" className="hover:text-slate-900">
            Products
          </Link>
          <span>›</span>
          <span className="text-slate-900 font-medium">{product.name}</span>
        </nav>
      </section>

      {/* Product Header */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title and basic info */}
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium capitalize">
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-slate-600">
                CAS #: <span className="font-medium">{product.casNumber}</span>
              </p>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Product Description
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {product.description}
              </p>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded text-sm text-blue-900">
                <strong>Safety Notice:</strong> For industrial and laboratory use
                only. Refer to SDS before handling.
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Specifications
              </h2>
              <SpecTable product={product} />
            </div>

            {/* GHS & Safety */}
            {(product.ghsPictograms.length > 0 || product.ghsSignalWord) && (
              <div>
                <GhsPictograms product={product} />
              </div>
            )}

            {/* SDS Download */}
            {product.sdsFileId && (
              <div>
                <SdsDownloadButton
                  fileId={product.sdsFileId}
                  version={product.sdsVersion}
                  issuedAt={product.sdsIssuedAt}
                />
              </div>
            )}
          </div>

          {/* Sidebar - Images & Inquiry Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Product Images Gallery */}
              <ProductImageGallery images={product.images} />

              {/* Inquiry Form */}
              <ProductInquiryForm product={product} />

              {/* Info box */}
              <div className="mt-6 p-4 bg-slate-100 rounded-lg text-sm text-slate-700 space-y-2">
                <p>
                  <strong>Need help?</strong> Contact our team for detailed
                  information and bulk pricing.
                </p>
                <div className="flex gap-2 pt-2">
                  <a
                    href="/contact"
                    className="flex-1 text-center px-3 py-2 bg-slate-700 hover:bg-slate-800 text-white rounded font-medium text-xs"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products / Navigation */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <Link
            href="/products"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            ← View All Products
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium"
          >
            Request Different Grade →
          </Link>
        </div>
      </section>
    </main>
  );
}
