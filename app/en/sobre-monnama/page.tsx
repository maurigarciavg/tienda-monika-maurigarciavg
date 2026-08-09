import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Monnama — Monika's story",
  description: "Meet Monika, the maker behind Monnama. Crochet and knitting made with love.",
};

export default function AboutPageEn() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="font-display text-5xl md:text-6xl text-monnama-brown mb-6">About Monnama</h1>
        <p className="text-monnama-brown-mid text-xl leading-relaxed">The story behind every stitch.</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div className="aspect-[4/5] bg-monnama-surface rounded-3xl overflow-hidden relative">
          <Image src="/uploads/monika-perfil.jpg" alt="Monika, maker behind Monnama" fill className="object-cover" />
        </div>
        <div>
          <h2 className="font-display text-3xl text-monnama-brown mb-6">Hi, I&apos;m Monika</h2>
          <p className="text-monnama-brown-mid leading-relaxed mb-4">
            I&apos;m from Slovakia, but life has taken me on beautiful paths: I lived in the UK, returned to my country, and now I&apos;ve put down roots in Granada, surrounded by mountains and southern light. This is where Monnama found its home.
          </p>
          <p className="text-monnama-brown-mid leading-relaxed mb-4">
            Crafts have always been part of me. Crochet and knitting especially — taking a skein of yarn and turning it into something someone will use and love — that&apos;s priceless. Every stitch is a small decision, and every finished piece is something unique that didn&apos;t exist before.
          </p>
          <p className="text-monnama-brown-mid leading-relaxed">
            If something catches your eye, write to me. I can adapt colours, sizes or create something designed just for you.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-monnama-peach rounded-3xl p-12">
        <h2 className="font-display text-3xl text-monnama-brown text-center mb-10">What makes Monnama special</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { emoji: "✋", titulo: "100% handmade", texto: "Every piece is hand-knitted. No machines, no mass production." },
            { emoji: "🌿", titulo: "Rooted", texto: "Inspired by nature, the mountains and the slow rhythm of things made carefully." },
            { emoji: "🎨", titulo: "Made for you", texto: "Different colour, different size, something completely new? Write to me and we'll create it together." },
          ].map(({ emoji, titulo, texto }) => (
            <div key={titulo} className="text-center">
              <div className="text-4xl mb-3">{emoji}</div>
              <h3 className="font-display text-xl text-monnama-brown mb-2">{titulo}</h3>
              <p className="text-monnama-brown-mid">{texto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
