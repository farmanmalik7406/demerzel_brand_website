import { Button } from "../ui/Button";

export function ContactCTA() {
  return (
    <section className="bg-charcoal px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-field">Contact DEMERZEL</p>
        <h2 className="mt-4 text-5xl font-black leading-tight md:text-7xl">Need help selecting equipment?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-white/72">Tell us about your field work, observation needs or technical requirements and we'll help you find the right equipment.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/contact">Contact DEMERZEL</Button>
          <Button to="/solutions" variant="secondary">Explore Applications</Button>
        </div>
      </div>
    </section>
  );
}
