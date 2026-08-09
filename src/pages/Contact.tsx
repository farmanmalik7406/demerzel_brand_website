import { FormEvent, useState } from "react";
import { SEO } from "../components/SEO";
import { Button } from "../components/ui/Button";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <SEO description="Contact DEMERZEL Enterprises for product information, catalogue enquiries and field-equipment questions." title="Contact DEMERZEL Enterprises" />
      <section className="bg-ink px-5 pb-24 pt-36 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-field">Contact</p>
            <h1 className="mt-4 text-6xl font-black leading-tight md:text-8xl">Contact DEMERZEL.</h1>
            <p className="mt-7 text-xl leading-9 text-white/72">Tell us which product family, application or specification you are reviewing.</p>
            <div className="mt-10 grid gap-4 text-white/70">
              <p>Email: contact@demerzel.example</p>
              <p>Product enquiries: catalogue and specification support</p>
              <p>Use the form for product information requests.</p>
            </div>
          </div>
          <form className="rounded-md bg-stone p-6 text-ink shadow-soft md:p-8" onSubmit={onSubmit}>
            <div className="grid gap-5">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Organization" name="organization" required={false} />
              <label className="grid gap-2 text-sm font-bold">
                Field Context
                <textarea className="min-h-36 rounded-md border border-ink/15 bg-white px-4 py-3 text-base font-normal" name="message" required />
              </label>
              <Button type="submit" variant="dark">Contact DEMERZEL</Button>
              {submitted && (
                <p className="rounded-md border border-olive/30 bg-white px-4 py-3 font-semibold text-forest">
                  Thank you. Your enquiry has been captured for DEMERZEL's catalogue follow-up.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = true }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-bold">
      {label}
      <input className="rounded-md border border-ink/15 bg-white px-4 py-3 text-base font-normal" name={name} required={required} type={type} />
    </label>
  );
}
