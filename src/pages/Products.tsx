import { Binoculars, Camera, Compass, Crosshair, Flashlight, Map, Moon, Plane, RadioTower, Telescope } from "lucide-react";
import { SEO } from "../components/SEO";
import { ContactCTA } from "../components/sections/ContactCTA";
import { Hero } from "../components/sections/Hero";
import { SectionHeading } from "../components/ui/SectionHeading";
import { images } from "../lib/assets";

const areas = [
  { title: "Optics", icon: Binoculars, copy: "Binocular and observation families including DRISHTI, TEJAS, CHAKOR, RAKSHAK, VANRAAJ and NAKSHATRA." },
  { title: "Navigation", icon: Compass, copy: "Handheld GPS, NAVIC-related navigation products, compasses and field instruments referenced in the catalogue." },
  { title: "Wildlife Monitoring", icon: RadioTower, copy: "Camera traps, GSM wireless camera traps and telemetry equipment areas for monitoring-led field work." },
  { title: "Thermal & Night Vision", icon: Crosshair, copy: "Thermal imaging and digital night vision equipment areas, described only at catalogue-category level here." },
  { title: "Survey & Mapping", icon: Map, copy: "Surveying equipment, range finding and mapping-adjacent field instruments." },
  { title: "Aerial Equipment", icon: Plane, copy: "Drone categories presented as part of the broader field-technology equipment universe." },
  { title: "Lighting", icon: Flashlight, copy: "Search lights, headlamps and field lighting categories for outdoor and operational contexts." },
  { title: "Astronomy", icon: Moon, copy: "Telescopes and NAKSHATRA astronomy optics for sky observation and exploration." },
  { title: "Outdoor Equipment", icon: Telescope, copy: "Multi-tools, outdoor instruments and exploration-focused equipment areas from the broader catalogue." }
];

const opticsFamilies = [
  ["DRISHTI", "Positioned for wildlife professionals, forest guards, birders, patrolling and nature observation."],
  ["TEJAS", "Positioned for nature lovers, wildlife professionals, outdoor enthusiasts, safari, surveillance and long-distance viewing."],
  ["CHAKOR", "Positioned for wildlife, hiking, long-distance viewing, birdwatching, outdoor sports and security surveillance."],
  ["RAKSHAK", "Positioned for forest surveillance, wildlife monitoring, patrol contexts and rugged field operations."],
  ["VANRAAJ", "Positioned for safaris, jungle treks, nature trails, wildlife, birding and challenging terrain."],
  ["NAKSHATRA", "Positioned for astronomy, stargazing and celestial observation."]
];

export function Products() {
  return (
    <>
      <SEO description="Explore DEMERZEL product areas across optics, navigation, wildlife monitoring, surveying, drones, thermal imaging, lighting and astronomy." title="Product Areas | DEMERZEL Enterprises" />
      <Hero copy="A brand-level map of DEMERZEL field-technology categories, grounded in the supplied catalogue references." eyebrow="Products" image={images.opticsWide} title="Field equipment areas." />
      <section className="bg-stone px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading copy="This is not an ecommerce catalogue. It is a structured overview of the equipment universe DEMERZEL can organize into future product discovery." eyebrow="Equipment Universe" title="From observation to exploration." />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {areas.map(({ title, copy, icon: Icon }) => (
              <article className="rounded-md border border-ink/10 bg-white p-7 shadow-soft" key={title}>
                <Icon aria-hidden="true" className="text-olive" />
                <h2 className="mt-8 text-3xl font-black text-ink">{title}</h2>
                <p className="mt-4 leading-7 text-charcoal/72">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ink px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-field">Optics Ecosystem</p>
            <h2 className="mt-4 text-5xl font-black leading-tight md:text-7xl">Vanrakshak supports the DEMERZEL story.</h2>
            <p className="mt-6 text-xl leading-9 text-white/72">The optics families are presented as part of the DEMERZEL umbrella, not as the entire corporate identity.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {opticsFamilies.map(([title, copy]) => (
              <article className="rounded-md border border-white/10 bg-white/[0.04] p-6" key={title}>
                <h3 className="text-2xl font-black text-field">{title}</h3>
                <p className="mt-3 leading-7 text-white/68">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
