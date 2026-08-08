import { images } from "../../lib/assets";

export function StorySection() {
  return (
    <section className="grid bg-stone lg:grid-cols-2">
      <div className="min-h-[560px] overflow-hidden">
        <img alt="" className="h-full w-full object-cover" loading="lazy" src={images.fieldBird} />
      </div>
      <div className="flex items-center px-5 py-20 lg:px-16">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-olive">Brand Campaign</p>
          <h2 className="mt-5 text-6xl font-black leading-none text-ink md:text-8xl">
            Observe.<br />Navigate.<br />Protect.<br />Explore.
          </h2>
          <p className="mt-8 text-xl leading-9 text-charcoal/72">
            A field-technology umbrella for optics, navigation, monitoring, surveying, security and exploration equipment areas supported by the supplied catalogues.
          </p>
        </div>
      </div>
    </section>
  );
}
