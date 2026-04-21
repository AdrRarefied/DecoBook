import { Calendar, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    date: "12 — 16",
    month: "MAY",
    city: "Guadalajara, Jal.",
    venue: "Facultad de Arquitectura · UdeG",
    status: "Confirmado",
  },
  {
    date: "28 — 30",
    month: "MAY",
    city: "Ciudad de México",
    venue: "Feria del Libro UNAM · CU",
    status: "Confirmado",
  },
  {
    date: "10 — 14",
    month: "JUN",
    city: "Monterrey, N.L.",
    venue: "Tecnológico de Monterrey · Campus MTY",
    status: "Próximo",
  },
  {
    date: "24 — 27",
    month: "JUN",
    city: "Puebla, Pue.",
    venue: "BUAP · Facultad de Arquitectura",
    status: "Próximo",
  },
  {
    date: "08 — 12",
    month: "JUL",
    city: "Querétaro, Qro.",
    venue: "UAQ · Diseño y Construcción",
    status: "En revisión",
  },
];

const Locations = () => {
  return (
    <section id="localidades" className="relative overflow-hidden bg-foreground py-28 text-background md:py-40">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="container-editorial relative">
        <div className="mb-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 flex items-center gap-6 text-background/60">
            <span className="font-mono-editorial text-xs uppercase tracking-[0.25em]">
              04 — Itinerario
            </span>
            <span className="h-px flex-1 bg-background/20" />
            <span className="hidden font-mono-editorial text-xs uppercase tracking-[0.25em] md:inline">
              Temporada 2025
            </span>
          </div>
          <h2 className="col-span-12 font-serif text-5xl font-medium leading-[1.05] md:col-span-10 md:text-7xl">
            Próximas <span className="italic text-accent">paradas</span>.
          </h2>
          <p className="col-span-12 max-w-xl text-background/70 md:col-span-6 md:col-start-7">
            Recorremos la República cargando una biblioteca itinerante.
            Encuentra cuándo estaremos en tu universidad o evento.
          </p>
        </div>

        {/* Schedule */}
        <div className="border-t border-background/15">
          {events.map((e, i) => (
            <a
              key={i}
              href="#contacto"
              className="group grid grid-cols-12 gap-4 border-b border-background/15 py-8 transition-colors hover:bg-background/5 md:py-10"
            >
              <div className="col-span-3 md:col-span-2">
                <div className="font-serif text-3xl md:text-5xl">{e.date}</div>
                <div className="mt-1 font-mono-editorial text-[10px] uppercase tracking-[0.25em] text-accent">
                  {e.month} · 25
                </div>
              </div>
              <div className="col-span-9 md:col-span-5">
                <div className="flex items-center gap-2 text-background/60">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="font-mono-editorial text-[11px] uppercase tracking-[0.2em]">
                    {e.city}
                  </span>
                </div>
                <h3 className="mt-2 font-serif text-2xl font-medium md:text-3xl">
                  {e.venue}
                </h3>
              </div>
              <div className="col-span-8 flex items-center md:col-span-3">
                <span
                  className={`font-mono-editorial text-[10px] uppercase tracking-[0.25em] ${
                    e.status === "Confirmado"
                      ? "text-accent"
                      : "text-background/50"
                  }`}
                >
                  ● {e.status}
                </span>
              </div>
              <div className="col-span-4 flex items-center justify-end md:col-span-2">
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3 text-background/70">
            <Calendar className="h-5 w-5 text-accent" />
            <span className="font-mono-editorial text-xs uppercase tracking-[0.2em]">
              Calendario actualizado mensualmente
            </span>
          </div>
          <a
            href="https://wa.me/523326149732"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-accent px-8 py-4 text-accent-foreground transition-all hover:bg-background hover:text-foreground"
          >
            <span className="font-mono-editorial text-xs uppercase tracking-[0.25em]">
              Solicita una visita
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Locations;
