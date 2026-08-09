import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { Product } from "../../data/products";
import {
  formatSpecValue,
  getAllProducts,
  getCategories,
  getPreferredSpecs,
  getProductCopy,
  getProductPath,
  getSeries
} from "../../lib/products";
import { Reveal } from "../ui/Reveal";

const tilePattern = [
  "lg:col-span-5",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-6",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-4"
];

function ProductTile({ product, index, active, onToggle }: { product: Product; index: number; active: boolean; onToggle: () => void }) {
  const specs = getPreferredSpecs(product, index % 3 === 0 ? 4 : 3);
  const isWide = index % 6 === 3;
  const isLarge = index % 6 === 0;

  return (
    <Reveal
      as="article"
      className={`group overflow-hidden rounded-lg border border-ink/10 bg-white transition duration-500 hover:border-brand/40 ${tilePattern[index % tilePattern.length]}`}
    >
      <div className={`grid h-full ${isWide ? "md:grid-cols-[.9fr_1.1fr]" : ""}`}>
        <Link to={getProductPath(product)} className={`relative block overflow-hidden bg-bone ${isLarge ? "min-h-[360px]" : "min-h-[260px]"} ${isWide ? "md:min-h-full" : ""}`}>
          <img
            src={product.images[0]?.url}
            alt={product.images[0]?.alt || product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] group-hover:object-[52%_48%]"
            loading="lazy"
          />
          <div className="absolute left-4 top-4 bg-white/85 px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.2em] text-ink transition group-hover:bg-ink group-hover:text-white">
            {product.brand}
          </div>
        </Link>

        <div className="flex min-h-[280px] flex-col justify-between p-5 md:p-6">
          <div>
            <div className="flex flex-wrap gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-charcoal/55 transition group-hover:text-brand">
              <span>{product.category}</span>
              {product.series && <span>{product.series}</span>}
            </div>
            <h3 className={`${isLarge ? "text-3xl" : "text-2xl"} mt-3 font-black leading-tight text-ink`}>{product.name}</h3>
            <p className="mt-3 text-sm leading-6 text-charcoal/72">{getProductCopy(product)}</p>

            {specs.length > 0 && (
              <div className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
                {specs.map((specification) => (
                  <div key={specification.key} className="grid grid-cols-[1fr_auto] gap-4 py-3">
                    <div className="text-[0.64rem] font-black uppercase tracking-[0.2em] text-charcoal/50">{specification.label}</div>
                    <div className="text-sm font-black text-ink">{formatSpecValue(specification)}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={onToggle}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-charcoal/65 transition hover:text-ink"
              aria-expanded={active}
            >
              Preview <ChevronDown className={`h-4 w-4 transition ${active ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <Link to={getProductPath(product)} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-brand">
              View details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <div className={`grid transition-all duration-500 ${active ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className="overflow-hidden">
              <div className="border-t border-ink/10 pt-5">
                <div className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-charcoal/50">Application</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.applications.slice(0, 4).map((application) => (
                    <span key={application} className="border border-ink/10 bg-bone px-2.5 py-1 text-xs font-semibold text-charcoal/75">{application}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function EquipmentDiscovery() {
  const products = getAllProducts();
  const categories = getCategories();
  const series = getSeries();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [openProductId, setOpenProductId] = useState<string | null>(products[0]?.id || null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "ALL") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory, products]);

  if (products.length === 0) return null;

  return (
    <section className="bg-offwhite px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand">03 / EQUIPMENT</p>
            <h2 className="mt-4 text-5xl font-black leading-tight text-ink md:text-6xl">EQUIPMENT FOR THE FIELD.</h2>
          </div>
          <div>
            <p className="max-w-3xl text-lg leading-8 text-charcoal/75">
              DEMERZEL brings together specialist equipment families, catalogue brands and field systems for observation, patrol, wildlife work and technical exploration.
            </p>
            <div className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-charcoal/55">{filteredProducts.length} PRODUCTS</div>
          </div>
        </Reveal>

        <Reveal className="mt-12 border-y border-ink/10 py-5">
          <div className="flex flex-wrap gap-3">
            {["ALL", ...categories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setOpenProductId(null);
                }}
                className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.18em] transition ${
                  activeCategory === category ? "border-ink bg-ink text-white" : "border-ink/10 bg-white text-charcoal/70 hover:border-brand hover:text-ink"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {series.length > 0 && (
          <Reveal className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {series.map((family) => {
              const count = products.filter((product) => product.series === family).length;
              return (
                <div key={family} className="border-l border-ink/15 bg-white px-4 py-5">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-ink">{family}</div>
                  <div className="mt-2 text-sm text-charcoal/65">{count} products</div>
                </div>
              );
            })}
          </Reveal>
        )}

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {filteredProducts.slice(0, 12).map((product, index) => (
            <ProductTile
              key={product.id}
              product={product}
              index={index}
              active={openProductId === product.id}
              onToggle={() => setOpenProductId(openProductId === product.id ? null : product.id)}
            />
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col gap-5 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-charcoal/70">
            Product detail pages retain the complete technical specification view. The homepage surfaces enough data to show breadth without becoming a datasheet wall.
          </p>
          <Link to="/products" className="inline-flex items-center justify-center gap-3 rounded-full bg-brand px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-ink transition hover:bg-brand/90">
            Explore all {products.length} products <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default EquipmentDiscovery;
