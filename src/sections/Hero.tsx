import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { weddingData } from "../data/weddingData";
import { FloralDecoration } from "../components/FloralDecoration";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.img
        src={weddingData.heroImage}
        alt="صورة رومانسية للعروسين"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y }}
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3E302B]/45 via-[#6B5147]/25 to-[#3E302B]/65" />
      <div className="absolute inset-0 bg-[#D9A9AD]/10 mix-blend-soft-light" />
      <FloralDecoration className="-left-8 top-24 h-48 w-48 text-white/80" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-24 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-5 font-serif text-lg md:text-xl">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</p>
          <p className="mx-auto max-w-2xl text-sm leading-8 text-white/90 md:text-base">
            {`{وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً}`}
          </p>

          <div className="my-7 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-white/50" />
            <span className="h-1.5 w-1.5 rotate-45 bg-wedding-gold" />
            <span className="h-px w-14 bg-white/50" />
          </div>

          <p className="font-serif text-lg leading-9 md:text-xl">
            سبحان من جمَعَ القلوبَ بفضلِهِ وعلى رحابِ الودِّ عمَّرَ دارها
          </p>
          <p className="mt-3 text-sm text-white/85">بكلِّ معاني الحبِّ والودِّ</p>
          <p className="mt-8 text-sm">تَتَشَرَفُ عائِلَتَي</p>
          <h2 className="mt-2 font-serif text-2xl md:text-3xl">{weddingData.families}</h2>
          <p className="mt-3 text-sm">بدعوتكم لحضور حفل زفاف نجليهما</p>

          <h1 className="mt-7 font-serif text-5xl leading-tight md:text-8xl">
            {weddingData.groom} <span className="text-wedding-gold">&</span> {weddingData.bride}
          </h1>

          <p className="mt-7 text-sm">وذلِكَ بِمَشيئَةِ اللَّهِ تَعالَى</p>
          <p className="mt-2 text-lg">{weddingData.dayLabel} · {weddingData.dateLabel} · {weddingData.timeLabel}</p>

          <motion.button
            onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm backdrop-blur-md transition hover:bg-white/20"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            اكتشفوا دعوتنا
            <ChevronDown size={17} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
