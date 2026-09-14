import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Unravelled Corner",
  description: "Information on data handling and cookie use at Unravelled Corner.",
};

export default function PrivacyPageEn() {
  return (
    <div className="min-h-screen py-16 px-6 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-monnama-brown-mid mb-10">
        <Link href="/en" className="hover:text-monnama-terra transition-colors">Home</Link>
        <span>/</span>
        <span className="text-monnama-brown font-medium">Privacy policy</span>
      </nav>

      <div className="mb-12">
        <h1 className="font-display text-5xl text-monnama-brown mb-3">Privacy policy</h1>
        <p className="text-monnama-brown-mid text-lg">Last updated: September 2026.</p>
      </div>

      <div className="space-y-10 text-monnama-brown-mid leading-relaxed">
        <section>
          <h2 className="font-display text-2xl text-monnama-brown mb-3">Who we are</h2>
          <p>
            This website is a personal project by Monika, under the trading name Unravelled Corner. For
            any question about this policy or your data, you can write to{" "}
            <a href="mailto:unravelledcorner@gmail.com" className="text-monnama-terra hover:text-monnama-terra-dark underline underline-offset-2">
              unravelledcorner@gmail.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-monnama-brown mb-3">What data we process</h2>
          <p>
            This site has no forms or account system: we don&apos;t collect or store any personal data of
            yours on our own servers. If you reach out on Instagram or by email, that conversation is
            handled directly on those platforms (Instagram / your email provider), under their own privacy
            policies.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-monnama-brown mb-3">Cookies and analytics</h2>
          <p className="mb-3">
            We use Vercel Analytics to understand, anonymously and in aggregate, how many people visit the
            site and which pages interest them most. We don&apos;t use advertising or cross-site tracking
            cookies, and we never sell or share any data with third parties for commercial purposes.
          </p>
          <p>
            On your first visit you can choose to accept or reject this analytics in the banner shown at the
            bottom of the page. If you reject it, the analytics script never loads in your browser. You can
            change your choice at any time by clearing this site&apos;s data in your browser settings, which
            will make the banner appear again.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-monnama-brown mb-3">Your rights</h2>
          <p>
            You can exercise your rights of access, rectification, erasure and objection over any data
            you&apos;ve shared with us directly (for example, in an email conversation) by writing to{" "}
            <a href="mailto:unravelledcorner@gmail.com" className="text-monnama-terra hover:text-monnama-terra-dark underline underline-offset-2">
              unravelledcorner@gmail.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-monnama-brown mb-3">Changes to this policy</h2>
          <p>
            If this policy changes in any meaningful way, we&apos;ll update the date at the top of this
            page.
          </p>
        </section>
      </div>
    </div>
  );
}
