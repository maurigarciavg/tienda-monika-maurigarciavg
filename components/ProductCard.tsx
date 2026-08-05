import Link from "next/link";
import Image from "next/image";
import { Producto } from "@/data/productos";

export default function ProductCard({ producto }: { producto: Producto }) {
  const agotado = !producto.disponible;

  return (
    <Link
      href={`/producto/${producto.id}`}
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
              alt={producto.nombre}
              fill
              className={`object-cover transition-transform duration-500 ${
                agotado ? "grayscale" : "group-hover:scale-105"
              }`}
            />
          ) : (
            <span className="text-6xl">🧶</span>
          )}
          {!agotado && (
            <div className="absolute inset-0 bg-monnama-brown/0 group-hover:bg-monnama-brown/30 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                Ver pieza →
              </span>
            </div>
          )}
          <span className="absolute top-3 left-3 bg-white/90 text-monnama-terra text-xs font-medium px-3 py-1 rounded-full">
            {producto.tecnica}
          </span>
          {agotado && (
            <span className="absolute top-3 right-3 bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full">
              Agotado
            </span>
          )}
        </div>
        <div className="p-5">
          <h3
            className={`font-display text-xl text-monnama-brown mb-1 transition-colors ${
              agotado ? "" : "group-hover:text-monnama-terra"
            }`}
          >
            {producto.nombre}
          </h3>
          <p className={`font-bold text-lg ${agotado ? "text-monnama-brown-mid" : "text-monnama-terra"}`}>
            {producto.precio}€
          </p>
        </div>
      </div>
    </Link>
  );
}
