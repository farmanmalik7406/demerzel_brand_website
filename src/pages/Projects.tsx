import { ClipboardCheck, FileSearch, MapPinned, Settings } from "lucide-react";
import { SEO } from "../components/SEO";
import { ContactCTA } from "../components/sections/ContactCTA";
import { Hero } from "../components/sections/Hero";
import { images } from "../lib/assets";

const steps = [
  ["Understand the field context", MapPinned, "Start with what needs to be observed, navigated, monitored, mapped or explored."],
  ["Map the equipment areas", FileSearch, "Connect the mission to catalogue-supported categories without inventing specifications."],
  ["Shape a technical approach", Settings, "Use clear language around optics, navigation, monitoring, survey and field equipment."],
  ["Prepare enquiry details", ClipboardCheck, "Gather practical requirements for future quote, support or product-discovery workflows."]
];

export function Projects() {
  return (
    <>
      <SEO description="DEMERZEL project approach for field-equipment enquiries, catalogue mapping and source-grounded technical planning." title="Projects | DEMERZEL Enterprises" />
      <Hero copy="A project page for equipment conversations rooted in the current catalogue and field application context." eyebrow="Projects" image={images.navigation} title="Start with the field problem." />
      <section className="bg-stone px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, Icon, copy]) => (
            <article className="rounded-md bg-white p-7 shadow-soft" key={title as string}>
              <Icon aria-hidden="true" className="text-olive" />
              <h2 className="mt-8 text-2xl font-black text-ink">{title as string}</h2>
              <p className="mt-4 leading-7 text-charcoal/72">{copy as string}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
