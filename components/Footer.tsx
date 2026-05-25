import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-monnama-brown text-monnama-peach py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-2xl text-white mb-1">Monnama</p>
          <p className="text-monnama-peach/70 text-sm">
            Tejidos y crochet hechos a mano
          </p>
        </div>

        <nav className="flex gap-6 text-sm">
          <Link href="/catalogo" className="hover:text-white transition-colors">
            Catálogo
          </Link>
          <Link
            href="/sobre-monnama"
            className="hover:text-white transition-colors"
          >
            Sobre Monnama
          </Link>
          <Link
            href="/contacto"
            className="hover:text-white transition-colors"
          >
            Contacto
          </Link>
        </nav>

        <p className="text-monnama-peach/50 text-xs">
          © {new Date().getFullYear()} Monnama. Hecho con 🧶
        </p>
      </div>
    </footer>
  );
}
