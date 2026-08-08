import { SEO } from "../components/SEO";
import { ContactCTA } from "../components/sections/ContactCTA";
import { images } from "../lib/assets";
import { getBrands, getAllProducts } from "../lib/products";
import { Link } from "react-router-dom";

export function Brands() {
  const brands = getBrands();
  const all = getAllProducts();

  return (
    <>
      <SEO description="Discover catalogue brands represented in the DEMERZEL product set." title="Brands | DEMERZEL Enterprises" />
      <section className="bg-navy px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand/80">BRANDS</p>
              <h1 className="mt-3 text-4xl font-black">Explore catalogue brands</h1>
              <p className="mt-4 max-w-2xl text-sm text-white/80">Browse the equipment brands represented in DEMERZEL's product catalogue. Each entry links to brand product families and catalogue listings.</p>
            </div>
            <div className="overflow-hidden rounded-lg border border-white/8 bg-white/5">
              <img src={images.opticsWide} alt="Brands overview" className="h-48 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-offwhite px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((b, i) => {
              const items = all.filter((p) => p.brand === b);
              const families = Array.from(new Set(items.map((p) => p.series).filter(Boolean)));
              const img = items[0]?.images?.[0]?.url;
              return (
                <article key={b} className="group rounded-xl border border-ink/10 bg-white p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="h-20 w-20 overflow-hidden rounded-md bg-bone">
                      {img ? <img src={img} alt={`${b} sample`} className="h-full w-full object-cover" /> : <div className="flex h-full w-full items-center justify-center text-sm font-bold text-ink">{b}</div>}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink">{b}</h3>
                      <div className="mt-1 text-sm text-charcoal/70">{items.length} products • {families.length} families</div>
                      <div className="mt-3 flex gap-2 text-xs text-charcoal/60">
                        {families.slice(0, 3).map((f) => <span key={f} className="rounded-md bg-bone px-2 py-1">{f}</span>)}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link to={`/brands/${b.toLowerCase()}`} className="inline-flex items-center gap-3 text-sm font-semibold text-brand">EXPLORE BRAND →</Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
