import React from "react";
import type { Product } from "../../data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
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
