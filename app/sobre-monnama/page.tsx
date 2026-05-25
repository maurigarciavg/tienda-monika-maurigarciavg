import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Monnama — La historia de Monika",
  description:
    "Conoce a Monika, la artesana detrás de Monnama. Crochet y knitting hechos con amor.",
};

export default function SobreMonnamaPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      {/* Encabezado */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="font-display text-5xl md:text-6xl text-monnama-brown mb-6">
          Sobre Monnama
        </h1>
        <p className="text-monnama-brown-mid text-xl leading-relaxed">
          La historia detrás de cada puntada.
        </p>
      </div>

      {/* Historia */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div className="aspect-[4/5] bg-monnama-surface rounded-3xl flex items-center justify-center">
          <span className="text-8xl">🧶</span>
        </div>
        <div>
          <h2 className="font-display text-3xl text-monnama-brown mb-6">
            Hola, soy Monika
          </h2>
          <p className="text-monnama-brown-mid leading-relaxed mb-4">
            Cada pieza que creo lleva tiempo, cuidado y mucho cariño. El
            crochet y el knitting no son solo técnicas para mí — son una forma
            de crear algo único con mis propias manos.
          </p>
          <p className="text-monnama-brown-mid leading-relaxed mb-4">
            Cada proyecto es diferente, cada lana tiene su carácter, y cada
            pieza que sale de mis manos es irrepetible. Eso es lo que hace
            especial a Monnama.
          </p>
          <p className="text-monnama-brown-mid leading-relaxed">
            Si ves algo que te gusta, no dudes en contactarme. Puedo adaptar
            colores, tamaños o crear algo completamente personalizado para ti.
          </p>
        </div>
      </div>

      {/* Valores */}
      <div className="max-w-5xl mx-auto bg-monnama-peach rounded-3xl p-12">
        <h2 className="font-display text-3xl text-monnama-brown text-center mb-10">
          Lo que hace especial a Monnama
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              emoji: "✋",
              titulo: "100% artesanal",
              texto: "Cada pieza está tejida a mano, sin producción en serie.",
            },
            {
              emoji: "🎨",
              titulo: "Personalizable",
              texto:
                "¿Quieres otro color o talla? Escríbeme y lo hacemos juntas.",
            },
            {
              emoji: "💚",
              titulo: "Hecho con amor",
              texto: "Cada puntada lleva tiempo y dedicación real.",
            },
          ].map(({ emoji, titulo, texto }) => (
            <div key={titulo} className="text-center">
              <div className="text-4xl mb-3">{emoji}</div>
              <h3 className="font-display text-xl text-monnama-brown mb-2">
                {titulo}
              </h3>
              <p className="text-monnama-brown-mid">{texto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
