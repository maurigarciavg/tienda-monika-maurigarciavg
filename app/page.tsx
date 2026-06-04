import Link from "next/link";
import { productos } from "@/data/productos";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";

const destacados = productos.filter((p) => p.disponible).slice(0, 3);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[88vh] flex items-center justify-center bg-gradient-to-br from-monnama-cream via-monnama-peach to-monnama-surface px-6 overflow-hidden">
        <div className="max-w-3xl text-center">
          <p
            className="text-monnama-terra font-medium tracking-widest uppercase text-sm mb-4 hero-animate"
            style={{ animationDelay: "0.1s" }}
          >
            Hecho a mano
          </p>
          <h1
            className="font-display text-5xl md:text-7xl text-monnama-brown leading-tight mb-4 hero-animate"
            style={{ animationDelay: "0.25s" }}
          >
            Cada pieza,
            <br />
            una historia.
          </h1>

          {/* Cordón animado: se dibuja y luego oscila suavemente */}
          <div className="flex justify-center mb-6 hero-animate yarn-sway" style={{ animationDelay: "0.4s" }}>
            <svg
              viewBox="0 0 420 40"
              className="w-full max-w-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0,20 C20,6 40,6 60,20 C80,34 100,34 120,20 C140,6 160,6 180,20 C200,34 220,34 240,20 C260,6 280,6 300,20 C320,34 340,34 360,20 C380,6 400,6 420,20"
                stroke="#7B9B7E"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="yarn-path"
              />
            </svg>
          </div>

          <p
            className="text-monnama-brown-mid text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed hero-animate"
            style={{ animationDelay: "0.5s" }}
          >
            Crochet y knitting tejidos con amor, puntada a puntada. Piezas
            únicas que no encontrarás en ningún otro lugar.
          </p>
          <div className="hero-animate" style={{ animationDelay: "0.65s" }}>
            <Link
              href="/catalogo"
              className="inline-block bg-monnama-terra hover:bg-monnama-terra-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-200"
            >
              Ver catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-monnama-brown mb-3">
              Creaciones recientes
            </h2>
            <p className="text-monnama-brown-mid">
              Piezas disponibles ahora mismo
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destacados.map((producto, i) => (
            <ScrollReveal key={producto.id} delay={i * 120} variant="weave">
              <ProductCard producto={producto} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center mt-12">
            <Link
              href="/catalogo"
              className="inline-block border-2 border-monnama-terra text-monnama-terra hover:bg-monnama-terra hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Ver todos los productos
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Teaser sobre Monnama */}
      <ScrollReveal>
        <section className="bg-monnama-peach py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl text-monnama-brown mb-6">
              El alma detrás de Monnama
            </h2>
            <p className="text-monnama-brown-mid text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Cada punto, cada vuelta, cada pieza lleva el tiempo y el cariño de
              Monika. Nada es producido en serie. Todo es único, como tú.
            </p>
            <Link
              href="/sobre-monnama"
              className="text-monnama-terra font-medium hover:text-monnama-terra-dark underline underline-offset-4 transition-colors"
            >
              Conoce su historia →
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
