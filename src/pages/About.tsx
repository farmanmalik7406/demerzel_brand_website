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
      <SEO description="Learn how DEMERZEL Enterprises presents field equipment and optical products, organized by catalogue family and application." title="About DEMERZEL Enterprises | Field Equipment Catalogue" />
      <Hero copy="DEMERZEL presents equipment catalogues and product families for field observation, navigation and outdoor use." eyebrow="About DEMERZEL" image={images.opticsWide} title="Field equipment and optics." />
      <section className="bg-stone px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            copy="DEMERZEL Enterprises is the catalogue-facing reference for optical equipment and field products organized by family and application."
            eyebrow="DEMERZEL"
            title="What DEMERZEL presents."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {["Optical equipment and binoculars", "Product families by application", "Field-use catalogue information"].map((item) => (
              <article className="rounded-md border border-ink/10 bg-white p-7 text-xl font-bold leading-8 text-ink" key={item}>{item}</article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#e9e2d5] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Where we focus" title="Applications supported by the catalogue." />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => <div className="rounded-md bg-stone px-6 py-5 font-bold text-ink" key={solution.slug}>{solution.title}</div>)}
          </div>
        </div>
      </section>
      <FieldPlatform />
      <ContactCTA />
    </>
  );
}
