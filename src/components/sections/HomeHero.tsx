import { Button } from "../ui/Button";

type HomeHeroProps = {
  image: string;
};

export function HomeHero({ image }: HomeHeroProps) {
  return (
    <section className="relative min-h-[96vh] overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 -z-20">
        <img className="h-full w-full object-cover object-center" src={image} alt="DEMERZEL field technology" loading="eager" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,15,0.18),rgba(17,17,15,0.8))]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="relative mx-auto flex min-h-[96vh] max-w-7xl flex-col justify-end px-5 pb-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-field">Field technology</p>
          <div className="space-y-3">
            <p className="text-5xl font-black uppercase leading-[0.9] tracking-[0.15em] text-white/80 sm:text-6xl md:text-7xl lg:text-8xl">DEMERZEL</p>
            <p className="text-5xl font-black uppercase leading-[0.8] tracking-[0.15em] text-white sm:text-6xl md:text-7xl lg:text-8xl">Technology</p>
            <p className="text-5xl font-black uppercase leading-[0.8] tracking-[0.15em] text-white sm:text-6xl md:text-7xl lg:text-8xl">for the field.</p>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
            Precision equipment and mission-focused workflows for observation, navigation, monitoring and exploration in demanding field environments.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button to="/solutions">Explore Capabilities</Button>
            <Button to="/contact" variant="secondary">Talk to DEMERZEL</Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 left-1/2 z-10 w-full -translate-x-1/2 text-center text-sm uppercase tracking-[0.26em] text-white/70">
        <span>Scroll to explore</span>
        <div className="mt-3 flex justify-center">
          <span className="h-10 w-10 animate-bounce rounded-full border border-white/50" />
        </div>
      </div>
    </section>
  );
}
