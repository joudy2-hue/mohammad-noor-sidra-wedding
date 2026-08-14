import { useEffect, useState } from "react";

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

const getCountdown = (target: string): Countdown => {
  const difference = new Date(target).getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }

  const totalSeconds = Math.floor(difference / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    done: false
  };
};

export function useCountdown(target: string) {
  const [countdown, setCountdown] = useState(() => getCountdown(target));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCountdown(getCountdown(target));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [target]);

  return countdown;
}
