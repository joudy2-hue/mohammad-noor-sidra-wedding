# محمد نور & سدرة — Premium Digital Wedding Invitation

دعوة زفاف عربية RTL مبنية بـ React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React.

## 1. المتطلبات

- Node.js 20 أو أحدث
- npm
- Google Account إذا أردت تشغيل RSVP مع Google Sheets

## 2. التشغيل محليًا

```bash
npm install
cp .env.example .env
npm run dev
```

ثم افتح رابط Vite المحلي الذي يظهر في الطرفية.

## 3. إعداد RSVP

1. أنشئ Google Sheet جديدًا.
2. انسخ Spreadsheet ID من الرابط:
   `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
3. افتح `Extensions > Apps Script`.
4. الصق محتوى `google-apps-script/Code.gs`.
5. استبدل:
   `REPLACE_WITH_YOUR_GOOGLE_SHEET_ID`
   بالـ Spreadsheet ID الحقيقي.
6. اضغط Deploy > New deployment.
7. اختر النوع Web app.
8. Execute as: Me.
9. Who has access: Anyone.
10. اضغط Deploy ووافق على الصلاحيات المطلوبة.
11. انسخ Web app URL الذي ينتهي بـ `/exec`.
12. ضع الرابط في `.env`:
   `VITE_RSVP_ENDPOINT=https://script.google.com/macros/s/.../exec`
13. أعد تشغيل Vite بعد تعديل `.env`.

> ملاحظة: لا تضع مفاتيح Google API أو أي أسرار في Frontend. هذا المشروع لا يحتاج Google API Key لتخزين RSVP.

## 4. اختبار RSVP

- افتح الموقع.
- املأ الاسم، عدد الأشخاص، وحالة الحضور.
- اضغط "تأكيد الحضور".
- يجب أن يظهر نجاح في الموقع.
- افتح ورقة `RSVP` داخل Google Sheet.
- ستجد صفًا جديدًا بالأعمدة:
  تاريخ ووقت التأكيد | الاسم | عدد الأشخاص | حالة الحضور | الملاحظات

للاختبار البرمجي السريع يمكنك فتح Web App URL في المتصفح. يجب أن يرجع JSON يدل أن الخدمة تعمل.

## 5. البيانات التي يمكن تعديلها

كل بيانات الزفاف الأساسية موجودة في:

`src/data/weddingData.ts`

عدّل هناك:

- groom
- bride
- families
- dateISO
- dateLabel
- dayLabel
- timeLabel
- venue
- venueName
- city
- mapsUrl
- heroImage
- groomImage
- brideImage
- coupleImage
- story
- musicUrl
- gallery
- rsvpDeadlineLabel

## 6. الصور

استبدل روابط الصور في `src/data/weddingData.ts`.

لأفضل أداء، يفضل استخدام WebP/AVIF مضغوط واستضافة الصور على CDN سريع.

يمكن أيضًا وضع الصور المحلية داخل `public/images/` ثم استخدام:
`/images/hero.webp`

## 7. الموسيقى

ضع ملفًا مرخّصًا تملكه في:

`public/audio/zaffa.mp3`

والقيمة الافتراضية في `weddingData.ts` هي:
`/audio/zaffa.mp3`

الموسيقى لا تعمل تلقائيًا؛ الضيف يشغلها من الزر العائم.

## 8. الألوان

الألوان الأساسية موجودة في:
- `tailwind.config.js`
- `src/styles/globals.css`

Palette:
- Background: #FFF8F6
- Soft Pink: #E8C5C7
- Dusty Rose: #D9A9AD
- Earthy Brown: #6B5147
- Dark Brown: #3E302B
- Cream: #F5EDE7
- Gold: #B99A72

## 9. الخطوط

- Arabic: Cairo
- Headings: Playfair Display

يمكن تغييرها من `src/styles/globals.css` و`tailwind.config.js`.

## 10. Build للإنتاج

```bash
npm run build
npm run preview
```

الملفات النهائية ستكون داخل:
`dist/`

## 11. النشر

يمكن نشر `dist/` على أي static hosting يدعم SPA، مثل:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages مع إعداد SPA fallback

إذا كنت تستخدم Vercel/Netlify، اجعل Build Command:
`npm run build`

واجعل Output Directory:
`dist`

أضف متغير البيئة:
`VITE_RSVP_ENDPOINT`

## 12. تنزيل Google Sheet كـ Excel

من Google Sheets:
`File > Download > Microsoft Excel (.xlsx)`

## 13. Accessibility

المشروع يحتوي على:
- RTL + لغة عربية
- semantic sections
- alt text
- aria-labels
- keyboard focus states
- modal gallery مع dialog semantics
- احترام prefers-reduced-motion

## 14. ملاحظات الأداء

- صور Gallery تستخدم lazy loading.
- صورة Hero تُحمّل مبكرًا.
- لا توجد مكتبات UI ضخمة.
- Framer Motion وLucide هما المكتبتان الرئيسيتان للتفاعل.
- يمكن رفع مستوى الأداء أكثر باستضافة الصور محليًا بصيغة WebP/AVIF.

## 15. هيكل المشروع

```text
src/
  components/
    FloralDecoration.tsx
    Footer.tsx
    IntroScreen.tsx
    MusicButton.tsx
    Navbar.tsx
    SectionHeading.tsx
  data/
    weddingData.ts
  hooks/
    useCountdown.ts
    useScrollLock.ts
  sections/
    Couple.tsx
    Countdown.tsx
    Details.tsx
    Gallery.tsx
    Hero.tsx
    RSVP.tsx
    Venue.tsx
  styles/
    globals.css
  utils/
    format.ts
  App.tsx
  main.tsx
  vite-env.d.ts

google-apps-script/
  Code.gs
```
