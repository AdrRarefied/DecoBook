import aboutImg from "@/assets/about-stand.jpg";

const About = () => {
  return (
    <section id="about" className="relative bg-secondary/40 py-28 md:py-40">
      <div className="container-editorial grid grid-cols-12 gap-6">
        <div className="col-span-12 mb-16 flex items-center gap-6 md:col-span-12">
          <span className="eyebrow">02 — Manifiesto</span>
          <span className="h-px flex-1 bg-foreground/20" />
        </div>

        <div className="col-span-12 lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={aboutImg}
              alt="Stand itinerante de DecoBook en universidad"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          <p className="mt-4 font-mono-editorial text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Fig. 02 — Stand UNAM, Ciudad Universitaria
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <h2 className="font-serif text-balance text-5xl font-medium leading-[1.05] md:text-7xl">
            Expertos en el <span className="italic text-accent">gremio</span>.
          </h2>

          <p className="mt-10 text-lg leading-relaxed text-foreground/80 md:text-xl">
            No somos una librería común. Somos un proyecto itinerante dedicado
            a curar los mejores títulos de arquitectura y construcción,
            visitando facultades y eventos en toda la República Mexicana.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
            {[
              {
                n: "I",
                t: "Curaduría experta",
                d: "Cada título es seleccionado por arquitectos y profesionales del gremio.",
              },
              {
                n: "II",
                t: "En tu campus",
                d: "Llevamos los libros directo a tu facultad o evento profesional.",
              },
              {
                n: "III",
                t: "Editoriales premium",
                d: "Trabajamos con Gustavo Gili, Taschen, Phaidon y editoriales independientes.",
              },
              {
                n: "IV",
                t: "Pedidos especiales",
                d: "Conseguimos títulos descatalogados y ediciones limitadas a pedido.",
              },
            ].map((c) => (
              <div key={c.t} className="bg-background p-8">
                <div className="mb-6 flex items-baseline justify-between">
                  <span className="font-serif text-3xl italic text-accent">
                    {c.n}
                  </span>
                  <span className="h-px w-10 bg-foreground/30" />
                </div>
                <h3 className="font-serif text-2xl font-medium">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
