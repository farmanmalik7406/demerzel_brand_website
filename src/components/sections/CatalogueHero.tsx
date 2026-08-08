import React from "react";
import { images } from "../../lib/assets";

export function CatalogueHero() {
  return (
    <section className="bg-navy px-5 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand/80">02 / CATALOGUE</p>
            <h1 className="mt-3 text-4xl font-black leading-tight lg:text-5xl">PRODUCT CATALOGUE</h1>
            <p className="mt-4 max-w-2xl text-lg leading-7 text-white/80">Explore DEMERZEL's equipment for observation, monitoring, navigation, surveying and field operations — discovered through catalogue families and technical specifications.</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/8 bg-white/5">
            <img src={images.opticsWide} alt="Catalogue imagery" className="h-48 w-full object-cover object-center sm:h-64 lg:h-72" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CatalogueHero;
