import type { Metadata } from "next";
import Link from "next/link";
import CatalogoClient from "@/components/CatalogoClient";

export const metadata: Metadata = {
  title: "Catalog — Unravelled Corner",
  description: "All handmade crochet and knitting pieces by Monika.",
};

export default function CatalogPageEn() {
  return (
    <div className="min-h-screen py-16 px-6 max-w-6xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-monnama-brown-mid mb-10">
        <Link href="/en" className="hover:text-monnama-terra transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-monnama-brown font-medium">Catalog</span>
      </nav>
      <div className="mb-12">
        <h1 className="font-display text-5xl text-monnama-brown mb-3">Catalog</h1>
        <p className="text-monnama-brown-mid text-lg">
          All available pieces, handmade with lots of love.
        </p>
      </div>
      <CatalogoClient locale="en" />
    </div>
  );
}
