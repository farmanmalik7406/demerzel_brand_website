import React from "react";
import { Link } from "react-router-dom";
import { getBrands, getAllProducts } from "../../lib/products";
import { Reveal } from "../ui/Reveal";

export function FeaturedBrands() {
  const brands = getBrands();
  const all = getAllProducts();

  return (
    <section className="bg-offwhite px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">Catalogue Brands</p>
          <h2 className="mt-3 text-4xl font-black text-ink">Brands in the current catalogue.</h2>
          <p className="mt-4 text-sm text-charcoal/75">DEMERZEL presents the brands and product families represented in the current product catalogue.</p>
        </Reveal>
        <Reveal className="flex gap-6 overflow-x-auto py-4">
          {brands.map((b) => {
            const count = all.filter((p) => p.brand === b).length;
            return (
              <Link key={b} to={`/brands/${b.toLowerCase()}`} className="group relative min-w-[220px] shrink-0 rounded-xl border border-ink/8 bg-white p-6 text-left transition hover:shadow-lg">
                <div className="text-sm font-semibold text-ink">{b}</div>
                <div className="mt-4 text-xs text-charcoal/70">{count} products</div>
                <div className="mt-6 text-sm font-semibold text-brand">VIEW BRAND →</div>
              </Link>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

export default FeaturedBrands;
