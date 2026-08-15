import { Reveal } from "./Reveal";
// TODO: client to swap in real team/warehouse photography.
import aboutImage from "@/assets/about-team.jpg";

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src={aboutImage}
              alt="Movara Movers crew packing and wrapping household furniture"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-gradient-navy px-6 py-5 text-navy-foreground shadow-lift sm:block">
              <p className="font-display text-lg font-bold">Moving Forward,</p>
              <p className="font-display text-lg font-bold text-gold">Delivering Trust</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-gold">About Movara Movers</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            A moving partner you can actually rely on
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Movara Movers is a trusted moving and relocation company based in Sharjah, serving families
              and businesses all over the UAE. From a single room to a full villa or office floor, we plan
              every move around your schedule and handle your belongings like they are our own.
            </p>
            <p>
              Our team is trained in professional packing, dismantling and reassembly, and we use quality
              materials and well-maintained vehicles on every job. You get a clear quote up front, a fixed
              moving window, and one point of contact from the first call to the final piece unloaded.
            </p>
            <p>
              We are a customer-first company: transparent pricing, careful handling, and honest
              communication. That is what &ldquo;We Move, You Relax!&rdquo; means to us.
            </p>
            {/* TODO: client to confirm exact years in operation, team size and completed move count before adding them here. */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
