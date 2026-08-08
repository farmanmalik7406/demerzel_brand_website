import React from "react";
import { getAllProducts } from "../../lib/products";
import ProductCard from "./ProductCard";
import type { Product } from "../../data/products";

export function RelatedProducts({ product }: { product: Product }) {
  const all = getAllProducts();
  const related = all.filter((p) => (p.brand === product.brand || p.category === product.category || (p.series && p.series === product.series)) && p.id !== product.id).slice(0, 4);
  if (related.length === 0) return null;

  return (
    <section className="mt-12">
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">You may also explore</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((r) => (
          <ProductCard key={r.id} product={r} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
