import { productos, getNombre, getDescripcion } from "@/data/productos";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import ShareButton from "@/components/ShareButton";

export function generateStaticParams() {
  return productos.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const producto = productos.find((p) => p.id === id);
  if (!producto) return { title: "Product — Unravelled Corner" };
  const title = `${getNombre(producto, "en")} — Unravelled Corner`;
  const description = `${getDescripcion(producto, "en")} Price: ${producto.precio}€.`;
  return {
    title,
    description,
    openGraph: { title, description, images: producto.imagen ? [producto.imagen] : undefined },
    twitter: { card: "summary_large_image", title, description, images: producto.imagen ? [producto.imagen] : undefined },
  };
}

export default async function ProductPageEn({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const producto = productos.find((p) => p.id === id);
  if (!producto) notFound();

  const relacionados = productos
    .filter((p) => p.id !== producto.id && p.categoria === producto.categoria)
    .slice(0, 3);

  const nombreEn = getNombre(producto, "en");
  const asunto = encodeURIComponent(`Enquiry about: ${nombreEn}`);
  const cuerpo = encodeURIComponent(`Hi Monika! I'm interested in "${nombreEn}" (${producto.precio}€). Is it available?`);

  return (
    <div className="min-h-screen py-16 px-6 max-w-5xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-monnama-brown-mid mb-10">
        <Link href="/en" className="hover:text-monnama-terra transition-colors">Home</Link>
        <span>/</span>
        <Link href="/en/catalogo" className="hover:text-monnama-terra transition-colors">Catalog</Link>
        <span>/</span>
        <span className="text-monnama-brown font-medium truncate max-w-[200px]">{nombreEn}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
        <div className="aspect-square bg-monnama-surface rounded-2xl overflow-hidden relative flex items-center justify-center">
          {producto.imagen ? (
            <Image src={producto.imagen} alt={nombreEn} fill className="object-cover" />
          ) : (
            <span className="text-8xl">🧶</span>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <span className="inline-block bg-monnama-peach text-monnama-terra text-sm font-medium px-3 py-1 rounded-full mb-4 self-start">
            {producto.tecnica}
          </span>
          <h1 className="font-display text-4xl text-monnama-brown mb-4">{nombreEn}</h1>
          <p className="text-monnama-brown-mid text-lg leading-relaxed mb-6">{getDescripcion(producto, "en")}</p>
          <p className="text-3xl font-bold text-monnama-terra mb-2">{producto.precio}€</p>
          <ShareButton nombre={nombreEn} locale="en" />

          {producto.disponible ? (
            <div className="space-y-3">
              <p className="text-monnama-brown-mid text-sm font-medium uppercase tracking-wide mb-2">
                Interested? Reach me on:
              </p>
              <a
                href="https://www.instagram.com/made_bymonnama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-monnama-terra hover:bg-monnama-terra-dark text-white px-6 py-4 rounded-xl font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
              <a
                href={`mailto:unravelledcorner@gmail.com?subject=${asunto}&body=${cuerpo}`}
                className="flex items-center gap-3 w-full border-2 border-monnama-terra text-monnama-terra hover:bg-monnama-terra hover:text-white px-6 py-4 rounded-xl font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          ) : (
            <div className="rounded-xl bg-monnama-surface border border-monnama-peach p-6 text-center">
              <p className="text-monnama-brown font-medium text-lg mb-1">Currently sold out</p>
              <p className="text-monnama-brown-mid text-sm mb-4">
                This piece isn&apos;t available right now, but I can make it to order.
              </p>
              <a href="https://www.instagram.com/made_bymonnama" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-monnama-terra hover:text-monnama-terra-dark font-medium transition-colors">
                Message me on Instagram →
              </a>
            </div>
          )}
        </div>
      </div>

      {relacionados.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-3xl text-monnama-brown mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relacionados.map((p) => (
              <ProductCard key={p.id} producto={p} locale="en" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
