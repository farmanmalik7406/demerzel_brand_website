import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts, getPreferredSpecs, getProductCopy, getProductPath, formatSpecValue } from "../../lib/products";
import { Reveal } from "../ui/Reveal";

export function FeaturedEquipment() {
  const products = getFeaturedProducts(6);
  const hero = products[0];
  const supporting = products.slice(1);

  if (!hero) return null;

  return (
    <section className="bg-ink px-5 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-field">Featured equipment</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">Representative optics from the current catalogue.</h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-white/68">
            The featured items below reflect the stronger product imagery, fuller specifications and family coverage in the current catalogue.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
            <Link to={getProductPath(hero)} className="grid min-h-full gap-0 md:grid-cols-[1.05fr_.95fr]">
              <div className="relative min-h-[380px] overflow-hidden bg-white/5">
                <img
                  src={hero.images[0]?.url}
                  alt={`${hero.name} - Vanrakshak ${hero.series} binocular for field observation and wildlife monitoring`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035] group-hover:object-[52%_48%]"
                  loading="lazy"
                />
                <div className="absolute left-5 top-5 bg-ink/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">{hero.series}</div>
              </div>
              <div className="flex flex-col justify-between p-7 md:p-9">
                <div>
                  <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                    <span>{hero.brand}</span>
                    <span>{hero.category}</span>
                  </div>
                  <h3 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">{hero.name}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/70">{getProductCopy(hero)}</p>
                </div>
                <div>
                  <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4 border-y border-white/10 py-5">
                    {getPreferredSpecs(hero, 4).map((specification) => (
                      <div key={specification.key}>
                        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/45">{specification.label}</div>
                        <div className="mt-1 text-lg font-black text-white">{formatSpecValue(specification)}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-field">
                    Explore {hero.series} details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {supporting.slice(0, 3).map((product, index) => (
              <Reveal key={product.id} className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]" style={{ transitionDelay: `${index * 70}ms` }}>
                <Link to={getProductPath(product)} className="grid h-full grid-cols-[132px_1fr]">
                  <div className="overflow-hidden bg-white/5">
                    <img src={product.images[0]?.url} alt={product.images[0]?.alt || product.name} className="h-full min-h-[180px] w-full object-cover transition duration-700 group-hover:scale-[1.04]" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/45">{product.brand} / {product.series}</div>
                    <h3 className="mt-3 text-xl font-black leading-tight text-white">{product.name}</h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/65">{getProductCopy(product)}</p>
                    <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-field">
                      View {product.series} details <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {supporting.slice(3).map((product) => (
            <Reveal key={product.id} className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
              <Link to={getProductPath(product)} className="grid gap-0 sm:grid-cols-[.92fr_1.08fr]">
                <div className="relative min-h-[240px] overflow-hidden bg-white/5">
                  <img src={product.images[0]?.url} alt={product.images[0]?.alt || product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" loading="lazy" />
                </div>
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <div className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/45">{product.brand} / {product.series}</div>
                    <h3 className="mt-3 text-2xl font-black leading-tight text-white">{product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">{getProductCopy(product)}</p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-field">
                    Explore product <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedEquipment;
