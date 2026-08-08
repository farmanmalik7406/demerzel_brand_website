import { Button } from "../ui/Button";
import { images } from "../../lib/assets";

const families = ["DRISHTI", "TEJAS", "CHAKOR", "RAKSHAK", "VANRAAJ", "NAKSHATRA"];

export function OpticsShowcase() {
  return (
    <section className="bg-stone px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div className="overflow-hidden rounded-md bg-white shadow-soft">
          <img alt="Catalogue imagery for DEMERZEL optics families" className="h-full min-h-[420px] w-full object-cover" loading="lazy" src={images.opticsWide} />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-olive">Vanrakshak optics catalogue</p>
          <h2 className="mt-4 text-5xl font-black leading-tight text-ink md:text-7xl">Precision optics for the field.</h2>
          <p className="mt-6 text-xl leading-9 text-charcoal/75">
            The supplied Vanrakshak catalogue positions DEMERZEL's optics ecosystem around wildlife observation, patrolling, nature observation, outdoor viewing and astronomy.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {families.map((family) => (
              <div className="rounded-md border border-ink/10 bg-white px-4 py-4 text-sm font-black tracking-[0.12em] text-ink" key={family}>{family}</div>
            ))}
          </div>
          <div className="mt-9">
            <Button to="/coming-soon" variant="dark">Explore the optics</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
