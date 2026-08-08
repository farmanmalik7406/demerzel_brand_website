import { Reveal } from "../ui/Reveal";

export function AssetMosaic() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal as="div" className="grid gap-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-soft">
              <img className="h-full w-full object-cover" src="/assets/catalogue-pages/vanrakshak/vanrakshak-page-07.jpg" alt="Vanrakshak optics storytelling" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_28%)]" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <img className="h-full w-full object-cover" src="/assets/product-images/as_creations/as_creations-p05-img08.png" alt="Field equipment close-up" loading="lazy" />
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <img className="h-full w-full object-cover" src="/assets/product-images/vanrakshak/vanrakshak-p04-img08.png" alt="Optics and field detail" loading="lazy" />
              </div>
            </div>
          </Reveal>
          <Reveal as="div" className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <img className="h-full w-full object-cover" src="/assets/product-images/as_creations/as_creations-p01-img13.png" alt="Aerial and exploration imagery" loading="lazy" />
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-field">Asset mosaic</p>
            <p className="mt-4 text-3xl font-black leading-tight text-white">A visual map of equipment, observation and field operations.</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-field">Technical story</p>
            <p className="mt-4 leading-8 text-white/75">Imagery supports optics, survey, monitoring and exploration without diluting the narrative with pointless product listings.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
