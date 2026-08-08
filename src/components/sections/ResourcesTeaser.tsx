import { BookOpen, FileText, Library } from "lucide-react";
import { Button } from "../ui/Button";

const resources = [
  ["Catalogues", Library],
  ["Guides", BookOpen],
  ["Technical Resources", FileText]
];

export function ResourcesTeaser() {
  return (
    <section className="bg-[#e9e2d5] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-olive">Resources</p>
            <h2 className="mt-4 max-w-2xl text-5xl font-black leading-tight text-ink md:text-7xl">Technical clarity, before commerce.</h2>
          </div>
          <Button to="/resources" variant="dark">Explore Resources</Button>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {resources.map(([label, Icon]) => (
            <article className="rounded-md border border-ink/10 bg-stone p-7" key={label as string}>
              <Icon aria-hidden="true" className="text-olive" />
              <h3 className="mt-8 text-2xl font-black">{label as string}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
