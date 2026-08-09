import { SEO } from "../components/SEO";
import { AssetMosaic } from "../components/sections/AssetMosaic";
import { CapabilityNav } from "../components/sections/CapabilityNav";
import { CapabilityStory } from "../components/sections/CapabilityStory";
import { ContactCTA } from "../components/sections/ContactCTA";
import EquipmentDiscovery from "../components/sections/EquipmentDiscovery";
import FeaturedEquipment from "../components/sections/FeaturedEquipment";
import { HomeHero } from "../components/sections/HomeHero";
import { OpticsShowcase } from "../components/sections/OpticsShowcase";
import { images } from "../lib/assets";
import FeaturedBrands from "../components/sections/FeaturedBrands";
import VanrakshakFeature from "../components/sections/VanrakshakFeature";

const capabilities = [
  {
    id: "observe",
    number: "01",
    title: "Observe what matters.",
    copy: "Optics, thermal and camera systems for wildlife, patrol and conservation field work.",
    image: images.fieldBird,
    chips: ["Optics", "Camera traps", "Night vision", "Telemetry"]
  },
  {
    id: "navigate",
    number: "02",
    title: "Navigate with confidence.",
    copy: "GPS, compass and navigation technologies framed for terrain, patrol and mapping workflows.",
    image: images.navigation,
    chips: ["GPS", "Navigation", "Range finding", "Field instruments"],
    dark: true
  },
  {
    id: "monitor",
    number: "03",
    title: "Monitor activity and conditions.",
    copy: "Observation, telemetry and remote monitoring for wildlife, survey and security contexts.",
    image: images.cameraTrap,
    chips: ["Telemetry", "Camera traps", "Monitoring", "Sensors"]
  },
  {
    id: "explore",
    number: "04",
    title: "Explore further missions.",
    copy: "A broader narrative for aerial, survey, astronomy and expedition field equipment.",
    image: images.astronomy,
    chips: ["Survey", "Aerial", "Astronomy", "Outdoor"],
    dark: true
  }
];

export function Home() {
  return (
    <>
      <SEO description="DEMERZEL Enterprises blends field technology, precision optics and mission-focused equipment storytelling." title="DEMERZEL Enterprises | Technology for the Field" />
      <HomeHero image={images.hero} />

      <section className="bg-bone px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal/70">01 / DEMERZEL</p>
              <h2 className="mt-3 text-4xl font-black text-ink">Field technology across observation, navigation and measurement.</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-charcoal/75">Catalogue-sourced products and solutions for wildlife monitoring, surveying, aerial systems and specialised field equipment.</p>
            </div>
            <div className="rounded-[1.25rem] border border-ink/10 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">How the catalogue is organised</p>
              <p className="mt-4 text-sm text-charcoal/75">Browse by product family, brand, application and technical specifications drawn from the canonical catalogue files.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-navy px-5 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand/80">The field</p>
            <h2 className="mt-4 text-5xl font-black leading-tight md:text-6xl">Where equipment and environment intersect.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { title: "Wildlife & conservation", copy: "Observation and monitoring for patrols, reserves and large-scale habitat work." },
              { title: "Survey & mapping", copy: "Positioning, range finding and field instruments for site, terrain and asset planning." },
              { title: "Security & patrol", copy: "Long-range optics, lighting and awareness for discreet field operations." }
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <h3 className="text-2xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-offwhite px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-ink/10 bg-white p-10 shadow-soft">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">Technical ecosystem</p>
                <h2 className="mt-4 text-5xl font-black leading-tight text-ink md:text-6xl">Categories that shape the field story.</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/75">
                  DEMERZEL connects optics, navigation, monitoring, survey and exploration categories into a coherent field platform.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Optics",
                  "Navigation",
                  "Monitoring",
                  "Thermal",
                  "Survey",
                  "Astronomy",
                  "Aerial",
                  "Field instruments"
                ].map((item) => (
                  <span key={item} className="rounded-full border border-ink/10 bg-ink/5 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-bone px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CapabilityNav items={capabilities.map((capability) => ({ id: capability.id, label: capability.title }))} />
          <div className="mt-16 space-y-24">
            {capabilities.map((item, index) => (
              <CapabilityStory key={item.id} {...item} reverse={index % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>
      <OpticsShowcase />
      <FeaturedEquipment />
      <EquipmentDiscovery />
      <FeaturedBrands />
      <VanrakshakFeature />
      <section className="bg-offwhite px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">Applications</p>
            <h2 className="mt-3 text-3xl font-black text-ink">Field scenarios and solutions</h2>
            <p className="mt-3 text-sm text-charcoal/75">Explore application-led discovery routes and related catalogue products.</p>
          </div>
          {/* Solutions list is rendered by a simple map to keep editorial rhythm */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Solutions will be populated from the solutions data on client side via existing components where available */}
          </div>
        </div>
      </section>
      <section className="bg-navy px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand/80">DEMERZEL FIELD</p>
            <h2 className="mt-4 text-5xl font-black leading-tight md:text-6xl">A platform direction for equipment and mission workflows.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              The brand story extends beyond optics. DEMERZEL FIELD captures equipment, observations, mapping and support as a future field-technology ecosystem.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Equipment tracking",
                "Mission planning",
                "Operational observation",
                "Technical records"
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 px-6 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-soft">
            <img className="h-full w-full object-cover object-center" src={images.telescope} alt="Field equipment perspective" loading="lazy" />
          </div>
        </div>
      </section>
      <AssetMosaic />
      <ContactCTA />
    </>
  );
}
