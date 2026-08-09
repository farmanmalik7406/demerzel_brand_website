import { SEO } from "../components/SEO";
import { ContactCTA } from "../components/sections/ContactCTA";
import { FieldPlatform } from "../components/sections/FieldPlatform";
import { Hero } from "../components/sections/Hero";
import { SectionHeading } from "../components/ui/SectionHeading";
import { solutions } from "../data/solutions";
import { images } from "../lib/assets";

export function About() {
  return (
    <>
      <SEO description="DEMERZEL Enterprises curates field equipment catalogue brands and optics product families for operational use, organized by application, specification and catalogue source." title="About DEMERZEL Enterprises | Catalogue Strategy for Field Equipment" />
      <Hero copy="Positioning catalogue products for field observation, navigation and outdoor operations." eyebrow="About DEMERZEL" image={images.opticsWide} title="Catalogue strategy for field equipment." />
      <section className="bg-stone px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            copy="DEMERZEL organizes catalogue brands and product families around the real needs of field professionals. We keep product positioning grounded in source catalogue data, clear application fit and disciplined technical language."
            eyebrow="DEMERZEL"
            title="A strategic catalogue perspective."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              "Catalogue-first product positioning",
              "Application-led family discovery",
              "Verified technical clarity over generic claims"
            ].map((item) => (
              <article className="rounded-md border border-ink/10 bg-white p-7 text-xl font-bold leading-8 text-ink" key={item}>{item}</article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#e9e2d5] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Where we focus" title="Catalogue applications and product context." />
          <p className="mt-4 max-w-3xl text-sm leading-7 text-charcoal/75">
            The DEMERZEL catalogue is presented as a practical reference for observation, patrol, survey, security, research and outdoor exploration. Each application area is grounded in the current source material and the families it supports.
          </p>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div key={solution.slug} className="rounded-md bg-stone px-6 py-5">
                <h3 className="text-lg font-bold text-ink">{solution.title}</h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/75">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="How we work" title="DEMERZEL's brand strategy for the catalogue." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-ink/10 bg-bone p-8">
              <h3 className="text-xl font-black text-ink">Curate, don’t create</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">We present catalogue products and brands as sourced material, not proprietary promises, so the site stays honest and useful.</p>
            </article>
            <article className="rounded-3xl border border-ink/10 bg-bone p-8">
              <h3 className="text-xl font-black text-ink">Organize by mission</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">Products are grouped by field application and family, making it easier for buyers and technical audiences to compare options.</p>
            </article>
            <article className="rounded-3xl border border-ink/10 bg-bone p-8">
              <h3 className="text-xl font-black text-ink">Signal catalogue trust</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">Every product page, family and comparison path emphasizes source data and verification status, not speculative marketing claims.</p>
            </article>
          </div>
        </div>
      </section>
      <FieldPlatform />
      <ContactCTA />
    </>
  );
}
