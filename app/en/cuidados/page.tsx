import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/lib/contacto";

export const metadata: Metadata = {
  title: "Caring for your pieces — Unravelled Corner",
  description: "Washing, drying and storage tips so your crochet and knitwear pieces last for years.",
};

const tips = [
  {
    icon: "🧊",
    titulo: "Hand wash",
    texto: "Always hand wash in cold water with a mild detergent. Never wring the piece to remove water — press it gently against a towel instead.",
  },
  {
    icon: "☀️",
    titulo: "Dry flat",
    texto: "Lay the piece flat on a surface and let it dry away from direct sunlight. Never hang it or put it in the dryer — the weight of the water can stretch it out of shape.",
  },
  {
    icon: "📦",
    titulo: "Store folded",
    texto: "Store your pieces folded, never on a hanger, so they keep their shape. If it's wool, add a lavender sachet to keep moths away.",
  },
  {
    icon: "🧶",
    titulo: "By material",
    texto: "Cotton can handle more frequent washing. Merino wool, more sparingly and always in cold water. Stuffed amigurumis are best spot-cleaned with a damp cloth.",
  },
  {
    icon: "✂️",
    titulo: "Loose thread?",
    texto: "Never pull on a loose thread. Trim the excess carefully, or message me and I'll explain how to secure it without unravelling the piece.",
  },
  {
    icon: "🌿",
    titulo: "Iron with care",
    texto: "If you need to iron it, always use a cloth on top and a low heat setting, without pressing the iron directly onto the fabric.",
  },
];

export default function CareyPageEn() {
  return (
    <div className="min-h-screen py-16 px-6 max-w-4xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-monnama-brown-mid mb-10">
        <Link href="/en" className="hover:text-monnama-terra transition-colors">Home</Link>
        <span>/</span>
        <span className="text-monnama-brown font-medium">Caring for your pieces</span>
      </nav>

      <div className="mb-12 text-center">
        <h1 className="font-display text-5xl text-monnama-brown mb-3">Caring for your pieces</h1>
        <p className="text-monnama-brown-mid text-lg max-w-xl mx-auto">
          Every piece is handmade, stitch by stitch. With this care, it will last you for years.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {tips.map(({ icon, titulo, texto }) => (
          <div key={titulo} className="bg-monnama-surface rounded-2xl p-6">
            <span className="text-3xl mb-3 block">{icon}</span>
            <h2 className="font-display text-xl text-monnama-brown mb-2">{titulo}</h2>
            <p className="text-monnama-brown-mid text-sm leading-relaxed">{texto}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-monnama-peach p-8 text-center">
        <p className="font-display text-2xl text-monnama-brown mb-2">Questions about caring for your piece?</p>
        <p className="text-monnama-brown-mid mb-6">Message me and I&apos;ll be happy to help.</p>
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
