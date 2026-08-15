import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, MessageCircle, ShieldCheck, ThumbsUp } from "lucide-react";
import { CONTACT, waLink } from "@/lib/site";
import movara1 from "@/assets/movara-1.jpg";
import movara2 from "@/assets/movara-2.jpg";
import movara3 from "@/assets/movara-3.jpg";

const sliderImages = [
  { src: movara1, alt: "Movara Movers professional team with moving truck in the UAE" },
  { src: movara2, alt: "Movara Movers carefully packing and loading furniture" },
  { src: movara3, alt: "Movara Movers delivering to a new home in the UAE" },
];

const SLIDE_INTERVAL = 5000;

const badges = [
  { icon: ShieldCheck, label: "Safe & Secure" },
  { icon: Clock, label: "On Time" },
  { icon: ThumbsUp, label: "Reliable" },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + sliderImages.length) % sliderImages.length);
  const next = () => setCurrent((p) => (p + 1) % sliderImages.length);

  return (
    <section id="home" className="relative isolate overflow-hidden">
      {sliderImages.map((img, idx) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={1920}
          height={1088}
          fetchPriority={idx === 0 ? "high" : "auto"}
          className={`absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/40" aria-hidden="true" />

      {/* Left arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute cursor-pointer left-4 top-1/2 z-10 -translate-y-1/2 hidden md:inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy/50 text-navy-foreground backdrop-blur transition-colors hover:bg-gold hover:text-gold-foreground md:left-6"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute cursor-pointer right-4 top-1/2 z-10 -translate-y-1/2 hidden md:inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy/50 text-navy-foreground backdrop-blur transition-colors hover:bg-gold hover:text-gold-foreground md:right-6"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current ? "w-6 bg-gold" : "w-2 bg-navy-foreground/50"
            }`}
          />
        ))}
      </div>

      <div className="container-page flex min-h-[38rem] flex-col justify-center py-32 md:min-h-[42rem] md:py-40">
        <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-navy/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          We Move, You Relax!
        </span>
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl">
          Professional Moving &amp; Shifting Services
        </h1>
        <p className="mt-5 max-w-2xl text-base text-navy-foreground/85 sm:text-lg">
          Safe, On Time, Reliable — Home, Office, Villa &amp; Apartment Moves All Over UAE.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5"
          >
            Get Free Quote
          </a>
          <a
            href={waLink(CONTACT.movara.wa)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-foreground/35 bg-navy-foreground/10 px-7 py-3.5 text-sm font-bold text-navy-foreground backdrop-blur transition-colors hover:bg-navy-foreground/20"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Call / WhatsApp Now
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap gap-3">
          {badges.map((b) => (
            <li
              key={b.label}
              className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy/50 px-4 py-2 text-sm font-medium text-navy-foreground backdrop-blur"
            >
              <b.icon className="h-4 w-4 text-gold" aria-hidden="true" />
              {b.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
