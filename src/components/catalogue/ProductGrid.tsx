import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-ink/10 bg-offwhite p-12 text-center">
        <h3 className="text-lg font-black text-ink">No equipment found</h3>
        <p className="mt-2 text-sm text-charcoal/75">Try adjusting your search or filters.</p>
        <Link to="/products" className="mt-6 inline-flex rounded-full bg-brand px-6 py-2 text-sm font-bold text-ink hover:bg-brand/90">
          Clear filters
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p, i) => (
        <div key={p.id} className={`${i === 0 ? "lg:col-span-2" : ""}`}>
          <ProductCard product={p} index={i} />
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
