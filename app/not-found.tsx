import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="mb-8">
        <svg
          viewBox="0 0 120 80"
          className="w-40 mx-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0,40 C10,26 20,26 30,40 C40,54 50,54 60,40 C70,26 80,26 90,40 C100,54 110,54 120,40"
            stroke="#E8829A"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M10,55 C20,41 30,41 40,55 C50,69 60,69 70,55 C80,41 90,41 100,55"
            stroke="#E8829A"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.2"
          />
        </svg>
      </div>

      <p className="text-monnama-terra font-medium tracking-widest uppercase text-sm mb-3">
        Error 404
      </p>
      <h1 className="font-display text-5xl md:text-6xl text-monnama-brown mb-4">
        Este hilo se perdió
      </h1>
      <p className="text-monnama-brown-mid text-lg max-w-md mx-auto mb-10 leading-relaxed">
        La página que buscas no existe o se ha movido. Pero hay muchas piezas bonitas esperándote en el catálogo.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/catalogo"
          className="inline-block bg-monnama-terra hover:bg-monnama-terra-dark text-white px-8 py-4 rounded-full font-medium transition-colors duration-200"
        >
          Ver el catálogo
        </Link>
        <Link
          href="/"
          className="inline-block border-2 border-monnama-terra text-monnama-terra hover:bg-monnama-terra hover:text-white px-8 py-4 rounded-full font-medium transition-colors duration-200"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
