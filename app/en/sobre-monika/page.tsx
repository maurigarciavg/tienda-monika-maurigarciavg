import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Monika — The maker behind Unravelled Corner",
  description: "Meet Monika, the maker behind Unravelled Corner. Crochet and knitting made with love.",
};

export default function AboutPageEn() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="font-display text-5xl md:text-6xl text-monnama-brown mb-6">About Monika</h1>
        <p className="text-monnama-brown-mid text-xl leading-relaxed">The story behind every stitch.</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div className="aspect-[4/5] bg-monnama-surface rounded-3xl overflow-hidden relative">
          <Image src="/uploads/monika-perfil.jpg" alt="Monika, maker behind Unravelled Corner" fill className="object-cover" />
        </div>
        <div>
          <h2 className="font-display text-3xl text-monnama-brown mb-6">Hi, I&apos;m Monika</h2>
          <p className="text-monnama-brown-mid leading-relaxed mb-4">
            I&apos;m from Slovakia, but life has taken me on beautiful paths: I lived in the UK, returned to my country, and now I&apos;ve put down roots in Granada, surrounded by mountains and southern light. This is where Unravelled Corner found its home.
          </p>
          <p className="text-monnama-brown-mid leading-relaxed mb-4">
            Crafts have always been part of me. Crochet and knitting especially — taking a skein of yarn and turning it into something someone will use and love — that&apos;s priceless. Every stitch is a small decision, and every finished piece is something unique that didn&apos;t exist before.
          </p>
          <p className="text-monnama-brown-mid leading-relaxed">
            If something catches your eye, write to me. I can adapt colours, sizes or create something designed just for you.
          </p>
        </div>
      </div>

      {/* YouTube */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="font-display text-3xl text-monnama-brown text-center mb-3">
          Watch me on YouTube
        </h2>
        <p className="text-monnama-brown-mid text-center mb-8">
          Monika shares her knitting world on her channel — techniques, inspiration and the everyday life of making by hand.
        </p>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/96c723AdVlY"
            title="Unravelled Corner — Podcast"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="text-center mt-6">
          <a
            href="https://www.youtube.com/@Unravelledcorner-h6u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-monnama-terra hover:text-monnama-terra-dark font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Visit the channel →
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-monnama-peach rounded-3xl p-12">
        <h2 className="font-display text-3xl text-monnama-brown text-center mb-10">What makes Unravelled Corner special</h2>
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
