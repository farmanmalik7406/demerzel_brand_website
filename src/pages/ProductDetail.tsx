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
      <>
        <SEO title="Product Not Found | DEMERZEL" description="The product you're looking for is not available in our catalogue." />
        <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="rounded-lg border border-ink/10 bg-offwhite p-12 text-center">
            <h1 className="text-3xl font-black text-ink">Product not found</h1>
            <p className="mt-3 text-charcoal/75">We couldn't find that product in the catalogue.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link to="/products" className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-ink">
                Back to catalogue
              </Link>
              <Link to="/" className="inline-flex items-center justify-center rounded-full border border-ink/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-ink">
                Return home
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO title={`${product.name} | DEMERZEL`} description={product.shortDescription || ""} />
      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Products", to: "/products" }, { label: product.category }, { label: product.name }]} />

        <header className="mt-10 grid gap-12 md:grid-cols-[1.2fr_.85fr] md:items-start">
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
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-3">
              <button onClick={() => setOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-ink hover:bg-brand/90">
                REQUEST INFORMATION
              </button>
              <Link to={`/brands/${product.brand.toLowerCase()}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 px-4 py-3 text-sm font-semibold text-ink hover:bg-bone">
                {product.brand}
              </Link>
            </div>
          </aside>
        </header>

        <section className="mt-16 space-y-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Overview</p>
            <h2 className="mt-2 text-2xl font-black text-ink">{product.name}</h2>
            {product.shortDescription && <p className="mt-4 text-sm text-charcoal/75">{product.shortDescription}</p>}
          </div>

          <FeaturedSpecs specs={product.specifications} />

          <SpecGroup specs={product.specifications} />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Applications</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.applications.map((app) => (
                <span key={app} className="rounded-md border border-ink/10 bg-bone px-3 py-2 text-sm font-semibold text-charcoal/80">{app}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Manufacturer</p>
            <div className="mt-3">
              <Link to={`/brands/${product.brand.toLowerCase()}`} className="text-lg font-bold text-ink hover:text-brand">
                {product.brand}
              </Link>
            </div>
          </div>

          <RelatedProducts product={product} />
        </section>

        <section className="mt-16 border-t border-ink/10 pt-12">
          <div className="text-center">
            <p className="text-sm text-charcoal/70">Need help selecting this product?</p>
            <Link to="/contact" className="mt-4 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-ink">
              Contact us
            </Link>
          </div>
        </section>
      </main>
      <RequestInfoModal open={open} onClose={() => setOpen(false)} productName={product.name} />
    </>
  );
}

export default ProductDetail;
