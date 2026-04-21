import heroBooks from "@/assets/hero-books.jpg";
import { ArrowDownRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden bg-background pt-24"
    >
      <div className="absolute inset-0 blueprint-grid opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="container-editorial relative grid grid-cols-12 gap-6 pb-20 pt-12 md:pt-20">
        {/* Meta strip */}
        <div className="col-span-12 mb-8 flex items-center justify-between md:mb-16">
          <span className="eyebrow">Est. Guadalajara · México</span>
          <div className="hidden items-center gap-4 md:flex">
            <span className="h-px w-16 bg-foreground/30" />
            <span className="eyebrow">Edición №01 / 2025</span>
          </div>
        </div>

        {/* Headline */}
        <div className="col-span-12 lg:col-span-7">
          <h1 className="font-serif text-balance text-[12vw] font-medium leading-[0.92] tracking-tight md:text-[7.5vw] lg:text-[6.5rem]">
            Librería <span className="italic text-accent">itinerante</span> de
            arquitectura<span className="text-accent">.</span>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Llevamos los títulos más relevantes de arquitectura y construcción
            a las mejores universidades y eventos de México.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#productos"
              className="group inline-flex items-center justify-between gap-6 bg-foreground px-8 py-5 text-background transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <span className="font-mono-editorial text-xs uppercase tracking-[0.25em]">
                Ver Catálogo
              </span>
              <ArrowDownRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="#localidades"
              className="group inline-flex items-center gap-3 px-2 py-5 font-mono-editorial text-xs uppercase tracking-[0.25em] text-foreground"
            >
              <MapPin className="h-4 w-4 text-accent" />
              <span className="border-b border-foreground/40 pb-0.5 transition-colors group-hover:border-accent">
                Saber nuestra ubicación
              </span>
            </a>
          </div>
        </div>

        {/* Image column */}
        <div className="relative col-span-12 mt-12 lg:col-span-5 lg:mt-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src={heroBooks}
              alt="Pila de libros de arquitectura sobre concreto"
              width={1536}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
          </div>
          {/* Caption */}
          <div className="absolute -left-2 top-4 -rotate-90 origin-top-left">
            <span className="font-mono-editorial text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Fig. 01 — Selección curada
            </span>
          </div>
          <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
            <span className="font-mono-editorial text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              + 200 títulos
            </span>
            <span className="font-serif text-2xl italic">archivo vivo</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="col-span-12 mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-10 md:grid-cols-4">
          {[
            { k: "12+", v: "Universidades visitadas" },
            { k: "08", v: "Estados de la República" },
            { k: "200", v: "Títulos curados" },
            { k: "2018", v: "Año de fundación" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-serif text-5xl font-medium md:text-6xl">
                {s.k}
              </div>
              <div className="mt-2 font-mono-editorial text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
