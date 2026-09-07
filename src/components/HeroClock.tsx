import { useEffect, useState } from "react";
import { useLangStore } from "@/lib/i18n";

const ZONE = "Asia/Ho_Chi_Minh";

function formatNow(lang: "vi" | "en") {
  const now = new Date();
  const locale = lang === "en" ? "en-GB" : "vi-VN";
  const datePart = new Intl.DateTimeFormat(locale, {
    timeZone: ZONE,
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
  }).format(now);
  const timePart = new Intl.DateTimeFormat("en-GB", {
    timeZone: ZONE,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(now);
  return `${datePart} · ${timePart} (${lang === "en" ? "Vietnam time" : "giờ Việt Nam"})`;
}

/** Live Vietnam-time clock shown in the hero, updates every second. */
export function HeroClock() {
  const lang = useLangStore((s) => s.lang);
  const [text, setText] = useState(() => formatNow(lang));

  useEffect(() => {
    setText(formatNow(lang));
    const id = setInterval(() => setText(formatNow(lang)), 1000);
    return () => clearInterval(id);
  }, [lang]);

  return (
    <p className="mt-5 text-[13px] tabular-nums text-white/70" aria-live="off">
      {text}
    </p>
  );
}
