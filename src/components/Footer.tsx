import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background">
      {/* Marquee */}
      <div className="overflow-hidden border-b border-background/10 py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="mx-12 font-serif text-5xl italic text-background/80 md:text-7xl"
            >
              Arquitectura · Construcción · Diseño · Urbanismo ·
            </span>
          ))}
        </div>
      </div>

      <div className="container-editorial grid grid-cols-12 gap-6 py-20">
        <div className="col-span-12 md:col-span-5">
          <div className="font-serif text-5xl font-medium md:text-6xl">
            Deco<span className="italic text-accent">Book</span>
          </div>
          <p className="mt-6 max-w-sm text-background/70">
            Librería itinerante especializada en arquitectura y construcción.
            Hecha por arquitectos, para arquitectos.
          </p>
          <div className="mt-10 flex gap-3">
            <a
              href="https://wa.me/523326149732"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-12 w-12 items-center justify-center border border-background/20 transition-colors hover:bg-accent hover:border-accent hover:text-accent-foreground"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center border border-background/20 transition-colors hover:bg-accent hover:border-accent hover:text-accent-foreground"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="col-span-6 md:col-span-2 md:col-start-7">
          <h4 className="eyebrow text-background/60">Navegación</h4>
          <ul className="mt-6 space-y-3 font-serif text-xl">
            <li><a href="#inicio" className="hover:text-accent">Inicio</a></li>
            <li><a href="#productos" className="hover:text-accent">Productos</a></li>
            <li><a href="#localidades" className="hover:text-accent">Eventos</a></li>
            <li><a href="#contacto" className="hover:text-accent">Contacto</a></li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-3">
          <h4 className="eyebrow text-background/60">Mapa de ruta</h4>
          <ul className="mt-6 space-y-3 font-serif text-xl">
            <li>Guadalajara · MAY</li>
            <li>CDMX · MAY</li>
            <li>Monterrey · JUN</li>
            <li>Puebla · JUN</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-editorial flex flex-col items-start justify-between gap-3 py-6 font-mono-editorial text-[10px] uppercase tracking-[0.25em] text-background/50 md:flex-row md:items-center">
          <span>© {year} DecoBook · Todos los derechos reservados</span>
          <span>Hecho con cuidado en Guadalajara, MX</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
