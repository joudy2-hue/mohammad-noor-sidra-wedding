import { Music2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { weddingData } from "../data/weddingData";

export function MusicButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(weddingData.musicUrl);

    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    const startMusic = async () => {
      const currentAudio = audioRef.current;

      if (!currentAudio || !currentAudio.paused) return;

      try {
        await currentAudio.play();
        setPlaying(true);
      } catch {
        // المتصفح منع التشغيل التلقائي.
        // سنحاول مرة أخرى بعد أول تفاعل من المستخدم.
      }
    };

    const handleFirstInteraction = () => {
      startMusic();
      removeInteractionListeners();
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };

    audio.addEventListener("play", () => setPlaying(true));
    audio.addEventListener("pause", () => setPlaying(false));

    // محاولة التشغيل مباشرة عند فتح الموقع
    startMusic();

    // إذا منع المتصفح التشغيل، نحاول بعد أول تفاعل
    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });
    window.addEventListener("scroll", handleFirstInteraction, { once: true });

    return () => {
      removeInteractionListeners();
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      setPlaying(false);
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-wedding-dark text-white shadow-soft backdrop-blur-md transition hover:scale-105"
      aria-label={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
      title={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
    >
      {playing ? <VolumeX size={18} /> : <Music2 size={18} />}
    </button>
  );
}