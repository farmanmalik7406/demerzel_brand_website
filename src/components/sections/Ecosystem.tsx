const nodes = ["Field Technology", "Optics", "Navigation", "Wildlife Monitoring", "Survey", "DEMERZEL FIELD"];

export function Ecosystem() {
  return (
    <section className="bg-stone px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-olive">Brand ecosystem</p>
            <h2 className="mt-4 text-5xl font-black leading-tight text-ink md:text-7xl">DEMERZEL as the umbrella.</h2>
            <p className="mt-6 text-xl leading-9 text-charcoal/75">Vanrakshak optics and the broader catalogue categories support the DEMERZEL field-technology story rather than replacing the corporate brand.</p>
          </div>
          <div className="rounded-md bg-ink p-6 text-white shadow-soft">
            <div className="rounded-md border border-field/40 p-6 text-center text-3xl font-black tracking-[0.14em] text-field">DEMERZEL</div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {nodes.map((node) => <div className="rounded-md border border-white/10 bg-white/[0.05] px-5 py-5 font-bold" key={node}>{node}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
