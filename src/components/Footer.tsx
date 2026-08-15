import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT, NAV_LINKS, SERVICES, waLink } from "@/lib/site";
import truckImg from "@/assets/Truck.png";

export function Footer() {
  return (
    <footer className="relative bg-navy text-navy-foreground overflow-hidden">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-4 text-sm text-navy-foreground/75">
            We Move, You Relax! Professional home, office and international moving services all over the UAE.
          </p>
          <div className="mt-5 flex gap-3">
            {/* TODO: client to supply real social profile links. */}
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={`Movara Movers on ${label}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy-foreground/10 transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-navy-foreground/75 transition-colors hover:text-gold">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold">Services</h3>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 lg:grid-cols-1">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-navy-foreground/75 transition-colors hover:text-gold">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
            <li>
              <a href={`tel:${CONTACT.abbas.tel}`} className="inline-flex items-center gap-2 hover:text-gold">
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" /> {CONTACT.abbas.name}: {CONTACT.abbas.display}
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT.yaseen.tel}`} className="inline-flex items-center gap-2 hover:text-gold">
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" /> {CONTACT.yaseen.name}: {CONTACT.yaseen.display}
              </a>
            </li>
            <li>
              <a href={waLink(CONTACT.movara.wa)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold">
                <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" /> {CONTACT.movara.name}: {CONTACT.movara.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 hover:text-gold">
                <Mail className="h-4 w-4 text-gold" aria-hidden="true" /> {CONTACT.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" aria-hidden="true" /> {CONTACT.location}
            </li>
          </ul>
          <div className="mt-5 overflow-hidden rounded-xl border border-navy-foreground/15 mb-20 md:mb-0">
            <iframe
              title="Movara Movers location — Al Majaz 2, Sharjah, UAE"
              src="https://maps.google.com/maps?q=Al+Majaz+2%2C+Sharjah%2C+United+Arab+Emirates&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-40 w-full border-0"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10 py-5">
        <p className="container-page text-center text-xs text-navy-foreground/60">
          © 2026 Movara Movers. All rights reserved. Website Developed by <a href="https://axiusdigital.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white">Axius Digital</a>
        </p>
      </div>

      {/* Truck pinned to bottom-left */}
      <img
        src={truckImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-2 w-64 select-none opacity-50 lg:w-80 -translate-y-6 md:translate-y-0"
      />
    </footer>
  );
}
