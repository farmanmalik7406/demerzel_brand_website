import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { ContactCTA } from "../components/sections/ContactCTA";
import { Hero } from "../components/sections/Hero";
import { solutions } from "../data/solutions";
import { images } from "../lib/assets";

export function Solutions() {
  return (
    <>
      <SEO description="Explore catalogue-supported applications grouped by mission, category and product family." title="Solutions | DEMERZEL Enterprises" />
      <Hero copy="Browse catalogue-supported applications grouped by mission, category and product family." eyebrow="Applications" image={images.astronomy} title="Equipment by application." />
      <section className="bg-stone px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-10 max-w-3xl text-base leading-7 text-charcoal/75">
            These application cards make the catalogue easier to scan: each page links the relevant field context to the categories and product families that are most meaningful for that mission.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link className="group overflow-hidden rounded-md bg-white shadow-soft" key={solution.slug} to={`/solutions/${solution.slug}`}>
              <div className="aspect-[16/10] overflow-hidden">
                <img alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" src={solution.image} />
              </div>
              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive">{solution.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-black text-ink">{solution.title}</h2>
                <p className="mt-4 leading-7 text-charcoal/72">{solution.description}</p>
                <p className="mt-4 text-sm leading-6 text-charcoal/75">{solution.challenge}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {solution.categories.slice(0, 3).map((category) => <span className="rounded-full bg-stone px-3 py-2 text-sm font-bold text-charcoal" key={category}>{category}</span>)}
                </div>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
