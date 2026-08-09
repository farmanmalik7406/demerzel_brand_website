import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { ContactCTA } from "../components/sections/ContactCTA";
import CategoryNav from "../components/sections/CategoryNav";
import FeaturedEquipment from "../components/sections/FeaturedEquipment";
import FeaturedBrands from "../components/sections/FeaturedBrands";
import { HomeHero } from "../components/sections/HomeHero";
import { solutions } from "../data/solutions";
import { images } from "../lib/assets";
import { getAllProducts, getApplications, getBrands, getCategories } from "../lib/products";

function HomeApplications() {
  // Limit to 5 applications for homepage - full list is on /solutions
  const featured = solutions.slice(0, 5);

  return (
    <section className="bg-offwhite px-5 py-16 lg:px-8" aria-labelledby="applications-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">Applications</p>
          <h2 id="applications-heading" className="mt-3 text-4xl font-black text-ink">Equipment solutions by use case.</h2>
          <p className="mt-4 text-sm leading-7 text-charcoal/75">
            Discover how DEMERZEL's equipment supports specific field applications: wildlife observation, forestry operations, survey and mapping, research, security monitoring and outdoor exploration.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((solution) => (
            <article key={solution.slug} className="rounded-lg border border-ink/10 bg-white p-6 transition hover:shadow-soft">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal/55">{solution.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-ink">{solution.title}</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">{solution.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {solution.categories.slice(0, 3).map((category) => (
                  <span key={category} className="border border-ink/10 bg-bone px-2.5 py-1 text-xs font-semibold text-charcoal/70">{category}</span>
                ))}
              </div>
              <Link to={`/solutions/${solution.slug}`} className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.14em] text-brand hover:text-brand/80">
                View {solution.title} equipment →
              </Link>
            </article>
          ))}
        </div>

        {solutions.length > 5 && (
          <div className="mt-8 text-center">
            <Link to="/solutions" className="inline-flex text-sm font-bold uppercase tracking-[0.14em] text-brand hover:text-brand/80">
              View all applications →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function Home() {
  const productCount = getAllProducts().length;
  const categories = getCategories();
  const brands = getBrands();
  const applications = getApplications();
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "DEMERZEL Enterprises",
      url: window.location.origin,
      description: "Specialist field technology and optical equipment from Vanrakshak, organized by application and technical specification."
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "DEMERZEL Enterprises",
      url: window.location.origin
    }
  ];

  return (
    <>
      <SEO
        title="DEMERZEL Enterprises | Field Technology & Equipment"
        description="Explore DEMERZEL for specialist optical equipment and binoculars from Vanrakshak. Curated by application, technical specifications and field use case."
        image={images.hero}
        structuredData={structuredData}
      />
      <HomeHero image={images.hero} />

      <section className="bg-bone px-5 py-16 lg:px-8" aria-labelledby="brand-positioning-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal/70">About DEMERZEL</p>
              <h2 id="brand-positioning-heading" className="mt-3 text-4xl font-black leading-tight text-ink">
                Specialist field technology and equipment.
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-charcoal/75">
                DEMERZEL provides optical equipment and binoculars organized by product family, application and technical specification. Current catalogue focus: Vanrakshak optical systems for wildlife observation, field work and outdoor exploration.
              </p>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Catalogue Signals</p>
              <dl className="mt-5 grid gap-4">
                <div className="flex items-center justify-between border-b border-ink/10 pb-3">
                  <dt className="text-sm text-charcoal/70">Products</dt>
                  <dd className="text-lg font-black text-ink">{productCount}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-ink/10 pb-3">
                  <dt className="text-sm text-charcoal/70">Categories</dt>
                  <dd className="text-lg font-black text-ink">{categories.length}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-charcoal/70">Applications</dt>
                  <dd className="text-lg font-black text-ink">{applications.length}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <FeaturedEquipment />
      <CategoryNav />
      <FeaturedBrands />
      <HomeApplications />

      <section className="bg-navy px-5 py-20 text-white lg:px-8" aria-labelledby="catalogue-heading">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand/80">Complete Catalogue</p>
            <h2 id="catalogue-heading" className="mt-4 text-5xl font-black leading-tight md:text-6xl">Browse all products and specifications.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Explore {productCount} equipment items across {brands.length} brand{brands.length === 1 ? "" : "s"}, with detailed specifications, technical data and application information to support your equipment selection.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/products" className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-ink hover:bg-brand/90">
                Explore products →
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white hover:bg-white/5">
                Contact DEMERZEL →
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <img className="h-full min-h-[360px] w-full object-cover object-center" src={images.telescope} alt="Catalogue image of field optics and exploration equipment" loading="lazy" />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
