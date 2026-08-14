import { Music2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { weddingData } from "../data/weddingData";

export function MusicButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(weddingData.musicUrl);
    audio.loop = true;
    audio.preload = "none";
    audioRef.current = audio;

    const onEnded = () => setPlaying(false);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
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
