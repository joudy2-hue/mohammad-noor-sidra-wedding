export type GalleryItem = {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
};

export const weddingData = {
  groom: "محمد نور",
  bride: "سدرة",
  families: "مارديني & العبده",
  dateISO: "2026-08-20T20:30:00+03:00",
  dateLabel: "20 أغسطس 2026",
  dayLabel: "الخميس",
  timeLabel: "08:30 مساءً",
  venue: "الصالة البهية",
  venueName: "قاعة الرياحين",
  city: "دمشق، كفر سوسة",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=قاعة+الرياحين+كفر+سوسة+دمشق",
  heroImage:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=88",
  coupleImage:
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85",
  groomImage:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
  brideImage:
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=85",
  story:
    "بدأت الحكاية بلحظة عابرة، ثم كبرت مع كل دعاء وكل ابتسامة، حتى صار للقلوب موعد واحد. واليوم نحتفل مع من نحب ببداية فصل جديد، مليء بالمودة والرحمة والذكريات الجميلة.",
  musicUrl: "/audio/zaffa.mp3",
  rsvpEndpoint:
    import.meta.env.VITE_RSVP_ENDPOINT ||
    "https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec",
  rsvpDeadlineLabel: "17 / 8 / 2026",
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
      alt: "لحظة رومانسية للعروسين",
      span: "wide"
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1100&q=85",
      alt: "تفاصيل حفل الزفاف",
      span: "tall"
    },
    {
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1100&q=85",
      alt: "ديكور زفاف أنيق"
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1100&q=85",
      alt: "ورد وتفاصيل ناعمة"
    },
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",
      alt: "طاولة استقبال فاخرة",
      span: "wide"
    },
    {
      src: "https://images.unsplash.com/photo-1519657337289-077653f724ed?auto=format&fit=crop&w=1100&q=85",
      alt: "أجواء الاحتفال"
    }
  ]
} as const;
