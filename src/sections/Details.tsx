import { motion } from "framer-motion";
import { CalendarDays, Clock3, Heart, MapPin } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { SectionHeading } from "../components/SectionHeading";

const cards = [
  { icon: CalendarDays, title: "التاريخ", value: weddingData.dateLabel },
  { icon: Heart, title: "اليوم", value: weddingData.dayLabel },
  { icon: Clock3, title: "الوقت", value: weddingData.timeLabel },
  { icon: MapPin, title: "المكان", value: `${weddingData.venue} — ${weddingData.venueName}` }
];

export function Details() {
  return (
    <section id="details" className="bg-wedding-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="THE DETAILS" title="تفاصيل يومنا" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, value }, index) => (
            <motion.div
              key={title}
              className="rounded-3xl border border-wedding-brown/10 bg-white/75 p-7 text-center shadow-soft"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-wedding-cream text-wedding-gold">
                <Icon size={20} aria-hidden="true" />
              </div>
              <p className="mt-5 text-xs text-wedding-brown/60">{title}</p>
              <p className="mt-2 font-serif text-xl text-wedding-dark">{value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
