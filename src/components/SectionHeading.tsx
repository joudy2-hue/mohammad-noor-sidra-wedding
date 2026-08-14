import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-2xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-serif text-4xl font-medium text-wedding-dark md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-8 text-wedding-brown/75 md:text-base">
          {description}
        </p>
      )}
      <div className="mx-auto mt-6 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-wedding-gold/45" />
        <span className="h-1.5 w-1.5 rotate-45 bg-wedding-gold" />
        <span className="h-px w-12 bg-wedding-gold/45" />
      </div>
    </motion.div>
  );
}
