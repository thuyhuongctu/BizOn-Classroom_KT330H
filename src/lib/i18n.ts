import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Bilingual VI/EN display — same idea as the BizOn main site's
 * data-vi/data-en toggle (index.html), adapted to React: call the
 * useT() hook once per component, then wrap each user-facing string as
 * t("tiếng Việt", "English").
 */
export type Lang = "vi" | "en";

type LangState = {
  lang: Lang;
  toggle: () => void;
  setLang: (lang: Lang) => void;
};

export const useLangStore = create<LangState>()(
  persist(
    (set, get) => ({
      lang: "vi",
      toggle: () => set({ lang: get().lang === "vi" ? "en" : "vi" }),
      setLang: (lang) => set({ lang }),
    }),
    { name: "bizon-kt330h-lang" },
  ),
);

export function useLang(): Lang {
  return useLangStore((s) => s.lang);
}

/** `const t = useT(); t("Tổng quan", "Overview")` */
export function useT() {
  const lang = useLangStore((s) => s.lang);
  return (vi: string, en: string) => (lang === "en" ? en : vi);
}
