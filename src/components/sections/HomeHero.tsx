import { Link } from "react-router-dom";
import { images } from "../../lib/assets";

type HomeHeroProps = { image: string };

export function HomeHero({ image }: HomeHeroProps) {
  return (
    <section className="relative min-h-[84vh] overflow-hidden text-white" aria-labelledby="hero-heading">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover object-left brightness-105 contrast-105 md:object-[15%_50%]"
          src={image}
          srcSet={`${image} 1600w, ${images.hero_alt} 900w`}
          sizes="(min-width: 1024px) 1200px, (min-width: 640px) 900px, 390px"
          alt="Vanrakshak VANRAAJ ED binocular for field observation and wildlife monitoring"
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand/90">DEMERZEL ENTERPRISES / FIELD TECHNOLOGY</p>
          <h1 id="hero-heading" className="mt-3 text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Specialist field technology and equipment.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
            DEMERZEL Enterprises presents catalogue-sourced optical equipment, observation tools, navigation products and field systems for practical outdoor and technical work.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/products" className="inline-flex w-full max-w-[320px] items-center justify-center gap-3 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition hover:bg-brand/90 sm:w-auto">
              EXPLORE PRODUCTS -&gt;
            </Link>
            <Link to="/solutions" className="inline-flex w-full max-w-[320px] items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/6 sm:w-auto">
              EXPLORE APPLICATIONS -&gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
