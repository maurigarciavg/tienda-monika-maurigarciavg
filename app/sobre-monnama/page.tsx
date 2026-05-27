import type { Metadata } from "next";
import Image from "next/image";

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
        <div className="aspect-[4/5] bg-monnama-surface rounded-3xl overflow-hidden relative">
          {/* Cuando tengas la foto de Monika: guárdala en public/uploads/monika-perfil.jpg
              y cambia el src a "/uploads/monika-perfil.jpg" */}
          <Image
            src="/uploads/monika-perfil.jpg"
            alt="Monika, artesana detrás de Monnama"
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
            Granada, rodeada de montañas y luz del sur. Aquí es donde Monnama
            ha encontrado su hogar.
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
