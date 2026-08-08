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

  function selectBrand(b: string) {
    const p = new URLSearchParams(search);
    if (b === "") {
      p.delete("brand");
    } else {
      p.set("brand", b);
    }
    navigate({ pathname, search: p.toString() });
  }

  return (
    <aside className="space-y-8">
      <div className="rounded-[1.75rem] border border-ink/10 bg-white p-6 shadow-soft">
        <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">Brand</h4>
        <div className="mt-4 flex flex-wrap gap-2">
          <button onClick={() => selectBrand("")} className={`rounded-full px-3 py-2 text-sm font-semibold transition ${!activeBrand ? "bg-brand text-ink" : "bg-bone text-ink/70 hover:bg-bone/90"}`}>
            All
          </button>
          {brands.map((b) => (
            <button key={b} onClick={() => selectBrand(b.toLowerCase())} className={`rounded-full px-3 py-2 text-sm font-semibold transition ${activeBrand === b.toLowerCase() ? "bg-brand text-ink" : "bg-bone text-ink/70 hover:bg-bone/90"}`}>
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[1.75rem] border border-ink/10 bg-white p-6 shadow-soft">
        <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">Category</h4>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="rounded-full bg-bone px-3 py-2 text-sm font-semibold text-charcoal/75">{c}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default FiltersPanel;
