import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories, getApplications, getBrands } from "../../lib/products";
import { images } from "../../lib/assets";

export function ProductsMegaMenu() {
  const categories = getCategories();
  const applications = getApplications();
  const brands = getBrands();
  const [heroImg, setHeroImg] = useState(images.opticsWide);

  const categoryImageMap: Record<string, string> = useMemo(() => ({
    Optics: images.opticsWide,
    Navigation: images.navigation,
    Monitoring: images.cameraTrap,
    Survey: images.survey,
    Astronomy: images.astronomy,
    Aerial: images.drone
  }), []);

  return (
    <div
      className="absolute left-0 top-full z-50 w-screen border-t border-white/10 bg-navy/95 text-white shadow-2xl"
      style={{ backgroundColor: "#081026" }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-10 px-5 py-10 lg:px-8">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/80">By Category</h4>
          <ul className="mt-5 space-y-3">
            {categories.map((c) => (
              <li key={c}>
                <Link
                  to={`/products?category=${encodeURIComponent(c.toLowerCase())}`}
                  onMouseEnter={() => setHeroImg(categoryImageMap[c] ?? images.opticsWide)}
                  onFocus={() => setHeroImg(categoryImageMap[c] ?? images.opticsWide)}
                  className="text-sm leading-7 text-white/85 transition hover:text-white"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/80">By Application</h4>
          <ul className="mt-5 space-y-3">
            {applications.map((a) => (
              <li key={a}>
                <Link
                  to={`/products?application=${encodeURIComponent(a.toLowerCase())}`}
                  onMouseEnter={() => setHeroImg(categoryImageMap[a] ?? images.opticsWide)}
                  onFocus={() => setHeroImg(categoryImageMap[a] ?? images.opticsWide)}
                  className="text-sm leading-7 text-white/85 transition hover:text-white"
                >
                  {a}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 hidden lg:block">
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/80">Featured Brands</h4>
          <ul className="mt-5 space-y-3">
            {brands.map((b) => (
              <li key={b}>
                <Link
                  to={`/brands/${b.toLowerCase()}`}
                  onMouseEnter={() => setHeroImg(images.opticsWide)}
                  onFocus={() => setHeroImg(images.opticsWide)}
                  className="text-sm leading-7 text-white/85 transition hover:text-white"
                >
                  {b}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-3 mt-6 lg:col-span-1 lg:col-start-3">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-soft">
            <img src={heroImg} alt="Featured category" className="h-44 w-full object-cover object-center" />
          </div>
          <div className="mt-4 text-right">
            <Link to="/products" className="text-sm font-semibold text-brand">VIEW CATALOGUE →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsMegaMenu;
