import {
  MessageCircle,
  Phone,
  Send,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { weddingData } from "../data/weddingData";

const links = [
  { label: "الرئيسية", id: "home" },
  { label: "قصتنا", id: "story" },
  { label: "التفاصيل", id: "details" },
  { label: "المعرض", id: "gallery" },
  { label: "المكان", id: "venue" },
  { label: "تأكيد الحضور", id: "rsvp" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  const whatsappUrl = `https://wa.me/${weddingData.designer.whatsapp}`;

  const telegramUrl = `https://t.me/${weddingData.designer.telegram}`;

  const phoneUrl = `tel:${weddingData.designer.phone.replace(/\s+/g, "")}`;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-wedding-bg/90 shadow-soft backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">

          {/* Logo */}
          <button
            type="button"
            onClick={() => go("home")}
            aria-label="العودة إلى الصفحة الرئيسية"
            className={`shrink-0 font-serif text-lg transition-colors duration-500 ${
              scrolled
                ? "text-wedding-dark"
                : "text-white"
            }`}
          >
            م <span className="text-wedding-gold">&</span> س
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center md:flex">

            {/* Website Links */}
            <div className="flex items-center gap-5">
              {links.map(({ label, id }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => go(id)}
                  className={`group relative py-2 text-[12px] font-medium transition-colors duration-300 ${
                    scrolled
                      ? "text-wedding-dark"
                      : "text-white"
                  }`}
                >
                  {label}

                  <span
                    className={`absolute bottom-0 right-0 h-px w-0 bg-wedding-gold transition-all duration-300 group-hover:w-full`}
                  />
                </button>
              ))}
            </div>

            {/* Divider */}
            <span
              className={`mx-6 h-6 w-px transition-colors duration-500 ${
                scrolled
                  ? "bg-wedding-dark/10"
                  : "bg-white/25"
              }`}
            />

            {/* Contact Icons */}
            <div className="flex items-center gap-2">

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="التواصل عبر واتساب"
                title="واتساب"
                className={`group flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5 ${
                  scrolled
                    ? "border-wedding-dark/10 bg-white/40 text-wedding-dark hover:border-wedding-gold/40 hover:bg-wedding-cream hover:text-wedding-gold"
                    : "border-white/25 bg-white/10 text-white hover:border-white/50 hover:bg-white/20 hover:text-wedding-gold"
                }`}
              >
                <MessageCircle
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              {/* Telegram */}
              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="التواصل عبر تلغرام"
                title="تلغرام"
                className={`group flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5 ${
                  scrolled
                    ? "border-wedding-dark/10 bg-white/40 text-wedding-dark hover:border-wedding-gold/40 hover:bg-wedding-cream hover:text-wedding-gold"
                    : "border-white/25 bg-white/10 text-white hover:border-white/50 hover:bg-white/20 hover:text-wedding-gold"
                }`}
              >
                <Send
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              {/* Phone */}
              <a
                href={phoneUrl}
                aria-label="الاتصال هاتفيًا"
                title="اتصال"
                className={`group flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5 ${
                  scrolled
                    ? "border-wedding-dark/10 bg-white/40 text-wedding-dark hover:border-wedding-gold/40 hover:bg-wedding-cream hover:text-wedding-gold"
                    : "border-white/25 bg-white/10 text-white hover:border-white/50 hover:bg-white/20 hover:text-wedding-gold"
                }`}
              >
                <Phone
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 md:hidden ${
              scrolled
                ? "border-wedding-dark/10 bg-white/50 text-wedding-dark"
                : "border-white/30 bg-white/10 text-white backdrop-blur-sm"
            }`}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-4 top-20 z-40 overflow-hidden rounded-[1.75rem] border border-wedding-brown/10 bg-wedding-bg/95 shadow-soft backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <div className="p-3">

              {/* Navigation Links */}
              {links.map(({ label, id }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => go(id)}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-right text-sm text-wedding-dark transition hover:bg-wedding-cream"
                >
                  <span>{label}</span>

                  <span className="text-[10px] text-wedding-gold">
                    ✦
                  </span>
                </button>
              ))}

              {/* Divider */}
              <div className="my-2 h-px bg-wedding-dark/10" />

              {/* Contact Icons */}
              <div className="flex items-center justify-center gap-3 py-3">

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="واتساب"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-wedding-dark/10 bg-white text-wedding-dark transition hover:border-wedding-gold/40 hover:bg-wedding-cream hover:text-wedding-gold"
                >
                  <MessageCircle size={17} strokeWidth={1.7} />
                </a>

                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="تلغرام"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-wedding-dark/10 bg-white text-wedding-dark transition hover:border-wedding-gold/40 hover:bg-wedding-cream hover:text-wedding-gold"
                >
                  <Send size={16} strokeWidth={1.7} />
                </a>

                <a
                  href={phoneUrl}
                  aria-label="اتصال"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-wedding-dark/10 bg-white text-wedding-dark transition hover:border-wedding-gold/40 hover:bg-wedding-cream hover:text-wedding-gold"
                >
                  <Phone size={16} strokeWidth={1.7} />
                </a>
              </div>

              {/* Brand */}
              <p className="pb-3 text-center text-[9px] tracking-[0.25em] text-wedding-gold">
                J.W.A STUDIO
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}