import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-wedding-bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.05, duration: 0.4, ease: "easeInOut" }}
      onAnimationComplete={() => setVisible(false)}
    >
      <div className="text-center">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          دعوة زفاف
        </motion.p>
        <motion.h1
          className="mt-3 font-serif text-5xl text-wedding-dark"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.75 }}
        >
          محمد نور <span className="text-wedding-gold">&</span> سدرة
        </motion.h1>
        <motion.div
          className="mx-auto mt-6 h-px w-20 bg-wedding-gold/60"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
