import { ClipboardList, PackageCheck, Search, Truck } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { icon: ClipboardList, title: "Request a Quote", text: "Call, WhatsApp or send the form — we reply fast with a clear price." },
  { icon: Search, title: "Free Site Survey", text: "We check volume, access and parking so the plan has no surprises." },
  { icon: Truck, title: "Packing & Moving Day", text: "Our crew packs, dismantles, loads and transports everything safely." },
  { icon: PackageCheck, title: "Safe Delivery & Setup", text: "We unload, reassemble and place items exactly where you want them." },
];

export function Process() {
  return (
    <section id="process" className="bg-background py-20 md:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Simple Process</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">How It Works</h2>
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <span className="absolute right-5 top-4 font-display text-4xl font-extrabold text-navy/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
