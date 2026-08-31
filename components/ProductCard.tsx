import Link from "next/link";
import Image from "next/image";
import { Producto, getNombre } from "@/data/productos";

type Locale = "es" | "en";

export default function ProductCard({
  producto,
  locale = "es",
}: {
  producto: Producto;
  locale?: Locale;
}) {
  const agotado = !producto.disponible;
  const soldLabel = locale === "en" ? "Sold out" : "Agotado";
  const handmadeLabel = locale === "en" ? "Handmade" : "Hecho a mano";
  const viewLabel = locale === "en" ? "View →" : "Ver pieza →";
  const href = locale === "en" ? `/en/producto/${producto.id}` : `/producto/${producto.id}`;

  return (
    <Link
      href={href}
      className={`group block ${agotado ? "cursor-default" : ""}`}
    >
      <div
        className={`bg-monnama-surface rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
          agotado
            ? "opacity-60"
            : "hover:shadow-xl hover:shadow-monnama-terra/20 hover:-translate-y-1.5"
        }`}
      >
        <div className="aspect-square relative bg-monnama-peach/50 flex items-center justify-center overflow-hidden">
          {producto.imagen ? (
            <Image
              src={producto.imagen}
              alt={getNombre(producto, locale)}
              fill
              className={`object-cover transition-transform duration-700 ease-out ${
                agotado ? "grayscale" : "group-hover:scale-110"
              }`}
            />
          ) : (
            <span className="text-6xl">🧶</span>
          )}
          {!agotado && (
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-monnama-brown/80 via-monnama-brown/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-end justify-center pb-5">
              <span className="text-white text-sm font-medium tracking-wide">
                {viewLabel}
              </span>
            </div>
          )}
          <span className="absolute top-3 left-3 bg-white/90 text-monnama-terra text-xs font-medium px-3 py-1 rounded-full">
            {producto.tecnica}
          </span>
          {agotado && (
            <span className="absolute top-3 right-3 bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full">
              {soldLabel}
            </span>
          )}
        </div>
        <div className="p-5">
          <h3
            className={`font-display text-xl text-monnama-brown mb-1 transition-colors ${
              agotado ? "" : "group-hover:text-monnama-terra"
            }`}
          >
            {getNombre(producto, locale)}
          </h3>
          <div className="flex items-center justify-between mt-1">
            <p className={`font-bold text-lg ${agotado ? "text-monnama-brown-mid" : "text-monnama-terra"}`}>
              {producto.precio}€
            </p>
            {!agotado && (
              <span className="flex items-center gap-1 text-xs text-monnama-brown-mid/70">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-monnama-sage opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-monnama-sage" />
                </span>
                {handmadeLabel}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
