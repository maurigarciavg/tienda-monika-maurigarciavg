import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Monika — La artesana detrás de Unravelled Corner",
  description:
    "Conoce a Monika, la artesana detrás de Unravelled Corner. Crochet y knitting hechos con amor.",
};

export default function SobreMonicaPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      {/* Encabezado */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="font-display text-5xl md:text-6xl text-monnama-brown mb-6">
          Sobre Monika
        </h1>
        <p className="text-monnama-brown-mid text-xl leading-relaxed">
          La historia detrás de cada puntada.
        </p>
      </div>

      {/* Historia */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div className="aspect-[4/5] bg-monnama-surface rounded-3xl overflow-hidden relative">
          {/* Cuando tengas la foto de Monika: guárdala en public/uploads/monika-perfil.jpg
              y cambia el src a "/uploads/monika-perfil.jpg" */}
          <Image
            src="/uploads/monika-perfil.jpg"
            alt="Monika, artesana detrás de Unravelled Corner"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl text-monnama-brown mb-6">
            Hola, soy Monika
          </h2>
          <p className="text-monnama-brown-mid leading-relaxed mb-4">
            Soy de Eslovaquia, pero la vida me ha llevado por caminos bonitos:
            viví en Reino Unido, volví a mi país, y ahora he echado raíces en
            Granada, rodeada de montañas y luz del sur. Aquí es donde Unravelled Corner
            encontró su hogar.
          </p>
          <p className="text-monnama-brown-mid leading-relaxed mb-4">
            Las manualidades han sido parte de mí desde siempre. El crochet y
            el knitting en especial — coger una madeja de lana y convertirla en
            algo que alguien va a usar y querer — eso no tiene precio. Cada
            punto es una pequeña decisión, y cada pieza terminada es algo
            único que no existía antes.
          </p>
          <p className="text-monnama-brown-mid leading-relaxed">
            Si algo te llama la atención, escríbeme. Puedo adaptar colores,
            tallas o crear algo pensado solo para ti.
          </p>
        </div>
      </div>

      {/* YouTube */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="font-display text-3xl text-monnama-brown text-center mb-3">
          Escúchame en YouTube
        </h2>
        <p className="text-monnama-brown-mid text-center mb-8">
          Monika comparte su mundo del tejido en su canal — técnicas, inspiración y el día a día de crear a mano.
        </p>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/96c723AdVlY"
            title="Unravelled Corner — Podcast"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="text-center mt-6">
          <a
            href="https://www.youtube.com/@Unravelledcorner-h6u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-monnama-terra hover:text-monnama-terra-dark font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Ver el canal →
          </a>
        </div>
      </div>

      {/* Valores */}
      <div className="max-w-5xl mx-auto bg-monnama-peach rounded-3xl p-12">
        <h2 className="font-display text-3xl text-monnama-brown text-center mb-10">
          Lo que hace especial a Unravelled Corner
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              emoji: "✋",
              titulo: "100% artesanal",
              texto: "Cada pieza está tejida a mano. Sin máquinas, sin producción en serie.",
            },
            {
              emoji: "🌿",
              titulo: "Con raíces",
              texto: "Inspirada en la naturaleza, la montaña y el ritmo tranquilo de las cosas hechas despacio.",
            },
            {
              emoji: "🎨",
              titulo: "A tu medida",
              texto: "¿Otro color, otra talla, algo completamente nuevo? Escríbeme y lo creamos juntas.",
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
