import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { getAllProducts, getProductBySlug } from "../../lib/products";
import type { Product } from "../../data/products";

type Props = {
  currentProduct: Product;
};

export function ProductComparison({ currentProduct }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  // Get similar products (same series or category)
  const similarProducts = getAllProducts().filter(
    (p) =>
      p.id !== currentProduct.id &&
      (p.series === currentProduct.series || p.category === currentProduct.category) &&
      (p.brand === currentProduct.brand || p.category === currentProduct.category)
  );

  if (similarProducts.length === 0) return null;

  const comparisonProducts = selectedProducts
    .map((id) => getProductBySlug(id))
    .filter(Boolean) as Product[];

  return (
    <div className="mt-6 rounded-lg border border-ink/10 bg-offwhite p-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-2 text-sm font-semibold text-ink"
      >
        <span>Compare Products</span>
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="mt-4 space-y-3">
          <div className="max-h-48 overflow-y-auto space-y-2">
            {similarProducts.slice(0, 5).map((product) => (
              <label key={product.id} className="flex items-center gap-2 cursor-pointer text-sm">
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedProducts([...selectedProducts, product.id]);
                    } else {
                      setSelectedProducts(selectedProducts.filter((id) => id !== product.id));
                    }
                  }}
                  className="h-4 w-4 rounded border-ink/20 cursor-pointer"
                />
                <span className="text-charcoal/75">{product.name}</span>
              </label>
            ))}
          </div>

          {comparisonProducts.length > 0 && (
            <div className="border-t border-ink/10 pt-3">
              <p className="text-xs text-charcoal/60 mb-2">Selected for comparison:</p>
              <div className="space-y-1">
                {comparisonProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between gap-2 text-xs bg-white p-2 rounded border border-ink/5">
                    <span className="font-semibold text-charcoal/80">{product.name}</span>
                    <button
                      onClick={() => setSelectedProducts(selectedProducts.filter((id) => id !== product.id))}
                      className="text-charcoal/40 hover:text-charcoal/70 transition"
                      aria-label={`Remove ${product.name} from comparison`}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
              <a
                href={`/products/compare?compare=${[currentProduct.id, ...selectedProducts].join(",")}`}
                className="mt-3 block w-full text-center rounded-full bg-brand px-4 py-2 text-xs font-semibold text-ink transition hover:bg-brand/90"
              >
                View Comparison
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductComparison;
