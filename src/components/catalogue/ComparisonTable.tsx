import React from "react";
import type { Product } from "../../data/products";
import { formatSpecValue, getProductFeatures } from "../../lib/products";

type ComparisonRow = {
  key: string;
  label: string;
  values: string[];
  group?: string;
  isDifferent: boolean;
};

function compareValues(values: string[]) {
  return new Set(values).size > 1;
}

function formatSpecificationValue(product: Product, key: string) {
  const spec = product.specifications.find((item) => item.key === key);
  return spec ? formatSpecValue(spec) : "—";
}

export function ComparisonTable({ products }: { products: Product[] }) {
  const featureRows: ComparisonRow[] = [
    {
      key: "brand",
      label: "Brand",
      values: products.map((product) => product.brand),
      isDifferent: compareValues(products.map((product) => product.brand)),
    },
    {
      key: "series",
      label: "Series",
      values: products.map((product) => product.series || "—"),
      isDifferent: compareValues(products.map((product) => product.series || "—")),
    },
    {
      key: "category",
      label: "Category",
      values: products.map((product) => product.category),
      isDifferent: compareValues(products.map((product) => product.category)),
    },
    {
      key: "applications",
      label: "Applications",
      values: products.map((product) => product.applications.join(" / ")),
      isDifferent: compareValues(products.map((product) => product.applications.join(" / "))),
    },
    {
      key: "features",
      label: "Feature summary",
      values: products.map((product) => getProductFeatures(product).join(", ") || "—"),
      isDifferent: compareValues(products.map((product) => getProductFeatures(product).join(", ") || "—")),
    }
  ];

  const groupOrder: string[] = ["Optical", "Field of View", "Physical", "Environmental", "Imaging", "Connectivity", "Navigation", "Surveying", "Battery", "Source"];

  const keyedSpecs = products.flatMap((product) => product.specifications.map((spec) => ({ ...spec, productId: product.id })));
  const groupedSpecs = new Map<string, Map<string, string>>();
  const specLabels = new Map<string, string>();

  keyedSpecs.forEach((spec) => {
    const group = spec.group || "Other";
    if (!groupedSpecs.has(group)) groupedSpecs.set(group, new Map());
    const groupSpecs = groupedSpecs.get(group)!;
    if (!groupSpecs.has(spec.key)) {
      groupSpecs.set(spec.key, spec.label);
    }
    if (!specLabels.has(spec.key)) {
      specLabels.set(spec.key, spec.label);
    }
  });

  const sortedGroups = Array.from(groupedSpecs.keys()).sort((a, b) => {
    const ai = groupOrder.indexOf(a);
    const bi = groupOrder.indexOf(b);
    if (ai === -1 && bi === -1) return a.localeCompare(b);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  const specRows: ComparisonRow[] = sortedGroups.flatMap((group) => {
    const groupSpecs = groupedSpecs.get(group) ?? new Map();
    return Array.from(groupSpecs.keys()).map((key) => {
      const values = products.map((product) => formatSpecificationValue(product, key));
      return {
        key,
        label: specLabels.get(key) || key,
        group,
        values,
        isDifferent: compareValues(values),
      };
    });
  });

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white shadow-soft">
      <div className="bg-bone px-6 py-5">
        <h2 className="text-xl font-black text-ink">Product comparison</h2>
        <p className="mt-2 text-sm leading-6 text-charcoal/75">Compare product specifications, applications and catalogue features side by side.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[720px] w-full border-separate border-spacing-0 text-left text-sm">
          <thead>
            <tr className="bg-offwhite border-b border-ink/10">
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-charcoal/70">Attribute</th>
              {products.map((product) => (
                <th key={product.id} className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-charcoal/70">
                  {product.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureRows.map((row) => (
              <tr key={row.key} className={row.isDifferent ? "bg-brand/5" : "bg-white"}>
                <td className="whitespace-nowrap px-6 py-4 font-semibold text-charcoal/80">{row.label}</td>
                {row.values.map((value, index) => (
                  <td key={`${row.key}-${index}`} className="px-6 py-4 text-charcoal/75">{value || "—"}</td>
                ))}
              </tr>
            ))}
            {sortedGroups.map((group) => (
              <React.Fragment key={group}>
                <tr className="bg-ink/5">
                  <td colSpan={products.length + 1} className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/70">{group}</td>
                </tr>
                {Array.from(groupedSpecs.get(group)?.keys() || []).map((key) => {
                  const row = specRows.find((item) => item.key === key && item.group === group);
                  if (!row) return null;
                  return (
                    <tr key={row.key} className={row.isDifferent ? "bg-brand/5" : "bg-white"}>
                      <td className="whitespace-nowrap px-6 py-4 font-semibold text-charcoal/80">{row.label}</td>
                      {row.values.map((value, index) => (
                        <td key={`${row.key}-${index}`} className="px-6 py-4 text-charcoal/75">{value || "—"}</td>
                      ))}
                    </tr>
                  );
                })}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComparisonTable;
