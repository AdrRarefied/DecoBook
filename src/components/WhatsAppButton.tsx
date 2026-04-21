import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/523326149732?text=Hola%20DecoBook%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20su%20cat%C3%A1logo."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-accent px-5 py-4 text-accent-foreground shadow-gold transition-all duration-300 hover:bg-foreground hover:text-background md:bottom-8 md:right-8"
  >
    <MessageCircle className="h-5 w-5" />
    <span className="hidden font-mono-editorial text-xs uppercase tracking-[0.2em] md:inline">
      WhatsApp
    </span>
    <span className="absolute -inset-1 -z-10 animate-ping bg-accent/40" />
  </a>
);

export default WhatsAppButton;
