import { useState, type FormEvent } from "react";
import { CheckCircle, Mail, MessageCircle, Phone, X } from "lucide-react";
import { CONTACT, SERVICES, WEB3FORMS_ACCESS_KEY, waLink } from "@/lib/site";
import { Reveal } from "./Reveal";

const field =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-ring/40";

const managers = [CONTACT.abbas, CONTACT.yaseen, CONTACT.movara];

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto mb-5 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>

        <h3 className="font-display text-2xl font-extrabold text-navy">Quote Request Sent!</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thank you! We've received your request and our team will get back to you shortly with a free, no-obligation quote.
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full cursor-pointer rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-7 py-3.5 text-sm font-bold text-navy shadow-md transition-transform hover:-translate-y-0.5"
        >
          Got it, thanks!
        </button>
      </div>
    </div>
  );
}

export function QuoteForm() {
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (!WEB3FORMS_ACCESS_KEY) {
      const body = Object.entries(data)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        "Moving quote request — Movara Movers",
      )}&body=${encodeURIComponent(body)}`;
      setShowSuccess(true);
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New moving quote request — movaramovers.com",
          from_name: "Movara Movers Website",
          to: CONTACT.email,
          ...data,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setShowSuccess(true);
    } catch {
      alert("Something went wrong. Please call or WhatsApp us instead.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
    {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    <section id="quote" className="bg-background py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Get a Quote</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Tell us about your move
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Share a few details and our team will come back with a clear, no-obligation quote.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">Name</label>
              <input id="name" name="name" required autoComplete="name" className={field} placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy">Phone</label>
              <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="+971 5X XXX XXXX" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" className={field} placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="date" className="mb-1.5 block text-sm font-semibold text-navy">Preferred Date</label>
              <input id="date" name="preferred_date" type="date" className={field} />
            </div>
            <div>
              <label htmlFor="from" className="mb-1.5 block text-sm font-semibold text-navy">Moving From</label>
              <input id="from" name="moving_from" required className={field} placeholder="e.g. Al Nahda, Sharjah" />
            </div>
            <div>
              <label htmlFor="to" className="mb-1.5 block text-sm font-semibold text-navy">Moving To</label>
              <input id="to" name="moving_to" required className={field} placeholder="e.g. JVC, Dubai" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-navy">Service Type</label>
              <select id="service" name="service_type" required defaultValue="" className={field}>
                <option value="" disabled>Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">Message</label>
              <textarea id="message" name="message" rows={4} className={field} placeholder="Items, floor, lift access, anything else we should know" />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={sending}
                className="w-full cursor-pointer rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {sending ? "Sending…" : "Request My Free Quote"}
              </button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl bg-gradient-navy p-8 text-navy-foreground shadow-lift">
            <h3 className="font-display text-xl font-bold">Prefer to talk now?</h3>
            <p className="mt-2 text-sm text-navy-foreground/80">
              Call or WhatsApp our sales managers directly — we answer quickly.
            </p>

            <div className="mt-6 space-y-5">
              {managers.map((m) => (
                <div key={m.name} className="rounded-2xl bg-navy-foreground/10 p-5">
                  <p className="font-display text-base font-bold">{m.role} – {m.name}</p>
                  <p className="mt-1 text-sm text-navy-foreground/80">{m.display}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href={`tel:${m.tel}`} className="inline-flex items-center gap-2 rounded-full bg-navy-foreground/15 px-4 py-2 text-xs font-bold transition-colors hover:bg-navy-foreground/25">
                      <Phone className="h-4 w-4" aria-hidden="true" /> Call
                    </a>
                    <a href={waLink(m.wa)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-xs font-bold text-gold-foreground">
                      <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <a href={`mailto:${CONTACT.email}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
              <Mail className="h-4 w-4" aria-hidden="true" /> {CONTACT.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
    </>
  );
}
