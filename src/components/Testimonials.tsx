import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Ahmed Al Mansoori",
    detail: "Apartment move, Dubai Marina",
    text: "Movara made our apartment move completely stress-free. The team arrived on time, wrapped every piece of furniture carefully, and had everything set up in our new place within hours. Highly recommend!",
  },
  {
    name: "Priya Sharma",
    detail: "Office relocation, Sharjah",
    text: "We moved our entire office over a weekend and were back to work Monday morning without missing a beat. Professional, fast, and not a single item was damaged. Will definitely use Movara again.",
  },
  {
    name: "Mohammed Al Rashidi",
    detail: "Villa move, Abu Dhabi",
    text: "Moved a large villa across emirates and the crew handled everything — packing, loading, transport, and unpacking. Fair pricing, zero hidden charges, and a friendly team throughout. 5 stars easily.",
  },
  {
    name: "Sarah Johnson",
    detail: "Home move, Jumeirah, Dubai",
    text: "I was nervous about moving with young kids but the Movara team put us completely at ease. They protected every corner and finished ahead of schedule. Genuinely the best moving experience I've had in the UAE.",
  },
  {
    name: "Khalid Bin Zayed",
    detail: "Furniture delivery, Ajman",
    text: "Needed bulky furniture delivered and assembled on short notice. Movara sorted it same day, no fuss. The guys were polite, efficient and left the place spotless. Brilliant service.",
  },
  {
    name: "Nadia Farooq",
    detail: "Studio move, Al Barsha, Dubai",
    text: "As a solo expat moving on a tight budget, I appreciated the transparent quote and the care the team took with my belongings. Everything arrived in perfect condition. Thank you Movara!",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-navy py-20 md:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Testimonials</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy-foreground sm:text-4xl">
            What Our Customers Say
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={i} delay={i * 90}>
              <figure className="h-full rounded-2xl bg-card p-7 shadow-lift">
                <Quote className="h-7 w-7 text-gold" aria-hidden="true" />
                <div className="mt-4 flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.text}</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <span className="block font-display text-sm font-bold text-navy">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
