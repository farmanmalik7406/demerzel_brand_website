import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductBySlug } from "../lib/products";
import { SEO } from "../components/SEO";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import RequestInfoModal from "../components/catalogue/RequestInfoModal";
import ProductGallery from "../components/catalogue/ProductGallery";
import SpecGroup from "../components/catalogue/SpecGroup";
import FeaturedSpecs from "../components/catalogue/FeaturedSpecs";
import RelatedProducts from "../components/catalogue/RelatedProducts";

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
      <main className="max-w-7xl mx-auto p-6">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Products", to: "/products" }, { label: product.category }, { label: product.name }]} />

        <header className="mt-6 grid gap-8 md:grid-cols-[1.2fr_.85fr] md:items-start">
          <div>
            <ProductGallery images={product.images} />
          </div>
          <aside className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal/70">{product.brand}</div>
            {product.series && <div className="mt-1 text-xs uppercase tracking-[0.18em] text-charcoal/60">{product.series}</div>}
            <h1 className="mt-4 text-3xl font-black text-ink">{product.name}</h1>
            <div className="mt-3 text-sm text-charcoal/75">{product.shortDescription}</div>
            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">Applications</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.applications.map((application) => (
                  <span key={application} className="rounded-full bg-brand/10 px-3 py-1 text-sm font-semibold text-brand">
                    {application}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setOpen(true)} className="inline-flex items-center gap-3 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-ink">REQUEST INFORMATION</button>
              <Link to={`/brands/${product.brand.toLowerCase()}`} className="inline-flex items-center gap-3 rounded-full border border-ink/10 px-4 py-3 text-sm font-semibold text-ink">PART OF {product.brand}</Link>
            </div>
          </aside>
        </header>

        <section className="mt-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">01 / OVERVIEW</p>
            <h2 className="mt-2 text-2xl font-black text-ink">{product.name}</h2>
            {product.shortDescription && <p className="mt-4 text-sm text-charcoal/75">{product.shortDescription}</p>}
          </div>

          <FeaturedSpecs specs={product.specifications} />

          <SpecGroup specs={product.specifications} />

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">02 / APPLICATIONS</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.applications.map((app) => (
                <span key={app} className="rounded-md border border-ink/10 bg-bone px-3 py-2 text-sm font-semibold text-charcoal/80">{app}</span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">PART OF</p>
            <div className="mt-3">
              <Link to={`/brands/${product.brand.toLowerCase()}`} className="text-lg font-bold text-ink">{product.brand}</Link>
            </div>
          </div>

          <RelatedProducts product={product} />
        </section>
      </main>
      <RequestInfoModal open={open} onClose={() => setOpen(false)} productName={product.name} />
    </>
  );
}

export default ProductDetail;
