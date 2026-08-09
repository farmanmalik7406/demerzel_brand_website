import { MapPinned } from "lucide-react";
import { Button } from "../ui/Button";

export function FieldPlatform() {
  return (
    <section className="bg-forest px-5 py-24 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div className="rounded-md border border-white/15 bg-white/[0.04] p-8">
          <p className="inline-flex rounded-full border border-field/40 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-field">Platform Direction</p>
          <MapPinned aria-hidden="true" className="mt-12 h-16 w-16 text-field" />
          <h2 className="mt-8 text-5xl font-black leading-tight md:text-7xl">DEMERZEL FIELD</h2>
        </div>
        <div>
          <p className="text-3xl font-black leading-tight md:text-5xl">Your equipment. Your field. One platform.</p>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-white/72">
            A platform direction for organizing field equipment, observations and operational context around the current catalogue.
          </p>
          <div className="mt-9">
            <Button to="/field">Explore DEMERZEL FIELD</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
