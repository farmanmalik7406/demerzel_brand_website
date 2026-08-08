import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { ContactCTA } from "../components/sections/ContactCTA";
import { Hero } from "../components/sections/Hero";
import { solutions } from "../data/solutions";
import { images } from "../lib/assets";

export function Solutions() {
  return (
    <>
      <SEO description="Explore DEMERZEL field-technology solution areas for wildlife, forestry, survey and mapping, security, research and outdoor exploration." title="Solutions | DEMERZEL Enterprises" />
      <Hero copy="Explore brand-level field-technology applications before the future product catalogue phase." eyebrow="Solutions" image={images.astronomy} title="Equipment organized by mission." />
      <section className="bg-stone px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link className="group overflow-hidden rounded-md bg-white shadow-soft" key={solution.slug} to={`/solutions/${solution.slug}`}>
              <div className="aspect-[16/10] overflow-hidden">
                <img alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" src={solution.image} />
              </div>
              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive">{solution.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-black text-ink">{solution.title}</h2>
                <p className="mt-4 leading-7 text-charcoal/72">{solution.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
