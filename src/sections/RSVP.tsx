import { useState, type FormEvent } from "react";
import { CheckCircle2, Heart, Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import { SectionHeading } from "../components/SectionHeading";

type Status = "idle" | "loading" | "success" | "error";

export function RSVP() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    guests: "1",
    attendance: "نعم، بكل سرور ❤️",
    notes: ""
  });

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = form.name.trim();
    const guests = Number(form.guests);

    if (!name || guests < 1 || guests > 150 || !form.attendance) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      if (weddingData.rsvpEndpoint.includes("REPLACE_WITH_YOUR_DEPLOYMENT_ID")) {
        throw new Error("RSVP endpoint is not configured.");
      }

      const response = await fetch(weddingData.rsvpEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name,
          guests,
          attendance: form.attendance,
          notes: form.notes.trim()
        })
      });

      const data = await response.json().catch(() => ({ ok: false }));

      if (!response.ok || data.ok !== true) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setForm({ name: "", guests: "1", attendance: "نعم، بكل سرور ❤️", notes: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="rsvp" className="bg-wedding-cream px-5 py-24 md:px-8 md:py-32">
        <motion.div
          className="mx-auto max-w-xl rounded-[2rem] border border-wedding-brown/10 bg-white p-10 text-center shadow-soft"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-wedding-cream text-wedding-gold">
            <CheckCircle2 size={30} />
          </div>
          <h2 className="mt-6 font-serif text-4xl text-wedding-dark">تم تأكيد حضوركم بنجاح ❤️</h2>
          <p className="mt-4 text-sm leading-8 text-wedding-brown/75">شكرًا لمشاركتنا يومنا الكبير.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-7 text-sm text-wedding-gold underline underline-offset-4"
          >
            إرسال تأكيد آخر
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="relative overflow-hidden bg-wedding-cream px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="RSVP"
          title="ننتظركم بكل حب"
          description={`يسعدنا تأكيد حضوركم قبل تاريخ ${weddingData.rsvpDeadlineLabel}.`}
        />

        <form onSubmit={submit} className="rounded-[2rem] border border-wedding-brown/10 bg-white p-6 shadow-soft md:p-9">
          <label className="field-label" htmlFor="name">الاسم الكامل</label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="field-input"
            placeholder="اكتبوا الاسم"
            autoComplete="name"
          />

          <label className="field-label" htmlFor="guests">عدد الأشخاص</label>
          <input
            id="guests"
            required
            type="number"
            min={1}
            max={5}
            value={form.guests}
            onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))}
            className="field-input"
          />

          <fieldset className="mt-6">
            <legend className="field-label">هل ستتمكن من الحضور؟</legend>
            <div className="grid gap-3">
              {["نعم، بكل سرور ❤️", "للأسف لن أتمكن من الحضور"].map((option) => (
                <label
                  key={option}
                  className={`cursor-pointer rounded-2xl border p-4 text-sm transition ${
                    form.attendance === option
                      ? "border-wedding-rose bg-wedding-cream/70 text-wedding-dark"
                      : "border-wedding-brown/10 hover:bg-wedding-bg"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={option}
                    checked={form.attendance === option}
                    onChange={(e) => setForm((f) => ({ ...f, attendance: e.target.value }))}
                    className="sr-only"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="field-label" htmlFor="notes">ذكرى لطيفة للعروسين ... 
          </label>
          <textarea
            id="notes"
            rows={4}
            value={form.notes}
            onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
            className="field-input resize-none"
            placeholder="أي ذكرى تودين كتابتها..."
          />

          {status === "error" && (
            <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
              حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.
            </p>
          )}

          <button
            disabled={status === "loading"}
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-wedding-dark px-6 py-4 text-sm text-white transition hover:-translate-y-0.5 hover:bg-wedding-brown disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                جارٍ تأكيد حضوركم...
              </>
            ) : (
              <>
                تأكيد الحضور
                <Send size={17} />
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-wedding-brown/60">
          <Heart size={13} className="mb-0.5 inline-block text-wedding-rose" fill="currentColor" /> حضوركم أجمل هدية
        </p>
      </div>
    </section>
  );
}
