import React from "react";
import type { ProductSpecification } from "../../data/products";

export function SpecGroup({ specs }: { specs: ProductSpecification[] }) {
  const groups = specs.reduce<Record<string, ProductSpecification[]>>((acc, s) => {
    const g = s.group || "General";
    if (!acc[g]) acc[g] = [];
    acc[g].push(s);
    return acc;
  }, {});

  return (
    <div className="mt-6 grid gap-6">
      {Object.entries(groups).map(([group, items]) => (
        <section key={group} className="rounded-lg border border-ink/10 bg-white p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">{group}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {items.map((s) => (
              <div key={s.key} className="rounded-md bg-bone p-4">
                <div className="text-xs uppercase tracking-[0.16em] text-charcoal/70">{s.label}</div>
                <div className="mt-2 text-2xl font-semibold text-ink">{s.value}{s.unit ? ` ${s.unit}` : ""}</div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default SpecGroup;
