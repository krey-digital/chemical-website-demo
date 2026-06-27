"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";

interface ProductCardProps {
  product: Doc<"products">;
}

export default function ProductCard({ product }: ProductCardProps) {
  const getImageUrls = useAction(api.products.getImageUrls);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    // Get featured image URL if product has images
    if (product.images && product.images.length > 0) {
      const featuredImage =
        product.images.find((img) => img.isPrimary) || product.images[0];
      if (featuredImage) {
        getImageUrls({ fileIds: [featuredImage.fileId] }).then((urls) => {
          const url = urls[featuredImage.fileId];
          if (url) {
            setImageUrl(url);
          }
        });
      }
    }
  }, [product.images, getImageUrls]);
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition-all overflow-hidden h-full flex flex-col cursor-pointer">
        {/* Featured Image - High Priority */}
        <div className="w-full aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-3xl overflow-hidden flex-shrink-0">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            "📦"
          )}
        </div>

        {/* Content - Compact */}
        <div className="p-3 flex-1 flex flex-col">
          {/* Category Badge */}
          <span className="inline-block w-fit px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs font-semibold uppercase tracking-wide mb-2">
            {product.category}
          </span>

          {/* Product Name */}
          <h3 className="text-sm font-bold text-slate-900 mb-1 line-clamp-2 leading-tight">
            {product.name}
          </h3>

          {/* Quick Specs - Very Compact */}
          <div className="text-xs text-slate-600 mb-3 space-y-0.5">
            <p>
              <span className="font-semibold">CAS:</span> {product.casNumber}
            </p>
            {product.purityMin && product.purityMax && (
              <p>
                <span className="font-semibold">Purity:</span> {product.purityMin}-{product.purityMax}%
              </p>
            )}
          </div>

          {/* Grade + Specs in one line */}
          <div className="flex items-center gap-1 mb-3 flex-wrap">
            <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium">
              {product.grade}
            </span>
            {product.ghsSignalWord && (
              <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold text-white ${
                product.ghsSignalWord === "DANGER" ? "bg-red-600" : "bg-orange-600"
              }`}>
                {product.ghsSignalWord}
              </span>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-3 pb-3 mt-auto">
          <button className="w-full px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold text-sm transition-colors">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}
