import { Activity, Binoculars, Camera, Compass, Crosshair, Flashlight, Map, Moon, Plane, RadioTower } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const categories = [
  ["Navigation", Compass],
  ["Wildlife Monitoring", RadioTower],
  ["Camera Traps", Camera],
  ["Telemetry", Activity],
  ["Thermal Imaging", Crosshair],
  ["Drones", Plane],
  ["Surveying", Map],
  ["Range Finding", Crosshair],
  ["Lighting", Flashlight],
  ["Astronomy", Moon],
  ["Optics", Binoculars]
];

export function FieldTechnology() {
  return (
    <section className="bg-[#e9e2d5] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          copy="These categories are drawn from the source catalogue reference and kept at brand level for this phase."
          eyebrow="Field technology"
          title="A broader equipment universe."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(([label, Icon]) => (
            <div className="flex min-h-24 items-center gap-4 rounded-md border border-ink/10 bg-stone px-5 py-4" key={label as string}>
              <Icon aria-hidden="true" className="text-olive" />
              <span className="font-bold text-ink">{label as string}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
