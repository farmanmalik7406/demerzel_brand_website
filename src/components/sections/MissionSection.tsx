import { Link } from "react-router-dom";
import { solutions } from "../../data/solutions";
import { SectionHeading } from "../ui/SectionHeading";

export function MissionSection() {
  return (
    <section className="bg-ink px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          copy="DEMERZEL organizes field technology around missions and use cases, without claiming deployments or institutional outcomes."
          eyebrow="Applications"
          light
          title="Technology for demanding environments."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link className="group overflow-hidden rounded-md border border-white/10 bg-white/[0.03]" key={solution.slug} to={`/solutions/${solution.slug}`}>
              <div className="aspect-[16/10] overflow-hidden">
                <img alt="" className="h-full w-full object-cover opacity-72 transition duration-500 group-hover:scale-105 group-hover:opacity-100" loading="lazy" src={solution.image} />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-field">{solution.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-black">{solution.title}</h3>
                <p className="mt-3 leading-7 text-white/68">{solution.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
