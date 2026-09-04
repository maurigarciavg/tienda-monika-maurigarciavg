import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Unravelled Corner",
  description: "Answers to your questions about orders, shipping, materials, and custom pieces at Unravelled Corner.",
};

const faqs = [
  {
    q: "How do I place an order?",
    a: "Message me on Instagram (@made_bymonnama) or email unravelledcorner@gmail.com with the piece you're interested in. I'll confirm availability and walk you through all the details before we proceed.",
  },
  {
    q: "How long does delivery take?",
    a: "Available pieces ship within 3–5 business days from payment confirmation. Custom orders may take 2–4 weeks depending on the complexity of the piece.",
  },
  {
    q: "How much is shipping?",
    a: "Shipping within mainland Spain is €4, or free on orders over €50. For Balearic Islands, Canary Islands, or international shipping, just ask me and I'll find the best option.",
  },
  {
    q: "Do you take custom orders?",
    a: "Yes! You can choose colors, sizes, and materials. Message me with your idea and we'll work it out together. Custom pieces are honestly one of my favourite things to make.",
  },
  {
    q: "What materials do you use?",
    a: "I use high-quality yarns: 100% organic cotton, merino wool, and premium blends. If you have any allergies, sensitivities, or special preferences, let me know when ordering and I'll take that into account.",
  },
  {
    q: "How do I pay?",
    a: "Payment is made by bank transfer or Bizum once we've confirmed the order details. I don't charge anything upfront without talking first.",
  },
  {
    q: "Can I return a product?",
    a: "Since every piece is unique and handmade, I don't accept returns except for manufacturing defects. If there's any issue with your order, message me and we'll sort it out — your satisfaction comes first.",
  },
  {
    q: "Are the colours accurate to the photos?",
    a: "Photos are as true to life as possible, but there may be slight variations depending on your screen and lighting. If you're unsure about a specific colour, I can send you additional photos before confirming your order.",
  },
];

export default function FaqPageEn() {
  return (
    <div className="min-h-screen py-16 px-6 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-monnama-brown-mid mb-10">
        <Link href="/en" className="hover:text-monnama-terra transition-colors">Home</Link>
        <span>/</span>
        <span className="text-monnama-brown font-medium">FAQ</span>
      </nav>

      <div className="mb-12">
        <h1 className="font-display text-5xl text-monnama-brown mb-3">Frequently asked questions</h1>
        <p className="text-monnama-brown-mid text-lg">Everything you need to know before placing your order.</p>
      </div>

      <div className="space-y-3">
        {faqs.map(({ q, a }) => (
          <details
            key={q}
            className="group bg-monnama-surface rounded-2xl overflow-hidden border border-monnama-peach open:border-monnama-terra/30 transition-colors"
          >
            <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-monnama-brown font-medium text-lg hover:text-monnama-terra transition-colors select-none">
              {q}
              <span className="shrink-0 text-monnama-terra/60 text-xl transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="px-6 pb-6 text-monnama-brown-mid leading-relaxed">{a}</p>
          </details>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-monnama-peach p-8 text-center">
        <p className="font-display text-2xl text-monnama-brown mb-2">Can&apos;t find your answer?</p>
        <p className="text-monnama-brown-mid mb-6">Message me directly and I&apos;ll get back to you as soon as possible.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://www.instagram.com/made_bymonnama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-monnama-terra hover:bg-monnama-terra-dark text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
          >
            Instagram
          </a>
          <a
            href="mailto:unravelledcorner@gmail.com"
            className="inline-flex items-center justify-center gap-2 border-2 border-monnama-terra text-monnama-terra hover:bg-monnama-terra hover:text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
