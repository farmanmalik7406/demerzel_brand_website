import React, { useEffect, useRef, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  productName?: string;
};

export function RequestInfoModal({ open, onClose, productName }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      // focus first field
      setTimeout(() => firstInputRef.current?.focus(), 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Basic focus trap
  useEffect(() => {
    if (!open) return;
    const el = dialogRef.current;
    if (!el) return;
    const focusable = el.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    function handleTab(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          (last as HTMLElement).focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          (first as HTMLElement).focus();
        }
      }
    }
    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [open]);

  function validate() {
    return name.trim() !== "" && email.trim() !== "";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-label="Request information dialog">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />
      <div ref={dialogRef} className="relative z-70 mx-auto w-full max-w-2xl rounded-[2rem] border border-ink/10 bg-white p-8 shadow-2xl">
        {!submitted ? (
          <>
            <header>
              <h2 className="text-2xl font-black text-ink">Request Information</h2>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">We'll prepare a catalogue response. This is a frontend-only enquiry and will not be sent.</p>
            </header>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-ink">
                  <span className="font-semibold uppercase tracking-[0.22em]">Name</span>
                  <input ref={firstInputRef} value={name} onChange={e => setName(e.target.value)} className="rounded-2xl border border-ink/10 bg-bone px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" required />
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink">
                  <span className="font-semibold uppercase tracking-[0.22em]">Email</span>
                  <input value={email} onChange={e => setEmail(e.target.value)} className="rounded-2xl border border-ink/10 bg-bone px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" type="email" required />
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-ink">
                  <span className="font-semibold uppercase tracking-[0.22em]">Phone</span>
                  <input value={phone} onChange={e => setPhone(e.target.value)} className="rounded-2xl border border-ink/10 bg-bone px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink">
                  <span className="font-semibold uppercase tracking-[0.22em]">Organization</span>
                  <input value={organization} onChange={e => setOrganization(e.target.value)} className="rounded-2xl border border-ink/10 bg-bone px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
                </label>
              </div>

              <label className="mt-4 flex flex-col gap-2 text-sm text-ink">
                <span className="font-semibold uppercase tracking-[0.22em]">Product</span>
                <input value={productName || ""} readOnly className="rounded-2xl border border-ink/10 bg-bone px-4 py-3 text-sm text-charcoal/70" />
              </label>

              <label className="mt-4 flex flex-col gap-2 text-sm text-ink">
                <span className="font-semibold uppercase tracking-[0.22em]">Message</span>
                <textarea value={message} onChange={e => setMessage(e.target.value)} className="min-h-[120px] rounded-2xl border border-ink/10 bg-bone px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button type="button" onClick={onClose} className="rounded-full border border-ink/10 px-5 py-3 text-sm font-semibold text-ink transition hover:bg-bone/80">
                  Cancel
                </button>
                <button type="submit" disabled={!validate()} className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-ink transition hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-60">
                  Confirm Request
                </button>
              </div>
            </form>
          </>
        ) : (
          <div>
            <h3 className="text-2xl font-black text-ink">Request received</h3>
            <p className="mt-3 text-sm leading-7 text-charcoal/75">This enquiry was handled locally and not sent. Use this content to copy into an email to DEMERZEL or to record your interest offline.</p>
            <div className="mt-6 rounded-[1.5rem] border border-ink/10 bg-bone p-5">
              <p className="text-sm"><strong>Name:</strong> {name}</p>
              <p className="text-sm mt-2"><strong>Email:</strong> {email}</p>
              {phone && <p className="text-sm mt-2"><strong>Phone:</strong> {phone}</p>}
              {organization && <p className="text-sm mt-2"><strong>Organization:</strong> {organization}</p>}
              <p className="text-sm mt-2"><strong>Product:</strong> {productName}</p>
              {message && <p className="text-sm mt-3"><strong>Message:</strong> {message}</p>}
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={onClose} className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-ink hover:bg-brand/90">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RequestInfoModal;
