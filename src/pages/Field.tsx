import { BarChart3, FileText, Map, PackageCheck, Route, Wrench } from "lucide-react";
import { SEO } from "../components/SEO";
import { ContactCTA } from "../components/sections/ContactCTA";
import { Hero } from "../components/sections/Hero";
import { images } from "../lib/assets";

const modules = [
  ["Equipment", PackageCheck, "A direction for organizing field equipment records and technical documents."],
  ["Observations", BarChart3, "A direction for recording field observations and operational notes."],
  ["Mapping", Map, "A direction for waypoints, tracks and map-centered field context."],
  ["Reports", FileText, "A direction for turning field activity into structured reports."],
  ["Service", Wrench, "A direction for service, support and equipment lifecycle workflows."],
  ["Routes", Route, "A direction for connecting navigation and field movement with project context."]
];

export function Field() {
  return (
    <>
      <SEO description="DEMERZEL FIELD platform direction for equipment, observations, mapping, reports and service workflows." title="DEMERZEL FIELD | Platform Direction" />
      <Hero copy="Your equipment. Your field. One platform direction for field operations, equipment, observations, mapping, reports and service." eyebrow="DEMERZEL FIELD" image={images.astronomy} title="The field ecosystem." />
      <section className="bg-stone px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map(([title, Icon, copy]) => (
            <article className="rounded-md bg-white p-7 shadow-soft" key={title as string}>
              <Icon aria-hidden="true" className="text-olive" />
              <h2 className="mt-8 text-3xl font-black text-ink">{title as string}</h2>
              <p className="mt-4 leading-7 text-charcoal/72">{copy as string}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
