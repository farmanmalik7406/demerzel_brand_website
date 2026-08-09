import React, { useState } from "react";
import type { ProductSpecification } from "../../data/products";

const essentialKeys = [
  "magnification",
  "objective",
  "weight",
  "angular_fov",
  "close_focus",
  "prism",
];

type Props = {
  specs: ProductSpecification[];
};

export function SpecFilter({ specs }: Props) {
  const [showAll, setShowAll] = useState(false);

  const groups = specs.reduce<Record<string, ProductSpecification[]>>((acc, s) => {
    const g = s.group || "General";
    if (!acc[g]) acc[g] = [];
    acc[g].push(s);
    return acc;
  }, {});

  // Filter to essential only if not showing all
  const filteredGroups = showAll
    ? groups
    : Object.entries(groups).reduce<Record<string, ProductSpecification[]>>((acc, [group, items]) => {
        const filtered = items.filter((s) => essentialKeys.includes(s.key));
        if (filtered.length > 0) acc[group] = filtered;
        return acc;
      }, {});

  const hasEssentialOnly = Object.keys(groups).length > Object.keys(filteredGroups).length;

  return (
    <div>
      {hasEssentialOnly && (
        <div className="mb-6 flex items-center gap-4 rounded-lg border border-brand/20 bg-brand/5 p-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showAll}
              onChange={(e) => setShowAll(e.target.checked)}
              className="h-4 w-4 rounded border-ink/20 cursor-pointer"
              aria-label="Show all specifications"
            />
            <span className="text-sm font-semibold text-ink">Show all specifications</span>
          </label>
          <span className="text-xs text-charcoal/60">
            {showAll ? "Showing all" : `Essential specs only`}
          </span>
        </div>
      )}

      <div className="grid gap-6">
        {Object.entries(filteredGroups).map(([group, items]) => (
          <section key={group} className="rounded-lg border border-ink/10 bg-white p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">{group}</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {items.map((s) => (
                <div key={s.key} className="rounded-md bg-bone p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-charcoal/70">{s.label}</div>
                  <div className="mt-2 text-2xl font-semibold text-ink">
                    {s.value}
                    {s.unit ? ` ${s.unit}` : ""}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default SpecFilter;
