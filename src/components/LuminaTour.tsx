import { useEffect } from "react";
import { assetUrl } from "@/lib/asset-url";
import { useLangStore } from "@/lib/i18n";

type TourStep = { key: string; sel: string; vi: string; en: string };

const STEPS: TourStep[] = [
  {
    key: "hero",
    sel: '[data-tour="hero"]',
    vi: "Xin chào! Mình là Lumina — trợ lý AI dẫn tham quan app kế hoạch triển khai KT330H.",
    en: "Hi! I'm Lumina — the AI guide for this KT330H rollout-planning app.",
  },
  {
    key: "nav",
    sel: '[data-tour="nav"]',
    vi: "Menu bên trái đưa bạn đến lịch 11 tuần, lớp và đội, phiếu quyết định, đánh giá và checklist.",
    en: "The left-hand menu takes you to the 11-week calendar, class & teams, forms, assessment and the checklist.",
  },
  {
    key: "next",
    sel: '[data-tour="next-session"]',
    vi: "Thẻ này luôn hiện buổi học kế tiếp — ngày, phòng, tiết — theo lớp bạn đang chọn.",
    en: "This card always shows your next session — date, room, period — for the class you're viewing.",
  },
  {
    key: "calendar",
    sel: '[data-tour="calendar"]',
    vi: "Bảng lịch 11 tuần khớp ngày thật của học kỳ với 2 Mùa × 6 vòng của game.",
    en: "This 11-week table maps the term's real dates onto the game's 2 Seasons × 6 rounds.",
  },
  {
    key: "cycles",
    sel: '[data-tour="cycles"]',
    vi: "Mỗi vòng game diễn ra ở một tỉnh — từ Cần Thơ đến Hà Nội — bấm vào để xem chi tiết.",
    en: "Each round takes place in a different province — from Cần Thơ to Hà Nội — click one for details.",
  },
  {
    key: "footer",
    sel: '[data-tour="footer"]',
    vi: "Vậy là xong phần tổng quan! Dùng nút sáng/tối và VI/EN ở góc trên để đổi giao diện.",
    en: "That's the overview! Use the theme and language buttons up top to switch views.",
  },
];

declare global {
  interface Window {
    BizonTour?: {
      start: () => void;
      stop: () => void;
      init: (steps: TourStep[], opts: { art?: string }) => void;
      refreshLang: () => void;
    };
    BIZON_TOUR?: TourStep[];
    BIZON_TOUR_OPTS?: { art?: string };
  }
}

/** Mounts the Lumina AI guided tour (js/site-tour.js) on the overview page.
 * Renders nothing itself — the script injects its own floating button and
 * dialog into <body>. Audio falls back to the Web Speech API until real
 * recordings are added under public/audio/{lang}/{key}.mp3. */
export function LuminaTour() {
  const lang = useLangStore((s) => s.lang);

  useEffect(() => {
    let cancelled = false;
    function boot() {
      if (cancelled || !window.BizonTour) return;
      window.BizonTour.init(STEPS, { art: assetUrl("/characters/lumina-ao-dai-wave.webp") });
    }
    if (window.BizonTour) {
      boot();
    } else {
      const existing = document.querySelector<HTMLScriptElement>('script[data-lumina-tour]');
      if (existing) {
        existing.addEventListener("load", boot, { once: true });
      } else {
        const script = document.createElement("script");
        script.src = assetUrl("/js/site-tour.js");
        script.dataset.luminaTour = "true";
        script.addEventListener("load", boot, { once: true });
        document.body.appendChild(script);
      }
    }
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    window.BizonTour?.refreshLang();
  }, [lang]);

  return null;
}
