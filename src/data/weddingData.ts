export type GalleryItem = {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
};


export const weddingData = {
  groom: "مُحَمد ",
  bride: "سِدرَة",
  families: "عَبدُ المَاجِد مَاردِينِي & وَليد العَبدَه",
  dateISO: "2026-08-20T20:30:00+03:00",
  dateLabel: "20 أغسطس 2026",
  dayLabel: "الخميس",
  timeLabel: "08:30 مساءً",
  venue: "الصالة البهية",
  venueName: "قاعة الرياحين",
  city: "دمشق ، كفر_سوسة",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=قاعة+الرياحين+كفر+سوسة+دمشق",
  heroImage:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=88",
  groomImage:
    "https://i.pinimg.com/736x/01/05/ea/0105ea9997c58b528456be6b2346270d.jpg",
  brideImage:
    "https://i.pinimg.com/474x/85/10/9c/85109ca134dcfee33c04f61c03eba3a8.jpg",
  story:
    "بدأت الحكاية بلحظة عابرة، ثم كبرت مع كل دعاء وكل ابتسامة، حتى صار للقلوب موعد واحد. واليوم نحتفل مع من نحب ببداية فصل جديد، مليء بالمودة والرحمة والذكريات الجميلة.",
  musicUrl: "/audio/Wedding Music.mp3",
  rsvpEndpoint:
    import.meta.env.VITE_RSVP_ENDPOINT ||
    "https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec",
  rsvpDeadlineLabel: "17 / 8 / 2026",
  designer: {
  name: "J.W.A Studio",
  description: "تصميم دعوات زفاف رقمية",
  whatsapp: "9638288166",
  telegram: "JWA_Stud",
  phone: "0982888166"
  }
} as const;

