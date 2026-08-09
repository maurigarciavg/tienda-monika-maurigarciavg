type Locale = "es" | "en";

const ITEMS: Record<Locale, string[]> = {
  es: [
    "Hecho a mano",
    "Crochet",
    "Knitting",
    "Piezas únicas",
    "Granada",
    "Con amor",
    "Sin producción en serie",
    "Tejido a mano",
  ],
  en: [
    "Handmade",
    "Crochet",
    "Knitting",
    "Unique pieces",
    "Granada",
    "With love",
    "Hand-knitted",
    "Made with care",
  ],
};

function MarqueeItems({ items, keyPrefix }: { items: string[]; keyPrefix: number }) {
  return (
    <>
      {items.map((item, i) => (
        <span
          key={`${keyPrefix}-${i}`}
          className="inline-flex items-center gap-4 mr-12 shrink-0"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-monnama-brown whitespace-nowrap">
            {item}
          </span>
          <span className="text-lg leading-none">🧶</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee({ locale = "es" }: { locale?: Locale }) {
  const items = ITEMS[locale];
  return (
    <div
      className="w-full overflow-hidden py-5 select-none"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="marquee-track flex w-max">
        <MarqueeItems items={items} keyPrefix={0} />
        <MarqueeItems items={items} keyPrefix={1} />
      </div>
    </div>
  );
}
