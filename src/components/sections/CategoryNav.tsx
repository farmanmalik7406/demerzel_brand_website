import { Link } from "react-router-dom";
import { getCategories } from "../../lib/products";

/**
 * CategoryNav: Lightweight category browsing for homepage
 * 
 * Guides users from featured products to the full catalogue.
 * Does NOT dump the entire product grid on the homepage.
 */
export function CategoryNav() {
  const categories = getCategories();

  return (
    <section className="bg-offwhite px-5 py-16 lg:px-8" aria-labelledby="categories-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">Browse by Category</p>
          <h2 id="categories-heading" className="mt-3 text-4xl font-black text-ink">Equipment organized by type.</h2>
          <p className="mt-4 text-sm leading-7 text-charcoal/75">
            Explore DEMERZEL's equipment catalogue across categories. Use our advanced search and filters to discover the right equipment for your application.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/products?category=${encodeURIComponent(category)}`}
              className="group rounded-lg border border-ink/10 bg-white p-5 transition hover:border-brand hover:shadow-soft"
            >
              <h3 className="font-black text-ink group-hover:text-brand">{category}</h3>
              <p className="mt-2 text-xs text-charcoal/60">Browse {category.toLowerCase()} equipment</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/products" className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-ink hover:bg-brand/90">
            View complete catalogue
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CategoryNav;
