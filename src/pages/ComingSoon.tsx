import { SEO } from "../components/SEO";
import { Button } from "../components/ui/Button";

export function ComingSoon() {
  return (
    <>
      <SEO description="This DEMERZEL area is marked coming soon for a future phase." title="Coming Soon | DEMERZEL Enterprises" />
      <section className="grid min-h-screen place-items-center bg-ink px-5 pt-20 text-center text-white">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-field">Coming Soon</p>
          <h1 className="mt-5 text-6xl font-black leading-tight md:text-8xl">Future DEMERZEL platform area.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-white/72">This phase is limited to the corporate brand website. Catalogue, commerce, account, project and DEMERZEL FIELD functionality will come later.</p>
          <div className="mt-9 flex justify-center">
            <Button to="/solutions">Explore Our Capabilities</Button>
          </div>
        </div>
      </section>
    </>
  );
}
