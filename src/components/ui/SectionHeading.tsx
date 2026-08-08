type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, copy, light = false }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-field" : "text-olive"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-4xl font-black leading-tight md:text-6xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {copy && <p className={`mt-5 text-lg leading-8 ${light ? "text-white/72" : "text-charcoal/75"}`}>{copy}</p>}
    </div>
  );
}
