import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Mensaje enviado",
        description: "Te contactaremos en menos de 24 horas.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contacto" className="bg-background py-28 md:py-40">
      <div className="container-editorial grid grid-cols-12 gap-6">
        <div className="col-span-12 mb-16 flex items-center gap-6">
          <span className="eyebrow">05 — Contacto</span>
          <span className="h-px flex-1 bg-foreground/20" />
        </div>

        <div className="col-span-12 lg:col-span-5">
          <h2 className="font-serif text-balance text-5xl font-medium leading-[1.05] md:text-7xl">
            ¿Quieres que <span className="italic text-accent">DecoBook</span> visite tu campus?
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Escríbenos para coordinar una visita, hacer un pedido especial o
            recibir nuestro catálogo completo.
          </p>

          <dl className="mt-12 space-y-6 border-t border-border pt-8">
            <div className="flex items-baseline justify-between gap-6 border-b border-border pb-6">
              <dt className="eyebrow">WhatsApp</dt>
              <dd className="font-serif text-xl">+52 33 2614 9732</dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 border-b border-border pb-6">
              <dt className="eyebrow">Instagram</dt>
              <dd className="font-serif text-xl italic">@decobook</dd>
            </div>
            <div className="flex items-baseline justify-between gap-6">
              <dt className="eyebrow">Base</dt>
              <dd className="font-serif text-xl">Guadalajara, MX</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={onSubmit}
          className="col-span-12 space-y-6 lg:col-span-6 lg:col-start-7"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field label="Nombre" name="name" required />
            <Field label="Universidad / Evento" name="org" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field label="Correo" name="email" type="email" required />
            <Field label="Teléfono" name="phone" type="tel" />
          </div>
          <div>
            <label className="eyebrow">Mensaje</label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-3 w-full border-b border-foreground/30 bg-transparent py-3 font-serif text-xl placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              placeholder="Cuéntanos qué necesitas…"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="group inline-flex items-center gap-4 bg-foreground px-8 py-5 text-background transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-60"
          >
            <span className="font-mono-editorial text-xs uppercase tracking-[0.25em]">
              {sending ? "Enviando…" : "Enviar mensaje"}
            </span>
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="eyebrow">
      {label}
      {required && <span className="text-accent"> *</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      className="mt-3 w-full border-b border-foreground/30 bg-transparent py-3 font-serif text-xl placeholder:text-muted-foreground focus:border-accent focus:outline-none"
    />
  </div>
);

export default Contact;
