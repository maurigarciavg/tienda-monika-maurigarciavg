"use client";

import { useState } from "react";
import { productos, Tecnica, Categoria } from "@/data/productos";
import ProductCard from "@/components/ProductCard";

type FiltroTecnica = "Todas" | Tecnica;
type FiltroCategoria = "Todas" | Categoria;

const tecnicas: FiltroTecnica[] = ["Todas", "Crochet", "Knitting"];
const categorias: FiltroCategoria[] = [
  "Todas", "Gorros", "Bufandas", "Guantes", "Bolsos", "Amigurumis", "Bebé", "Hogar", "Ropa",
];

export default function CatalogoClient() {
  const [tecnica, setTecnica] = useState<FiltroTecnica>("Todas");
  const [categoria, setCategoria] = useState<FiltroCategoria>("Todas");

  const filtrar = (p: (typeof productos)[0]) => {
    const matchTecnica = tecnica === "Todas" || p.tecnica === tecnica;
    const matchCategoria = categoria === "Todas" || p.categoria === categoria;
    return matchTecnica && matchCategoria;
  };

  const disponibles = productos.filter((p) => filtrar(p) && p.disponible);
  const agotados = productos.filter((p) => filtrar(p) && !p.disponible);
  const productosFiltrados = [...disponibles, ...agotados];

  return (
    <>
      {/* Filtro por categoría */}
      <div className="mb-3">
        <p className="text-xs font-medium text-monnama-brown-mid uppercase tracking-wider mb-2">Categoría</p>
        <div className="flex gap-2 flex-wrap">
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => setCategoria(c)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-200 ${
                categoria === c
                  ? "bg-monnama-terra text-white border-monnama-terra"
                  : "bg-transparent text-monnama-brown border-monnama-brown-mid hover:border-monnama-terra hover:text-monnama-terra"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Filtro por técnica */}
      <div className="mb-10">
        <p className="text-xs font-medium text-monnama-brown-mid uppercase tracking-wider mb-2">Técnica</p>
        <div className="flex gap-2 flex-wrap">
          {tecnicas.map((t) => (
            <button
              key={t}
              onClick={() => setTecnica(t)}
              className={`px-4 py-2 rounded-full border text-sm transition-colors duration-200 ${
                tecnica === t
                  ? "bg-monnama-sage text-white border-monnama-sage"
                  : "bg-transparent text-monnama-brown-mid border-monnama-brown-mid/50 hover:border-monnama-sage hover:text-monnama-sage"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Contador */}
      <p className="text-monnama-brown-mid text-sm mb-6">
        {productosFiltrados.length} {productosFiltrados.length === 1 ? "pieza" : "piezas"}
        {(categoria !== "Todas" || tecnica !== "Todas") && " encontradas"}
      </p>

      {productosFiltrados.length === 0 ? (
        <p className="text-monnama-brown-mid text-center py-20">
          No hay productos en esta combinación de filtros.
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
