import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes — Unravelled Corner",
  description: "Resuelve tus dudas sobre pedidos, envíos, materiales y encargos personalizados en Unravelled Corner.",
};

const faqs = [
  {
    q: "¿Cómo hago un pedido?",
    a: "Escríbeme por Instagram (@made_bymonnama) o por email a unravelledcorner@gmail.com indicando la pieza que te interesa. Te confirmaré disponibilidad y te cuento todos los detalles antes de proceder.",
  },
  {
    q: "¿Cuánto tarda en llegar?",
    a: "Las piezas disponibles se envían en 3–5 días hábiles desde la confirmación del pago. Los pedidos a medida pueden tardar entre 2 y 4 semanas según la complejidad de la pieza.",
  },
  {
    q: "¿Cuánto cuesta el envío?",
    a: "El envío nacional (España peninsular) tiene un coste de 4€ o es gratuito en pedidos superiores a 50€. Para envíos a Baleares, Canarias o internacionales, consúltame directamente y busco la mejor opción.",
  },
  {
    q: "¿Hacéis pedidos a medida?",
    a: "¡Sí! Puedes elegir colores, tallas y materiales. Escríbeme con tu idea y lo hablamos. Los encargos personalizados son una de mis cosas favoritas.",
  },
  {
    q: "¿Con qué materiales trabajáis?",
    a: "Uso hilos de alta calidad: algodón 100% orgánico, lana merino y mezclas premium. Si tienes alguna alergia, sensibilidad o preferencia especial, indícamelo al encargar y lo tengo en cuenta.",
  },
  {
    q: "¿Cómo pago?",
    a: "El pago se realiza por transferencia bancaria o Bizum una vez que confirmemos los detalles del pedido. No cobro por adelantado sin habernos puesto en contacto antes.",
  },
  {
    q: "¿Puedo devolver un producto?",
    a: "Al tratarse de artículos artesanales únicos, no acepto devoluciones salvo defecto de fabricación. Si hay cualquier problema con tu pedido, escríbeme y lo solucionamos — tu satisfacción es lo primero.",
  },
  {
    q: "¿Los colores son exactos a las fotos?",
    a: "Las fotos son lo más fieles posible a la realidad, pero puede haber pequeñas variaciones según la pantalla y la iluminación. Si tienes dudas sobre un color concreto, puedo enviarte fotos adicionales antes de confirmar el pedido.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen py-16 px-6 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-monnama-brown-mid mb-10">
        <Link href="/" className="hover:text-monnama-terra transition-colors">Inicio</Link>
        <span>/</span>
        <span className="text-monnama-brown font-medium">Preguntas frecuentes</span>
      </nav>

      <div className="mb-12">
        <h1 className="font-display text-5xl text-monnama-brown mb-3">Preguntas frecuentes</h1>
        <p className="text-monnama-brown-mid text-lg">Todo lo que necesitas saber antes de hacer tu pedido.</p>
      </div>

      <div className="space-y-3">
        {faqs.map(({ q, a }) => (
          <details
            key={q}
            className="group bg-monnama-surface rounded-2xl overflow-hidden border border-monnama-peach open:border-monnama-terra/30 transition-colors"
          >
            <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-monnama-brown font-medium text-lg hover:text-monnama-terra transition-colors select-none">
              {q}
              <span className="shrink-0 text-monnama-terra/60 text-xl transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="px-6 pb-6 text-monnama-brown-mid leading-relaxed">{a}</p>
          </details>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-monnama-peach p-8 text-center">
        <p className="font-display text-2xl text-monnama-brown mb-2">¿No encuentras tu respuesta?</p>
        <p className="text-monnama-brown-mid mb-6">Escríbeme directamente y te respondo lo antes posible.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://www.instagram.com/made_bymonnama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-monnama-terra hover:bg-monnama-terra-dark text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
          >
            Instagram
          </a>
          <a
            href="mailto:unravelledcorner@gmail.com"
            className="inline-flex items-center justify-center gap-2 border-2 border-monnama-terra text-monnama-terra hover:bg-monnama-terra hover:text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
