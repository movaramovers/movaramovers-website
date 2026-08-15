import { MessageCircle } from "lucide-react";
import { CONTACT, waLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={waLink(CONTACT.abbas.wa)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Movara Movers on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground shadow-gold transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
