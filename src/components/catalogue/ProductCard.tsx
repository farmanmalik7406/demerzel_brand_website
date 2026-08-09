import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../data/products";
import { formatSpecValue, getPreferredSpecs, getProductPath } from "../../lib/products";

export function ProductCard({ product, index }: { product: Product; index?: number }) {
  const delay = Math.min((index || 0) * 60, 300);
  const specs = getPreferredSpecs(product, 3);

  return (
    <article data-aos="fade-up" data-aos-delay={String(delay)} className="group overflow-hidden rounded-lg border border-ink/10 bg-white transition-colors">
      <Link to={getProductPath(product)} className="block">
        <div className="relative overflow-hidden bg-bone">
          <img src={product.images[0]?.url} alt={product.images[0]?.alt || product.name} loading="lazy" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute left-4 top-4 rounded-md bg-white/80 px-3 py-1 text-xs font-semibold text-ink">{product.brand}</div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-ink">{product.name}</h3>
          {product.series && <div className="mt-1 text-xs uppercase tracking-[0.18em] text-charcoal/70">{product.series}</div>}
          {product.shortDescription && <p className="mt-3 text-sm leading-6 text-charcoal/75">{product.shortDescription}</p>}
          {specs.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-2 border-y border-ink/10 py-3">
              {specs.map((specification) => (
                <div key={specification.key}>
                  <div className="text-[0.58rem] font-black uppercase tracking-[0.16em] text-charcoal/50">{specification.label}</div>
                  <div className="mt-1 text-sm font-black text-ink">{formatSpecValue(specification)}</div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="text-xs text-charcoal/60">{(product.applications || []).slice(0, 2).join(" / ")}</div>
            <div className="text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">VIEW PRODUCT -&gt;</div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;
