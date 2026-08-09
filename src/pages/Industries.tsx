import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { ContactCTA } from "../components/sections/ContactCTA";
import { Hero } from "../components/sections/Hero";
import { solutions } from "../data/solutions";
import { images } from "../lib/assets";

export function Industries() {
  return (
    <>
      <SEO description="Browse DEMERZEL application pages for wildlife, forestry, survey, security, research and outdoor observation with catalogue-based product guidance." title="Industries | DEMERZEL Enterprises" />
      <Hero copy="Application pages explain field contexts, catalogue fit, and the operational challenges behind each product grouping." eyebrow="Applications" image={images.fieldBird} title="Field contexts with technical clarity." />
      <section className="bg-stone px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-10 max-w-3xl text-base leading-7 text-charcoal/75">
            Every application page is designed as a catalogue-informed reference: the categories, families and mission language reflect product fit and field use rather than marketing rhetoric.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Link className="rounded-md bg-white p-7 shadow-soft transition hover:-translate-y-1" key={solution.slug} to={`/solutions/${solution.slug}`}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive">{solution.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-black text-ink">{solution.title}</h2>
                <p className="mt-4 leading-7 text-charcoal/72">{solution.description}</p>
                <p className="mt-4 text-sm leading-6 text-charcoal/75">{solution.challenge}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {solution.categories.slice(0, 4).map((category) => <span className="rounded-full bg-stone px-3 py-2 text-sm font-bold text-charcoal" key={category}>{category}</span>)}
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
