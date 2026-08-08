import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const values = [
  ["Field First", "Technology organized around real field requirements and use cases."],
  ["Precision", "Clear technical information and purpose-driven equipment presentation."],
  ["Reliability", "A professional approach to demanding environments."],
  ["Exploration", "Technology that helps people observe, navigate and understand their surroundings."]
];

export function BrandValues() {
  return (
    <section className="bg-ink px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why DEMERZEL" light title="A field-first technology brand." />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, copy]) => (
            <article className="rounded-md border border-white/10 bg-white/[0.04] p-6" key={title}>
              <CheckCircle2 aria-hidden="true" className="text-field" />
              <h3 className="mt-8 text-2xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-white/68">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
