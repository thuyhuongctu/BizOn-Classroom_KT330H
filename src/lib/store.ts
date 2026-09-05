import { create } from "zustand";
import { persist } from "zustand/middleware";
import { F1_TEAMS, F2_TEAMS, ENGINE, type TeamSeed } from "./plan-data";

export type ClassKey = "F1" | "F2";
export type GameSlot = "first" | "second";

export type Member = { name: string; role: string };
export type Team = { id: string; name: string; members: Member[] };

export type Ticket = {
  goal: string;
  price: string;
  marketing: string;
  qty: string;
  staff: string;
  train: string;
  loan: string;
  rd: string;
  assumption: string;
  forecastShare: string;
  forecastProfit: string;
  forecastCash: string;
  risk: string;
  dissent: string;
  finalCall: string;
  actual: string;
  gap: string;
  cause: string;
  good: string;
  miss: string;
  next: string;
  lumina: string;
};

export type CycleFeedback = {
  strengths: string;
  improve: string;
  concepts: string;
  score: number;
};

const emptyTicket = (): Ticket => ({
  goal: "",
  price: "",
  marketing: "",
  qty: "",
  staff: "",
  train: "",
  loan: "",
  rd: "",
  assumption: "",
  forecastShare: "",
  forecastProfit: "",
  forecastCash: "",
  risk: "",
  dissent: "",
  finalCall: "",
  actual: "",
  gap: "",
  cause: "",
  good: "",
  miss: "",
  next: "",
  lumina: "",
});

export const emptyFeedback = (): CycleFeedback => ({
  strengths: "",
  improve: "",
  concepts: "",
  score: 0,
});

export const LEGACY_DISTRICT_NAME =
  /Ninh Kiều|Bình Thủy|Cái Răng|Ô Môn|Thốt Nốt|Phong Điền|Cờ Đỏ|Sông Hậu|Vĩnh Thạnh/;

function seedToTeams(seeds: TeamSeed[]): Team[] {
  return seeds.map((s) => ({
    id: s.id,
    name: s.name,
    members: s.roles.map((role) => ({ name: "", role })),
  }));
}

type Persisted = {
  classKey: ClassKey;
  gameSlot: GameSlot;
  startingCapital: number;
  teams: Record<ClassKey, Team[]>;
  checks: Record<string, boolean>;
  tickets: Record<string, Ticket>;
  feedbacks: Record<string, CycleFeedback>;
  disc: Record<string, number>;
};

type State = Persisted & {
  timerRunning: boolean;
  timerStep: number;
  timerStartedAt: number | null;
  timerElapsed: number;
  setClass: (k: ClassKey) => void;
  setGameSlot: (s: GameSlot) => void;
  setCapital: (n: number) => void;
  setMember: (classKey: ClassKey, teamId: string, index: number, name: string) => void;
  setTeamName: (classKey: ClassKey, teamId: string, name: string) => void;
  rotateRoles: (classKey: ClassKey) => void;
  resetTeams: (classKey: ClassKey) => void;
  toggleCheck: (id: string) => void;
  setTicket: (key: string, patch: Partial<Ticket>) => void;
  resetTicket: (key: string) => void;
  setFeedback: (key: string, patch: Partial<CycleFeedback>) => void;
  setDisc: (key: string, n: number) => void;
  bumpDisc: (key: string, delta: number) => void;
  setTimerStep: (n: number) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
};

export const usePlanStore = create<State>()(
  persist(
    (set, get) => ({
      classKey: "F1",
      gameSlot: "second",
      startingCapital: ENGINE.capitalDefault,
      teams: { F1: seedToTeams(F1_TEAMS), F2: seedToTeams(F2_TEAMS) },
      checks: {},
      tickets: {},
      feedbacks: {},
      disc: {},
      timerRunning: false,
      timerStep: 0,
      timerStartedAt: null,
      timerElapsed: 0,
      setClass: (classKey) => set({ classKey }),
      setGameSlot: (gameSlot) => set({ gameSlot }),
      setCapital: (startingCapital) => set({ startingCapital }),
      setMember: (classKey, teamId, index, name) =>
        set((s) => ({
          teams: {
            ...s.teams,
            [classKey]: s.teams[classKey].map((t) =>
              t.id !== teamId
                ? t
                : {
                    ...t,
                    members: t.members.map((m, i) => (i === index ? { ...m, name } : m)),
                  },
            ),
          },
        })),
      setTeamName: (classKey, teamId, name) =>
        set((s) => ({
          teams: {
            ...s.teams,
            [classKey]: s.teams[classKey].map((t) => (t.id === teamId ? { ...t, name } : t)),
          },
        })),
      rotateRoles: (classKey) =>
        set((s) => ({
          teams: {
            ...s.teams,
            [classKey]: s.teams[classKey].map((t) => ({
              ...t,
              members: t.members.map((m, i, arr) => ({
                name: m.name,
                role: arr[(i + 1) % arr.length]!.role,
              })),
            })),
          },
        })),
      resetTeams: (classKey) =>
        set((s) => ({
          teams: {
            ...s.teams,
            [classKey]: seedToTeams(classKey === "F1" ? F1_TEAMS : F2_TEAMS),
          },
        })),
      toggleCheck: (id) =>
        set((s) => ({ checks: { ...s.checks, [id]: !s.checks[id] } })),
      setTicket: (key, patch) =>
        set((s) => ({
          tickets: {
            ...s.tickets,
            [key]: { ...(s.tickets[key] ?? emptyTicket()), ...patch },
          },
        })),
      resetTicket: (key) =>
        set((s) => ({ tickets: { ...s.tickets, [key]: emptyTicket() } })),
      setFeedback: (key, patch) =>
        set((s) => ({
          feedbacks: {
            ...s.feedbacks,
            [key]: { ...(s.feedbacks[key] ?? emptyFeedback()), ...patch },
          },
        })),
      setDisc: (key, n) => set((s) => ({ disc: { ...s.disc, [key]: n } })),
      bumpDisc: (key, delta) =>
        set((s) => ({
          disc: { ...s.disc, [key]: Math.max(0, (s.disc[key] ?? 0) + delta) },
        })),
      setTimerStep: (timerStep) =>
        set({
          timerStep,
          timerElapsed: 0,
          timerStartedAt: get().timerRunning ? Date.now() : null,
        }),
      startTimer: () => set({ timerRunning: true, timerStartedAt: Date.now() }),
      pauseTimer: () =>
        set((s) => ({
          timerRunning: false,
          timerElapsed: s.timerElapsed + (s.timerStartedAt ? Date.now() - s.timerStartedAt : 0),
          timerStartedAt: null,
        })),
      resetTimer: () =>
        set({ timerRunning: false, timerStep: 0, timerStartedAt: null, timerElapsed: 0 }),
    }),
    {
      name: "bizon-kt330h-plan",
      version: 2,
      skipHydration: true,
      migrate: (persisted, version) => {
        const s = persisted as Persisted;
        if (version < 2) {
          const stale = LEGACY_DISTRICT_NAME;
          for (const k of ["F1", "F2"] as const) {
            const teams = s.teams?.[k];
            if (!teams) continue;
            s.teams[k] = teams.map((t, i) =>
              stale.test(t.name) ? { ...t, name: `Đội ${i + 1}` } : t,
            );
          }
          if (!s.startingCapital || s.startingCapital === 250_000_000) {
            s.startingCapital = ENGINE.capitalDefault;
          }
        }
        return s;
      },
      partialize: (s) => ({
        classKey: s.classKey,
        gameSlot: s.gameSlot,
        startingCapital: s.startingCapital,
        teams: s.teams,
        checks: s.checks,
        tickets: s.tickets,
        feedbacks: s.feedbacks,
        disc: s.disc,
      }),
    },
  ),
);

export function getTicket(tickets: Record<string, Ticket>, key: string): Ticket {
  return tickets[key] ?? emptyTicket();
}

export function getFeedback(
  feedbacks: Record<string, CycleFeedback>,
  key: string,
): CycleFeedback {
  return feedbacks[key] ?? emptyFeedback();
}

export function discKey(classKey: ClassKey, teamId: string, index: number) {
  return `${classKey}:${teamId}:${index}`;
}

export function feedbackKey(teamId: string, round: number) {
  return `${teamId}-R${round}`;
}
