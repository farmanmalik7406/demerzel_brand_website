import { Link } from "react-router-dom";
import { images } from "../../lib/assets";

type HomeHeroProps = { image: string };

export function HomeHero({ image }: HomeHeroProps) {
  return (
    <section className="relative min-h-[84vh] overflow-hidden text-white">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover object-left md:object-[15%_50%] filter contrast-105 brightness-105"
          src={image}
          srcSet={`${image} 1600w, ${images.hero_alt} 900w`}
          sizes="(min-width: 1024px) 1200px, (min-width: 640px) 900px, 390px"
          alt="DEMERZEL field technology"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(11,29,52,0.24) 0%, rgba(11,29,52,0.22) 20%, rgba(11,29,52,0.44) 65%, rgba(11,29,52,0.60) 100%)" }}
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex min-h-[84vh] max-w-7xl items-end px-5 pb-12 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand/90">DEMERZEL / FIELD TECHNOLOGY</p>
          <h1 className="mt-3 font-black leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block">FIELD</span>
            <span className="block">TECHNOLOGY.</span>
            <span className="block text-2xl md:text-3xl">BUILT FOR THE FIELD.</span>
          </h1>
          <p className="mt-4 text-base md:text-lg leading-7 text-white/85 max-w-2xl">A focused catalogue of observation, navigation, monitoring and measurement equipment — editorially presented for mission-first decision making.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/products" className="w-full sm:w-auto inline-flex justify-center items-center gap-3 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition hover:bg-brand/90 max-w-[320px]">EXPLORE CATALOGUE →</Link>
            <Link to="/solutions" className="w-full sm:w-auto inline-flex justify-center items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/6 max-w-[320px]">EXPLORE APPLICATIONS →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
