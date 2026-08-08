import { SEO } from "../components/SEO";
import { ContactCTA } from "../components/sections/ContactCTA";
import { Hero } from "../components/sections/Hero";
import { images } from "../lib/assets";

const brandNotes = [
  ["DEMERZEL", "The umbrella field-technology identity for the corporate website and future platform ecosystem."],
  ["Vanrakshak", "The supplied optics catalogue establishes product families across wildlife, forestry, outdoor and astronomy contexts."],
  ["Catalogue Brands", "Third-party names appearing in catalogue material are treated neutrally as catalogue references unless commercial status is verified."]
];

const neutralBrands = ["Garmin", "Seek Thermal", "Cuddeback", "Hawke", "Celestron", "Swarovski", "Zeiss", "Suunto", "Cammenga"];

export function Brands() {
  return (
    <>
      <SEO description="DEMERZEL brand architecture, Vanrakshak optics context and neutral third-party catalogue brand handling." title="Brands | DEMERZEL Enterprises" />
      <Hero copy="A clear brand architecture for DEMERZEL as the umbrella identity, with Vanrakshak and catalogue references handled carefully." eyebrow="Brands" image={images.opticsWide} title="One field-technology umbrella." />
      <section className="bg-stone px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {brandNotes.map(([title, copy]) => (
            <article className="rounded-md bg-white p-8 shadow-soft" key={title}>
              <h2 className="text-3xl font-black text-ink">{title}</h2>
              <p className="mt-5 leading-8 text-charcoal/72">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-ink px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-field">Catalogue References</p>
          <h2 className="mt-4 max-w-3xl text-5xl font-black leading-tight md:text-7xl">Neutral handling by default.</h2>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/72">Catalogue presence does not equal authorization, dealership, exclusivity or partnership. The site uses source-grounded language until commercial relationships are verified.</p>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {neutralBrands.map((brand) => <div className="rounded-md border border-white/10 bg-white/[0.04] px-5 py-5 font-bold" key={brand}>{brand}</div>)}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
