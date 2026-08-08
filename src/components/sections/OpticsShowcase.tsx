import { Button } from "../ui/Button";
import { images } from "../../lib/assets";
import { Reveal } from "../ui/Reveal";

const families = ["DRISHTI", "TEJAS", "CHAKOR", "RAKSHAK", "VANRAAJ", "NAKSHATRA"];

export function OpticsShowcase() {
  return (
    <section className="bg-ink px-5 py-24 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-soft">
          <img alt="Catalogue imagery for DEMERZEL optics families" className="h-full min-h-[520px] w-full object-cover" loading="lazy" src={images.opticsWide} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(17,17,15,0.94))]" />
          <div className="absolute left-6 bottom-6 rounded-full border border-white/20 bg-black/40 px-5 py-3 text-sm uppercase tracking-[0.22em] text-white">Vanrakshak optics</div>
        </Reveal>
        <Reveal className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-field">Precision optics</p>
            <h2 className="mt-4 text-5xl font-black leading-tight text-white md:text-6xl">Advanced observation systems for field missions.</h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              The Vanrakshak catalogue defines DEMERZEL's optics story around wildlife observation, long-range patrol and astronomy. These families sit at the intersection of performance and field intelligence.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {families.map((family) => (
              <div key={family} className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                {family}
              </div>
            ))}
          </div>
          <div>
            <Button to="/products" variant="secondary">Explore the optics ecosystem</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
