import {
  CLASSES,
  CYCLE_STEPS,
  CYCLES,
  ratingLabel,
  WEEKS,
  type ClassInfo,
} from "./plan-data";
import { fmtRange, sessionDates } from "./calendar";
import { discKey, feedbackKey, type ClassKey, type CycleFeedback, type Team } from "./store";

export function buildCycleReport(opts: {
  classKey: ClassKey;
  round: number;
  teams: Team[];
  feedbacks: Record<string, CycleFeedback>;
  disc: Record<string, number>;
}): string {
  const klass = CLASSES[opts.classKey];
  const cycle = CYCLES[opts.round - 1];
  const lines: string[] = [
    `KT330H — Process-Grade Report · Chu kỳ ${opts.round}`,
    `${klass.code} · nhóm ${klass.nhom} · ${klass.classId} · NH 2026–2027 HK1`,
    "Khởi sự doanh nghiệp · High-Quality Programme",
    cycle ? `${cycle.city} — ${cycle.event} (${cycle.eventId}) · tuần ${cycle.week} · ${cycle.engine}` : "",
    "",
    "Score summary — group ( /20 )",
    "Đội\tTên\tĐiểm\tRating",
  ];

  for (const t of opts.teams) {
    const fb = opts.feedbacks[feedbackKey(t.id, opts.round)];
    const score = fb?.score ?? 0;
    lines.push(
      `${t.id}\t${t.name}\t${score ? score.toFixed(1) : "—"}\t${score ? ratingLabel(score) : "Chưa chấm"}`,
    );
  }

  lines.push("", "Detailed feedback");

  for (const t of opts.teams) {
    const fb = opts.feedbacks[feedbackKey(t.id, opts.round)] ?? {
      strengths: "",
      improve: "",
      concepts: "",
      score: 0,
    };
    lines.push("");
    lines.push(`${t.id} · ${t.name}`);
    lines.push(`Thành viên: ${t.members.map((m) => `${m.role} ${m.name || "…"}`).join(" · ")}`);
    lines.push(`+ Điểm mạnh: ${fb.strengths || "—"}`);
    lines.push(`− Cần cải: ${fb.improve || "—"}`);
    lines.push(`Khái niệm: ${fb.concepts || "—"}`);
    lines.push(
      `Kết luận: ${fb.score ? `${ratingLabel(fb.score)} ${fb.score.toFixed(1)}/20` : "Chưa chấm"}`,
    );
    lines.push("Discussion (điểm chuyên cần cá nhân, cộng dồn):");
    for (let i = 0; i < t.members.length; i++) {
      const m = t.members[i]!;
      const d = opts.disc[discKey(opts.classKey, t.id, i)] ?? 0;
      lines.push(`  - ${m.role} ${m.name || "…"}: ${d}`);
    }
  }

  lines.push(
    "",
    "Ghi chú: điểm chu kỳ là điểm nhóm /20 (tham chiếu ACT). Discussion là điểm cá nhân, góp vào 10% chuyên cần. GV chốt tay thành 10 / 20 / 20 / 50 của đề cương — không cộng máy.",
  );
  return lines.join("\n");
}

export function buildFullReport(opts: {
  classKey: ClassKey;
  teams: Team[];
  feedbacks: Record<string, CycleFeedback>;
  disc: Record<string, number>;
}): string {
  const klass = CLASSES[opts.classKey];
  const header = [
    "KT330H — Process-Grade Report · Feedback + Điểm tổng quá trình",
    "Khởi sự doanh nghiệp · High-Quality Programme · NH 2026–2027 HK1",
    `${klass.code} · nhóm ${klass.nhom} · Class ID ${klass.classId} · ${klass.students} SV · ${klass.teams} đội`,
    "",
    "Mapping: Excellent = 20.0 · Very good = 19.7 · Good = 19.5 · Quite good = 19.0.",
    "Process: Discussion 10% (cá nhân) + Game 20% (2 Mùa × 6 vòng) + Pitching 20% (Đại hội Cổ đông).",
    "Dự kiến — chưa gồm điểm thi cuối kỳ 50%.",
    "",
    "Score summary — 12 vòng, 2 Mùa (mỗi cột /20)",
    ["Đội", "Tên", ...CYCLES.map((c) => `M${c.season}V${c.n}`), "TB"].join("\t"),
  ];

  const rows: string[] = [];
  for (const t of opts.teams) {
    const scores = CYCLES.map((_c, i) => opts.feedbacks[feedbackKey(t.id, i + 1)]?.score ?? 0);
    const marked = scores.filter((s) => s > 0);
    const avg = marked.length ? marked.reduce((a, b) => a + b, 0) / marked.length : 0;
    rows.push(
      [
        t.id,
        t.name,
        ...scores.map((s) => (s ? s.toFixed(1) : "—")),
        avg ? avg.toFixed(2) : "—",
      ].join("\t"),
    );
  }

  const people: string[] = [
    "",
    "Process — điểm chuyên cần theo thành viên (cộng dồn, GV quy về /10)",
    "Đội\tVai\tTên\tDisc\tTB chu kỳ",
  ];
  for (const t of opts.teams) {
    const scores = CYCLES.map((_c, i) => opts.feedbacks[feedbackKey(t.id, i + 1)]?.score ?? 0).filter(
      (s) => s > 0,
    );
    const avg = scores.length
      ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2)
      : "—";
    t.members.forEach((m, i) => {
      const d = opts.disc[discKey(opts.classKey, t.id, i)] ?? 0;
      people.push(`${t.name}\t${m.role}\t${m.name || "…"}\t${d}\t${avg}`);
    });
  }

  return [...header, ...rows, ...people, "", buildCycleNotes(opts)].join("\n");
}

function buildCycleNotes(opts: {
  teams: Team[];
  feedbacks: Record<string, CycleFeedback>;
}): string {
  const parts: string[] = ["Chi tiết từng vòng"];
  CYCLES.forEach((c, i) => {
    parts.push("", `## Mùa ${c.season} · Vòng ${c.n} · ${c.city} (${c.event})`);
    for (const t of opts.teams) {
      const fb = opts.feedbacks[feedbackKey(t.id, i + 1)];
      if (!fb || (!fb.score && !fb.strengths && !fb.improve && !fb.concepts)) continue;
      parts.push(
        `${t.id} ${t.name}: ${fb.score ? `${ratingLabel(fb.score)} ${fb.score.toFixed(1)}` : "—"}`,
      );
      if (fb.strengths) parts.push(`  + ${fb.strengths}`);
      if (fb.improve) parts.push(`  − ${fb.improve}`);
      if (fb.concepts) parts.push(`  Khái niệm: ${fb.concepts}`);
    }
  });
  return parts.join("\n");
}

export function buildWeekScript(klass: ClassInfo, week: number): string {
  const w = WEEKS.find((x) => x.week === week);
  if (!w) return "";
  const cycles = CYCLES.filter((c) => c.week === week);
  const dates = sessionDates(week, klass);
  const buoiB = klass.meetings.second;
  const buoiA = klass.meetings.first;
  const lines = [
    `KT330H · ${klass.code} · Tuần ${week} · ${fmtRange(week)}`,
    w.chapter,
    `${w.hours} · ${w.textbook}`,
    `Buổi A: ${dates.first.label} tiết ${buoiA.periods} ${buoiA.room} · ${buoiA.time}`,
    `Buổi B: ${dates.second.label} tiết ${buoiB.periods} ${buoiB.room} · ${buoiB.time}`,
    buoiA.note ? `Lưu ý Buổi A: ${buoiA.note}` : "",
    buoiB.note ? `Lưu ý Buổi B: ${buoiB.note}` : "",
    "",
    `Chu kỳ: ${w.cycle}`,
    `CLO: ${w.clos.join(", ")}`,
    "",
    "Buổi A",
    w.theory,
    "",
    "Buổi B",
    w.practice,
    "",
    "Giảng viên",
    ...w.gv.map((g) => `- ${g}`),
    "",
    "Sinh viên",
    ...w.sv.map((s) => `- ${s}`),
    "",
    `Debrief neo: ${w.debrief}`,
  ];
  if (w.cycleKind === "play") {
    lines.push("", "Nhịp 50 phút / vòng");
    for (const s of CYCLE_STEPS) {
      lines.push(`${s.minutes}′ ${s.label} — GV: ${s.gv}`);
    }
    for (const cycle of cycles) {
      lines.push(
        "",
        `${cycle.buoi === "first" ? "Buổi A" : "Buổi B"} — Mùa ${cycle.season} · Vòng ${cycle.n}: ${cycle.city} · ${cycle.event}`,
        `Biến cố: ${cycle.eventId} · Engine: ${cycle.engine}`,
        `Mục tiêu: ${cycle.goal}`,
        `Bẫy vòng này: ${cycle.trap}`,
        `Minh chứng thu: ${cycle.evidence}`,
        `Mở rộng: ${cycle.expand}`,
      );
    }
  }
  return lines.join("\n");
}
