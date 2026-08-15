import { MessageCircle, Send, Phone } from "lucide-react";
import { weddingData } from "../data/weddingData";

export function Footer() {
  const whatsappUrl = `https://wa.me/${weddingData.designer.whatsapp}`;
  const telegramUrl = `https://t.me/${weddingData.designer.telegram}`;
  const phoneUrl = `tel:${weddingData.designer.phone.replace(/\s+/g, "")}`;

  return (
    <footer className="bg-wedding-dark px-5 py-14 text-center text-white md:px-8">
      <div className="mx-auto max-w-xl">
        <p className="text-xs tracking-[0.25em] text-wedding-gold">
          WITH LOVE
        </p>

        <h2 className="mt-3 font-serif text-3xl">
          {weddingData.groom}{" "}
          <span className="text-wedding-gold">&</span>{" "}
          {weddingData.bride}
        </h2>

        <p className="mt-3 text-sm text-white/65">
          بكل الحب، ننتظركم
        </p>

        <div className="mx-auto mt-7 flex items-center justify-center gap-3">
          <span className="h-px w-14 bg-wedding-gold/40" />
          <span className="h-1.5 w-1.5 rotate-45 bg-wedding-gold" />
          <span className="h-px w-14 bg-wedding-gold/40" />
        </div>

        <p className="mt-6 text-xs text-white/45">
          {weddingData.dateLabel}
        </p>

        {/* Designer Signature */}
        <div className="mx-auto mt-10 border-t border-white/10 pt-8">
          <p className="text-[10px] tracking-[0.28em] text-wedding-gold">
            DIGITAL WEDDING EXPERIENCE
          </p>

          <h3 className="mt-2 font-serif text-2xl text-white">
            {weddingData.designer.name}
          </h3>

          <p className="mt-2 text-xs text-white/50">
            {weddingData.designer.description}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="التواصل عبر واتساب"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:-translate-y-1 hover:border-wedding-gold/40 hover:bg-wedding-gold/10 hover:text-wedding-gold"
            >
              <MessageCircle size={18} />
            </a>

            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="التواصل عبر تلغرام"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:-translate-y-1 hover:border-wedding-gold/40 hover:bg-wedding-gold/10 hover:text-wedding-gold"
            >
              <Send size={17} />
            </a>

            <a
              href={phoneUrl}
              aria-label="الاتصال هاتفيًا"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:-translate-y-1 hover:border-wedding-gold/40 hover:bg-wedding-gold/10 hover:text-wedding-gold"
            >
              <Phone size={17} />
            </a>
          </div>

          <p className="mt-5 text-[10px] text-white/30">
            {weddingData.designer.phone}
          </p>
        </div>
      </div>
    </footer>
  );
}