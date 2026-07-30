"use client";

import { useState } from "react";
import { productos, Tecnica, Categoria } from "@/data/productos";
import ProductCard from "@/components/ProductCard";
import ProductCardLookbook from "@/components/ProductCardLookbook";
import ScrollReveal from "@/components/ScrollReveal";

type FiltroTecnica = "Todas" | Tecnica;
type FiltroCategoria = "Todas" | Categoria;
type Vista = "grid" | "lookbook";

const tecnicas: FiltroTecnica[] = ["Todas", "Crochet", "Knitting"];
const categorias: FiltroCategoria[] = [
  "Todas", "Gorros", "Bufandas", "Guantes", "Bolsos", "Amigurumis", "Bebé", "Hogar", "Ropa",
];

const countPorCategoria = (c: FiltroCategoria) =>
  c === "Todas" ? productos.length : productos.filter((p) => p.categoria === c).length;

const countPorTecnica = (t: FiltroTecnica) =>
  t === "Todas" ? productos.length : productos.filter((p) => p.tecnica === t).length;

const GridIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
    <rect x="1" y="1" width="6" height="6" rx="1" />
    <rect x="9" y="1" width="6" height="6" rx="1" />
    <rect x="1" y="9" width="6" height="6" rx="1" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
  </svg>
);

const LookbookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
    <rect x="1" y="1" width="14" height="4" rx="1" />
    <rect x="1" y="7" width="14" height="4" rx="1" />
    <rect x="1" y="13" width="14" height="2" rx="1" />
  </svg>
);

export default function CatalogoClient() {
  const [tecnica, setTecnica] = useState<FiltroTecnica>("Todas");
  const [categoria, setCategoria] = useState<FiltroCategoria>("Todas");
  const [vista, setVista] = useState<Vista>("grid");

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
      {/* Controles: filtros + vista */}
      <div className="flex flex-col gap-4 mb-10">
        {/* Filtro categoría */}
        <div>
          <p className="text-xs font-medium text-monnama-brown-mid uppercase tracking-wider mb-2">
            Categoría
          </p>
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
                {c}{c !== "Todas" && ` (${countPorCategoria(c)})`}
              </button>
            ))}
          </div>
        </div>

        {/* Filtro técnica + toggle vista */}
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-medium text-monnama-brown-mid uppercase tracking-wider mb-2">
              Técnica
            </p>
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
                  {t}{t !== "Todas" && ` (${countPorTecnica(t)})`}
                </button>
              ))}
            </div>
          </div>

          {/* Toggle grid / lookbook */}
          <div className="flex items-center gap-1 bg-monnama-surface rounded-lg p-1">
            <button
              onClick={() => setVista("grid")}
              title="Vista cuadrícula"
              className={`p-2 rounded-md transition-colors duration-200 ${
                vista === "grid"
                  ? "bg-white text-monnama-terra shadow-sm"
                  : "text-monnama-brown-mid hover:text-monnama-brown"
              }`}
            >
              <GridIcon />
            </button>
            <button
              onClick={() => setVista("lookbook")}
              title="Vista lookbook"
              className={`p-2 rounded-md transition-colors duration-200 ${
                vista === "lookbook"
                  ? "bg-white text-monnama-terra shadow-sm"
                  : "text-monnama-brown-mid hover:text-monnama-brown"
              }`}
            >
              <LookbookIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Contador */}
      <p className="text-monnama-brown-mid text-sm mb-6">
        {productosFiltrados.length}{" "}
        {productosFiltrados.length === 1 ? "pieza" : "piezas"}
        {(categoria !== "Todas" || tecnica !== "Todas") && " encontradas"}
      </p>

      {/* Productos */}
      {productosFiltrados.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
          <span className="text-6xl">🧶</span>
          <h3 className="font-display text-2xl text-monnama-brown">
            No hay piezas con esos filtros
          </h3>
          <p className="text-monnama-brown-mid max-w-xs">
            Prueba con otra categoría o técnica, o explora todo el catálogo.
          </p>
          <button
            onClick={() => { setCategoria("Todas"); setTecnica("Todas"); }}
            className="mt-2 px-6 py-2 rounded-full bg-monnama-terra text-white text-sm font-medium hover:bg-monnama-terra-dark transition-colors duration-200"
          >
            Ver todas las piezas
          </button>
        </div>
      ) : vista === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto, i) => (
            <ScrollReveal key={producto.id} delay={(i % 3) * 100} >
              <ProductCard producto={producto} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {productosFiltrados.map((producto, i) => (
            <ScrollReveal key={producto.id} delay={80}>
              <ProductCardLookbook producto={producto} index={i} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </>
  );
}
