import Link from "next/link";
import Image from "next/image";
import { Producto } from "@/data/productos";

type Locale = "es" | "en";

export default function ProductCardLookbook({
  producto,
  index,
  locale = "es",
}: {
  producto: Producto;
  index: number;
  locale?: Locale;
}) {
  const reversed = index % 2 === 1;

  const href = locale === "en" ? `/en/producto/${producto.id}` : `/producto/${producto.id}`;
  const viewLabel = locale === "en" ? "View piece →" : "Ver pieza →";
  const soldLabel = locale === "en" ? "Sold out" : "Agotado";

  return (
    <Link href={href} className="group block">
      <div
        className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} bg-monnama-surface rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500`}
      >
        {/* Imagen — 55% */}
        <div className="md:w-[55%] aspect-[4/3] md:aspect-auto relative bg-monnama-peach/40 flex-shrink-0">
          {producto.imagen ? (
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              fill
              className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-8xl">🧶</span>
            </div>
          )}
          {!producto.disponible && (
            <span className="absolute top-4 left-4 bg-gray-800/90 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {soldLabel}
            </span>
          )}
          <span className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-monnama-terra text-xs font-medium px-3 py-1.5 rounded-full">
            {producto.tecnica}
          </span>
        </div>

        {/* Info — 45% */}
        <div className="md:w-[45%] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <p className="text-monnama-brown-mid text-xs uppercase tracking-widest mb-3">
            {producto.categoria}
          </p>
          <h3 className="font-display text-3xl md:text-4xl text-monnama-brown mb-5 group-hover:text-monnama-terra transition-colors duration-300 leading-tight">
            {producto.nombre}
          </h3>
          <p className="text-monnama-brown-mid leading-relaxed mb-8 line-clamp-4">
            {producto.descripcion}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-monnama-terra">
              {producto.precio}€
            </p>
            <span className="text-sm font-medium text-monnama-brown-mid group-hover:text-monnama-terra transition-colors duration-300">
              {viewLabel}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
