import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { SectionHeading } from "../components/SectionHeading";

export function Venue() {
  return (
    <section id="venue" className="bg-wedding-cream px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="THE VENUE" title="مكاننا" />

        <div className="grid overflow-hidden rounded-[2rem] border border-wedding-brown/10 bg-white shadow-soft lg:grid-cols-[1fr_1.15fr]">
          <div className="relative min-h-[300px] overflow-hidden lg:min-h-[430px]">
            <div className="absolute inset-0 bg-[#D9A9AD]/20" />
            <iframe
              title="خريطة قاعة الرياحين"
              src={`https://www.google.com/maps?q=${encodeURIComponent(weddingData.venueName + " " + weddingData.city)}&output=embed`}
              className="h-full w-full border-0 grayscale-[0.35]"
              loading="lazy"
            />
          </div>

          <motion.div
            className="flex flex-col justify-center p-8 md:p-12"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-wedding-cream text-wedding-gold">
              <MapPin size={20} />
            </div>
            <p className="mt-6 text-xs tracking-[0.2em] text-wedding-gold">OUR VENUE</p>
            <h3 className="mt-2 font-serif text-4xl text-wedding-dark">{weddingData.venue}</h3>
            <p className="mt-2 font-serif text-2xl text-wedding-brown">{weddingData.venueName}</p>
            <p className="mt-5 text-sm leading-8 text-wedding-brown/70">{weddingData.city}</p>

            <a
              href={weddingData.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-wedding-dark px-6 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:bg-wedding-brown"
            >
              فتح الموقع على الخريطة
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
