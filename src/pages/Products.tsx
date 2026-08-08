import { Binoculars, Camera, Compass, Crosshair, Flashlight, Map, Moon, Plane, RadioTower, Telescope } from "lucide-react";
import { SEO } from "../components/SEO";
import { ContactCTA } from "../components/sections/ContactCTA";
import CatalogueHero from "../components/sections/CatalogueHero";
import { SectionHeading } from "../components/ui/SectionHeading";
import { images } from "../lib/assets";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FiltersPanel from "../components/catalogue/FiltersPanel";
import ProductGrid from "../components/catalogue/ProductGrid";
import { searchProducts, getAllProducts, getCategories, getApplications } from "../lib/products";

const areas = [
  { title: "Optics", icon: Binoculars, copy: "Binocular and observation families including DRISHTI, TEJAS, CHAKOR, RAKSHAK, VANRAAJ and NAKSHATRA." },
  { title: "Navigation", icon: Compass, copy: "Handheld GPS, NAVIC-related navigation products, compasses and field instruments referenced in the catalogue." },
  { title: "Wildlife Monitoring", icon: RadioTower, copy: "Camera traps, GSM wireless camera traps and telemetry equipment areas for monitoring-led field work." },
  { title: "Thermal & Night Vision", icon: Crosshair, copy: "Thermal imaging and digital night vision equipment areas, described only at catalogue-category level here." },
  { title: "Survey & Mapping", icon: Map, copy: "Surveying equipment, range finding and mapping-adjacent field instruments." },
  { title: "Aerial Equipment", icon: Plane, copy: "Drone categories presented as part of the broader field-technology equipment universe." },
  { title: "Lighting", icon: Flashlight, copy: "Search lights, headlamps and field lighting categories for outdoor and operational contexts." },
  { title: "Astronomy", icon: Moon, copy: "Telescopes and NAKSHATRA astronomy optics for sky observation and exploration." },
  { title: "Outdoor Equipment", icon: Telescope, copy: "Multi-tools, outdoor instruments and exploration-focused equipment areas from the broader catalogue." }
];

const opticsFamilies = [
  ["DRISHTI", "Positioned for wildlife professionals, forest guards, birders, patrolling and nature observation."],
  ["TEJAS", "Positioned for nature lovers, wildlife professionals, outdoor enthusiasts, safari, surveillance and long-distance viewing."],
  ["CHAKOR", "Positioned for wildlife, hiking, long-distance viewing, birdwatching, outdoor sports and security surveillance."],
  ["RAKSHAK", "Positioned for forest surveillance, wildlife monitoring, patrol contexts and rugged field operations."],
  ["VANRAAJ", "Positioned for safaris, jungle treks, nature trails, wildlife, birding and challenging terrain."],
  ["NAKSHATRA", "Positioned for astronomy, stargazing and celestial observation."]
];

export function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const initialQ = params.get("q") || "";
  const initialBrand = params.get("brand") || "";
  const [query, setQuery] = useState(initialQ);
  const [brand] = useState(initialBrand);
  const [results, setResults] = useState(() => getAllProducts());

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filters: any = {};
      if (brand) filters.brand = brand;
      const items = searchProducts(query, filters);
      setResults(items);
      const p = new URLSearchParams(location.search);
      if (query) p.set("q", query); else p.delete("q");
      navigate({ pathname: location.pathname, search: p.toString() }, { replace: true });
    }, 180);
    return () => clearTimeout(timeout);
  }, [query, brand]);

  return (
    <>
      <SEO description="Explore DEMERZEL product areas across optics, navigation, wildlife monitoring, surveying, drones, thermal imaging, lighting and astronomy." title="Product Areas | DEMERZEL Enterprises" />
      <CatalogueHero />
      <section className="bg-offwhite px-5 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[1.25rem] border border-ink/10 bg-white p-6 shadow-soft">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/60">Search</p>
                <p className="mt-2 text-sm text-charcoal/70">Search products, brands & applications</p>
              </div>
              <div className="mt-3 w-full lg:mt-0 lg:w-1/2">
                <div className="relative">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products, brands & applications..."
                    className="w-full rounded-2xl border border-ink/10 bg-bone px-4 py-3 pl-12 text-sm text-ink outline-none transition placeholder:text-charcoal/40 focus:border-brand focus:ring-2 focus:ring-brand/20"
                    aria-label="Search products"
                  />
                  {query && (
                    <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-charcoal/60">Clear</button>
                  )}
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/60">🔍</div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex flex-wrap gap-3">
                {getCategories().map((c) => (
                  <button key={c} onClick={() => { const p = new URLSearchParams(location.search); p.set("category", c); navigate({ pathname: location.pathname, search: p.toString() }); }} className="rounded-full border border-ink/10 bg-bone px-3 py-2 text-sm font-semibold text-charcoal/80">{c}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-offwhite px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
            <div>
              <div className="rounded-[1.25rem] border border-ink/10 bg-white p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Filters</p>
                <div className="mt-6">
                  <FiltersPanel />
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-[1.25rem] border border-ink/10 bg-white p-6 shadow-soft">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/60">CATALOGUE / ALL PRODUCTS</p>
                    <p className="mt-2 text-sm text-charcoal/70">Showing {results.length} products.</p>
                  </div>
                  <div className="text-sm text-charcoal/60">Catalogue reference only</div>
                </div>
                <div className="mt-6">
                  <ProductGrid products={results} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-bone px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading copy="This is not an ecommerce catalogue. It is a structured overview of the equipment universe DEMERZEL can organize into future product discovery." eyebrow="Equipment Universe" title="From observation to exploration." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map(({ title, copy, icon: Icon }) => (
              <article className="rounded-[1.75rem] border border-ink/10 bg-white p-7 shadow-soft" key={title}>
                <Icon aria-hidden="true" className="text-brand" />
                <h2 className="mt-8 text-3xl font-black text-ink">{title}</h2>
                <p className="mt-4 leading-7 text-charcoal/75">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-navy px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand/80">Optics Ecosystem</p>
              <h2 className="mt-4 text-5xl font-black leading-tight md:text-6xl">Vanrakshak supports the DEMERZEL story.</h2>
              <p className="mt-6 text-lg leading-8 text-white/70">The optics families are presented as part of the DEMERZEL umbrella, not as the entire corporate identity.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {opticsFamilies.map(([title, copy]) => (
                <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6" key={title}>
                  <h3 className="text-2xl font-black text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-white/70">{copy}</p>
                  <div className="mt-4 text-xs uppercase tracking-[0.24em] text-white/50">Catalogue family</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
