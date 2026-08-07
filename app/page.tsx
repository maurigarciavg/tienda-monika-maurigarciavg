import Link from "next/link";
import { productos } from "@/data/productos";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import Marquee from "@/components/Marquee";

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
                stroke="#E8829A"
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

      <Marquee />

      {/* Cifras */}
      <section className="py-16 px-6 bg-monnama-brown">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { value: "100+", label: "Piezas tejidas" },
              { value: "5 años", label: "Creando con amor" },
              { value: "50+", label: "Clientas felices" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-5xl text-monnama-terra mb-2">{value}</p>
                <p className="text-monnama-cream/70 text-sm tracking-wide uppercase">{label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
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
            <ScrollReveal key={producto.id} delay={i * 120}>
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

      {/* Cómo comprar */}
      <section className="py-20 px-6 bg-monnama-surface">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl text-monnama-brown mb-3">
                ¿Cómo comprar?
              </h2>
              <p className="text-monnama-brown-mid">
                Sin complicaciones, como debe ser.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                icon: "🧶",
                title: "Elige tu pieza",
                desc: "Explora el catálogo y encuentra la pieza que enamora. Cada una es única y hecha a mano.",
              },
              {
                step: "02",
                icon: "💬",
                title: "Contáctame",
                desc: "Escríbeme por Instagram o email. Te confirmo disponibilidad y te cuento todos los detalles.",
              },
              {
                step: "03",
                icon: "📦",
                title: "Recíbela con amor",
                desc: "Tu pieza llega envuelta con mimo, lista para regalar o para disfrutar tú misma.",
              },
            ].map(({ step, icon, title, desc }, i) => (
              <ScrollReveal key={step} delay={i * 120}>
                <div className="flex flex-col items-center text-center">
                  <span className="text-xs font-bold tracking-widest text-monnama-terra/50 mb-3">
                    {step}
                  </span>
                  <span className="text-5xl mb-4">{icon}</span>
                  <h3 className="font-display text-xl text-monnama-brown mb-2">
                    {title}
                  </h3>
                  <p className="text-monnama-brown-mid text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="text-center mt-14">
              <a
                href="https://www.instagram.com/made_bymonnama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-monnama-terra hover:bg-monnama-terra-dark text-white px-8 py-4 rounded-full font-medium transition-colors duration-200"
              >
                Contactar por Instagram
              </a>
            </div>
          </ScrollReveal>
        </div>
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

      {/* Testimonios */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl text-monnama-brown mb-3">
                Lo que dicen las clientas
              </h2>
              <p className="text-monnama-brown-mid">
                Cada pieza encuentra a su persona.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Pedí un gorro para mi hija y llegó precioso, mejor de lo que esperaba. Se nota el mimo en cada detalle.",
                name: "Laura M.",
                location: "Granada",
              },
              {
                quote:
                  "Monika es súper atenta y el resultado es increíble. Llevo el bolso a todas partes y todo el mundo me pregunta dónde lo compré.",
                name: "Cristina R.",
                location: "Granada",
              },
              {
                quote:
                  "Encargué un amigurumi personalizado para un regalo y fue un éxito total. Repetiré seguro.",
                name: "Ana G.",
                location: "Granada",
              },
            ].map(({ quote, name, location }, i) => (
              <ScrollReveal key={name} delay={i * 120}>
                <div className="bg-monnama-surface rounded-2xl p-8 flex flex-col gap-4 h-full">
                  {/* Estrellas */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg
                        key={j}
                        className="w-4 h-4 text-monnama-terra"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Cita */}
                  <p className="text-monnama-brown-mid leading-relaxed flex-1">
                    &ldquo;{quote}&rdquo;
                  </p>
                  {/* Autora */}
                  <div>
                    <p className="font-medium text-monnama-brown text-sm">{name}</p>
                    <p className="text-monnama-brown-mid/70 text-xs">{location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Encargo personalizado */}
      <section className="bg-monnama-brown py-20 px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-4xl mb-6 block">✉️</span>
            <h2 className="font-display text-4xl text-monnama-cream mb-4">
              ¿Tienes algo en mente?
            </h2>
            <p className="text-monnama-cream/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Monika acepta encargos personalizados. Elige el color, la talla y el
              diseño — ella lo teje para ti. Cada pieza es única, como quien la lleva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/made_bymonnama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-monnama-terra hover:bg-monnama-terra-dark text-white px-8 py-4 rounded-full font-medium transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Pedir por Instagram
              </a>
              <a
                href="mailto:monnama.tienda@gmail.com?subject=Encargo personalizado"
                className="inline-flex items-center justify-center gap-2 border-2 border-monnama-cream/40 text-monnama-cream hover:border-monnama-cream hover:bg-monnama-cream/10 px-8 py-4 rounded-full font-medium transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Escribir por Email
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
