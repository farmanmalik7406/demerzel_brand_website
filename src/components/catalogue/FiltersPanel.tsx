import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getBrands, getCategories } from "../../lib/products";

export function FiltersPanel() {
  const brands = getBrands();
  const categories = getCategories();
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  const params = new URLSearchParams(search);
  const activeBrand = params.get("brand") || "";
  const activeCategory = params.get("category") || "";

  function selectBrand(b: string) {
    const p = new URLSearchParams(search);
    if (b === "") {
      p.delete("brand");
    } else {
      p.set("brand", b);
    }
    navigate({ pathname, search: p.toString() });
  }

  function selectCategory(c: string) {
    const p = new URLSearchParams(search);
    if (c === "") {
      p.delete("category");
    } else {
      p.set("category", c);
    }
    navigate({ pathname, search: p.toString() });
  }

  return (
    <aside className="space-y-8">
      <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-soft">
        <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Brand</h4>
        <div className="mt-3 grid gap-2">
          <button onClick={() => selectBrand("")} className={`flex items-center justify-between rounded-md border border-ink/8 px-3 py-2 text-sm font-semibold transition ${!activeBrand ? "bg-brand text-ink" : "bg-bone text-ink/80"}`}>
            <span>All</span>
            <span className="text-xs text-charcoal/60">{getBrands().length}</span>
          </button>
          {brands.map((b) => (
            <button key={b} onClick={() => selectBrand(b.toLowerCase())} className={`flex items-center justify-between rounded-md border border-ink/8 px-3 py-2 text-sm font-semibold transition ${activeBrand === b.toLowerCase() ? "bg-brand text-ink" : "bg-bone text-charcoal/80 hover:bg-bone/90"}`}>
              <span>{b}</span>
              <span className="text-xs text-charcoal/60">{ /* count */ }</span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-soft">
        <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Category</h4>
        <div className="mt-3 grid gap-2">
          <button
            onClick={() => selectCategory("")}
            className={`flex items-center justify-between rounded-md border px-3 py-2 text-sm font-semibold transition ${!activeCategory ? "bg-brand text-ink border-brand" : "bg-bone text-charcoal/80 border-ink/8 hover:bg-bone/90"}`}
          >
            All
          </button>
          {categories.map((c) => {
            const active = activeCategory.toLowerCase() === c.toLowerCase();
            return (
              <button
                key={c}
                onClick={() => selectCategory(c.toLowerCase())}
                className={`flex items-center justify-between rounded-md border px-3 py-2 text-sm font-semibold transition ${active ? "bg-brand text-ink border-brand" : "bg-bone text-charcoal/80 border-ink/8 hover:bg-bone/90"}`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default FiltersPanel;
