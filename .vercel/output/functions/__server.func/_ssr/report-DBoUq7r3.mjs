import { O as ratingLabel, a as CYCLES, o as CYCLE_STEPS, r as CLASSES, w as WEEKS } from "./plan-data-Ce0Wq5F4.mjs";
import { n as discKey, r as feedbackKey } from "./router-CGwAJjME.mjs";
import { i as sessionDates, n as fmtRange } from "./calendar-DogF0ykN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/report-DBoUq7r3.js
function buildCycleReport(opts) {
	const klass = CLASSES[opts.classKey];
	const cycle = CYCLES[opts.round - 1];
	const lines = [
		`KT330H — Process-Grade Report · Chu kỳ ${opts.round}`,
		`${klass.code} · nhóm ${klass.nhom} · ${klass.classId} · NH 2026–2027 HK1`,
		"Khởi sự doanh nghiệp · High-Quality Programme",
		cycle ? `${cycle.title} — ${cycle.subtitle} · tuần ${cycle.week} · ${cycle.flag}` : "",
		"",
		"Score summary — group ( /20 )",
		"Đội	Tên	Điểm	Rating"
	];
	for (const t of opts.teams) {
		const score = opts.feedbacks[feedbackKey(t.id, opts.round)]?.score ?? 0;
		lines.push(`${t.id}\t${t.name}\t${score ? score.toFixed(1) : "—"}\t${score ? ratingLabel(score) : "Chưa chấm"}`);
	}
	lines.push("", "Detailed feedback");
	for (const t of opts.teams) {
		const fb = opts.feedbacks[feedbackKey(t.id, opts.round)] ?? {
			strengths: "",
			improve: "",
			concepts: "",
			score: 0
		};
		lines.push("");
		lines.push(`${t.id} · ${t.name}`);
		lines.push(`Thành viên: ${t.members.map((m) => `${m.role} ${m.name || "…"}`).join(" · ")}`);
		lines.push(`+ Điểm mạnh: ${fb.strengths || "—"}`);
		lines.push(`− Cần cải: ${fb.improve || "—"}`);
		lines.push(`Khái niệm: ${fb.concepts || "—"}`);
		lines.push(`Kết luận: ${fb.score ? `${ratingLabel(fb.score)} ${fb.score.toFixed(1)}/20` : "Chưa chấm"}`);
		lines.push("Discussion (điểm chuyên cần cá nhân, cộng dồn):");
		for (let i = 0; i < t.members.length; i++) {
			const m = t.members[i];
			const d = opts.disc[discKey(opts.classKey, t.id, i)] ?? 0;
			lines.push(`  - ${m.role} ${m.name || "…"}: ${d}`);
		}
	}
	lines.push("", "Ghi chú: điểm chu kỳ là điểm nhóm /20 (tham chiếu ACT). Discussion là điểm cá nhân, góp vào 10% chuyên cần. GV chốt tay thành 10 / 40 / 50 của đề cương — không cộng máy.");
	return lines.join("\n");
}
function buildFullReport(opts) {
	const klass = CLASSES[opts.classKey];
	const header = [
		"KT330H — Process-Grade Report · Feedback + Điểm tổng quá trình",
		"Khởi sự doanh nghiệp · High-Quality Programme · NH 2026–2027 HK1",
		`${klass.code} · nhóm ${klass.nhom} · Class ID ${klass.classId} · ${klass.students} SV · ${klass.teams} đội`,
		"",
		"Mapping: Excellent = 20.0 · Very good = 19.7 · Good = 19.5 · Quite good = 19.0.",
		"Process (gợi ý): Discussion (10% học phần, cá nhân) + 40% quá trình (game / phiếu / nhật ký / plan / pitch).",
		"Dự kiến — chưa gồm điểm thi cuối kỳ 50%.",
		"",
		"Score summary — 6 chu kỳ (mỗi cột /20)",
		[
			"Đội",
			"Tên",
			...CYCLES.map((c) => `C${c.n}`),
			"TB"
		].join("	")
	];
	const rows = [];
	for (const t of opts.teams) {
		const scores = CYCLES.map((c) => opts.feedbacks[feedbackKey(t.id, c.n)]?.score ?? 0);
		const marked = scores.filter((s) => s > 0);
		const avg = marked.length ? marked.reduce((a, b) => a + b, 0) / marked.length : 0;
		rows.push([
			t.id,
			t.name,
			...scores.map((s) => s ? s.toFixed(1) : "—"),
			avg ? avg.toFixed(2) : "—"
		].join("	"));
	}
	const people = [
		"",
		"Process — điểm chuyên cần theo thành viên (cộng dồn, GV quy về /10)",
		"Đội	Vai	Tên	Disc	TB chu kỳ"
	];
	for (const t of opts.teams) {
		const scores = CYCLES.map((c) => opts.feedbacks[feedbackKey(t.id, c.n)]?.score ?? 0).filter((s) => s > 0);
		const avg = scores.length ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2) : "—";
		t.members.forEach((m, i) => {
			const d = opts.disc[discKey(opts.classKey, t.id, i)] ?? 0;
			people.push(`${t.name}\t${m.role}\t${m.name || "…"}\t${d}\t${avg}`);
		});
	}
	return [
		...header,
		...rows,
		...people,
		"",
		buildCycleNotes(opts)
	].join("\n");
}
function buildCycleNotes(opts) {
	const parts = ["Chi tiết từng chu kỳ"];
	for (const c of CYCLES) {
		parts.push("", `## Chu kỳ ${c.n} · ${c.title} (${c.subtitle})`);
		for (const t of opts.teams) {
			const fb = opts.feedbacks[feedbackKey(t.id, c.n)];
			if (!fb || !fb.score && !fb.strengths && !fb.improve && !fb.concepts) continue;
			parts.push(`${t.id} ${t.name}: ${fb.score ? `${ratingLabel(fb.score)} ${fb.score.toFixed(1)}` : "—"}`);
			if (fb.strengths) parts.push(`  + ${fb.strengths}`);
			if (fb.improve) parts.push(`  − ${fb.improve}`);
			if (fb.concepts) parts.push(`  Khái niệm: ${fb.concepts}`);
		}
	}
	return parts.join("\n");
}
function buildWeekScript(klass, week) {
	const w = WEEKS.find((x) => x.week === week);
	if (!w) return "";
	const cycle = CYCLES.find((c) => c.week === week);
	const dates = sessionDates(week, klass);
	const practice = klass.meetings.second;
	const theory = klass.meetings.first;
	const lines = [
		`KT330H · ${klass.code} · Tuần ${week} · ${fmtRange(week)}`,
		w.chapter,
		`${w.hours} · ${w.textbook}`,
		`Lý thuyết: ${dates.first.label} tiết ${theory.periods} ${theory.room} · ${theory.time}`,
		`Thực hành: ${dates.second.label} tiết ${practice.periods} ${practice.room} · ${practice.time}`,
		theory.note ? `Lưu ý LT: ${theory.note}` : "",
		practice.note ? `Lưu ý TH: ${practice.note}` : "",
		"",
		`Chu kỳ: ${w.cycle}${cycle ? ` — ${cycle.title}: ${cycle.goal}` : ""}`,
		`CLO: ${w.clos.join(", ")}`,
		"",
		"Buổi lý thuyết",
		w.theory,
		"",
		"Buổi thực hành",
		w.practice,
		"",
		"Giảng viên",
		...w.gv.map((g) => `- ${g}`),
		"",
		"Sinh viên",
		...w.sv.map((s) => `- ${s}`),
		"",
		`Debrief neo: ${w.debrief}`
	];
	if (w.cycleKind === "play") {
		lines.push("", "Nhịp 150 phút");
		for (const s of CYCLE_STEPS) lines.push(`${s.minutes}′ ${s.label} — GV: ${s.gv}`);
		if (cycle) lines.push("", `Bẫy vòng này: ${cycle.trap}`, `Minh chứng thu: ${cycle.evidence}`);
	}
	return lines.join("\n");
}
//#endregion
export { buildFullReport as n, buildWeekScript as r, buildCycleReport as t };
