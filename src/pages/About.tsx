import { SEO } from "../components/SEO";
import { ContactCTA } from "../components/sections/ContactCTA";
import { FieldComingSoon } from "../components/sections/FieldComingSoon";
import { Hero } from "../components/sections/Hero";
import { SectionHeading } from "../components/ui/SectionHeading";
import { solutions } from "../data/solutions";
import { images } from "../lib/assets";

export function About() {
  return (
    <>
      <SEO description="Learn how DEMERZEL Enterprises presents field technology, professional equipment areas and the future DEMERZEL FIELD direction." title="About DEMERZEL Enterprises | Built for the Field" />
      <Hero copy="A professional field-technology company identity for observation, navigation, monitoring and exploration." eyebrow="About DEMERZEL" image={images.opticsWide} title="Built for the field." />
      <section className="bg-stone px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            copy="DEMERZEL Enterprises is presented as the umbrella identity for field technology across optics, navigation, wildlife monitoring, surveying, security, research and outdoor exploration equipment areas."
            eyebrow="DEMERZEL"
            title="Who we are."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {["Field technology and professional equipment", "Precision, field awareness and clear information", "A future ecosystem connected by DEMERZEL FIELD"].map((item) => (
              <article className="rounded-md border border-ink/10 bg-white p-7 text-xl font-bold leading-8 text-ink" key={item}>{item}</article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#e9e2d5] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Where we focus" title="Field contexts, not fabricated credentials." />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => <div className="rounded-md bg-stone px-6 py-5 font-bold text-ink" key={solution.slug}>{solution.title}</div>)}
          </div>
        </div>
      </section>
      <FieldComingSoon />
      <ContactCTA />
    </>
  );
}
