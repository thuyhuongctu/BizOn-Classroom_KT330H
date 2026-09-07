import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Light/dark theme toggle — same shape as useLangStore (lib/i18n.ts).
 * Applies as a `data-theme` attribute on <html>; styles.css swaps the
 * --color-* custom properties under `html[data-theme="dark"]`, same trick
 * the static BizOn/EnQuiz/KT330H-KT338 pages already use.
 */
export type Theme = "light" | "dark";

type ThemeState = {
  theme: Theme;
  toggle: () => void;
  setTheme: (theme: Theme) => void;
};

export function applyTheme(theme: Theme) {
  if (typeof document !== "undefined") {
    document.documentElement.dataset.theme = theme;
  }
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light",
      toggle: () => {
        const next: Theme = get().theme === "dark" ? "light" : "dark";
        applyTheme(next);
        set({ theme: next });
      },
      setTheme: (theme) => {
        applyTheme(theme);
        set({ theme });
      },
    }),
    {
      name: "bizon-kt330h-theme",
      onRehydrateStorage: () => (state) => {
        if (state) applyTheme(state.theme);
      },
    },
  ),
);
