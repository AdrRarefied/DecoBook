import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ⚠️ Ajusta rutas si no usas alias "@"
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
  // duplicados para ejemplo
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

  // reset página al cambiar categoría
  useEffect(() => {
    setPage(1);
  }, [active]);

  // función para cambiar página + scroll
  const changePage = (newPage) => {
    setPage(newPage);

    document
      .getElementById("productos")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="productos" className="relative bg-background py-28 md:py-40">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedBooks.map((b, i) => (
            <article key={`${b.code}-${i}`}>
              <img src={b.img} alt={b.title} className="w-full" />
              <h3>{b.title}</h3>
              <p>{b.author}</p>
            </article>
          ))}
        </div>

        {/* PAGINACIÓN */}
        <div className="mt-16 flex justify-center gap-6 items-center">
          <button
            type="button"
            onClick={() => {
              changePage(Math.max(page - 1, 1));
              // Esperamos un momento a que React renderice para mover el scroll
              setTimeout(() => {
                document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            disabled={page === 1}
            className="px-4 py-2 border text-sm disabled:opacity-30 hover:bg-secondary/5 transition-colors"
          >
            ← Anterior
          </button>

          <span className="font-mono-editorial text-xs uppercase tracking-widest">
            Página {page} de {totalPages || 1}
          </span>

          <button
            type="button"
            onClick={() => {
              changePage(Math.min(page + 1, totalPages));
              // El timeout asegura que el scroll ocurra después de cargar los nuevos datos
              setTimeout(() => {
                document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            disabled={page === totalPages}
            className="px-4 py-2 border text-sm disabled:opacity-30 hover:bg-secondary/5 transition-colors"
          >
            Siguiente →
          </button>
</div>


      </div>
    </section>
  );
};

export default Catalog;