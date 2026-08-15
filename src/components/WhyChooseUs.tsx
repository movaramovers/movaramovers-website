import { BadgeDollarSign, HeartHandshake, ShieldCheck, Users, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const reasons = [
  { icon: Zap, title: "Fast & Efficient", text: "Quick response, tight scheduling and crews that keep the day moving." },
  { icon: ShieldCheck, title: "Safe & Secure", text: "Proper wrapping, secure loading and careful handling at every step." },
  { icon: Users, title: "Experienced Team", text: "Trained movers, packers and drivers who do this every single day." },
  { icon: BadgeDollarSign, title: "Affordable Prices", text: "Clear, competitive quotes with no hidden charges after the move." },
];

const stats = [
  { value: "1000+", label: "Projects Completed" },
  { value: "900+", label: "Happy Clients" },
  { value: "10+", label: "Years in UAE" },
  { value: "7", label: "Emirates Covered" },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-background py-20 md:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Why Movara</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">Why Choose Us</h2>
          <p className="mt-4 inline-flex items-center gap-2 text-muted-foreground">
            <HeartHandshake className="h-5 w-5 text-gold" aria-hidden="true" />
            We Care For Your Belongings
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <div className="h-full rounded-2xl bg-surface p-7 text-center">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground shadow-gold">
                  <r.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-navy">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <dl className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-gradient-navy sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-8 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-extrabold text-gold">{s.value}</span>
                  <span className="mt-1 block text-sm text-navy-foreground/80">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
