"use client";

import { useState } from "react";
import { productos, Tecnica, Categoria } from "@/data/productos";
import ProductCard from "@/components/ProductCard";
import ProductCardLookbook from "@/components/ProductCardLookbook";
import ScrollReveal from "@/components/ScrollReveal";

type Locale = "es" | "en";
type FiltroTecnica = "Todas" | Tecnica;
type FiltroCategoria = "Todas" | Categoria;
type Vista = "grid" | "lookbook";

const tecnicas: FiltroTecnica[] = ["Todas", "Crochet", "Knitting"];
const categorias: FiltroCategoria[] = [
  "Todas", "Gorros", "Bufandas", "Guantes", "Bolsos", "Amigurumis", "Bebé", "Hogar", "Ropa",
];

const CATEGORY_LABELS: Record<Locale, Record<FiltroCategoria, string>> = {
  es: { Todas: "Todas", Gorros: "Gorros", Bufandas: "Bufandas", Guantes: "Guantes", Bolsos: "Bolsos", Amigurumis: "Amigurumis", "Bebé": "Bebé", Hogar: "Hogar", Ropa: "Ropa" },
  en: { Todas: "All", Gorros: "Hats", Bufandas: "Scarves", Guantes: "Gloves", Bolsos: "Bags", Amigurumis: "Amigurumis", "Bebé": "Baby", Hogar: "Home", Ropa: "Clothing" },
};

const TECHNIQUE_LABELS: Record<Locale, Record<FiltroTecnica, string>> = {
  es: { Todas: "Todas", Crochet: "Crochet", Knitting: "Knitting" },
  en: { Todas: "All", Crochet: "Crochet", Knitting: "Knitting" },
};

const countPorCategoria = (c: FiltroCategoria, tecnicaActiva: FiltroTecnica) => {
  const base = tecnicaActiva === "Todas" ? productos : productos.filter((p) => p.tecnica === tecnicaActiva);
  return c === "Todas" ? base.length : base.filter((p) => p.categoria === c).length;
};

const countPorTecnica = (t: FiltroTecnica, categoriaActiva: FiltroCategoria) => {
  const base = categoriaActiva === "Todas" ? productos : productos.filter((p) => p.categoria === categoriaActiva);
  return t === "Todas" ? base.length : base.filter((p) => p.tecnica === t).length;
};

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

export default function CatalogoClient({ locale = "es" }: { locale?: Locale }) {
  const [tecnica, setTecnica] = useState<FiltroTecnica>("Todas");
  const [categoria, setCategoria] = useState<FiltroCategoria>("Todas");
  const [vista, setVista] = useState<Vista>("grid");
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  const catLabels = CATEGORY_LABELS[locale];
  const techLabels = TECHNIQUE_LABELS[locale];
  const allLabel = locale === "en" ? "All" : "Todas";

  const filtrar = (p: (typeof productos)[0]) => {
    const matchTecnica = tecnica === "Todas" || p.tecnica === tecnica;
    const matchCategoria = categoria === "Todas" || p.categoria === categoria;
    return matchTecnica && matchCategoria;
  };

  const disponibles = productos.filter((p) => filtrar(p) && p.disponible);
  const agotados = productos.filter((p) => filtrar(p) && !p.disponible);
  const productosFiltrados = soloDisponibles ? disponibles : [...disponibles, ...agotados];

  const pieceLabel = locale === "en"
    ? productosFiltrados.length === 1 ? "piece" : "pieces"
    : productosFiltrados.length === 1 ? "pieza" : "piezas";
  const foundLabel = locale === "en" ? "found" : "encontradas";
  const emptyTitle = locale === "en" ? "No pieces match those filters" : "No hay piezas con esos filtros";
  const emptyText = locale === "en" ? "Try a different category or technique, or browse all pieces." : "Prueba con otra categoría o técnica, o explora todo el catálogo.";
  const emptyBtn = locale === "en" ? "View all pieces" : "Ver todas las piezas";
  const categoryLabel = locale === "en" ? "Category" : "Categoría";
  const techniqueLabel = locale === "en" ? "Technique" : "Técnica";

  return (
    <>
      {/* Filtros + vista */}
      <div className="flex flex-col gap-4 mb-10">
        <div>
          <p className="text-xs font-medium text-monnama-brown-mid uppercase tracking-wider mb-2">
            {categoryLabel}
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
                {catLabels[c]}{c !== "Todas" && ` (${countPorCategoria(c, tecnica)})`}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-medium text-monnama-brown-mid uppercase tracking-wider mb-2">
              {techniqueLabel}
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
                  {techLabels[t]}{t !== "Todas" && ` (${countPorTecnica(t, categoria)})`}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSoloDisponibles(!soloDisponibles)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-colors duration-200 ${
                soloDisponibles
                  ? "bg-monnama-brown text-white border-monnama-brown"
                  : "border-monnama-brown-mid/40 text-monnama-brown-mid hover:border-monnama-brown hover:text-monnama-brown"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${soloDisponibles ? "bg-monnama-sage" : "bg-monnama-brown-mid/40"}`} />
              {locale === "en" ? "Available only" : "Solo disponibles"}
            </button>

          <div className="flex items-center gap-1 bg-monnama-surface rounded-lg p-1">
            <button
              onClick={() => setVista("grid")}
              title={locale === "en" ? "Grid view" : "Vista cuadrícula"}
              className={`p-2 rounded-md transition-colors duration-200 ${
                vista === "grid" ? "bg-white text-monnama-terra shadow-sm" : "text-monnama-brown-mid hover:text-monnama-brown"
              }`}
            >
              <GridIcon />
            </button>
            <button
              onClick={() => setVista("lookbook")}
              title="Lookbook"
              className={`p-2 rounded-md transition-colors duration-200 ${
                vista === "lookbook" ? "bg-white text-monnama-terra shadow-sm" : "text-monnama-brown-mid hover:text-monnama-brown"
              }`}
            >
              <LookbookIcon />
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Contador */}
      <p className="text-monnama-brown-mid text-sm mb-6">
        {productosFiltrados.length} {pieceLabel}
        {(categoria !== "Todas" || tecnica !== "Todas") && ` ${foundLabel}`}
      </p>

      {/* Productos */}
      {productosFiltrados.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
          <span className="text-6xl">🧶</span>
          <h3 className="font-display text-2xl text-monnama-brown">{emptyTitle}</h3>
          <p className="text-monnama-brown-mid max-w-xs">{emptyText}</p>
          <button
            onClick={() => { setCategoria("Todas"); setTecnica("Todas"); setSoloDisponibles(false); }}
            className="mt-2 px-6 py-2 rounded-full bg-monnama-terra text-white text-sm font-medium hover:bg-monnama-terra-dark transition-colors duration-200"
          >
            {emptyBtn}
          </button>
        </div>
      ) : vista === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto, i) => (
            <ScrollReveal key={producto.id} delay={(i % 3) * 100}>
              <ProductCard producto={producto} locale={locale} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {productosFiltrados.map((producto, i) => (
            <ScrollReveal key={producto.id} delay={80}>
              <ProductCardLookbook producto={producto} index={i} locale={locale} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </>
  );
}
