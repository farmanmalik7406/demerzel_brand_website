import { Reveal } from "../ui/Reveal";

type CapabilityStoryProps = {
  id: string;
  number: string;
  title: string;
  copy: string;
  image: string;
  chips: string[];
  reverse?: boolean;
  dark?: boolean;
};

export function CapabilityStory({ id, number, title, copy, image, chips, reverse, dark }: CapabilityStoryProps) {
  const orderClass = reverse ? "lg:grid-cols-[1.05fr_.95fr]" : "lg:grid-cols-[.95fr_1.05fr]";

  return (
    <section id={id} className={`relative overflow-hidden ${dark ? "bg-ink text-white" : "bg-stone text-ink"}`}>
      <div className={`mx-auto grid max-w-7xl gap-10 px-5 py-24 ${orderClass} lg:px-8`}>
        <div className={`relative flex flex-col justify-center gap-8 rounded-[2rem] border p-10 shadow-soft ${dark ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-white/95"} ${reverse ? "lg:order-2" : ""}`}>
          <div className="space-y-4">
            <p className={`text-xs font-bold uppercase tracking-[0.26em] ${dark ? "text-field" : "text-olive"}`}>{number} / capability</p>
            <p className={`text-4xl font-black uppercase leading-tight ${dark ? "text-white" : "text-ink"}`}>{title}</p>
            <p className={`max-w-xl text-lg leading-8 ${dark ? "text-white/75" : "text-charcoal/75"}`}>{copy}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span key={chip} className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "border-white/15 bg-white/5 text-white/85" : "border-ink/10 bg-white text-ink"}`}>
                {chip}
              </span>
            ))}
          </div>
          <div>
            <a className="inline-flex items-center gap-2 border-b border-current pb-1 text-sm font-semibold uppercase tracking-[0.22em] text-field transition hover:text-ink" href="/solutions">
              Discover capabilities
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <Reveal as="div" className="relative overflow-hidden rounded-[2rem] border border-ink/10 shadow-soft">
          <img className="h-full w-full object-cover object-center" src={image} alt={title} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </Reveal>
      </div>
    </section>
  );
}
