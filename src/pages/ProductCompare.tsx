import { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import ComparisonTable from "../components/catalogue/ComparisonTable";
import { getProductBySlug } from "../lib/products";
import { ContactCTA } from "../components/sections/ContactCTA";

export function ProductCompare() {
  const location = useLocation();
  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const compare = params.get("compare") || "";
  const compareIds = useMemo(() => compare.split(",").filter(Boolean), [compare]);

  const products = useMemo(
    () => compareIds
      .map((id) => getProductBySlug(id))
      .filter((product): product is NonNullable<ReturnType<typeof getProductBySlug>> => Boolean(product)),
    [compareIds]
  );

  if (compareIds.length === 0 || products.length === 0) {
    return (
      <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SEO title="Product Comparison | DEMERZEL" description="Select products to compare in the DEMERZEL catalogue." />
        <div className="rounded-3xl border border-ink/10 bg-white p-12 text-center shadow-soft">
          <h1 className="text-3xl font-black text-ink">No products selected for comparison</h1>
          <p className="mt-4 text-sm leading-7 text-charcoal/75">Choose products from the catalogue to compare their specifications side by side.</p>
          <Link to="/products" className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-ink">Browse products</Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <SEO title="Product Comparison | DEMERZEL" description="Compare DEMERZEL catalogue products with a feature-rich specification table." />
      <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">Comparison</p>
          <h1 className="mt-3 text-4xl font-black text-ink">Compare catalogue products</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-charcoal/75">Use this dedicated comparison page to review product features, specifications and application fit in a single table.</p>
        </div>

        <ComparisonTable products={products} />

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link to="/products" className="rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-bone">Back to catalogue</Link>
          <span className="text-sm text-charcoal/70">Selected products: {products.map((p) => p.name).join(" · ")}</span>
        </div>
      </main>
      <ContactCTA />
    </>
  );
}

export default ProductCompare;
