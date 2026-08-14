import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  ["الرئيسية", "home"],
  ["قصتنا", "story"],
  ["التفاصيل", "details"],
  ["المكان", "venue"],
  ["بعض الملاحظات", "notes"],
  ["تأكيد الحضور", "rsvp"]
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-wedding-bg/90 shadow-soft backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <button
            className="font-serif text-lg text-wedding-dark"
            onClick={() => go("home")}
            aria-label="العودة للرئيسية"
          >
            م <span className="text-wedding-gold">&</span> س
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {links.map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="nav-link"
              >
                {label}
              </button>
            ))}
          </div>

          <button
            className="rounded-full border border-wedding-dark/10 p-2 text-wedding-dark md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-4 top-20 z-40 rounded-3xl border border-wedding-brown/10 bg-wedding-bg/95 p-4 shadow-soft backdrop-blur-md md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {links.map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="block w-full rounded-2xl px-4 py-3 text-right text-sm text-wedding-dark hover:bg-wedding-cream"
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
