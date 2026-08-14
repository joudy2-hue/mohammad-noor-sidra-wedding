import { weddingData } from "../data/weddingData";

export function Footer() {
  return (
    <footer className="bg-wedding-dark px-5 py-12 text-center text-white md:px-8">
      <p className="text-xs tracking-[0.25em] text-wedding-gold">WITH LOVE</p>
      <h2 className="mt-3 font-serif text-3xl">{weddingData.groom} & {weddingData.bride}</h2>
      <p className="mt-3 text-sm text-white/65">بكل حب، ننتظركم</p>
      <div className="mx-auto mt-6 h-px w-16 bg-wedding-gold/60" />
      <p className="mt-6 text-xs text-white/50">{weddingData.dateLabel}</p>
    </footer>
  );
}
