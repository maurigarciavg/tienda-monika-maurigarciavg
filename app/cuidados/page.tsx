import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/lib/contacto";

export const metadata: Metadata = {
  title: "Cuidado de tus piezas — Unravelled Corner",
  description: "Consejos de lavado, secado y conservación para que tus piezas de crochet y punto duren muchos años.",
};

const consejos = [
  {
    icon: "🧊",
    titulo: "Lavado a mano",
    texto: "Lava siempre a mano con agua fría y un detergente suave. Nunca retuerzas la pieza para escurrirla: presiona suavemente con una toalla para quitar el exceso de agua.",
  },
  {
    icon: "☀️",
    titulo: "Secado en plano",
    texto: "Extiende la pieza sobre una superficie plana y déjala secar lejos de la luz solar directa. Nunca la cuelgues ni la metas en la secadora — el peso del agua puede deformarla.",
  },
  {
    icon: "📦",
    titulo: "Guárdala doblada",
    texto: "Guarda tus piezas dobladas, nunca colgadas en una percha, para que no pierdan la forma. Si es lana, añade un saquito de lavanda para mantener alejadas las polillas.",
  },
  {
    icon: "🧶",
    titulo: "Según el material",
    texto: "El algodón admite lavados más frecuentes. La lana merino, con moderación y siempre con agua fría. Los amigurumis rellenos, mejor limpiarlos solo por la superficie con un paño húmedo.",
  },
  {
    icon: "✂️",
    titulo: "¿Un hilo suelto?",
    texto: "Nunca tires de un hilo suelto. Corta el sobrante con cuidado o escríbeme y te explico cómo rematarlo sin que se deshaga la pieza.",
  },
  {
    icon: "🌿",
    titulo: "Plancha con cuidado",
    texto: "Si necesitas planchar, hazlo siempre con un paño por encima y temperatura baja, sin apoyar la plancha directamente sobre el tejido.",
  },
];

export default function CuidadosPage() {
  return (
    <div className="min-h-screen py-16 px-6 max-w-4xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-monnama-brown-mid mb-10">
        <Link href="/" className="hover:text-monnama-terra transition-colors">Inicio</Link>
        <span>/</span>
        <span className="text-monnama-brown font-medium">Cuidado de tus piezas</span>
      </nav>

      <div className="mb-12 text-center">
        <h1 className="font-display text-5xl text-monnama-brown mb-3">Cuidado de tus piezas</h1>
        <p className="text-monnama-brown-mid text-lg max-w-xl mx-auto">
          Cada pieza está hecha a mano, puntada a puntada. Con estos cuidados te durará muchísimos años.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {consejos.map(({ icon, titulo, texto }) => (
          <div key={titulo} className="bg-monnama-surface rounded-2xl p-6">
            <span className="text-3xl mb-3 block">{icon}</span>
            <h2 className="font-display text-xl text-monnama-brown mb-2">{titulo}</h2>
            <p className="text-monnama-brown-mid text-sm leading-relaxed">{texto}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-monnama-peach p-8 text-center">
        <p className="font-display text-2xl text-monnama-brown mb-2">¿Dudas sobre el cuidado de tu pieza?</p>
        <p className="text-monnama-brown-mid mb-6">Escríbeme y te ayudo encantada.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://www.instagram.com/unravelledcorner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-monnama-terra hover:bg-monnama-terra-dark text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
          >
            Instagram
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:brightness-95 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
          >
            WhatsApp
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
