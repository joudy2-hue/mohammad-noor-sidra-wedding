import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

const notes = [
  "نرجو تأكيد الحضور قبل تاريخ 17 / 8 / 2026.",
    "نرجو إعلامنا مسبقًا في حال تعذر الحضور.",
  "آملينَ أن يكونَ تألُقُكِ باحتشامِكِ🤍.",
  "التصوير داخل القاعة ممنوع.",
    "قُبلة من العروسين لأطفالكم قبل النوم 😘.",
];

export function Notes() {
  return (
    <section
      id="notes"
      className="bg-wedding-bg px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="NOTES"
          title="بعض الملاحظات"
          description="بعض التفاصيل الصغيرة التي نود مشاركتها معكم."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {notes.map((note, index) => (
            <motion.div
              key={note}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-start gap-4 rounded-3xl border border-wedding-brown/10 bg-white p-6 shadow-soft"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wedding-cream text-wedding-rose">
                <Heart size={18} fill="currentColor" />
              </div>

              <p className="pt-1 text-sm leading-8 text-wedding-brown/80">
                {note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}