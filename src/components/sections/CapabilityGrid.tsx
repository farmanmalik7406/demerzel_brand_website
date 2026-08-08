import { ArrowUpRight, Binoculars, Compass, Radar, Telescope } from "lucide-react";
import { images } from "../../lib/assets";

const capabilities = [
  { title: "OBSERVE", icon: Binoculars, image: images.opticsWide, copy: "Optics, imaging and observation technology for field awareness." },
  { title: "NAVIGATE", icon: Compass, image: images.navigation, copy: "Navigation instruments and field equipment for moving with intent." },
  { title: "MONITOR", icon: Radar, image: images.cameraTrap, copy: "Wildlife monitoring, telemetry and camera-trap equipment areas." },
  { title: "EXPLORE", icon: Telescope, image: images.astronomy, copy: "Outdoor, aerial and astronomy equipment for wider discovery." }
];

export function CapabilityGrid() {
  return (
    <section className="bg-stone px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-olive">Built for the field</p>
            <h2 className="mt-4 text-5xl font-black leading-tight text-ink md:text-7xl">Built for the field.</h2>
          </div>
          <p className="max-w-2xl text-xl leading-9 text-charcoal/75">
            DEMERZEL presents field technology across observation, navigation, monitoring and exploration, using catalogue-supported equipment areas as the foundation for future product discovery.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map(({ title, copy, image, icon: Icon }) => (
            <article className="group overflow-hidden rounded-md bg-ink text-white shadow-soft" key={title}>
              <div className="aspect-[4/3] overflow-hidden bg-charcoal">
                <img alt="" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" loading="lazy" src={image} />
              </div>
              <div className="p-6">
                <div className="mb-6 flex items-center justify-between">
                  <Icon aria-hidden="true" className="text-field" />
                  <ArrowUpRight aria-hidden="true" className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-white/68">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
