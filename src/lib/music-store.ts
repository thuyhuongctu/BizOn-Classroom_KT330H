import { create } from "zustand";
import { assetUrl } from "./asset-url";
import { FEATURED_ID, TRACKS, getTrack } from "./music";

type MusicState = {
  trackId: string;
  playing: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  play: (id?: string) => void;
  pause: () => void;
  toggle: (id?: string) => void;
  setTrack: (id: string) => void;
  seek: (t: number) => void;
  setVolume: (n: number) => void;
  next: () => void;
  prev: () => void;
};

function audioEl(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  const w = window as Window & { __bizonAudio?: HTMLAudioElement };
  if (!w.__bizonAudio) {
    const el = new Audio();
    el.preload = "metadata";
    w.__bizonAudio = el;
  }
  return w.__bizonAudio;
}

let bound = false;
function bindAudio(get: () => MusicState, set: (p: Partial<MusicState>) => void) {
  if (bound) return;
  const el = audioEl();
  if (!el) return;
  bound = true;
  el.addEventListener("timeupdate", () => {
    set({ currentTime: el.currentTime, duration: el.duration || get().duration });
  });
  el.addEventListener("loadedmetadata", () => {
    set({ duration: el.duration || getTrack(get().trackId).duration });
  });
  el.addEventListener("ended", () => {
    get().next();
  });
}

function start(id: string, volume: number, set: (p: Partial<MusicState>) => void) {
  const track = getTrack(id);
  const el = audioEl();
  set({ trackId: track.id, playing: true, currentTime: 0 });
  if (!el) return;
  const resolvedSrc = assetUrl(track.src);
  const abs = new URL(resolvedSrc, window.location.origin).href;
  if (el.src !== abs) el.src = resolvedSrc;
  el.volume = volume;
  void el.play().catch(() => set({ playing: false }));
}

export const useMusicStore = create<MusicState>((set, get) => ({
  trackId: FEATURED_ID,
  playing: false,
  currentTime: 0,
  duration: 0,
  volume: 0.85,
  play: (id) => {
    bindAudio(get, set);
    const nextId = id ?? get().trackId;
    const el = audioEl();
    const same = nextId === get().trackId && el && el.src && !el.ended;
    if (same) {
      el.volume = get().volume;
      set({ playing: true });
      void el.play().catch(() => set({ playing: false }));
      return;
    }
    start(nextId, get().volume, set);
  },
  pause: () => {
    audioEl()?.pause();
    set({ playing: false });
  },
  toggle: (id) => {
    const { trackId, playing, play, pause } = get();
    if (id && id !== trackId) {
      play(id);
      return;
    }
    if (playing) pause();
    else play(id);
  },
  setTrack: (id) => get().play(id),
  seek: (t) => {
    const el = audioEl();
    if (el) el.currentTime = t;
    set({ currentTime: t });
  },
  setVolume: (volume) => {
    const v = Math.min(1, Math.max(0, volume));
    const el = audioEl();
    if (el) el.volume = v;
    set({ volume: v });
  },
  next: () => {
    const i = TRACKS.findIndex((t) => t.id === get().trackId);
    get().play(TRACKS[(i + 1) % TRACKS.length]!.id);
  },
  prev: () => {
    const i = TRACKS.findIndex((t) => t.id === get().trackId);
    get().play(TRACKS[(i - 1 + TRACKS.length) % TRACKS.length]!.id);
  },
}));
