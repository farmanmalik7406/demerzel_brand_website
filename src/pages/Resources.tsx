import { BookOpen, FileText, Library } from "lucide-react";
import { SEO } from "../components/SEO";
import { ContactCTA } from "../components/sections/ContactCTA";
import { Hero } from "../components/sections/Hero";
import { images } from "../lib/assets";

const resources = [
  { title: "Catalogues", icon: Library, copy: "Supplied catalogue references for product families and equipment areas." },
  { title: "Guides", icon: BookOpen, copy: "Future field and equipment guidance for DEMERZEL visitors." },
  { title: "Technical Resources", icon: FileText, copy: "A place for future datasheets, manuals and technical documents." }
];

export function Resources() {
  return (
    <>
      <SEO description="Browse DEMERZEL catalogue resources, guides and technical references for the current product set." title="Resources | DEMERZEL Enterprises" />
      <Hero copy="A concise resource area for catalogue references, product guidance and technical material." eyebrow="Resources" image={images.opticProduct} title="Technical resources." />
      <section className="bg-stone px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {resources.map(({ title, copy, icon: Icon }) => (
            <article className="rounded-md bg-white p-8 shadow-soft" key={title}>
              <Icon aria-hidden="true" className="text-olive" />
              <h2 className="mt-8 text-3xl font-black text-ink">{title}</h2>
              <p className="mt-4 leading-7 text-charcoal/72">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
