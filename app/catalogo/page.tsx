import type { Metadata } from "next";
import Link from "next/link";
import CatalogoClient from "@/components/CatalogoClient";

export const metadata: Metadata = {
  title: "Catálogo — Unravelled Corner",
  description: "Todas las piezas de crochet y knitting hechas a mano por Monika.",
};

export default function CatalogoPage() {
  return (
    <div className="min-h-screen py-16 px-6 max-w-6xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-monnama-brown-mid mb-10">
        <Link href="/" className="hover:text-monnama-terra transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <span className="text-monnama-brown font-medium">Catálogo</span>
      </nav>
      <div className="mb-12">
        <h1 className="font-display text-5xl text-monnama-brown mb-3">
          Catálogo
        </h1>
        <p className="text-monnama-brown-mid text-lg">
          Todas las piezas disponibles, hechas a mano con mucho cariño.
        </p>
      </div>
      <CatalogoClient />
    </div>
  );
}
