import React from "react";
import type { ProductSpecification } from "../../data/products";

const candidate = ["magnification", "objective", "angular_fov", "weight", "close_focus"];

export function FeaturedSpecs({ specs }: { specs: ProductSpecification[] }) {
  const found = specs.filter((s) => candidate.includes(s.key));
  if (found.length === 0) return null;

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      {found.map((s) => (
        <div key={s.key} className="rounded-lg border border-ink/10 bg-white p-6 text-center">
          <div className="text-3xl font-black text-ink">{s.value}{s.unit ? ` ${s.unit}` : ""}</div>
          <div className="mt-2 text-xs uppercase tracking-[0.16em] text-charcoal/70">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedSpecs;
