import { Navigate, useParams } from "react-router-dom";
import { SEO } from "../components/SEO";
import { ContactCTA } from "../components/sections/ContactCTA";
import { Hero } from "../components/sections/Hero";
import { FieldTechnology } from "../components/sections/FieldTechnology";
import { findSolution } from "../data/solutions";

export function SolutionDetail() {
  const { slug } = useParams();
  const solution = findSolution(slug);

  if (!solution) {
    return <Navigate replace to="/solutions" />;
  }

  return (
    <>
      <SEO description={`${solution.title} application context from DEMERZEL Enterprises, based on the current catalogue categories and product families.`} title={`${solution.title} | DEMERZEL Enterprises`} />
      <Hero copy={solution.description} eyebrow={solution.eyebrow} image={solution.image} title={solution.title} />
      <section className="bg-stone px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-olive">Mission</p>
            <h2 className="mt-4 text-5xl font-black leading-tight text-ink">Application context.</h2>
            <p className="mt-6 text-xl leading-9 text-charcoal/75">{solution.challenge}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Panel title="Technology Categories" items={solution.categories} />
            <Panel title="DEMERZEL Capabilities" items={solution.capabilities} />
            <Panel title="Relevant Catalogue Families" items={solution.families} />
            <Panel title="Brand Position" items={["Observe", "Navigate", "Protect", "Explore"]} />
          </div>
        </div>
      </section>
      <section className="bg-ink px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <img alt="" className="min-h-[420px] rounded-md object-cover shadow-soft" loading="lazy" src={solution.image} />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-field">Visual storytelling</p>
            <h2 className="mt-4 text-5xl font-black leading-tight">A clear view of the application area.</h2>
            <p className="mt-6 text-xl leading-9 text-white/70">
              This page groups products and families by application using terminology from the current catalogue.
            </p>
          </div>
        </div>
      </section>
      <FieldTechnology />
      <ContactCTA />
    </>
  );
}

function Panel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-md border border-ink/10 bg-white p-7">
      <h3 className="text-xl font-black text-ink">{title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => <span className="rounded-full bg-stone px-3 py-2 text-sm font-bold text-charcoal" key={item}>{item}</span>)}
      </div>
    </article>
  );
}
