import { SERVICES } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="bg-surface py-20 md:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-gold">What We Do</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-muted-foreground">
            Complete moving, packing and relocation services for homes and businesses across all seven emirates.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal as="li" key={service.id} delay={(i % 3) * 90}>
              <article
                id={service.id}
                className="group h-full scroll-mt-28 rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-gradient-gold group-hover:text-gold-foreground">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <a
                  href="#quote"
                  className="mt-5 inline-block text-sm font-semibold text-navy underline-offset-4 hover:text-gold hover:underline"
                >
                  Get a quote →
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
