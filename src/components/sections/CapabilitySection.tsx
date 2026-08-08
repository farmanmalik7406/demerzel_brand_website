import { Reveal } from "../ui/Reveal";

type CapabilitySectionProps = {
  id: string;
  step: string;
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  chips: string[];
  reverse?: boolean;
  dark?: boolean;
};

export function CapabilitySection({
  id,
  step,
  eyebrow,
  title,
  copy,
  image,
  chips,
  reverse = false,
  dark = false
}: CapabilitySectionProps) {
  return (
    <section id={id} className={`grid gap-10 ${reverse ? "lg:grid-cols-[.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_.9fr]"}`}>
      <Reveal as="div" className="flex items-center justify-center">
        <div className="max-w-xl rounded-[2rem] border p-10 shadow-soft transition duration-300" style={{ background: dark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.86)" }}>
          <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${dark ? "text-field" : "text-olive"}`}>{eyebrow}</p>
          <p className={`mt-4 text-sm font-bold uppercase tracking-[0.34em] ${dark ? "text-white/70" : "text-ink/70"}`}>{step} / capability</p>
          <h3 className={`mt-5 text-4xl font-black leading-tight ${dark ? "text-white" : "text-ink"}`}>{title}</h3>
          <p className={`mt-6 text-base leading-8 ${dark ? "text-white/75" : "text-charcoal/75"}`}>{copy}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span key={chip} className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "border-white/15 bg-white/5 text-white/85" : "border-ink/10 bg-white text-ink"}`}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal as="div" className="relative overflow-hidden rounded-[2rem] border border-ink/10 shadow-soft">
        <img className="h-full w-full object-cover object-center" src={image} alt={title} loading="lazy" />
      </Reveal>
    </section>
  );
}
