import Link from "next/link";

export default function NotFoundEn() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-monnama-cream to-monnama-surface">
      <span className="text-7xl mb-6">🧶</span>
      <h1 className="font-display text-4xl md:text-5xl text-monnama-brown mb-4">
        This thread has unraveled
      </h1>
      <p className="text-monnama-brown-mid text-lg mb-10 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/en/catalogo" className="bg-monnama-terra hover:bg-monnama-terra-dark text-white px-6 py-3 rounded-full font-medium transition-colors duration-200">
          Shop now
        </Link>
        <Link href="/en" className="border-2 border-monnama-terra text-monnama-terra hover:bg-monnama-terra hover:text-white px-6 py-3 rounded-full font-medium transition-colors duration-200">
          Back to home
        </Link>
      </div>
    </div>
  );
}
