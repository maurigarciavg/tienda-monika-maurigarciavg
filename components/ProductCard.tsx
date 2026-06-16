import Link from "next/link";
import Image from "next/image";
import { Producto } from "@/data/productos";

export default function ProductCard({ producto }: { producto: Producto }) {
  return (
    <Link href={`/producto/${producto.id}`} className="group block">
      <div className="bg-monnama-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-monnama-terra/20 hover:-translate-y-1.5 transition-all duration-300">
        <div className="aspect-square relative bg-monnama-peach/50 flex items-center justify-center">
          {producto.imagen ? (
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <span className="text-6xl">🧶</span>
          )}
          <span className="absolute top-3 left-3 bg-white/90 text-monnama-terra text-xs font-medium px-3 py-1 rounded-full">
            {producto.tecnica}
          </span>
          {!producto.disponible && (
            <span className="absolute top-3 right-3 bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full">
              Agotado
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl text-monnama-brown mb-1 group-hover:text-monnama-terra transition-colors">
            {producto.nombre}
          </h3>
          <p className="text-monnama-terra font-bold text-lg">
            {producto.precio}€
          </p>
        </div>
      </div>
    </Link>
  );
}
