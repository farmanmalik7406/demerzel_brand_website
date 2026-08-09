import { Button } from "../ui/Button";

export function ContactCTA() {
  return (
    <section className="bg-charcoal px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-field">Talk to DEMERZEL</p>
        <h2 className="mt-4 text-5xl font-black leading-tight md:text-7xl">Need catalogue clarity?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-white/72">
          Our team helps match product families, application fit and specification details to your operational requirements.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/contact">Request catalogue guidance</Button>
          <Button to="/solutions" variant="secondary">Explore applications</Button>
        </div>
      </div>
    </section>
  );
}
