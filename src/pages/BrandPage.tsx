import React from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../lib/products";
import { SEO } from "../components/SEO";
import ProductGrid from "../components/catalogue/ProductGrid";
import { images } from "../lib/assets";

const opticsFamilies: Array<[string, string]> = [
  ["DRISHTI", "Positioned for wildlife professionals, forest guards, birders, patrolling and nature observation."],
  ["TEJAS", "Positioned for nature lovers, wildlife professionals, outdoor enthusiasts, safari, surveillance and long-distance viewing."],
  ["CHAKOR", "Positioned for wildlife, hiking, long-distance viewing, birdwatching, outdoor sports and security surveillance."],
  ["RAKSHAK", "Positioned for forest surveillance, wildlife monitoring, patrol contexts and rugged field operations."],
  ["VANRAAJ", "Positioned for safaris, jungle treks, nature trails, wildlife, birding and challenging terrain."],
  ["NAKSHATRA", "Positioned for astronomy, stargazing and celestial observation."]
];

export function BrandPage() {
  const { brand } = useParams();
  const all = getAllProducts();
  const brandKey = brand ? brand.toLowerCase() : "";
  const products = all.filter((p) => p.brand.toLowerCase() === brandKey);

  if (!brand) {
    return <div className="p-6">No brand specified.</div>;
  }

  return (
    <>
      <SEO title={`${brand} | DEMERZEL`} description={`Products from ${brand} shown in the DEMERZEL catalogue.`} />
      <main className="max-w-7xl mx-auto p-6">
        <section className="rounded-[2rem] border border-ink/10 bg-navy px-8 py-12 text-white shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand/80">Catalogue brand</p>
              <h1 className="mt-4 text-5xl font-black tracking-tight">{brand}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">Products from the DEMERZEL catalogue for {brand}. The brand presence is handled neutrally and source-grounded to serve discovery and product storytelling.</p>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
              <img src={images.hero} alt={`${brand} hero`} className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_.6fr]">
          <div className="space-y-8">
            <div className="rounded-[1.75rem] border border-ink/10 bg-white p-8 shadow-soft">
              <h2 className="text-3xl font-black text-ink">Product families</h2>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">Explore catalogue families shown for {brand} and follow their discovery pages.</p>
              <div className="mt-6 space-y-4">
                {opticsFamilies.map(([family, desc]) => (
                  <div key={family} className="rounded-[1.5rem] border border-ink/10 bg-bone p-5">
                    <h3 className="text-xl font-semibold text-ink">{family}</h3>
                    <p className="mt-2 text-sm leading-7 text-charcoal/75">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-ink/10 bg-white p-8 shadow-soft">
              <h2 className="text-3xl font-black text-ink">Applications</h2>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">Applications shown are derived from the catalogue product data.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {Array.from(new Set(products.flatMap((p) => p.applications))).map((app) => (
                  <span key={app} className="rounded-full bg-brand/10 px-3 py-2 text-sm font-semibold text-brand">{app}</span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-[1.75rem] border border-ink/10 bg-white p-8 shadow-soft">
              <h2 className="text-3xl font-black text-ink">Products</h2>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">A catalogue view of {products.length} products currently mapped to {brand}.</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <ProductGrid products={products} />
        </section>
      </main>
    </>
  );
}

export default BrandPage;
