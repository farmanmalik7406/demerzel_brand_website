import { Link } from "react-router-dom";

type HomeHeroProps = { image: string };

export function HomeHero({ image }: HomeHeroProps) {
  return (
    <section className="relative min-h-[84vh] overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 -z-10">
        <img className="h-full w-full object-cover object-center opacity-90" src={image} alt="DEMERZEL field technology" loading="eager" />
        <div className="absolute inset-0 bg-navy/65" />
      </div>
      <div className="relative mx-auto flex min-h-[84vh] max-w-7xl items-end px-5 pb-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand/80">FIELD TECHNOLOGY</p>
          <h1 className="mt-3 text-5xl font-black leading-tight lg:text-6xl">FIELD TECHNOLOGY.<br className="hidden lg:inline" /> BUILT FOR THE FIELD.</h1>
          <p className="mt-6 text-lg leading-7 text-white/75">A focused catalogue of observation, navigation, monitoring and measurement equipment drawn from the DEMERZEL product set.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/products" className="inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition hover:bg-brand/90">EXPLORE CATALOGUE →</Link>
            <Link to="/solutions" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/6">EXPLORE APPLICATIONS →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
