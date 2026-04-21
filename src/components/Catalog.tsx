import { useState, useEffect } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Ajusta rutas si es necesario
import book1 from "../assets/book-1.jpg";
import book2 from "../assets/book-2.jpg";
import book3 from "../assets/book-3.jpg";
import book4 from "../assets/book-4.jpg";

const categories = ["Todos", "Edificación", "Diseño", "Urbanismo", "Estructuras"];

const books = [
  {
    img: book1,
    title: "Forma y Función",
    author: "Studio Aalto",
    cat: "Diseño",
    price: "MX$ 1,240",
    code: "DB-014",
  },
  {
    img: book2,
    title: "Construir en Concreto",
    author: "Tadao Ando ed.",
    cat: "Edificación",
    price: "MX$ 1,890",
    code: "DB-027",
  },
  {
    img: book3,
    title: "Atlas Urbano CDMX",
    author: "M. Larrosa",
    cat: "Urbanismo",
    price: "MX$ 980",
    code: "DB-031",
  },
  {
    img: book4,
    title: "Manual de Estructuras",
    author: "Heino Engel",
    cat: "Estructuras",
    price: "MX$ 2,150",
    code: "DB-008",
  },
  {
    img: book1,
    title: "Detalles Constructivos",
    author: "Edward Allen",
    cat: "Edificación",
    price: "MX$ 1,560",
    code: "DB-042",
  },
  {
    img: book3,
    title: "Ciudad Caminable",
    author: "Jeff Speck",
    cat: "Urbanismo",
    price: "MX$ 890",
    code: "DB-019",
  },
  // duplicados ejemplo
  {
    img: book1,
    title: "Forma y Función",
    author: "Studio Aalto",
    cat: "Diseño",
    price: "MX$ 1,240",
    code: "DB-014",
  },
  {
    img: book2,
    title: "Construir en Concreto",
    author: "Tadao Ando ed.",
    cat: "Edificación",
    price: "MX$ 1,890",
    code: "DB-027",
  },
];

const Catalog = () => {
  const [active, setActive] = useState("Todos");
  const [page, setPage] = useState(1);

  const itemsPerPage = 8;

  const filtered =
    active === "Todos" ? books : books.filter((b) => b.cat === active);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const paginatedBooks = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  useEffect(() => {
    setPage(1);
  }, [active]);

  const changePage = (newPage) => {
    setPage(newPage);

    setTimeout(() => {
      document
        .getElementById("productos")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  // 🔥 WHATSAPP
  const phone = "523326149732";

  const getWhatsAppLink = (bookTitle) => {
    const message = `Hola, me interesa el libro "${bookTitle}". ¿Me puedes dar más información?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const generalWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Hola, estoy buscando un libro en específico. ¿Me puedes ayudar?"
  )}`;

  return (
    <section
      id="productos"
      className="scroll-mt-24 relative bg-background py-28 md:py-40"
    >
      <div className="container-editorial">

        {/* HEADER */}
        <div className="mb-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 flex items-center gap-6">
            <span className="eyebrow">03 — Catálogo</span>
            <span className="h-px flex-1 bg-foreground/20" />
            <span className="eyebrow hidden md:inline">
              {filtered.length} títulos
            </span>
          </div>

          <h2 className="col-span-12 font-serif text-5xl md:text-7xl">
            Catálogo <span className="italic text-accent">destacado</span>.
          </h2>
        </div>

        {/* FILTROS */}
        <div className="mb-16 flex flex-wrap gap-2 border-y border-border py-4">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "px-4 py-2 text-xs uppercase tracking-[0.2em]",
                active === c
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-16 md:grid-cols-3 lg:grid-cols-4">
          {paginatedBooks.map((b, i) => (
            <article key={`${b.code}-${i}`} className="group">
              
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={b.img}
                  alt={b.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />

                {/* BOTÓN WHATSAPP */}
                <a
                  href={getWhatsAppLink(b.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-background opacity-0 transition-all duration-500 group-hover:opacity-100 hover:bg-accent hover:text-background"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>

              {/* Código + Precio */}
              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-mono-editorial text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {b.code} · {b.cat}
                </span>

                <span className="font-mono-editorial text-[10px] text-accent">
                  {b.price}
                </span>
              </div>

              <h3 className="mt-2 font-serif text-2xl font-medium leading-tight">
                {b.title}
              </h3>

              <p className="mt-1 text-sm italic text-muted-foreground">
                {b.author}
              </p>
            </article>
          ))}
        </div>

        {/* PAGINACIÓN */}
        <div className="mt-16 flex justify-center gap-6 items-center">
          <button
            type="button"
            onClick={() => changePage(Math.max(page - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 border text-sm disabled:opacity-30 hover:bg-secondary/5"
          >
            ← Anterior
          </button>

          <span className="font-mono-editorial text-xs uppercase tracking-widest">
            Página {page} de {totalPages || 1}
          </span>

          <button
            type="button"
            onClick={() => changePage(Math.min(page + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 border text-sm disabled:opacity-30 hover:bg-secondary/5"
          >
            Siguiente →
          </button>
        </div>

        {/* BOTÓN EXTRA */}
        <div className="mt-20 flex justify-center">
          <a
            href={generalWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border-b border-foreground pb-2 text-xs uppercase tracking-[0.25em] transition-colors hover:border-accent hover:text-accent"
          >
            ¿Buscas otro libro? Podemos conseguirlo
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Catalog;