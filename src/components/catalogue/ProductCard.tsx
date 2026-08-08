import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../data/products";

export function ProductCard({ product, index }: { product: Product; index?: number }) {
  const delay = Math.min((index || 0) * 80, 240);
  return (
    <article data-aos="fade-up" data-aos-delay={String(delay)} className="group overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/products/${product.category.toLowerCase()}/${product.slug}`} className="block">
        <div className="h-52 overflow-hidden bg-bone">
          <img src={product.images[0]?.url} alt={product.images[0]?.alt || product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand">{product.brand}</p>
          <h3 className="mt-3 text-xl font-semibold text-ink">{product.name}</h3>
          {product.shortDescription && <p className="mt-3 text-sm leading-7 text-charcoal/75">{product.shortDescription}</p>}
          <p className="mt-4 text-sm text-charcoal/60">{(product.applications || []).join(" • ")}</p>
          <div className="mt-5 text-sm font-semibold text-brand">View Details →</div>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;
