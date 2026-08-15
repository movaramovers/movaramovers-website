import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT, NAV_LINKS, SERVICES } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-background/95 backdrop-blur transition-all duration-300",
        scrolled && "border-border shadow-soft",
      )}
    >
      <div className={cn("container-page flex items-center justify-between transition-all duration-300", scrolled ? "h-16" : "h-20")}>
        <a href="#home" aria-label="Movara Movers home">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-navy"
                  aria-expanded={servicesOpen}
                >
                  Services <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </a>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3">
                    <ul className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-3 shadow-lift">
                      {SERVICES.map((s) => (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-popover-foreground/85 transition-colors hover:bg-secondary hover:text-navy"
                          >
                            <s.icon className="h-4 w-4 text-gold" aria-hidden="true" />
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${CONTACT.abbas.tel}`}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-navy transition-colors hover:bg-secondary md:inline-flex"
          >
            <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
            {CONTACT.abbas.display}
          </a>
          <a
            href={`tel:${CONTACT.abbas.tel}`}
            aria-label={`Call Movara Movers on ${CONTACT.abbas.display}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-navy md:hidden"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#quote"
            className="hidden rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-bold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Get a Free Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-navy-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground/85 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-gradient-gold px-5 py-3 text-center text-sm font-bold text-gold-foreground"
            >
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
