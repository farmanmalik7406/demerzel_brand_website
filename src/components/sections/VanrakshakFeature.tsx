import React from "react";
import { Link } from "react-router-dom";
import products from "../../data/products";
import { images } from "../../lib/assets";
import { Reveal } from "../ui/Reveal";

export function VanrakshakFeature() {
  const brand = "Vanrakshak";
  const items = products.filter((p) => p.brand === brand);
  const families = Array.from(new Set(items.map((p) => p.series).filter(Boolean))) as string[];

  if (items.length === 0) return null;

  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">VANRAKSHAK</p>
            <h2 className="mt-3 text-4xl font-black text-ink">Optics families and field instruments.</h2>
            <p className="mt-4 text-sm text-charcoal/75">A focused collection of Vanrakshak optical equipment organized by product family. Explore specifications, features and applications for each series.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/brands/vanrakshak" className="inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink">EXPLORE VANRAKSHAK →</Link>
            </div>
          </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal className="rounded-[1.25rem] overflow-hidden border border-ink/10">
                <img src={images.opticProduct} alt="Vanrakshak sample" className="h-72 w-full object-cover" />
              </Reveal>
              <Reveal className="space-y-3">
                {families.map((f) => (
                  <div key={f} className="rounded-xl border border-ink/10 bg-white p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">{f}</div>
                    <div className="mt-2 text-sm text-charcoal/75">Catalogue family — {items.filter(i => i.series === f).length} products</div>
                  </div>
                ))}
              </Reveal>
            </div>
        </div>
      </div>
    </section>
  );
}

export default VanrakshakFeature;
