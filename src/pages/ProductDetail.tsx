import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductBySlug } from "../lib/products";
import { SEO } from "../components/SEO";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import RequestInfoModal from "../components/catalogue/RequestInfoModal";

export function ProductDetail() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [open, setOpen] = useState(false);

  if (!product) {
    return (
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="mt-4">We couldn't find that product in the catalogue.</p>
      </main>
    );
  }

  return (
    <>
      <SEO title={`${product.name} | DEMERZEL`} description={product.shortDescription || ""} />
      <main className="max-w-6xl mx-auto p-6">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Products", to: "/products" }, { label: product.category }, { label: product.name }]} />

        <header className="mt-6 grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-start">
          <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-bone shadow-soft">
            <img src={product.images[0]?.url} alt={product.images[0]?.alt || product.name} className="h-full w-full object-cover" />
          </div>
          <div className="rounded-[1.75rem] border border-ink/10 bg-white p-8 shadow-soft">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
              <span>{product.brand}</span>
              <span className="h-px flex-1 bg-ink/10" />
              <span>{product.category}</span>
            </div>
            <h1 className="mt-6 text-4xl font-black text-ink">{product.name}</h1>
            <p className="mt-4 text-sm leading-7 text-charcoal/75">{product.shortDescription}</p>
            <div className="mt-6 space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-ink/70">Applications</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.applications.map((application) => (
                    <span key={application} className="rounded-full bg-brand/10 px-3 py-1 text-sm font-semibold text-brand">
                      {application}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-ink/60">Catalogue reference</p>
                <p className="mt-2 text-sm leading-7 text-charcoal/70">This page presents the product within the DEMERZEL product discovery concept. Specifications and imagery are drawn from the catalogue dataset.</p>
              </div>
            </div>
            <button onClick={() => setOpen(true)} className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition hover:bg-brand/90">
              Request Information →
            </button>
          </div>
        </header>

        <section className="mt-12 rounded-[1.75rem] border border-ink/10 bg-white p-8 shadow-soft">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">Technical specifications</p>
              <p className="mt-3 text-sm text-charcoal/70">Key attributes from the catalogue product sheet.</p>
            </div>
            <div className="rounded-full bg-bone px-4 py-2 text-xs uppercase tracking-[0.22em] text-charcoal/70">{product.specifications.length} details</div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {product.specifications.map((spec) => (
              <div key={spec.key} className="rounded-[1.25rem] border border-ink/10 bg-bone p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-charcoal/60">{spec.label}</p>
                <p className="mt-3 text-xl font-semibold text-ink">{spec.value}{spec.unit ? ` ${spec.unit}` : ""}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <RequestInfoModal open={open} onClose={() => setOpen(false)} productName={product.name} />
    </>
  );
}

export default ProductDetail;
