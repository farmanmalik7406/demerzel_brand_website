import React from "react";
import { useParams, Link } from "react-router-dom";
import { getAllProducts } from "../lib/products";
import { SEO } from "../components/SEO";
import ProductGrid from "../components/catalogue/ProductGrid";
import { images } from "../lib/assets";

export function BrandPage() {
  const { brand } = useParams();
  const all = getAllProducts();
  const brandKey = brand ? brand.toLowerCase() : "";
  const products = all.filter((p) => p.brand.toLowerCase() === brandKey);

  if (!brand) {
    return <div className="p-6">No brand specified.</div>;
  }

  const families = Array.from(new Set(products.map((p) => p.series).filter(Boolean))) as string[];
  const applications = Array.from(new Set(products.flatMap((p) => p.applications)));
  const heroImage = products[0]?.images?.[0]?.url || images.opticsWide;

  const isVanrakshak = brand?.toLowerCase() === "vanrakshak";

  return (
    <>
      <SEO title={`${brand} | DEMERZEL`} description={`Products from ${brand} shown in the DEMERZEL catalogue.`} />
      <main className="max-w-7xl mx-auto p-6">
        <section className={`${isVanrakshak ? "bg-navy text-white" : "bg-offwhite text-ink"} rounded-lg p-6 lg:p-10`}>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand/80">BRAND</p>
              <h1 className={`mt-3 text-4xl font-black ${isVanrakshak ? "text-white" : "text-ink"}`}>{brand}</h1>
              <p className={`mt-4 max-w-2xl text-sm leading-7 ${isVanrakshak ? "text-white/75" : "text-charcoal/75"}`}>Products from the DEMERZEL catalogue for {brand}. Browse product families and catalogue entries sourced from the canonical dataset.</p>
              <div className="mt-6">
                <Link to={`/products?brand=${brand}`} className={`inline-flex items-center gap-3 rounded-full ${isVanrakshak ? "bg-brand px-5 py-3 text-ink" : "border border-ink/10 px-5 py-3 text-ink"}`}>EXPLORE PRODUCTS →</Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-white/8 bg-white/5">
              <img src={heroImage} alt={`${brand} hero`} className="h-56 w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_.6fr]">
          <div className="space-y-8">
            {families.length > 0 && (
              <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-black text-ink">Product families</h2>
                <p className="mt-2 text-sm text-charcoal/70">Families present in the catalogue for {brand}.</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {families.map((f) => (
                    <div key={f} className="rounded-md border border-ink/10 bg-bone p-4">
                      <div className="text-lg font-semibold text-ink">{f}</div>
                      <div className="mt-2 text-sm text-charcoal/70">{products.filter(p => p.series === f).length} products</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-black text-ink">Featured products</h2>
              <p className="mt-2 text-sm text-charcoal/70">A curated selection from the brand catalogue.</p>
              <div className="mt-6">
                <ProductGrid products={products.slice(0, 6)} />
              </div>
            </div>
          </div>
          <aside>
            <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">Products</h3>
              <div className="mt-3 text-3xl font-black text-ink">{products.length}</div>
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-ink">Applications</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {applications.map((app) => (
                    <span key={app} className="rounded-md border border-ink/10 bg-bone px-3 py-2 text-sm font-semibold text-charcoal/80">{app}</span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black text-ink">All products</h2>
          <div className="mt-6">
            <ProductGrid products={products} />
          </div>
        </section>
      </main>
    </>
  );
}

export default BrandPage;
