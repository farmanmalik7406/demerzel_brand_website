import { Link } from "react-router-dom";

type HomeHeroProps = { image: string };

export function HomeHero({ image }: HomeHeroProps) {
  return (
    <section className="relative min-h-[84vh] overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <img
          className="h-full w-full object-cover object-center md:object-left opacity-95"
          src={image}
          alt="DEMERZEL field technology"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/55 to-transparent" aria-hidden="true" />
      </div>

      <div className="relative mx-auto flex min-h-[84vh] max-w-7xl items-end px-5 pb-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand/90">DEMERZEL / FIELD TECHNOLOGY</p>
          <h1 className="mt-3 text-5xl font-black leading-tight sm:text-6xl md:text-7xl">FIELD<br className="hidden md:inline" />TECHNOLOGY.<span className="block">BUILT FOR THE FIELD.</span></h1>
          <p className="mt-6 text-lg leading-7 text-white/80">A focused catalogue of observation, navigation, monitoring and measurement equipment — editorially presented for mission-first decision making.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/products" className="inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition hover:bg-brand/90">EXPLORE CATALOGUE →</Link>
            <Link to="/solutions" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/6">EXPLORE APPLICATIONS →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
