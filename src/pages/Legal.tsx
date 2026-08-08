import { SEO } from "../components/SEO";

export function Legal({ type }: { type: "privacy" | "terms" }) {
  const isPrivacy = type === "privacy";
  return (
    <>
      <SEO
        description={isPrivacy ? "DEMERZEL privacy information for the static brand website." : "DEMERZEL terms information for the static brand website."}
        title={isPrivacy ? "Privacy | DEMERZEL Enterprises" : "Terms | DEMERZEL Enterprises"}
      />
      <section className="bg-stone px-5 pb-24 pt-36 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-olive">{isPrivacy ? "Privacy" : "Terms"}</p>
          <h1 className="mt-4 text-6xl font-black leading-tight text-ink md:text-8xl">{isPrivacy ? "Privacy information." : "Terms information."}</h1>
          <div className="mt-10 grid gap-6 text-lg leading-8 text-charcoal/75">
            {isPrivacy ? (
              <>
                <p>This static brand website presents DEMERZEL Enterprises information, field-technology categories and contact interface content.</p>
                <p>The contact form is a frontend interface only in this build. It does not send enquiries to a backend service from the static site.</p>
                <p>Future production legal copy should be reviewed and approved by DEMERZEL before public launch.</p>
              </>
            ) : (
              <>
                <p>This website provides source-grounded brand and catalogue-context information for DEMERZEL Enterprises.</p>
                <p>Product prices, availability, warranties, certifications and commercial terms are not represented unless verified business data is supplied.</p>
                <p>Future production terms should be reviewed and approved by DEMERZEL before public launch.</p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
