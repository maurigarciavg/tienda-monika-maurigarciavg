"use client";

import { useState } from "react";
import { productos, Tecnica } from "@/data/productos";
import ProductCard from "@/components/ProductCard";

type Filtro = "Todos" | Tecnica;
const filtros: Filtro[] = ["Todos", "Crochet", "Knitting"];

export default function CatalogoClient() {
  const [filtro, setFiltro] = useState<Filtro>("Todos");

  const productosFiltrados =
    filtro === "Todos"
      ? productos
      : productos.filter((p) => p.tecnica === filtro);

  return (
    <>
      <div className="flex gap-3 mb-10 flex-wrap">
        {filtros.map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`px-6 py-2 rounded-full border font-medium transition-colors duration-200 ${
              filtro === f
                ? "bg-monnama-terra text-white border-monnama-terra"
                : "bg-transparent text-monnama-brown border-monnama-brown-mid hover:border-monnama-terra hover:text-monnama-terra"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {productosFiltrados.length === 0 ? (
        <p className="text-monnama-brown-mid text-center py-20">
          No hay productos en esta categoría aún.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </>
  );
}
