import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductBySlug, getProductFeatures } from "../lib/products";
import { SEO } from "../components/SEO";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import RequestInfoModal from "../components/catalogue/RequestInfoModal";
import ProductGallery from "../components/catalogue/ProductGallery";
import SpecFilter from "../components/catalogue/SpecFilter";
import FeaturedSpecs from "../components/catalogue/FeaturedSpecs";
import RelatedProducts from "../components/catalogue/RelatedProducts";
import ProductComparison from "../components/catalogue/ProductComparison";
import QuickActions from "../components/catalogue/QuickActions";

export function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
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
            <div className="mt-3 flex flex-wrap gap-2">
              {product.series && (
                <span className="rounded-full bg-bone px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/70">
                  {product.series}
                </span>
              )}
              <span className="rounded-full bg-bone px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/70">
                {product.category}
              </span>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${product.dataQualityStatus === "verified" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>
                {product.dataQualityStatus === "verified" ? "Catalogue verified" : "Needs review"}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-black text-ink">{product.name}</h1>
            <div className="mt-3 text-sm text-charcoal/75">{product.shortDescription}</div>
            {getProductFeatures(product).length > 0 && (
              <div className="mt-6 rounded-3xl border border-ink/10 bg-bone p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">Key features</div>
                <ul className="mt-3 grid gap-2 text-sm text-charcoal/75 sm:grid-cols-2">
                  {getProductFeatures(product).map((feature) => (
                    <li key={feature} className="rounded-2xl bg-white px-4 py-3">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">Applications</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.applications.map((application) => (
                  <button
                    key={application}
                    onClick={() => navigate(`/products?application=${encodeURIComponent(application.toLowerCase())}`)}
                    className="rounded-full bg-brand/10 px-3 py-1 text-sm font-semibold text-brand transition hover:bg-brand/20 cursor-pointer"
                    title={`View all ${application} products`}
                  >
                    {application}
                  </button>
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

            <QuickActions productName={product.name} productUrl={window.location.href} />

            <ProductComparison currentProduct={product} />
          </aside>
        </header>

        <section className="mt-16 space-y-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Overview</p>
            <h2 className="mt-2 text-2xl font-black text-ink">{product.name}</h2>
            {product.shortDescription && <p className="mt-4 text-sm text-charcoal/75">{product.shortDescription}</p>}
          </div>

          <FeaturedSpecs specs={product.specifications} />

          <SpecFilter specs={product.specifications} />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Applications</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.applications.map((app) => (
                <button
                  key={app}
                  onClick={() => navigate(`/products?application=${encodeURIComponent(app.toLowerCase())}`)}
                  className="rounded-md border border-ink/10 bg-bone px-3 py-2 text-sm font-semibold text-charcoal/80 transition hover:border-brand hover:text-brand cursor-pointer"
                  title={`View all ${app} products`}
                >
                  {app}
                </button>
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
