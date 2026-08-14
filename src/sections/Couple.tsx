import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { SectionHeading } from "../components/SectionHeading";
import { FloralDecoration } from "../components/FloralDecoration";

export function Couple() {
  return (
    <section id="story" className="relative overflow-hidden bg-wedding-bg px-5 py-24 md:px-8 md:py-32">
      <FloralDecoration className="-right-14 top-20 h-56 w-56 rotate-90 text-wedding-rose" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="OUR STORY" title="أجمل بداية" description={weddingData.story} />

        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
          <motion.article
            className="text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto h-52 w-44 overflow-hidden rounded-[48%_52%_45%_55%/55%_45%_55%_45%] border-8 border-white shadow-soft md:h-64 md:w-56">
              <img src={weddingData.groomImage} alt={`العريس ${weddingData.groom}`} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <p className="mt-6 text-xs tracking-[0.25em] text-wedding-gold">THE GROOM</p>
            <h3 className="mt-2 font-serif text-3xl text-wedding-dark">{weddingData.groom}</h3>
          </motion.article>

          <motion.div
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-wedding-cream text-wedding-rose shadow-soft"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart size={22} fill="currentColor" aria-hidden="true" />
          </motion.div>

          <motion.article
            className="text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto h-52 w-44 overflow-hidden rounded-[52%_48%_55%_45%/45%_55%_45%_55%] border-8 border-white shadow-soft md:h-64 md:w-56">
              <img src={weddingData.brideImage} alt={`العروس ${weddingData.bride}`} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <p className="mt-6 text-xs tracking-[0.25em] text-wedding-gold">THE BRIDE</p>
            <h3 className="mt-2 font-serif text-3xl text-wedding-dark">{weddingData.bride}</h3>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
