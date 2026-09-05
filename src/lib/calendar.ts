import { CLASSES, type ClassInfo } from "./plan-data";

/**
 * HK1 2026–2027: giảng dạy từ 07/9/2026, 11 tuần (theo quy định — thầy
 * Phan Anh Tú xác nhận, không phải 12 như đề cương cũ); khung học kỳ đến
 * 20/12/2026.
 */
export const SEMESTER = {
  label: "NH 2026–2027 · HK1",
  start: "2026-09-07",
  lastTeachingWeekEnd: "2026-11-22",
  examUntil: "2026-12-20",
} as const;

/** Tổng số tuần dạy — 11, không phải 12 (xem SEMESTER doc-comment). */
export const TEACHING_WEEKS = 11;

const DAY_VI = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"] as const;
const DAY_SHORT = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"] as const;

function parseIso(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y!, m! - 1, d!);
}

function addDays(iso: string, n: number): string {
  const dt = parseIso(iso);
  dt.setDate(dt.getDate() + n);
  return toIso(dt);
}

function toIso(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function mondayOf(week: number): string {
  return addDays(SEMESTER.start, (week - 1) * 7);
}

export function fmtVi(iso: string, short = false): string {
  const d = parseIso(iso);
  const wd = short ? DAY_SHORT[d.getDay()] : DAY_VI[d.getDay()];
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${wd} ${dd}/${mm}`;
}

export function fmtRange(week: number): string {
  const mon = mondayOf(week);
  const sun = addDays(mon, 6);
  return `${fmtVi(mon, true)} – ${fmtVi(sun, true)}`;
}

export type SessionDate = {
  iso: string;
  label: string;
  short: string;
};

export function sessionDates(week: number, klass: ClassInfo): { first: SessionDate; second: SessionDate } {
  const mon = mondayOf(week);
  const offsetFirst = klass.key === "F1" ? 1 : 2;
  const offsetSecond = klass.key === "F1" ? 3 : 4;
  const firstIso = addDays(mon, offsetFirst);
  const secondIso = addDays(mon, offsetSecond);
  return {
    first: { iso: firstIso, label: fmtVi(firstIso), short: fmtVi(firstIso, true) },
    second: { iso: secondIso, label: fmtVi(secondIso), short: fmtVi(secondIso, true) },
  };
}

export function teachingWeekOf(iso = todayIso()): number {
  const start = parseIso(SEMESTER.start);
  const d = parseIso(iso);
  const diff = Math.floor((d.getTime() - start.getTime()) / 86400000);
  if (diff < 0) return 0;
  const w = Math.floor(diff / 7) + 1;
  if (w > TEACHING_WEEKS) return TEACHING_WEEKS + 1;
  return w;
}

export function todayIso(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function nextSession(classKey: ClassInfo["key"], iso = todayIso()): {
  week: number;
  slot: "first" | "second";
  date: SessionDate;
  meeting: ClassInfo["meetings"]["first"];
} | null {
  const klass = CLASSES[classKey];
  const today = parseIso(iso);
  for (let w = 1; w <= TEACHING_WEEKS; w++) {
    const s = sessionDates(w, klass);
    for (const slot of ["first", "second"] as const) {
      const dt = parseIso(s[slot].iso);
      if (dt.getTime() >= today.getTime()) {
        return { week: w, slot, date: s[slot], meeting: klass.meetings[slot] };
      }
    }
  }
  return null;
}

export const WEEK_CALENDAR = Array.from({ length: TEACHING_WEEKS }, (_, i) => {
  const week = i + 1;
  const f1 = sessionDates(week, CLASSES.F1);
  const f2 = sessionDates(week, CLASSES.F2);
  return {
    week,
    range: fmtRange(week),
    monday: mondayOf(week),
    F1: f1,
    F2: f2,
  };
});
