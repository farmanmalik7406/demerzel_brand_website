import { Button } from "../ui/Button";

type HeroProps = {
  title: string;
  copy: string;
  image: string;
  eyebrow?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
};

export function Hero({ title, copy, image, eyebrow, primary, secondary }: HeroProps) {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-ink pt-20 text-white">
      <img alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-62 motion-safe:animate-[rise_1s_ease_both]" src={image} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(17,17,15,.92),rgba(17,17,15,.58),rgba(17,17,15,.18)),linear-gradient(0deg,rgba(17,17,15,.82),rgba(17,17,15,0)_46%)]" />
      <div className="mx-auto flex min-h-[calc(88vh-5rem)] max-w-7xl items-end px-5 pb-16 lg:px-8">
        <div className="max-w-4xl reveal">
          {eyebrow && <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-field">{eyebrow}</p>}
          <h1 className="max-w-4xl text-6xl font-black leading-[0.95] md:text-8xl lg:text-9xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-white/78 md:text-2xl">{copy}</p>
          {(primary || secondary) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primary && <Button to={primary.to}>{primary.label}</Button>}
              {secondary && <Button to={secondary.to} variant="secondary">{secondary.label}</Button>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
