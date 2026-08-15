import { MapPin } from "lucide-react";
import { EMIRATES } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Coverage() {
  return (
    <section id="coverage" className="bg-surface py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Coverage Area</span>
          <h2 className="mt-3 flex items-center gap-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            <span aria-hidden="true" className="text-3xl">
              🇦🇪
            </span>
            All Over UAE
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Based in Sharjah and moving customers across every emirate — city to city, or building to building.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {EMIRATES.map((e) => (
              <li
                key={e}
                className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-navy shadow-soft"
              >
                <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {e}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
            <iframe
              title="Movara Movers service area map centered on Sharjah, UAE"
              src="https://maps.google.com/maps?q=Sharjah%2C%20United%20Arab%20Emirates&z=10&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[24rem] w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
