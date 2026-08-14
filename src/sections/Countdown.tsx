import { motion } from "framer-motion";
import { CalendarDays, Clock3 } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { useCountdown } from "../hooks/useCountdown";
import { pad } from "../utils/format";

const units = [
  ["days", "يوم"],
  ["hours", "ساعة"],
  ["minutes", "دقيقة"],
  ["seconds", "ثانية"]
] as const;

export function Countdown() {
  const countdown = useCountdown(weddingData.dateISO);

  return (
    <section className="relative overflow-hidden bg-wedding-cream px-5 py-24 md:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="eyebrow">SAVE THE DATE</p>
        <h2 className="mt-3 font-serif text-4xl text-wedding-dark md:text-5xl">ننتظر حضوركم في</h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-wedding-brown">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm">
            <CalendarDays size={17} />
            {weddingData.dateLabel}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm">
            <Clock3 size={17} />
            {weddingData.timeLabel}
          </span>
        </div>

        {countdown.done ? (
          <motion.p
            className="mt-12 font-serif text-3xl text-wedding-dark"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            اليوم هو يومنا الكبير ❤️
          </motion.p>
        ) : (
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5" dir="ltr">
            {units.map(([key, label]) => (
              <motion.div
                key={key}
                className="rounded-3xl border border-wedding-brown/10 bg-white/70 p-5 shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="font-serif text-4xl text-wedding-dark md:text-5xl">
                  {pad(countdown[key])}
                </div>
                <div className="mt-2 text-xs text-wedding-brown/70" dir="rtl">{label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
