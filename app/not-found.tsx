import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-monnama-cream via-monnama-peach to-monnama-surface px-6">
      <div className="max-w-lg text-center">
        <p
          className="text-7xl mb-6 hero-animate"
          style={{ animationDelay: "0.1s" }}
        >
          🧶
        </p>
        <h1
          className="font-display text-3xl md:text-4xl text-monnama-brown mb-4 hero-animate"
          style={{ animationDelay: "0.25s" }}
        >
          Este hilo se ha desenredado
        </h1>
        <p
          className="text-monnama-brown-mid text-lg mb-10 leading-relaxed hero-animate"
          style={{ animationDelay: "0.4s" }}
        >
          La página que buscas no existe o se ha movido. Pero seguro que
          encuentras algo bonito en el catálogo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center hero-animate" style={{ animationDelay: "0.55s" }}>
          <Link
            href="/"
            className="inline-block bg-monnama-terra hover:bg-monnama-terra-dark text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
          >
            Volver al inicio
          </Link>
          <Link
            href="/catalogo"
            className="inline-block border-2 border-monnama-terra text-monnama-terra hover:bg-monnama-terra hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}
