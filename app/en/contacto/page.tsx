import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Monnama",
  description: "Contact Monnama on Instagram or by email.",
};

export default function ContactPageEn() {
  return (
    <div className="min-h-screen py-20 px-6 max-w-2xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-display text-5xl text-monnama-brown mb-4">Contact</h1>
        <p className="text-monnama-brown-mid text-lg">
          Have a question or want to order something special? Reach out.
        </p>
      </div>

      <div className="space-y-4">
        <a
          href="https://www.instagram.com/made_bymonnama"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 bg-monnama-surface hover:bg-monnama-peach rounded-2xl transition-colors duration-200 group"
        >
          <div className="w-12 h-12 bg-monnama-terra rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-monnama-brown group-hover:text-monnama-terra transition-colors">Instagram</p>
            <p className="text-monnama-brown-mid text-sm">@made_bymonnama</p>
          </div>
          <svg className="w-5 h-5 text-monnama-brown-mid ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        <a
          href="mailto:monnama.tienda@gmail.com"
          className="flex items-center gap-4 p-6 bg-monnama-surface hover:bg-monnama-peach rounded-2xl transition-colors duration-200 group"
        >
          <div className="w-12 h-12 bg-monnama-terra rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-monnama-brown group-hover:text-monnama-terra transition-colors">Email</p>
            <p className="text-monnama-brown-mid text-sm">monnama.tienda@gmail.com</p>
          </div>
          <svg className="w-5 h-5 text-monnama-brown-mid ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <p className="text-center text-monnama-brown-mid text-sm mt-12">
        I usually reply within 24 hours 🧶
      </p>
    </div>
  );
}
