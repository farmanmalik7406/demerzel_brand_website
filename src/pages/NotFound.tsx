import { SEO } from "../components/SEO";
import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <>
      <SEO description="Page not found on DEMERZEL Enterprises." title="Page Not Found | DEMERZEL Enterprises" />
      <section className="grid min-h-screen place-items-center bg-stone px-5 pt-20 text-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-olive">404</p>
          <h1 className="mt-5 text-6xl font-black text-ink">Page not found.</h1>
          <div className="mt-8 flex justify-center">
            <Button to="/" variant="dark">Return Home</Button>
          </div>
        </div>
      </section>
    </>
  );
}
