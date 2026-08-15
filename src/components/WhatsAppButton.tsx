import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { CONTACT, waLink } from "@/lib/site";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      {/* Scroll to top — only shown after scrolling down */}
      {visible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-navy-foreground shadow-lg transition-transform hover:scale-105 hover:bg-navy/80"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
      )}

      {/* WhatsApp */}
      <a
        href={waLink(CONTACT.abbas.wa)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Movara Movers on WhatsApp"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground shadow-gold transition-transform hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
    </div>
  );
}
